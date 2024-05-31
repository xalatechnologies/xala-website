"use client";

import { useLocale } from '@/context/LocaleContext';
import NewsList from '@/components/lists/NewsList';
import { getTranslation } from '@/lib/helpers';

const NewsPageClient = () => {
  const { translations, news, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'title', 'news')}</h1>
      <p>{getTranslation(translations, 'description', 'news')}</p>
      <NewsList news={news} />
    </div>
  );
};

export default NewsPageClient;
