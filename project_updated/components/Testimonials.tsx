import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Thomas L.",
    role: "étudiant bachelor éco",
    content: "Grâce au cours de Programmation, j'ai enfin compris les listes et les classes. L'approche est super claire et les exercices sont pile ce qu'on a à l'examen. J'ai validé avec 5.5 !",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "Bachelor élève de 2ème année",
    content: "SQL était ma bête noire. En 4h, tout s'est éclairé. Les explications  étaient claires et le prof répondait bien a nos questions. Je recommande à 100%.",
    rating: 5
  },
  {
    name: "Julien R.",
    role: "2eme annee bachelor",
    content: "Super format. On est peu nombreux, donc on peut poser toutes nos questions. Le support PDF est une mine d'or pour les révisions de dernière minute.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-brand-600 font-black tracking-[0.2em] uppercase mb-4">Témoignages</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ils ont réussi leurs examens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 relative hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col group">
              <div className="absolute -top-5 left-8 bg-slate-900 rounded-2xl p-3 shadow-xl group-hover:bg-brand-600 transition-colors duration-500">
                <Quote className="h-5 w-5 text-white" />
              </div>
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed text-base">"{testimonial.content}"</p>
              <div className="flex items-center mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors group-hover:bg-brand-50 group-hover:border-brand-100">
                <div className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 font-black text-sm shrink-0 shadow-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-black text-slate-900">{testimonial.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;