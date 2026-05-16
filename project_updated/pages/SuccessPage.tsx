import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Paiement réussi !</h2>
        <p className="text-slate-600 mb-8">
          Merci pour votre confiance. Votre place est désormais réservée. Vous allez recevoir un email de confirmation avec tous les détails de votre session.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors gap-2"
        >
          Retour à l'accueil
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
