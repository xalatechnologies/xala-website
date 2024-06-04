import { client } from '@/lib/sanity';
import Blog from '@/lib/models/Blog';

export const fetchBlogs = async (localeId: string): Promise<Blog[]> => {
  const query = `*[_type == "blog" && locale._ref == $localeId]{
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
  return results.map((result: any) => new Blog(result));
};
