"use client";

import { useLocale } from '@/context/LocaleContext';
import { getTranslation } from '@/lib/helpers';
import ServiceList from '@/components/lists/ServiceList';
import BlogList from '@/components/lists/BlogList';
import NewsList from '@/components/lists/NewsList';

const HomePageClient = () => {
  const { translations, services, blogs, news, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'welcome', 'home')}</h1>
      <p>{getTranslation(translations, 'description', 'home')}</p>
      
      <h2>{getTranslation(translations, 'title', 'services')}</h2>
     <ServiceList services={services} />

      <h2>{getTranslation(translations, 'title', 'blogs')}</h2>
      <BlogList blogs={blogs} />

      <h2>{getTranslation(translations, 'title', 'news')}</h2>
      <NewsList news={news} />
    </div>
  );
};

export default HomePageClient;
