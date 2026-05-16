import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Video } from 'lucide-react';
import { CourseData, CourseId } from '../types';

interface CourseCardProps {
  course: CourseData;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const isPython = course.id === CourseId.PYTHON;

  return (
    <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-300 transition-all duration-300 group">
      <div className="h-48 w-full overflow-hidden relative">
        <img 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          src={course.image} 
          alt={course.title} 
        />
        <div className="absolute top-4 right-4 z-10 scale-90 sm:scale-100 transition-all group-hover:scale-105 group-hover:-translate-y-1">
           <div className="relative">
             <div className="absolute inset-0 bg-brand-600 rounded-xl blur-md opacity-20 transition duration-300"></div>
             <div className="relative bg-white text-brand-700 px-4 py-2.5 rounded-xl text-xl font-black shadow-xl flex items-baseline gap-1 border border-brand-100">
               80<span className="text-[10px] font-bold uppercase tracking-widest text-brand-500">CHF</span>
             </div>
           </div>
        </div>
      </div>
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${isPython ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
              {course.level}
            </span>
            <div className="flex items-center text-[10px] font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100">
              <Clock className="w-3 h-3 mr-1" />
              4H INTENSIF
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors duration-300">{course.title}</h3>
          <p className="text-slate-500 text-sm mb-6 line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {course.description}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center text-xs font-semibold text-slate-600 bg-slate-50 p-2 rounded-xl">
              <Clock className="w-3.5 h-3.5 mr-2 text-brand-500" />
              {course.duration.split('(')[0].trim()}
            </div>
            <div className="flex items-center text-xs font-semibold text-slate-600 bg-slate-50 p-2 rounded-xl">
              <Video className="w-3.5 h-3.5 mr-2 text-brand-500" />
              Teams Live
            </div>
          </div>
        </div>

        <Link 
          to={`/cours/${course.id}`} 
          className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 sm:py-3 border-2 border-brand-600 text-sm font-black uppercase tracking-widest rounded-xl text-brand-600 bg-white hover:bg-brand-600 hover:text-white hover:shadow-lg hover:shadow-brand-100 transition-all duration-300 active:scale-[0.98]"
        >
          Voir le programme
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;