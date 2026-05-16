import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { examQuestions, ExamQuestion } from '../src/data/examQuestions';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, AlertCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumExamPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);

  const currentQuestion = examQuestions[currentQuestionIndex];

  const handleStart = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
  };

  const handleAnswer = (answer: string) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateScore();
      setCurrentStep('results');
    }
  };

  const calculateScore = () => {
    let finalScore = 0;
    examQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <AnimatePresence mode="wait">
        {currentStep === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center"
          >
            <div className="h-20 w-20 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Trophy className="h-10 w-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Simulation d'Examen de Programmation</h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Préparez-vous aux conditions réelles de l'examen HEC Lausanne. 
              Ce test contient {examQuestions.length} questions couvrant l'intégralité du programme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-brand-600 font-bold mb-1">Difficulté</div>
                <div className="text-slate-900 font-medium">Académique HEC</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-brand-600 font-bold mb-1">Questions</div>
                <div className="text-slate-900 font-medium">{examQuestions.length} QCM</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-brand-600 font-bold mb-1">Objectif</div>
                <div className="text-slate-900 font-medium">Excellence (6.0)</div>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="inline-flex items-center px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 group"
            >
              Lancer la simulation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {currentStep === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Progress Bar Section */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-brand-200">
                    {currentQuestionIndex + 1}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold">Question {currentQuestionIndex + 1} sur {examQuestions.length}</h3>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{currentQuestion.category}</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-2xl font-black text-slate-900">
                    {Math.round(((currentQuestionIndex) / examQuestions.length) * 100)}%
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progression</div>
                </div>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / examQuestions.length) * 100}%` }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  className="h-full bg-brand-600 rounded-full"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                {currentQuestion.question}
              </h2>

              {currentQuestion.code && (
                <div className="mb-8 bg-slate-900 rounded-2xl p-6 font-mono text-sm text-brand-300 overflow-x-auto whitespace-pre">
                  {currentQuestion.code}
                </div>
              )}

              <div className="space-y-4">
                {currentQuestion.options?.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                      userAnswers[currentQuestion.id] === option
                        ? 'border-brand-600 bg-brand-50/50 text-brand-900'
                        : 'border-slate-100 hover:border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      userAnswers[currentQuestion.id] === option
                        ? 'border-brand-600 bg-brand-600 text-white'
                        : 'border-slate-200 group-hover:border-slate-300'
                    }`}>
                      {userAnswers[currentQuestion.id] === option && <CheckCircle2 className="h-4 w-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                disabled={!userAnswers[currentQuestion.id]}
                onClick={handleNext}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {currentQuestionIndex === examQuestions.length - 1 ? 'Terminer' : 'Suivant'}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 text-center">
              <div className="inline-block p-6 bg-brand-50 rounded-full mb-6">
                <Trophy className="h-12 w-12 text-brand-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Résultats de la simulation</h2>
              <div className="text-5xl font-black text-brand-600 mb-4">
                {score} / {examQuestions.length}
              </div>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                {score === examQuestions.length 
                  ? "Parfait ! Vous êtes prêt pour l'examen." 
                  : score > examQuestions.length * 0.8 
                  ? "Excellent travail, vous maîtrisez l'essentiel." 
                  : "Bon début, mais quelques révisions sont encore nécessaires."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleStart}
                  className="px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="h-5 w-5" />
                  Recommencer
                </button>
                <Link
                  to="/premium"
                  className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  Retour au dashboard
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <AlertCircle className="text-brand-600" />
                Analyse détaillée et explications
              </h3>
              
              {examQuestions.map((q, idx) => {
                const isCorrect = userAnswers[q.id] === q.correctAnswer;
                return (
                  <div 
                    key={q.id}
                    className={`bg-white rounded-3xl p-8 shadow-md border-l-8 ${
                      isCorrect ? 'border-green-500' : 'border-red-500'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-slate-900">{q.question}</h4>
                      </div>
                      {isCorrect ? (
                        <CheckCircle2 className="text-green-500 h-6 w-6 shrink-0" />
                      ) : (
                        <XCircle className="text-red-500 h-6 w-6 shrink-0" />
                      )}
                    </div>

                    {q.code && (
                      <div className="mb-4 bg-slate-900 rounded-xl p-4 font-mono text-xs text-brand-300 overflow-x-auto">
                        {q.code}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Votre réponse</div>
                        <div className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {userAnswers[q.id] || "Aucune réponse"}
                        </div>
                      </div>
                      {!isCorrect && (
                        <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
                          <div className="text-[10px] font-bold text-green-400 uppercase mb-1">Réponse correcte</div>
                          <div className="font-medium text-green-700">
                            {q.correctAnswer}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-brand-50/50 p-6 rounded-2xl border border-brand-100">
                      <div className="flex items-center gap-2 text-brand-600 font-bold text-sm mb-2">
                        <BookOpen className="h-4 w-4" />
                        Explication pédagogique
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PremiumExamPage;
