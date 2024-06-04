import { client } from '@/lib/sanity';
import Category from '@/lib/models/Category';

export const fetchCategories = async (localeId: string): Promise<Category[]> => {
  const query = `*[_type == "category" && locale._ref == $localeId]{
    _id,
    title
  }`;

  const results = await client.fetch(query, { localeId });
  return results ? results.map((result: any) => new Category(result)) : [];
};
