"use client"; // Mark this as a client component

import { LocaleProvider } from '@/context/LocaleContext';

const LocaleProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  );
};

export default LocaleProviderWrapper;
