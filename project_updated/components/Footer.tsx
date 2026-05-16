import React from 'react';
import { BookOpen, Mail, Phone, Video } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                 <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                HEC Python <span className="text-brand-400">Academy</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              La préparation idéale pour réussir vos examens HEC Lausanne. Des sessions intensives, structurées et orientées résultats.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">Cours</h3>
            <ul className="space-y-3">
              <li>
                <a href="#/cours/python" className="text-base text-slate-400 hover:text-white transition">
                  Programmation (Bachelor)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-400" />
                <a href="mailto:pythonhec@gmail.com" className="hover:text-white transition">pythonhec@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-400" />
                <span>+41 79 000 00 00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-base text-slate-500">
            &copy; {new Date().getFullYear()} HEC Python Academy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;