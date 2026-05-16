import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Initialize Stripe lazily
let stripe: Stripe | null = null;
const getStripe = () => {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      console.warn('STRIPE_SECRET_KEY is not set. Stripe functionality will be disabled.');
      return null;
    }
    stripe = new Stripe(key);
  }
  return stripe;
};

// Stripe Webhook (MUST be before express.json())
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const stripeClient = getStripe();
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeClient || !sig || !webhookSecret) {
    console.error('Webhook configuration missing');
    return res.status(400).send('Webhook configuration missing');
  }

  let event;

  try {
    const signature = Array.isArray(sig) ? sig[0] : sig;
    event = stripeClient.webhooks.constructEvent(req.body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Send confirmation email
    try {
      await sendEmail({
        name: session.metadata?.name,
        email: session.customer_details?.email || session.customer_email,
        courseTitle: session.metadata?.courseTitle,
        date: session.metadata?.date,
        paymentMethod: 'Stripe'
      });
      console.log('Confirmation email sent for Stripe session:', session.id);
    } catch (error) {
      console.error('Failed to send email after Stripe payment:', error);
    }
  }

  res.json({ received: true });
});

app.use(express.json());

// Email Transporter
const getTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.warn('EMAIL_USER or EMAIL_PASS not set. Email functionality will be disabled.');
    return null;
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
};

const sendEmail = async (data: any) => {
  const transporter = getTransporter();
  if (!transporter) return;

  const { name, email, courseTitle, date, paymentMethod } = data;
  
  const instructions: Record<string, string> = {
    'Twint': "Veuillez effectuer le paiement de 80 CHF au numéro : 079 123 45 67 (HEC Python Academy). Indiquez votre nom en commentaire.",
    'Revolut': "Veuillez envoyer 80 CHF au tag : @hecpythonacademy. Indiquez votre nom en référence.",
    'Virement': "Veuillez effectuer un virement de 80 CHF sur le compte : IBAN CH00 0000 0000 0000 0000 0 - Banque Cantonale Vaudoise. Motif : Cours + Nom.",
    'Stripe': "Votre paiement a été traité avec succès via Stripe. Vous recevrez votre lien Réunion Teams 24h avant le cours."
  };

  const instr = instructions[paymentMethod] || instructions['Virement'];

  const mailOptions = {
    from: '"HEC Python Academy" <pythonhec@gmail.com>',
    to: email,
    subject: `Confirmation de réservation - ${courseTitle}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Confirmation de réservation</h2>
        <p>Bonjour <strong>${name}</strong>,</p>
        <p>Nous avons bien reçu votre demande d'inscription.</p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="margin: 5px 0;"><strong>Cours :</strong> ${courseTitle}</p>
          <p style="margin: 5px 0;"><strong>Date :</strong> ${date}</p>
          <p style="margin: 5px 0;"><strong>Tarif :</strong> 80 CHF</p>
        </div>

        <h3 style="color: #1e40af; margin-top: 20px;">Instructions de paiement (${paymentMethod})</h3>
        <p style="background-color: #eff6ff; padding: 15px; border-left: 4px solid #2563eb; color: #1e3a8a;">
          ${instr}
        </p>

        <p>Le lien Réunion Teams vous sera envoyé 24h avant le début du cours, sous réserve de réception du paiement.</p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        <p style="color: #64748b; font-size: 12px;">HEC Python Academy - Préparation aux examens HEC/UNIL</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// API Routes
app.post('/api/send-confirmation', async (req, res) => {
  try {
    await sendEmail(req.body);
    res.json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/create-checkout-session', async (req, res) => {
  console.log('Received checkout session request:', req.body);
  const stripeClient = getStripe();
  if (!stripeClient) {
    console.error('Stripe client not initialized (check STRIPE_SECRET_KEY)');
    return res.status(500).json({ error: 'Stripe n\'est pas configuré sur le serveur (STRIPE_SECRET_KEY manquant)' });
  }

  const { priceId, successUrl, cancelUrl } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: 'priceId est requis' });
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card', 'twint', 'revolut_pay'],
      customer_email: req.body.email,
      metadata: {
        name: req.body.name,
        courseTitle: req.body.courseTitle,
        date: req.body.date
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      locale: 'fr',
      payment_intent_data: {
        description: `Cours en groupe – ${req.body.courseTitle || 'Programmation Exam Prep'} – ${req.body.date || ''}`,
        metadata: {
          name: req.body.name,
          courseTitle: req.body.courseTitle,
          date: req.body.date
        }
      }
    });

    console.log('Stripe session created successfully:', session.id);
    res.json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe API error:', error);
    res.status(500).json({ error: `Erreur Stripe : ${error.message}` });
  }
});

// Vite middleware
async function setupVite() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('(.*)', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

setupVite().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
