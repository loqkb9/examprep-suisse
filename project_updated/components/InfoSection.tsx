import React from 'react';
import { Video, Users, CreditCard, ShieldCheck } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-brand-600 font-black tracking-[0.2em] uppercase mb-4">Informations Pratiques</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Tout ce qu'il faut savoir
          </p>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-500 mx-auto leading-relaxed">
            Nous avons simplifié le processus pour que vous puissiez vous concentrer à 100% sur vos révisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-50 text-brand-600 shadow-sm border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
              <Video className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Cours en ligne (Teams)</h3>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Lien envoyé 24h avant. Qualité HD et partage d'écran fluide pour un apprentissage interactif optimal.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-50 text-brand-600 shadow-sm border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
              <Users className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Petits Groupes</h3>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Nous limitons les places pour garantir une interaction réelle et répondre à chaque question individuelle.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-50 text-brand-600 shadow-sm border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
              <CreditCard className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Paiement Flexible</h3>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Paiement rapide via Twint, Revolut ou Stripe. Facture disponible sur demande pour votre comptabilité.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-50 text-brand-600 shadow-sm border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Annulation Flexible</h3>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Annulation gratuite jusqu'à 48h avant. Remboursement intégral garanti pour les empêchements sérieux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;