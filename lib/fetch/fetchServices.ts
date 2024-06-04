import { client } from '@/lib/sanity';
import Service from '@/lib/models/Service';

export const fetchServices = async (localeId: string): Promise<Service[]> => {
  const query = `*[_type == "service" && locale._ref == $localeId]{
    _id,
    title,
    slug,
    description,
    thumbnail,
    locale->,
    metaTitle,
    metaDescription
  }`;

  const results = await client.fetch(query, { localeId });
  return results.map((result: any) => new Service(result));
};
