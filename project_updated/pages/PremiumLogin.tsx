import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const PremiumLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/premium";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate(from, { replace: true });
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-slate-50 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
      >
        <div className="bg-brand-600 p-8 text-center text-white">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md mb-4">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold">Espace Premium</h1>
          <p className="text-brand-100 mt-2 text-sm">Contenu exclusif réservé aux membres</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                Mot de passe d'accès
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre code membre"
                className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-brand-500'} outline-none transition-all`}
              />
              {error && <p className="text-rose-500 text-xs mt-2 font-medium">Code incorrect. Veuillez réessayer.</p>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200 flex items-center justify-center gap-2 group"
            >
              Accéder au contenu
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3 text-slate-400">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-[10px] leading-relaxed">
                Accès sécurisé. Si vous n'avez pas de code, contactez votre tuteur pour activer votre abonnement.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PremiumLogin;
