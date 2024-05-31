"use client"; // Mark this as a client component

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  isLoading: boolean; // Add loading state
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('en');
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize loading state

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en';
    console.log('Initial Locale:', savedLocale); // Debugging line
    setLocale(savedLocale);
    setIsLoading(false); // Set loading to false once locale is set
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    console.log('Locale Changed:', newLocale); // Debugging line
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale, isLoading }}>
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
