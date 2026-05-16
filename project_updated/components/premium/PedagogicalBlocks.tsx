import React from 'react';
import { GraduationCap, AlertTriangle, Calculator, Lightbulb, CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { motion } from 'motion/react';

export const ExamTip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="my-10 relative overflow-hidden bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-3xl shadow-sm group"
  >
    <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-200">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em]">Focus Examen</span>
          <h4 className="text-amber-900 font-bold text-lg">Conseil de Tuteur HEC</h4>
        </div>
      </div>
      <div className="text-amber-900/80 leading-relaxed font-medium text-sm md:text-base pl-1">
        {children}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
      <GraduationCap className="h-32 w-32" />
    </div>
  </motion.div>
);

export const CommonTrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="my-10 relative overflow-hidden bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-3xl shadow-sm group"
  >
    <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-200">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <span className="block text-[10px] font-black text-rose-600 uppercase tracking-[0.2em]">Attention</span>
          <h4 className="text-rose-900 font-bold text-lg">Piège Classique à l'Examen</h4>
        </div>
      </div>
      <div className="text-rose-900/80 leading-relaxed font-medium text-sm md:text-base pl-1">
        {children}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
      <AlertTriangle className="h-32 w-32" />
    </div>
  </motion.div>
);

export const FormulaBox: React.FC<{ title: string; formula: string; explanation?: string }> = ({ title, formula, explanation }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="my-12 bg-slate-950 text-white rounded-[2rem] shadow-2xl shadow-slate-200 overflow-hidden relative"
  >
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />
    <div className="p-8 md:p-12 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-8 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
          <Calculator className="h-4 w-4" />
        </div>
        <h4 className="text-brand-400 font-black text-[10px] uppercase tracking-[0.3em]">{title}</h4>
      </div>
      
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-2xl md:text-4xl font-mono text-center text-white font-bold tracking-tight bg-white/5 px-8 py-6 rounded-2xl border border-white/10 shadow-inner">
          {formula}
        </div>
      </div>

      {explanation && (
        <div className="mt-8 pt-8 border-t border-white/10 flex gap-4 items-start">
          <Info className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-slate-400 text-sm italic leading-relaxed">
            {explanation}
          </p>
        </div>
      )}
    </div>
  </motion.div>
);

export const KeyConcept: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-16 group">
    <div className="flex items-center gap-4 mb-6">
      <div className="h-12 w-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform duration-500">
        <Lightbulb className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
    </div>
    <div className="pl-4 md:pl-16 border-l-2 border-slate-100 text-slate-600 leading-relaxed space-y-4 text-base md:text-lg">
      {children}
    </div>
  </div>
);

export const SummarySheet: React.FC<{ items: string[] }> = ({ items }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="my-16 p-10 md:p-12 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] -mr-32 -mt-32" />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl font-black flex items-center gap-4 tracking-tight">
          <div className="h-12 w-12 rounded-2xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          Fiche de Synthèse
        </h3>
        <div className="hidden sm:block px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
          Révision Rapide
        </div>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl border border-white/5 transition-all group/item"
          >
            <div className="h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-brand-500 transition-colors">
              <ArrowRight className="h-3 w-3 text-brand-400 group-hover/item:text-white" />
            </div>
            <span className="text-sm md:text-base font-medium text-slate-200 leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export const ExerciseBox: React.FC<{ title: string; question: React.ReactNode; solution: React.ReactNode }> = ({ title, question, solution }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="my-10 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 overflow-hidden"
  >
    <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex items-center justify-between">
      <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest">{title}</h4>
      <div className="px-3 py-1 bg-brand-100 text-brand-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
        Exercice Corrigé
      </div>
    </div>
    <div className="p-8">
      <div className="mb-6 text-slate-700 leading-relaxed font-medium">
        {question}
      </div>
      <div className="bg-brand-50/50 rounded-2xl p-6 border border-brand-100 relative group">
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <CheckCircle2 className="h-8 w-8 text-brand-600" />
        </div>
        <div className="text-xs font-black text-brand-600 uppercase tracking-widest mb-3">Solution Détaillée</div>
        <div className="text-slate-600 text-sm leading-relaxed space-y-2">
          {solution}
        </div>
      </div>
    </div>
  </motion.div>
);


