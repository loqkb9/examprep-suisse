import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'motion/react';

const PremiumCourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Données fictives pour la structure - seront remplacées par le contenu de vos slides
  const chapters = [
    { id: '1', title: 'Variables, Types & Opérateurs', duration: '2h 30 min', status: 'current' },
    { id: '2', title: 'Logique de Contrôle : Conditions & Booléens', duration: '1h 30 min', status: 'locked' },
    { id: '3', title: 'Structures de Données : Listes & Tuples', duration: '2h 00 min', status: 'locked' },
    { id: '4', title: 'Boucles & Complexité Algorithmique', duration: '2h 30 min', status: 'locked' },
    { id: '5', title: 'Dictionnaires & Ensembles', duration: '1h 45 min', status: 'locked' },
    { id: '6', title: 'Gestion des Erreurs & Exceptions', duration: '1h 15 min', status: 'locked' },
    { id: '7', title: 'Fonctions & Modularité', duration: '2h 30 min', status: 'locked' },
    { id: '8', title: 'Programmation Orientée Objet (POO)', duration: '3h 00 min', status: 'locked' },
    { id: '9', title: 'Algorithmique : Tris & Performance', duration: '2h 45 min', status: 'locked' },
    { id: '10', title: 'Récursivité & Dessins Récursifs', duration: '2h 15 min', status: 'locked' },
    { id: '11', title: 'Data Science : Numpy, Pandas & Régression', duration: '4h 00 min', status: 'locked' },
    { id: '12', title: 'Visualisation de Données (Matplotlib & Seaborn)', duration: '2h 00 min', status: 'locked' },
  ];

  const courseTitle = courseId === 'python' ? 'Programmation : Éléments de Programmation' : 'SQL & Bases de Données';

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/premium" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors group">
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Retour au Dashboard
      </Link>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12">
        <div className="bg-slate-900 p-8 md:p-12 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseTitle}</h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed text-sm md:text-base">
              Ce module couvre l'intégralité du programme officiel de l'HEC Lausanne. 
              Chaque chapitre inclut des fiches de cours ultra-détaillées, des exemples académiques et des conseils d'examen.
            </p>
          </motion.div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-xl font-bold text-slate-900 mb-8">Programme du cours</h2>
          <div className="space-y-4">
            {chapters.map((chapter, idx) => (
              <motion.div 
                key={chapter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`group flex items-center justify-between p-6 rounded-2xl border transition-all ${
                  chapter.status === 'locked' 
                    ? 'bg-slate-50 border-slate-100 opacity-60' 
                    : 'bg-white border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold ${
                    chapter.status === 'completed' ? 'bg-green-100 text-green-600' : 
                    chapter.status === 'current' ? 'bg-brand-100 text-brand-600' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {chapter.status === 'completed' ? <CheckCircle className="h-6 w-6" /> : idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">{chapter.title}</h3>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-bold">{chapter.duration}</p>
                  </div>
                </div>

                {chapter.status === 'locked' ? (
                  <Lock className="h-5 w-5 text-slate-400" />
                ) : (
                  <Link 
                    to={`/premium/cours/${courseId}/${chapter.id}`}
                    className="h-10 w-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all"
                  >
                    <Play className="h-4 w-4 fill-current" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourseDetail;
