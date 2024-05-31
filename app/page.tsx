import { PrismaClient } from '@prisma/client';
import { Translation } from '@/lib/interfaces';
import HomePageClient from '@/components/pages/HomePageClient';

const prisma = new PrismaClient();

async function fetchTranslations(locale: string): Promise<Translation[]> {
  return prisma.translation.findMany({ where: { locale, category: 'home' } });
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const translations = await fetchTranslations(params.locale);
  const translationsMap = translations.reduce((acc: { [key: string]: string }, item: Translation) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return <HomePageClient translations={translationsMap} />;
}
