import { client } from '@/lib/sanity';
import Menu from '@/lib/models/Menu';

export const fetchMenus = async (localeId: string): Promise<Menu[]> => {
  const query = `*[_type == "menu" && locale._ref == $localeId]{
    _id,
    label,
    url,
    locale->,
    order,
    icon
  }`;

  const results = await client.fetch(query, { localeId });
  return results.map((result: any) => new Menu(result));
};
