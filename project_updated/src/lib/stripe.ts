import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export const createCheckoutSession = async (priceId: string) => {
  try {
    console.log('Creating checkout session for price:', priceId);
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        successUrl: window.location.origin + '/#/success',
        cancelUrl: window.location.origin + '/#/cancel',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erreur serveur lors de la création de la session');
    }

    const session = await response.json();
    console.log('Session created:', session);

    if (session.url) {
      console.log('Redirecting to Stripe:', session.url);
      // Try to open in a new tab first as it's more reliable in sandboxed iframes
      const stripeWindow = window.open(session.url, '_blank');
      
      // If popup is blocked or failed, try top-level navigation as fallback
      if (!stripeWindow) {
        try {
          if (window.top) {
            window.top.location.href = session.url;
          } else {
            window.location.href = session.url;
          }
        } catch (e) {
          window.location.href = session.url;
        }
      }
    } else {
      throw new Error('URL de session Stripe manquante');
    }
  } catch (error: any) {
    console.error('Checkout error:', error);
    alert(`Erreur de paiement : ${error.message}`);
  }
};
