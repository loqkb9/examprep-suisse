import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isPremium: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem('isPremium') === 'true';
  });

  const login = (password: string) => {
    // Mot de passe temporaire pour la démo, à changer plus tard
    if (password === 'HEC2026') {
      setIsPremium(true);
      localStorage.setItem('isPremium', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsPremium(false);
    localStorage.removeItem('isPremium');
  };

  return (
    <AuthContext.Provider value={{ isPremium, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
