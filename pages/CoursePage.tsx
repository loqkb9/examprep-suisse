import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle, Calendar, Clock, Award,
  BookOpen, Calculator, CheckSquare, FileText,
  Database, GitMerge, BarChart, Code, Sparkles, Lock
} from 'lucide-react';
import { CourseId } from '../types';
import { COURSES } from '../constants';
import BookingForm from '../components/BookingForm';

interface CoursePageProps {
  courseId: CourseId;
}

const CoursePage: React.FC<CoursePageProps> = ({ courseId }) => {
  const course = COURSES[courseId];

  if (!course) {
    return <Navigate to="/" />;
  }

  const renderContentIcon = (courseId: CourseId, index: number) => {
    const iconProps = { className: "w-5 h-5" };
    const wrapperClassBase = "flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0 shadow-sm";
    
    // Python Icons
    if (courseId === CourseId.PYTHON) {
      const wrapperClass = `${wrapperClassBase} bg-blue-100 text-blue-600`;
      let Icon = CheckCircle;
      
      if (index === 0) Icon = BookOpen;
      else if (index === 1) Icon = Calculator;
      else if (index === 2) Icon = CheckSquare;
      else if (index === 3) Icon = FileText;
      else if (index === 4) Icon = Code;
      
      return (
        <div className={wrapperClass}>
          <Icon {...iconProps} size={20} />
        </div>
      );
    } 
    
    // SQL Icons
    if (courseId === CourseId.SQL) {
       const wrapperClass = `${wrapperClassBase} bg-indigo-100 text-indigo-600`;
       let Icon = CheckCircle;

       if (index === 0) Icon = Database;
       else if (index === 1) Icon = GitMerge;
       else if (index === 2) Icon = BarChart;
       else if (index === 3) Icon = Code;
       
       return (
        <div className={wrapperClass}>
          <Icon {...iconProps} size={20} />
        </div>
      );
    }

    return <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-brand-700 py-12 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-brand-200 hover:text-white transition mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
          </Link>
          <div className="flex flex-col gap-6 md:gap-8 items-start">
            <div className="flex-1 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg sm:text-xl text-brand-100 mb-8 max-w-2xl leading-relaxed">
                {course.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-white rounded-xl blur opacity-20 transition duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm font-bold shadow-sm">
                    <Award className="w-4 h-4 mr-2 text-brand-300" />
                    {course.level}
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-white rounded-xl blur opacity-20 transition duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm font-bold shadow-sm">
                    <Clock className="w-4 h-4 mr-2 text-brand-300" />
                    {course.duration.split('(')[0].trim()}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-white rounded-xl blur opacity-20 transition duration-300"></div>
                  <div className="relative inline-flex items-center px-5 py-2 rounded-xl bg-white text-brand-700 border border-brand-100 text-sm font-black shadow-lg">
                    80 CHF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">À propos du cours</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {course.description}
              </p>
              
              <h3 className="text-lg font-bold text-slate-900 mb-6">Ce que nous allons couvrir :</h3>
              <ul className="grid gap-6">
                {course.content.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    {renderContentIcon(course.id, idx)}
                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
               <h3 className="text-lg font-bold text-blue-900 mb-2">Pourquoi choisir ce format ?</h3>
               <p className="text-blue-800">
                 Le format intensif de 4 heures est conçu pour maximiser la rétention juste avant l’examen. 
                 En petit groupe, vous bénéficiez d’un accompagnement personnalisé par un ancien assistant du cours, ce qui vous permet d’obtenir des astuces concrètes et des tips pour réussir plus efficacement.
               </p>
            </div>

            <div className="bg-gradient-to-r from-brand-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-brand-200" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-100">Bonus Inclus</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Accès à l'Espace Membre Premium</h3>
                <p className="text-brand-100 mb-6 text-sm leading-relaxed">
                  En réservant cette session, vous débloquez automatiquement un accès à notre plateforme exclusive : quiz interactifs, fiches de révision PDF et exercices supplémentaires.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-3 w-3" /> Quiz interactifs
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-3 w-3" /> Fiches PDF
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-3 w-3" /> Support 24/7
                  </div>
                </div>
              </div>
              <Lock className="absolute right-[-20px] bottom-[-20px] h-40 w-40 text-white/5 rotate-12" />
            </div>
          </div>

          {/* Sidebar Booking */}
          <div className="lg:col-span-1">
            <div id="reservation" className="sticky top-24">
              <BookingForm preselectedCourse={course.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;