# Mémoire du Projet - HEC Python Academy

## 💳 Configuration Stripe
Le système de paiement est configuré pour utiliser Stripe Checkout avec support Twint.
- **STRIPE_SECRET_KEY** : Clé secrète (sk_...) - Nécessaire pour créer les sessions de paiement.
- **VITE_STRIPE_PUBLISHABLE_KEY** : Clé publique (pk_...) - Nécessaire pour charger Stripe côté client.
- **VITE_STRIPE_PRICE_ID** : L'ID du prix (price_...) - Définit le montant à payer (ex: 80 CHF).
- **STRIPE_WEBHOOK_SECRET** : Clé de signature (whsec_...) - Nécessaire pour confirmer les paiements réussis et envoyer l'email automatique.

## 📧 Configuration Email (Gmail)
Le système utilise Nodemailer pour envoyer les confirmations.
- **EMAIL_USER** : Votre adresse Gmail (ex: loqmanou.S@gmail.com).
- **EMAIL_PASS** : Mot de passe d'application Google (16 caractères, généré dans les paramètres de sécurité Google).

## 🤖 Configuration Gemini
- **GEMINI_API_KEY** : Clé API Google Gemini (AI Studio). Nécessaire pour le chat bot et la génération de vidéos premium.

## 🚀 État de l'intégration
- [x] Serveur Express configuré (server.ts)
- [x] Routes API Stripe créées
- [x] Webhook Stripe prêt pour les confirmations
- [x] Service d'envoi d'emails Nodemailer intégré
- [x] Formulaire de réservation mis à jour avec Stripe/Twint
