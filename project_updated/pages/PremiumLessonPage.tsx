import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { pythonCourseData } from '../src/data/pythonCourseData';
import LessonQuiz from '../src/components/premium/LessonQuiz';

const PremiumLessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();

  const lesson = lessonId ? pythonCourseData[lessonId] : null;

  // Scroll to top on lesson change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Leçon en cours de rédaction</h2>
          <p className="text-slate-500 mb-8">Nos tuteurs HEC finalisent ce contenu académique.</p>
          <Link to={`/premium/cours/${courseId}`} className="text-brand-600 font-bold hover:underline">
            Retour au programme
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      {/* Progression bar */}
      <div className="fixed top-16 left-0 z-50 h-1.5 w-full bg-slate-100/50 backdrop-blur-sm">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-600 to-brand-400 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center justify-between mb-16">
          <Link 
            to={`/premium/cours/${courseId}`} 
            className="flex items-center gap-2 text-slate-400 hover:text-brand-600 transition-all font-bold text-xs uppercase tracking-widest group"
          >
            <div className="h-8 w-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-brand-200 group-hover:bg-brand-50 transition-all">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Retour au programme
          </Link>
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
            <BookOpen className="h-4 w-4 text-brand-600" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Chapitre {lessonId}</span>
          </div>
        </div>

        <header className="mb-20 relative">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {lesson.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-bold border border-green-100">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                {lesson.level}
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div className="text-slate-500 text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Temps d'étude : {lesson.duration}
              </div>
            </div>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-900 prose-strong:font-bold
            prose-code:text-brand-600 prose-code:bg-brand-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-slate-950 prose-pre:rounded-3xl prose-pre:shadow-2xl prose-pre:border prose-pre:border-white/5
            prose-img:rounded-3xl prose-img:shadow-2xl"
        >
          {lesson.modules}
        </motion.div>

        {lesson.quiz && lesson.quiz.length > 0 && (
          <LessonQuiz questions={lesson.quiz} />
        )}

        <footer className="mt-32 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-3xl bg-white shadow-xl shadow-slate-200 flex items-center justify-center text-brand-600">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">Chapitre maîtrisé ?</h4>
                <p className="text-sm text-slate-500 font-medium">Félicitations pour votre progression académique.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {parseInt(lessonId || '1') > 1 && (
                <button 
                  onClick={() => navigate(`/premium/cours/${courseId}/${parseInt(lessonId || '1') - 1}`)}
                  className="flex-1 md:flex-none px-8 py-5 rounded-2xl font-bold text-slate-600 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100"
                >
                  Précédent
                </button>
              )}
              <button 
                onClick={() => navigate(`/premium/cours/${courseId}/${parseInt(lessonId || '1') + 1}`)}
                className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-600 transition-all group shadow-2xl shadow-slate-200 hover:shadow-brand-200"
              >
                Suivant
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PremiumLessonPage;
