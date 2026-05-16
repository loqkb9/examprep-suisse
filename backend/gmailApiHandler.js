
/**
 * BACKEND CODE - NODE.JS / EXPRESS / CLOUD FUNCTION
 * 
 * Dependencies to install:
 * npm install googleapis
 */

const { google } = require('googleapis');

// 1. Configuration - Read from Environment Variables
const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const GMAIL_SENDER = process.env.GMAIL_SENDER; // e.g. "HEC Python Academy <pythonhec@gmail.com>"

// 2. Setup OAuth2 Client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

const PAYMENT_INSTRUCTIONS = {
  'Twint': "Veuillez effectuer le paiement de 80 CHF au numéro : 079 123 45 67 (HEC Python Academy). Indiquez votre nom en commentaire.",
  'Revolut': "Veuillez envoyer 80 CHF au tag : @hecpythonacademy. Indiquez votre nom en référence.",
  'Virement': "Veuillez effectuer un virement de 80 CHF sur le compte : IBAN CH00 0000 0000 0000 0000 0 - Banque Cantonale Vaudoise. Motif : Cours + Nom."
};

/**
 * Helper to encode the email into Base64URL format required by Gmail API
 */
const makeBody = (to, from, subject, message) => {
  const str = [
    "Content-Type: text/html; charset=\"UTF-8\"\n",
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "to: ", to, "\n",
    "from: ", from, "\n",
    "subject: ", subject, "\n\n",
    message
  ].join('');

  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

exports.sendConfirmationEmail = async (req, res) => {
  // CORS Headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, courseTitle, date, paymentMethod } = req.body;

    // Basic Validation
    if (!name || !email || !courseTitle || !date || !paymentMethod) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const instructions = PAYMENT_INSTRUCTIONS[paymentMethod] || PAYMENT_INSTRUCTIONS['Virement'];

    // Construct Email Body
    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #2563eb;">Confirmation de ta réservation – HEC Python Academy</h2>
        <p>Bonjour <strong>${name}</strong>,</p>
        <p>Merci pour ton inscription. Voici le récapitulatif de ta session :</p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Cours :</strong> ${courseTitle}</p>
          <p style="margin: 5px 0;"><strong>Date :</strong> ${date}</p>
          <p style="margin: 5px 0;"><strong>Tarif :</strong> 80 CHF</p>
        </div>

        <h3 style="color: #1e40af;">Instructions de paiement (${paymentMethod})</h3>
        <p style="background-color: #eff6ff; padding: 15px; border-left: 4px solid #2563eb; color: #1e3a8a;">
          ${instructions}
        </p>

        <p>Ton inscription sera définitivement validée à réception du paiement. Le lien Réunion Teams te sera envoyé 24h avant le cours.</p>
        
        <p style="margin-top: 30px; font-size: 0.9em; color: #666;">
          À bientôt,<br>
          L'équipe HEC Python Academy
        </p>
      </div>
    `;

    // Encode message
    const raw = makeBody(email, GMAIL_SENDER, `Confirmation de réservation - ${courseTitle}`, htmlBody);

    // Send via Gmail API
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: raw
      }
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Error sending email via Gmail API:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
