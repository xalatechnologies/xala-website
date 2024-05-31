"use client"; // Add this at the top to mark this file as a client component

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en';
    setLocale(savedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
