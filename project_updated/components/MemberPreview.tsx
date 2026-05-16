import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Lock, 
  CheckCircle, 
  PlayCircle, 
  FileText, 
  Trophy, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const MemberPreview: React.FC = () => {
  const features = [
    {
      icon: <PlayCircle className="h-6 w-6 text-brand-500" />,
      title: "Leçons Vidéo & Fiches",
      description: "Des explications claires sur chaque concept clé du programme HEC."
    },
    {
      icon: <FileText className="h-6 w-6 text-brand-500" />,
      title: "Quiz Interactifs",
      description: "Testez vos connaissances après chaque chapitre avec nos QCM d'entraînement."
    },
    {
      icon: <Trophy className="h-6 w-6 text-brand-500" />,
      title: "Examens Blancs",
      description: "Entraînez-vous en conditions réelles avec des annales corrigées."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-brand-500" />,
      title: "Suivi de Progression",
      description: "Visualisez votre avancée et identifiez vos points faibles à travailler."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-bold mb-6">
              <Lock className="h-3.5 w-3.5 mr-2" />
              ACCÈS EXCLUSIF
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Boostez vos révisions avec l'Espace Membre <span className="text-brand-500">Premium</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl">
              Ne vous contentez pas des cours en direct. Accédez à notre plateforme d'apprentissage en ligne disponible 24h/24 pour maîtriser la programmation à votre rythme.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-3 p-2 w-fit rounded-lg bg-slate-800 border border-slate-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link 
              to="/premium/login"
              className="inline-flex items-center px-8 py-4 rounded-full bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 group"
            >
              Découvrir l'Espace Membre
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 lg:mt-0 relative"
          >
            {/* Mockup UI */}
            <div className="relative bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-video lg:aspect-square xl:aspect-video">
              {/* Header of mockup */}
              <div className="bg-slate-900/50 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Dashboard Premium</div>
                <div className="w-6 h-6 rounded-full bg-slate-700"></div>
              </div>
              
              {/* Content of mockup */}
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 bg-slate-700 rounded-md"></div>
                  <div className="h-8 w-8 bg-brand-600/20 rounded-full flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-brand-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-slate-700/50 rounded-xl border border-slate-600/50 p-3 flex flex-col justify-between">
                    <div className="h-2 w-10 bg-slate-600 rounded"></div>
                    <div className="h-4 w-16 bg-brand-500 rounded"></div>
                  </div>
                  <div className="h-24 bg-slate-700/50 rounded-xl border border-slate-600/50 p-3 flex flex-col justify-between">
                    <div className="h-2 w-10 bg-slate-600 rounded"></div>
                    <div className="h-4 w-16 bg-emerald-500 rounded"></div>
                  </div>
                  <div className="h-24 bg-slate-700/50 rounded-xl border border-slate-600/50 p-3 flex flex-col justify-between">
                    <div className="h-2 w-10 bg-slate-600 rounded"></div>
                    <div className="h-4 w-16 bg-indigo-500 rounded"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-40 bg-slate-700 rounded"></div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-brand-600 rounded-lg flex items-center justify-center">
                        <PlayCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-3 w-32 bg-slate-600 rounded"></div>
                        <div className="h-2 w-20 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="h-6 w-16 bg-brand-600/20 text-brand-500 text-[10px] font-bold rounded flex items-center justify-center">COMMENCER</div>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-3 w-24 bg-slate-600 rounded"></div>
                        <div className="h-2 w-16 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="h-6 w-16 bg-emerald-600/20 text-emerald-500 text-[10px] font-bold rounded flex items-center justify-center">QUIZ</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute bottom-10 right-[-20px] bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Quiz Réussi !</div>
                    <div className="text-[10px] text-slate-500">Score: 18/20</div>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemberPreview;
