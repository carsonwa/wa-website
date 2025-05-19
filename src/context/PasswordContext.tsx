'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PasswordContextType {
  isAuthenticated: boolean;
  checkPassword: (password: string) => boolean;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export function PasswordProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const checkPassword = (password: string) => {
    // You can change this password to whatever you want
    const correctPassword = 'wa2025';
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  return (
    <PasswordContext.Provider value={{ isAuthenticated, checkPassword }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
} 