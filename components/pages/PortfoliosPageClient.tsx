"use client";

import { useLocale } from '@/context/LocaleContext';
import PortfolioList from '@/components/lists/PortfolioList';
import { getTranslation } from '@/lib/helpers';

const PortfoliosPageClient = () => {
  const { translations, portfolios, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'title', 'portfolios')}</h1>
      <p>{getTranslation(translations, 'description', 'portfolios')}</p>
      <PortfolioList portfolios={portfolios} />
    </div>
  );
};

export default PortfoliosPageClient;
