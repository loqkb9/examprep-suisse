import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isPremium } = useAuth();

  const isActive = (path: string) => location.pathname === path;
  
  const navClasses = (path: string) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
    isActive(path) 
      ? 'bg-brand-50 text-brand-700 font-bold' 
      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
  }`;

  const scrollToReservation = () => {
    setIsOpen(false);
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors">
                 <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-800">
                HEC Python <span className="text-brand-600">Academy</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={isActive('/') ? "text-brand-600 font-semibold" : "text-slate-600 hover:text-brand-600 transition"}>
              Accueil
            </Link>
            <Link to="/cours/python" className={isActive('/cours/python') ? "text-brand-600 font-semibold" : "text-slate-600 hover:text-brand-600 transition"}>
              Programmation
            </Link>
            <Link to="/faq" className={isActive('/faq') ? "text-brand-600 font-semibold" : "text-slate-600 hover:text-brand-600 transition"}>
              FAQ
            </Link>
            <Link to="/premium" className={isActive('/premium') ? "text-brand-600 font-semibold" : "text-slate-600 hover:text-brand-600 transition flex items-center gap-1.5"}>
              <Star className={`h-4 w-4 ${isPremium ? 'fill-brand-600 text-brand-600' : 'text-slate-400'}`} />
              <span className="font-medium">Espace Membre</span>
              <span className="bg-brand-100 text-brand-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">NOUVEAU</span>
            </Link>
            <button
              onClick={scrollToReservation}
              className="px-5 py-2 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition shadow-sm hover:shadow-md"
            >
              Réserver
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={navClasses('/')}
            >
              Accueil
            </Link>
            <Link 
              to="/cours/python" 
              onClick={() => setIsOpen(false)}
              className={navClasses('/cours/python')}
            >
              Programmation
            </Link>
            <Link 
              to="/faq" 
              onClick={() => setIsOpen(false)}
              className={navClasses('/faq')}
            >
              FAQ
            </Link>
            <Link 
              to="/premium" 
              onClick={() => setIsOpen(false)}
              className={`${navClasses('/premium')} flex items-center justify-between`}
            >
              <div className="flex items-center gap-2">
                <Star className={`h-4 w-4 ${isPremium ? 'fill-brand-600 text-brand-600' : 'text-slate-400'}`} />
                <span>Espace Membre</span>
              </div>
              <span className="bg-brand-100 text-brand-700 text-[10px] font-bold px-2 py-1 rounded-full">NOUVEAU</span>
            </Link>
             <button
              onClick={scrollToReservation}
              className="block w-full text-center px-4 py-4 mt-6 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 shadow-md active:scale-95 transition-all"
            >
              Réserver une place
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;