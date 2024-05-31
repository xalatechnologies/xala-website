import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { locale, type } = req.query;

  if (typeof locale !== 'string' || typeof type !== 'string') {
    return res.status(400).json({ error: 'Invalid query parameters' });
  }

  try {
    let data;

    switch (type) {
      case 'home':
        data = await prisma.translation.findMany({ where: { locale, category: 'home' } });
        break;
      case 'menu':
        data = await prisma.menu.findMany({ where: { locale }, orderBy: { position: 'asc' } });
        break;
      default:
        return res.status(400).json({ error: 'Invalid type parameter' });
    }

    if (!data) {
      return res.status(404).json({ error: 'Not Found' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
