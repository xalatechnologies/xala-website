import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { locale } = req.query;

  if (typeof locale !== 'string') {
    return res.status(400).json({ error: 'Invalid locale' });
  }

  try {
    const [services, blogs, news, portfolio, translations, menus, headerMenus] = await Promise.all([
      prisma.service.findMany({ where: { locale } }),
      prisma.blog.findMany({ where: { locale } }),
      prisma.news.findMany({ where: { locale } }),
      prisma.portfolio.findMany({ where: { locale } }),
      prisma.translation.findMany({ where: { locale } }),
      prisma.menu.findMany({ where: { locale } }),
      prisma.headerMenu.findMany({ where: { locale } }),
    ]);

    const metaTags = translations.filter((t) => t.category.startsWith('meta_'));
    const footer = translations.filter((t) => t.category === 'footer');
    const notFound = translations.filter((t) => t.category === 'not_found');
    const contact = translations.filter((t) => t.category === 'contact');

    if (!services || !blogs || !news || !portfolio || !metaTags || !footer || !notFound || !contact || !menus || !headerMenus) {
      return res.status(404).json({ error: 'Not Found' });
    }

    res.status(200).json({
      services,
      blogs,
      news,
      portfolio,
      metaTags,
      footer,
      notFound,
      contact,
      menus,
      headerMenus,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}