import { client } from '@/lib/sanity';
import Translation from '@/lib/models/Translation';

export const fetchTranslations = async (localeId: string): Promise<Translation[]> => {
  const query = `*[_type == "translation" && locale._ref == $localeId]{
    _id,
    key,
    value,
    locale->,
    category->
  }`;

  const results = await client.fetch(query, { localeId });
  return results.map((result: any) => new Translation(result));
};
