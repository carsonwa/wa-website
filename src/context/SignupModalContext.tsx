'use client';

import React, { createContext, useContext, useState } from 'react';

type SignupProvider = 'email' | 'google' | 'facebook';

interface SignupModalContextType {
  isOpen: boolean;
  openModal: (provider?: SignupProvider, email?: string) => void;
  closeModal: () => void;
  initialProvider?: SignupProvider;
  initialEmail?: string;
}

const SignupModalContext = createContext<SignupModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function SignupModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProvider, setInitialProvider] = useState<SignupProvider>();
  const [initialEmail, setInitialEmail] = useState<string>();

  const openModal = (provider?: SignupProvider, email?: string) => {
    setInitialProvider(provider);
    setInitialEmail(email);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setInitialProvider(undefined);
    setInitialEmail(undefined);
  };

  return (
    <SignupModalContext.Provider value={{ isOpen, openModal, closeModal, initialProvider, initialEmail }}>
      {children}
    </SignupModalContext.Provider>
  );
}

export const useSignupModal = () => useContext(SignupModalContext); 