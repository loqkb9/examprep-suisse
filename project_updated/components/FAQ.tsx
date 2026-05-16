import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Le cours est-il enregistré ?",
    answer: "Pour favoriser les échanges spontanés et la confidentialité des questions posées par les étudiants, les sessions ne sont pas enregistrées. Cependant, un support PDF complet résumant la théorie et les exercices corrigés vous est envoyé après le cours."
  },
  {
    question: "Quels sont les prérequis pour suivre le cours ?",
    answer: "Ces sessions sont des révisions intensives destinées à la préparation d'examen. Il est donc recommandé d'avoir suivi (même partiellement) les cours du semestre. Nous ne découvrons pas la matière, nous la consolidons et nous nous entraînons."
  },
  {
    question: "Puis-je m'inscrire si je ne suis pas étudiant à l'UNIL/HEC ?",
    answer: "Oui, tout le monde est le bienvenu. Cependant, le programme est spécifiquement calqué sur le cursus Bachelor de HEC Lausanne. Si vous venez d'une autre faculté ou école, vérifiez que le contenu correspond à vos besoins."
  },
  {
    question: "Que se passe-t-il si la session est complète ?",
    answer: "Nos groupes sont limités à 10 personnes pour garantir la qualité. Si une date est complète, vous pouvez nous envoyer un email pour être placé sur liste d'attente. Si une place se libère (annulation), nous vous contacterons immédiatement."
  },
  {
    question: "J'ai un empêchement de dernière minute, que faire ?",
    answer: "Contactez-nous le plus tôt possible par email. Comme indiqué dans nos conditions, l'annulation est gratuite jusqu'à 48h avant le cours. Passé ce délai, la séance est due, sauf présentation d'un justificatif médical."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
             <div className="p-3 bg-brand-100 rounded-full">
               <HelpCircle className="w-8 h-8 text-brand-600" />
             </div>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Questions Fréquentes</h2>
          <p className="mt-4 text-lg text-slate-500">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 ${openIndex === index ? 'shadow-md border-brand-200 ring-1 ring-brand-100' : 'hover:border-brand-200'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-brand-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;