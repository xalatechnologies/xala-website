import { client } from '@/lib/sanity';
import News from '@/lib/models/News';

export const fetchNews = async (localeId: string): Promise<News[]> => {
  const query = `*[_type == "news" && locale._ref == $localeId]{
    _id,
    title,
    slug,
    content,
    thumbnail,
    technologies[]->,
    locale->,
    metaTitle,
    metaDescription
  }`;

  const results = await client.fetch(query, { localeId });
  return results.map((result: any) => new News(result));
};
