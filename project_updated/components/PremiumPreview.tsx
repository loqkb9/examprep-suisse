import React from 'react';
import { motion } from 'motion/react';
import { Lock, Play, FileText, CheckCircle, Star, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumPreview: React.FC = () => {
  const previewLessons = [
    { title: "Variables & Types de données", type: "Vidéo + Slides", duration: "45 min" },
    { title: "Quiz : Logique & Conditions", type: "Quiz Interactif", duration: "15 questions" },
    { title: "Structures de contrôle (if/else)", type: "Exercices corrigés", duration: "1h 15 min" },
    { title: "Quiz : Boucles & Listes", type: "Quiz Interactif", duration: "20 questions" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left side: Text content */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6 border border-brand-100">
              <Star className="w-4 h-4 mr-2 fill-brand-600" />
              Accès Premium Inclus
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Plus qu'un cours : un <span className="text-brand-600">Espace Membre</span> complet
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              En réservant votre session intensive, vous débloquez un accès exclusif à notre plateforme de révision en ligne. Retrouvez tout le contenu nécessaire pour valider votre semestre.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Fiches de révision PDF ultra-détaillées",
                "Quiz interactifs type examen (QCM)",
                "Annales d'examens corrigées pas à pas",
                "Support prioritaire par chat"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              to="/premium" 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group"
            >
              Découvrir l'Espace Membre
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right side: Visual Preview */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

            <div className="relative bg-slate-50 rounded-3xl border border-slate-200 shadow-2xl p-5 md:p-8 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Dashboard Premium</h4>
                    <p className="text-[10px] md:text-xs text-slate-500">Programmation : Éléments de Programmation</p>
                  </div>
                </div>
                <div className="hidden sm:block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-[10px] font-bold uppercase tracking-wider">
                  Aperçu
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                {previewLessons.map((lesson, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-3 md:p-4 rounded-2xl border bg-white transition-all ${idx === 0 ? 'border-brand-200 shadow-md ring-1 ring-brand-100' : 'border-slate-100 opacity-70'}`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ${idx === 0 ? 'bg-brand-50 text-brand-600' : 'bg-slate-100 text-slate-400'}`}>
                        {lesson.type.includes('Quiz') ? <FileText className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
                      </div>
                      <div>
                        <h5 className="text-xs md:text-sm font-bold text-slate-900 line-clamp-1">{lesson.title}</h5>
                        <p className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-tight">{lesson.duration} • {lesson.type}</p>
                      </div>
                    </div>
                    {idx === 0 ? (
                      <div className="text-brand-600 shrink-0">
                        <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                      </div>
                    ) : (
                      <Lock className="w-3 h-3 md:w-4 md:h-4 text-slate-300 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Overlay for non-logged users */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
              
              <div className="mt-8 p-4 bg-brand-600 rounded-2xl text-white shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <span className="text-sm font-bold">Inclus dans votre réservation</span>
                </div>
                <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Gratuit</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumPreview;
