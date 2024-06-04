"use client";

import { useLocale } from '@/context/LocaleContext';
import { getTranslation } from '@/lib/helpers';
import ServiceList from '@/components/lists/ServiceList';
import BlogList from '@/components/lists/BlogList';
import NewsList from '@/components/lists/NewsList';
import CaseStudyList from '../lists/CaseStudyList';

const HomePageClient = () => {
  const { translations, services, blogs, news, caseStudies, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'welcome', 'Home')}</h1>
      <p>{getTranslation(translations, 'description', 'Home')}</p>
      
      <h2>{getTranslation(translations, 'title', 'Serice')}</h2>
     <ServiceList services={services} />

     <h2>{getTranslation(translations, 'title', 'Case-Study')}</h2>
     <CaseStudyList items={caseStudies} />

      <h2>{getTranslation(translations, 'title', 'Blog')}</h2>
      <BlogList blogs={blogs} />

      <h2>{getTranslation(translations, 'title', 'News')}</h2>
      <NewsList news={news} />
    </div>
  );
};

export default HomePageClient;
