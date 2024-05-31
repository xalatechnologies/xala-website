import prisma from './prisma';
import { Translation, Service, Blog, Portfolio, MetaTag, News, Footer, NotFoundPageContent } from './interfaces';

export async function getTranslations(locale: string): Promise<Record<string, string>> {
  const translations = await prisma.translation.findMany({
    where: { locale },
  });
  return translations.reduce((acc: { [x: string]: any; }, { key, value }: any) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
}

export async function getServices(locale: string): Promise<Service[]> {
  return await prisma.service.findMany({
    where: { locale },
  });
}

export async function getBlogs(locale: string): Promise<Blog[]> {
  return await prisma.blog.findMany({
    where: { locale },
  });
}

export async function getPortfolios(locale: string): Promise<Portfolio[]> {
  return await prisma.portfolio.findMany({
    where: { locale },
  });
}

export async function getMetaTags(page: string, locale: string): Promise<MetaTag | null> {
  return await prisma.metaTag.findFirst({
    where: { page, locale },
  });
}

export async function getNews(locale: string): Promise<News[]> {
  return await prisma.news.findMany({
    where: { locale },
    orderBy: {
      date: 'desc',
    },
  });
}

export async function getFooter(locale: string): Promise<Footer | null> {
  return await prisma.footer.findFirst({
    where: { locale },
  });
}

export async function getNotFoundPageContent(locale: string): Promise<NotFoundPageContent | null> {
  return await prisma.notFoundPageContent.findFirst({
    where: { locale },
  });
}