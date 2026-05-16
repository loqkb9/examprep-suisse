import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import FAQPage from './pages/FAQPage';
import PremiumLogin from './pages/PremiumLogin';
import PremiumDashboard from './pages/PremiumDashboard';
import PremiumCourseDetail from './pages/PremiumCourseDetail';
import PremiumLessonPage from './pages/PremiumLessonPage';
import PremiumExamPage from './pages/PremiumExamPage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';
import AIChatWidget from './components/AIChatWidget';
import { CourseId } from './types';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/premium/ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cours/python" element={<CoursePage courseId={CourseId.PYTHON} />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/cancel" element={<CancelPage />} />
              
              {/* Premium Routes */}
              <Route path="/premium/login" element={<PremiumLogin />} />
              <Route 
                path="/premium" 
                element={
                  <ProtectedRoute>
                    <PremiumDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/premium/examen" 
                element={
                  <ProtectedRoute>
                    <PremiumExamPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/premium/cours/:courseId" 
                element={
                  <ProtectedRoute>
                    <PremiumCourseDetail />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/premium/cours/:courseId/:lessonId" 
                element={
                  <ProtectedRoute>
                    <PremiumLessonPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <AIChatWidget />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
