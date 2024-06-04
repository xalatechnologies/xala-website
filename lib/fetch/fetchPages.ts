import { client } from '@/lib/sanity';
import Page from '@/lib/models/Page';

export const fetchPages = async (id: string): Promise<Page | null> => {
  const query = `*[_type == "page" && _id == $id]{
    _id,
    title,
    slug,
    metaTitle,
    metaDescription,
    locale->
    content
  }[0]`;

  const result = await client.fetch(query, { id });
  return result ? new Page(result) : null;
}