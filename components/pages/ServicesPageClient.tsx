"use client";

import { useLocale } from '@/context/LocaleContext';
import ServiceList from '@/components/lists/ServiceList';
import { getTranslation } from '@/lib/helpers';

const ServicesPageClient = () => {
  const { translations, services, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'title', 'services')}</h1>
      <p>{getTranslation(translations, 'description', 'services')}</p>
      <ServiceList services={services} />
    </div>
  );
};

export default ServicesPageClient;
