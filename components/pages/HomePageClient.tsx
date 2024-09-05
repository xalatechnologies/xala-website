"use client";

import { useLocale } from '@/context/LocaleContext';
import { getTranslation } from '@/lib/helpers';
import ServiceList from '@/components/lists/ServiceList';
import BlogList from '@/components/lists/BlogList';
import NewsList from '@/components/lists/NewsList';
import CaseStudyList from '../lists/CaseStudyList';
import { PortableText } from '@portabletext/react'
import BlockContentComponent from '../BlockContentComponent';

const HomePageClient = () => {
  const { translations, services, blogs, news, caseStudies, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BlockContentComponent blockContent={getTranslation(translations, 'welcome', 'Home')} />
      <h1>
      <BlockContentComponent blockContent={getTranslation(translations, 'unlock', 'Home')} />
        <BlockContentComponent className="it-solutions" blockContent={getTranslation(translations, 'it-solutions', 'Home')} />
      <BlockContentComponent blockContent={getTranslation(translations, 'for-your-business', 'Home')} />

      </h1>
      <BlockContentComponent blockContent={getTranslation(translations, 'description', 'Home')} />
      <BlockContentComponent blockContent={getTranslation(translations, 'title', 'Service')} />

      <ServiceList services={services} />

      <BlockContentComponent blockContent={getTranslation(translations, 'title', 'Case-Study')} />
      <CaseStudyList items={caseStudies} />

      <BlockContentComponent blockContent={getTranslation(translations, 'title', 'Blog')} />
      <BlogList blogs={blogs} />

      <BlockContentComponent blockContent={getTranslation(translations, 'title', 'News')} />
      <NewsList news={news} />
    </div>
  );
};

export default HomePageClient;
