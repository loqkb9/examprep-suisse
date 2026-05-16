import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Users, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-12 bg-slate-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-8 sm:mt-12 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full 
                border border-red-300 bg-red-50 text-red-700 
                text-xs sm:text-sm font-semibold mb-6 shadow-sm">
  <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
  🚨 Session de Juin disponible
</div>

              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Cours particuliers en groupe</span>{' '}
                <span className="block text-brand-600 xl:inline">Préparation examens</span>
              </h1>
              <p className="mt-4 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
                Session intensive en ligne sur Réunion Teams pour réussir vos éxamens. Révisez efficacement avec un ancien assistant, en petit comité.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                {/* Price Badge - Standardized Size */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-emerald-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative h-20 w-[180px] sm:w-[200px] flex items-center gap-4 bg-emerald-50 px-5 rounded-2xl border-2 border-emerald-100 shadow-lg shadow-emerald-100/10 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-center h-10 w-10 bg-emerald-600 text-white rounded-xl shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform duration-500">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-0.5">Tarif unique</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-black text-2xl text-emerald-900 tracking-tighter leading-none">80</span>
                        <span className="text-sm font-black text-emerald-600 uppercase">CHF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Duration Badge - Standardized Size */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-blue-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative h-20 w-[180px] sm:w-[200px] flex items-center gap-4 bg-blue-50 px-5 rounded-2xl border-2 border-blue-100 shadow-lg shadow-blue-100/10 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-center h-10 w-10 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-200 group-hover:scale-105 transition-transform duration-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-0.5">Intensif</span>
                      <span className="font-black text-blue-900 leading-none text-xl uppercase tracking-wider">4 Heures</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none px-4 sm:px-0">
                <a 
                  href="#courses" 
                  onClick={(e) => handleScroll(e, 'courses')}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-sm font-black uppercase tracking-widest rounded-2xl text-white bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-200 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Voir les cours
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#reservation" 
                  onClick={(e) => handleScroll(e, 'reservation')}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-sm font-black uppercase tracking-widest rounded-2xl text-slate-900 bg-white hover:bg-slate-900 hover:text-white transition-all hover:-translate-y-1 active:scale-95"
                >
                  Réserver
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Students studying online"
        />
        <div className="absolute inset-0 bg-brand-900 mix-blend-multiply opacity-10 lg:hidden"></div>
      </div>
    </div>
  );
};

export default Hero;