/**
 * BACKEND CODE - GOOGLE CLOUD FUNCTION
 * 
 * This file contains the server-side logic to send emails.
 * You would deploy this to Google Cloud Functions, AWS Lambda, or a Node.js server.
 * 
 * Dependencies to install in package.json:
 * npm install nodemailer
 */

const nodemailer = require('nodemailer');

// Configure your SMTP transporter (Gmail, Outlook, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use 'host', 'port' for other providers
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your app password
  }
});

const PAYMENT_INSTRUCTIONS = {
  'Twint': "Veuillez effectuer le paiement de 80 CHF au numéro : 079 123 45 67 (HEC Python Academy). Indiquez votre nom en commentaire.",
  'Revolut': "Veuillez envoyer 80 CHF au tag : @hecpythonacademy. Indiquez votre nom en référence.",
  'Virement': "Veuillez effectuer un virement de 80 CHF sur le compte : IBAN CH00 0000 0000 0000 0000 0 - Banque Cantonale Vaudoise. Motif : Cours + Nom."
};

exports.sendConfirmationEmail = async (req, res) => {
  // 1. Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    // 2. Capture Data
    const { name, email, courseTitle, date, paymentMethod } = req.body;

    if (!name || !email || !courseTitle) {
      return res.status(400).send('Missing required fields');
    }

    const instructions = PAYMENT_INSTRUCTIONS[paymentMethod] || PAYMENT_INSTRUCTIONS['Virement'];

    // 3. Construct Email Content
    const mailOptions = {
      from: '"HEC Python Academy" <pythonhec@gmail.com>',
      to: email,
      subject: `Confirmation de réservation - ${courseTitle}`,
      text: `
Bonjour ${name},

Merci pour votre réservation !

Voici les détails de votre session :
Cours : ${courseTitle}
Date : ${date}
Prix : 80 CHF

INSTRUCTIONS DE PAIEMENT (${paymentMethod}) :
${instructions}

Le lien Réunion Teams vous sera envoyé 24h avant le cours, une fois le paiement validé.

Cordialement,
L'équipe HEC Python Academy
      `,
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
            ${instructions}
          </p>

          <p>Le lien Réunion Teams vous sera envoyé 24h avant le début du cours, sous réserve de réception du paiement.</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">HEC Python Academy - Préparation aux examens HEC/UNIL</p>
        </div>
      `
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
