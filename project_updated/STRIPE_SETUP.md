# 🚀 Guide de mise en ligne – Cours en groupe avec paiement Stripe

## Moyens de paiement activés
- ✅ **Carte bancaire** (Visa, Mastercard, Amex)
- ✅ **Twint** (paiement mobile suisse)
- ✅ **Revolut Pay**
- Montant : **80 CHF** (paiement unique)

---

## Étape 1 — Récupérer vos clés Stripe

1. Allez sur [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Copiez votre **Clé secrète** (`sk_live_...`)
3. Copiez votre **Clé publique** (`pk_live_...`)

---

## Étape 2 — Créer le fichier `.env`

Copiez `.env.example` en `.env` et remplissez :

```bash
cp .env.example .env
```

```env
STRIPE_SECRET_KEY=sk_live_VOTRE_CLE_ICI
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE_ICI
```

---

## Étape 3 — Créer le produit + prix dans Stripe (automatique)

```bash
npm install
node scripts/setup-stripe.mjs
```

Ce script va :
- Créer le produit "Cours en groupe – Programmation Exam Prep HEC"
- Créer le prix à **80.00 CHF** (paiement unique)
- Ajouter automatiquement `VITE_STRIPE_PRICE_ID=price_xxx` dans votre `.env`

---

## Étape 4 — Activer Twint et Revolut Pay dans Stripe

1. Allez sur [dashboard.stripe.com/settings/payment_methods](https://dashboard.stripe.com/settings/payment_methods)
2. Activez **Twint** (disponible pour les comptes Suisse/Europe)
3. Activez **Revolut Pay**

> ⚠️ Twint est disponible uniquement si votre compte Stripe est enregistré en Suisse ou pour les paiements CHF.

---

## Étape 5 — Lancer en local (test)

```bash
npm run dev
```

Ouvrez http://localhost:3000

---

## Étape 6 — Configurer les webhooks (pour emails automatiques)

Les webhooks permettent d'envoyer un email de confirmation dès qu'un paiement est reçu.

1. Allez sur [dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. Cliquez **"Ajouter un endpoint"**
3. URL : `https://votre-domaine.com/api/webhook`
4. Événements : cochez `checkout.session.completed`
5. Copiez le **Signing secret** (`whsec_...`) → ajoutez dans `.env` :
   ```
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

---

## Étape 7 — Mettre en ligne (déploiement)

### Option A — Railway (recommandé, simple)
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Option B — Render.com
1. Uploadez votre projet sur GitHub
2. Créez un nouveau Web Service sur render.com
3. Build command : `npm run build`
4. Start command : `npm start`
5. Ajoutez vos variables d'environnement dans le dashboard

---

## Flux de paiement

```
Client remplit le formulaire
        ↓
Choisit son mode de paiement (Carte / Twint / Revolut Pay)
        ↓
Redirigé vers Stripe Checkout (page sécurisée)
        ↓
Paiement effectué → Stripe envoie l'argent sur votre compte
        ↓
Webhook déclenché → Email de confirmation envoyé au client
        ↓
Client redirigé vers /success
```

---

## Support

Pour toute question : [stripe.com/docs](https://stripe.com/docs)
