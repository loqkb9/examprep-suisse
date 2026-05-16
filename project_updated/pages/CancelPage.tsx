import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft } from 'lucide-react';

const CancelPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6">
          <XCircle className="h-10 w-10 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Paiement annulé</h2>
        <p className="text-slate-600 mb-8">
          Le processus de paiement a été interrompu. Aucune somme n'a été débitée de votre compte. Vous pouvez réessayer à tout moment.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors gap-2"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
