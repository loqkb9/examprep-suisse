import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isPremium } = useAuth();
  const location = useLocation();

  if (!isPremium) {
    return <Navigate to="/premium/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
