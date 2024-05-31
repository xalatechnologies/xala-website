"use client";

import { useEffect, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

interface HomePageClientProps {
  translations: { [key: string]: string };
}

const HomePageClient: React.FC<HomePageClientProps> = ({ translations }) => {
  const { locale } = useLocale();
  const [displayTranslations, setDisplayTranslations] = useState<{ [key: string]: string }>(translations);

  useEffect(() => {
    setDisplayTranslations(translations);
  }, [translations]);

  return (
    <section className="text-center p-8">
      <h1 className="text-4xl font-bold">{displayTranslations.welcome}</h1>
      <p className="text-xl">{displayTranslations.description}</p>
    </section>
  );
};

export default HomePageClient;
