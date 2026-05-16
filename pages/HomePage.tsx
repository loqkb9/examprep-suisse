import React from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import InfoSection from '../components/InfoSection';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import PremiumPreview from '../components/PremiumPreview';
import { COURSES } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-sm text-brand-600 font-black tracking-[0.2em] uppercase mb-3">Nos Programmes</h2>
          <p className="text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Choisissez votre session <br className="hidden sm:block" /> de révision
          </p>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-500 mx-auto leading-relaxed">
            Des cours ciblés et intensifs pour maximiser votre réussite aux examens HEC.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-md w-full px-2 sm:px-0">
            {Object.values(COURSES).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-16 sm:py-20 border-y border-slate-100">
        <div id="reservation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Prêt à réussir ?</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-lg mx-auto">
              Réservez votre place en moins de 2 minutes. Les sessions sont limitées pour garantir votre apprentissage.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>

      <InfoSection />

      <PremiumPreview />

      <Testimonials />
    </div>
  );
};

export default HomePage;