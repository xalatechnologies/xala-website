"use client";

import { useLocale } from '@/context/LocaleContext';
import { getTranslation } from '@/lib/helpers';

const NotFoundPageClient = () => {
  const { translations, isLoading } = useLocale();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><div>Loading...</div></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{getTranslation(translations, 'title', 'not_found')}</h1>
      <p>{getTranslation(translations, 'description', 'not_found')}</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default NotFoundPageClient;
