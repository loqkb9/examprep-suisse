
import React, { useState, useEffect } from 'react';
import { CourseId } from '../types';
import { AVAILABLE_DATES, COURSES } from '../constants';
import { CheckCircle, ChevronDown, Loader2, CreditCard } from 'lucide-react';
import { sendBookingConfirmation } from '../services/emailService';
import { createCheckoutSession } from '../src/lib/stripe';

interface BookingFormProps {
  preselectedCourse?: CourseId;
}

const BookingForm: React.FC<BookingFormProps> = ({ preselectedCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: preselectedCourse || CourseId.PYTHON,
    date: AVAILABLE_DATES[0],
    paymentMethod: 'Stripe',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for the email service
    // Get the human-readable title for the course
    const courseTitle = COURSES[formData.course]?.title || formData.course;

    const bookingPayload = {
      name: formData.name,
      email: formData.email,
      courseId: formData.course,
      courseTitle: courseTitle,
      date: formData.date,
      paymentMethod: formData.paymentMethod,
    };

    try {
      if (formData.paymentMethod === 'Stripe') {
        const priceId = import.meta.env.VITE_STRIPE_PRICE_ID;
        if (!priceId) {
          alert("La configuration de paiement Stripe est manquante (VITE_STRIPE_PRICE_ID).");
          setIsSubmitting(false);
          return;
        }
        
        // Pass details to the backend for metadata/email
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priceId,
            email: formData.email,
            name: formData.name,
            courseTitle: courseTitle,
            date: formData.date,
            successUrl: window.location.origin + '/#/success',
            cancelUrl: window.location.origin + '/#/cancel',
          }),
        });

        const session = await response.json();
        if (session.url) {
          if (window.top) {
            window.top.location.href = session.url;
          } else {
            window.location.href = session.url;
          }
        } else {
          throw new Error(session.error || 'Failed to create checkout session');
        }
        return;
      }

      // Call the service which calls the backend API for other methods
      const success = await sendBookingConfirmation(bookingPayload);
      
      if (success) {
        setIsSuccess(true);
      } else {
         alert("Une erreur est survenue lors de l’envoi de l’email de confirmation.");
      }
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Une erreur est survenue lors de l’envoi de l’email de confirmation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-sm max-w-lg mx-auto animate-in fade-in zoom-in duration-300">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl leading-6 font-bold text-slate-900 mb-2">
          Réservation confirmée !
        </h3>
        <p className="mt-4 text-base text-slate-600">
          Merci <strong>{formData.name}</strong>.
        </p>
        <div className="mt-4 bg-white p-4 rounded-lg border border-green-100 text-left text-sm text-slate-600 shadow-sm">
           <p className="mb-2">📧 Un email vient d'être envoyé à <strong>{formData.email}</strong>.</p>
           <p>Il contient les instructions pour le paiement via <strong>{formData.paymentMethod}</strong> ainsi que le récapitulatif de votre session.</p>
        </div>
        
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none transition-colors"
        >
          Effectuer une autre réservation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 max-w-lg mx-auto">
      <div className="bg-brand-600 py-7 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <CreditCard className="w-24 h-24 rotate-12" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <span className="bg-white/20 p-2 rounded-xl">
             <CreditCard className="w-6 h-6" />
          </span>
          Réserver ma place
        </h3>
        <p className="text-brand-100 text-xs sm:text-sm mt-3 font-medium">
          Règlement sécurisé (Stripe, Twint, Revolut)
        </p>
      </div>

      <div className="p-6 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom + Email sur la même ligne */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-brand-500 focus:bg-white focus:ring-brand-500 text-base sm:text-sm px-4 py-3 sm:py-2.5 transition-all"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-slate-700 mb-1.5"
              >
                Email étudiant
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-brand-500 focus:bg-white focus:ring-brand-500 text-base sm:text-sm px-4 py-3 sm:py-2.5 transition-all"
                placeholder="jean.dupont@unil.ch"
              />
            </div>
          </div>

          {/* Choix du cours */}
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Choix du cours
            </label>
            <div className="relative">
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-brand-500 focus:bg-white focus:ring-brand-500 text-base sm:text-sm px-4 py-3 sm:py-2.5 pr-10 transition-all"
              >
                <option value={CourseId.PYTHON}>Programmation (Exam Prep)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Date de session */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-bold text-slate-700 mb-1.5"
            >
              Date de session
            </label>
            <div className="relative">
              <select
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-brand-500 focus:bg-white focus:ring-brand-500 text-base sm:text-sm px-4 py-3 sm:py-2.5 pr-10 transition-all"
              >
                {AVAILABLE_DATES.map((date, idx) => (
                  <option key={idx} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Moyen de paiement */}
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-bold text-slate-700 mb-1.5"
            >
              Moyen de paiement
            </label>
            <div className="relative">
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-brand-500 focus:bg-white focus:ring-brand-500 text-base sm:text-sm px-4 py-3 sm:py-2.5 pr-10 transition-all"
              >
                <option value="Stripe">Carte Bancaire (Stripe)</option>
                <option value="Twint">Twint</option>
                <option value="Revolut">Revolut</option>
                <option value="Virement">Virement bancaire</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            </div>
          </div>


          {/* Bouton + texte bas */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-xl shadow-brand-200 text-base font-black uppercase tracking-widest text-white ${
              isSubmitting
                ? 'bg-brand-400 cursor-not-allowed'
                : 'bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Traitement en cours...
              </>
            ) : (
              formData.paymentMethod === 'Stripe' ? (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payer et réserver
                </>
              ) : 'Confirmer la réservation'
            )}
          </button>

          <p className="text-xs text-center text-slate-400 mt-3">
            {formData.paymentMethod === 'Stripe' 
              ? "Vous allez être redirigé vers la page de paiement sécurisée de Stripe."
              : "Après avoir cliqué sur “Confirmer la réservation”, vous recevrez toutes les informations de paiement directement sur votre adresse email."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
