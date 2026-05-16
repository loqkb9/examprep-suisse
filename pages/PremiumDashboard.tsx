import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, ArrowRight, GraduationCap, Clock, Star, Trophy, Video, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const PremiumDashboard: React.FC = () => {
  const courses = [
    {
      id: 'python',
      title: 'Programmation : Éléments de Programmation',
      description: 'Maîtrisez la programmation de A à Z : Algorithmique, POO et Data Science (HEC Lausanne).',
      icon: <BookOpen className="h-6 w-6" />,
      chapters: 12,
      progress: 0,
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-brand-600 font-bold uppercase text-[10px] tracking-widest mb-4"
        >
          <Star className="h-4 w-4 fill-brand-600" />
          <span>Espace Membre Premium</span>
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bienvenue dans votre espace d'étude</h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed text-sm md:text-base">
          Accédez à vos ressources exclusives, fiches de synthèse et exercices corrigés conçus pour l'excellence académique.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group hover:shadow-2xl hover:shadow-brand-100 transition-all duration-500"
          >
            <div className={`h-2 ${course.color}`} />
            <div className="p-8">
              <div className={`h-12 w-12 rounded-2xl ${course.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200`}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 mb-8 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.chapters} Chapitres</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Niveau HEC</span>
                </div>
              </div>

              <Link 
                to={`/premium/cours/${course.id}`}
                className="inline-flex items-center justify-center w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-brand-600 hover:text-white transition-all group/btn"
              >
                Commencer l'étude
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}

        {/* Exam Simulation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group hover:shadow-2xl hover:shadow-brand-100 transition-all duration-500"
        >
          <div className="h-2 bg-brand-600" />
          <div className="p-8">
            <div className="h-12 w-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-200">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Simulation d'Examen</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Testez vos connaissances avec une simulation complète basée sur les vrais examens de HEC Lausanne.
            </p>
            
            <div className="flex items-center gap-6 mb-8 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>30+ Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mode Réel</span>
              </div>
            </div>

            <Link 
              to="/premium/examen"
              className="inline-flex items-center justify-center w-full py-4 bg-brand-50 text-brand-600 font-bold rounded-2xl hover:bg-brand-600 hover:text-white transition-all group/btn"
            >
              Lancer le test
              <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumDashboard;
