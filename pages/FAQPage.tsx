import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Le cours est-il enregistré ?",
    answer: "Les sessions sont enregistrées afin de permettre aux étudiants de revoir le contenu après le cours et de réviser à leur rythme.Tous les étudiants inscrits reçoivent la rediffusion intégrale du cours, même s’ils ne peuvent pas être présents, ainsi que le support."
  },
  {
    question: "Quels sont les prérequis pour suivre le cours ?",
    answer: "Ces sessions sont des révisions intensives destinées à la préparation d'examen. Il est donc recommandé d'avoir suivi (même partiellement) les cours du semestre. Nous ne découvrons pas la matière, nous la consolidons, revoyons les points essentielset nous nous entraînons."
  },
  {
    question: "Puis-je m'inscrire si je ne suis pas étudiant à l'UNIL/HEC ?",
    answer: "Oui, tout le monde est le bienvenu. Cependant, le programme est spécifiquement calqué sur le cursus Bachelor de HEC Lausanne. Si vous venez d'une autre faculté ou école, vérifiez que le contenu correspond à vos besoins."
  },
  {
    question: "Que se passe-t-il si la session est complète ?",
    answer: "Nos groupes sont limités  pour garantir la qualité. Si une date est complète, vous pouvez nous envoyer un email pour être placé sur liste d'attente. Si une place se libère (annulation), nous vous contacterons immédiatement."
  },
  {
    question: "J'ai un empêchement de dernière minute, que faire ?",
    answer: "Contactez-nous le plus tôt possible par email. Comme indiqué dans nos conditions, l'annulation est gratuite jusqu'à 48h avant le cours. Passé ce délai, la séance est due, sauf présentation d'un justificatif médical."
  }
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Header Section */}
      <div className="bg-brand-700 py-12 md:py-20 text-white mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-600 rounded-full shadow-lg">
              <HelpCircle className="w-10 h-10 text-brand-100" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto px-4 md:px-0">
            Tout ce que vous devez savoir sur le fonctionnement de nos cours, les inscriptions et le déroulement des sessions.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="divide-y divide-slate-100">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`transition-colors duration-200 ${openIndex === index ? 'bg-brand-50/30' : 'hover:bg-slate-50'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-700' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-slate-600 mb-6">N'hésitez pas à nous contacter directement, nous vous répondrons rapidement.</p>
            <a href="mailto:pythonhec@gmail.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brand-700 bg-brand-100 hover:bg-brand-200 hover:shadow-md transition-all">
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un email
            </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;