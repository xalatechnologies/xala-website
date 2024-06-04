"use client";

import { useLocale } from '@/context/LocaleContext';
import { getTranslation } from '@/lib/helpers';
import CaseStudyList from '../lists/CaseStudyList';

const CaseStudyPageClient = () => {
  const { translations, caseStudies, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'title', 'Case-Study')}</h1>
      <p>{getTranslation(translations, 'description', 'Case-Study')}</p>
      <CaseStudyList items={caseStudies} />
    </div>
  );
};

export default CaseStudyPageClient;
