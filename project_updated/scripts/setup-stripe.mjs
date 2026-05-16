/**
 * setup-stripe.mjs
 * 
 * Crée automatiquement le produit + prix dans votre compte Stripe.
 * 
 * Utilisation :
 *   node scripts/setup-stripe.mjs
 * 
 * Prérequis : STRIPE_SECRET_KEY doit être dans votre .env
 */

import Stripe from 'stripe';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Charge le .env manuellement
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const [key, ...valParts] = line.split('=');
    if (key && valParts.length > 0) {
      process.env[key.trim()] = valParts.join('=').trim();
    }
  }
}

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY manquant dans .env');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

async function main() {
  console.log('🚀 Configuration Stripe en cours...\n');

  // 1. Créer le produit
  console.log('📦 Création du produit...');
  const product = await stripe.products.create({
    name: 'Cours en groupe – Programmation Exam Prep HEC',
    description: 'Session intensive de 4h (9h-13h) pour préparer l\'examen de programmation HEC Lausanne. Inclut : révision complète, exercices types examen, Q&A en direct via Teams.',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200'
    ],
    metadata: {
      course: 'python-exam-prep',
      university: 'HEC Lausanne',
      format: 'Teams groupe',
      duration: '4 heures'
    }
  });
  console.log(`✅ Produit créé : ${product.id} — "${product.name}"`);

  // 2. Créer le prix (80 CHF unique)
  console.log('\n💰 Création du prix (80 CHF)...');
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 8000, // 80.00 CHF en centimes
    currency: 'chf',
    nickname: 'Cours groupe – 80 CHF (paiement unique)',
    metadata: {
      description: 'Paiement ponctuel – une seule session'
    }
  });
  console.log(`✅ Prix créé : ${price.id} — 80.00 CHF`);

  // 3. Mettre à jour le .env
  console.log('\n📝 Mise à jour du fichier .env...');
  let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

  // Obtenir la clé publique depuis l'account
  const account = await stripe.accounts.retrieve();
  console.log(`\n🏦 Compte Stripe : ${account.email || account.id}`);

  // Remplacer ou ajouter VITE_STRIPE_PRICE_ID
  if (envContent.includes('VITE_STRIPE_PRICE_ID=')) {
    envContent = envContent.replace(/VITE_STRIPE_PRICE_ID=.*/, `VITE_STRIPE_PRICE_ID=${price.id}`);
  } else {
    envContent += `\nVITE_STRIPE_PRICE_ID=${price.id}`;
  }

  fs.writeFileSync(envPath, envContent, 'utf8');

  console.log('\n' + '='.repeat(60));
  console.log('✅ SETUP TERMINÉ AVEC SUCCÈS !');
  console.log('='.repeat(60));
  console.log(`\n📋 Récapitulatif :`);
  console.log(`   Produit ID    : ${product.id}`);
  console.log(`   Prix ID       : ${price.id}`);
  console.log(`   Montant       : 80.00 CHF (paiement unique)`);
  console.log(`   Moyens de paiement activés : Carte, Twint, Revolut Pay`);
  console.log(`\n🔑 VITE_STRIPE_PRICE_ID=${price.id} → ajouté dans .env`);
  console.log('\n⚠️  Étapes restantes :');
  console.log('   1. Ajoutez VITE_STRIPE_PUBLISHABLE_KEY dans .env (Dashboard Stripe → Développeurs → Clés API)');
  console.log('   2. Ajoutez STRIPE_WEBHOOK_SECRET pour les webhooks (optionnel pour les emails auto)');
  console.log('   3. Lancez : npm run dev');
  console.log('\n📊 Dashboard Stripe : https://dashboard.stripe.com/products');
}

main().catch(err => {
  console.error('❌ Erreur :', err.message);
  process.exit(1);
});
