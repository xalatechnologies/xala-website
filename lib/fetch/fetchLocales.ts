import { client } from '@/lib/sanity';
import Locale from '@/lib/models/Locale';

export const fetchLocales = async (): Promise<Locale[]> => {
  const query = `*[_type == "locale"]{
    _id,
    title,
    code,
    icon
  }`;

  const results = await client.fetch(query);
  return results.map((result: any) => new Locale(result));
};
