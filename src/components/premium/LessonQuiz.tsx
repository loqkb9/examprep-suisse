import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, AlertCircle, BookOpen, HelpCircle } from 'lucide-react';
import { LessonQuizQuestion } from '../../data/pythonCourseData';

interface LessonQuizProps {
  questions: LessonQuizQuestion[];
}

const LessonQuiz: React.FC<LessonQuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ question: string; answer: string; isCorrect: boolean }[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setUserAnswers(prev => [...prev, {
      question: currentQuestion.question,
      answer,
      isCorrect
    }]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-16 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] -mr-32 -mt-32" />
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-brand-600 mb-6 shadow-xl shadow-brand-500/20">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-3xl font-black mb-2 tracking-tight">Quiz Terminé !</h3>
          <div className="text-5xl font-black text-brand-400 mb-6">
            {score} / {questions.length}
          </div>
          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            {score === questions.length 
              ? "Parfait ! Vous maîtrisez parfaitement les concepts de ce chapitre." 
              : "Bon travail ! Prenez le temps de revoir les points qui vous ont posé problème."}
          </p>
          <button 
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-brand-50 transition-all"
          >
            <RotateCcw className="h-5 w-5" />
            Recommencer le quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="my-16 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
          <div className="h-10 w-10 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
            <HelpCircle className="h-6 w-6" />
          </div>
          Vérification des acquis
        </h3>
        <div className="px-4 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <motion.div 
            className="h-full bg-brand-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
          {currentQuestion.question}
        </h4>

        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            const showResult = showExplanation;
            
            let buttonClass = "border-slate-100 hover:border-slate-200 text-slate-700";
            if (showResult) {
              if (isCorrect) buttonClass = "border-green-500 bg-green-50 text-green-900";
              else if (isSelected) buttonClass = "border-red-500 bg-red-50 text-red-900";
              else buttonClass = "border-slate-100 opacity-50 text-slate-400";
            } else if (isSelected) {
              buttonClass = "border-brand-600 bg-brand-50 text-brand-900";
            }

            return (
              <button
                key={idx}
                disabled={showExplanation}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${buttonClass}`}
              >
                <span className="font-bold">{option}</span>
                {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 pt-8 border-t border-slate-100"
            >
              <div className={`p-6 rounded-2xl flex gap-4 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? <CheckCircle2 className="h-6 w-6" /> : <AlertCircle className="h-6 w-6" />}
                </div>
                <div>
                  <div className={`font-black text-xs uppercase tracking-widest mb-1 ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedAnswer === currentQuestion.correctAnswer ? 'Excellent !' : 'Pas tout à fait...'}
                  </div>
                  <p className={`text-sm leading-relaxed ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-900' : 'text-red-900'}`}>
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-600 transition-all group"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Terminer le quiz' : 'Question suivante'}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LessonQuiz;
