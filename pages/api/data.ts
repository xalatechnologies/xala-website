import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { locale } = req.query;

  if (typeof locale !== 'string') {
    return res.status(400).json({ error: 'Invalid query parameters' });
  }

  try {
    const translations = await prisma.translation.findMany({ where: { locale } });
    const services = await prisma.service.findMany({ where: { locale } });
    const blogs = await prisma.blog.findMany({ where: { locale } });
    const portfolios = await prisma.portfolio.findMany({ where: { locale } });
    const news = await prisma.news.findMany({ where: { locale } });
    const menu = await prisma.menu.findMany({ where: { locale }, orderBy: { position: 'asc' } });

    res.status(200).json({ translations, services, blogs, portfolios, news, menu });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
