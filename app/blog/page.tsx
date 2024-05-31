import BlogList from '@/components/BlogList';
import { ApiResponse, Translation } from '@/lib/interfaces';

const fetchData = async (locale: string): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data?locale=${locale}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const BlogPage = async () => {
  const locale = typeof window !== 'undefined' ? navigator.language : 'en';
  const data = await fetchData(locale);
  const metaTags: { [key: string]: string } = data.metaTags.filter(tag => tag.category === 'meta_blog').reduce((acc: { [key: string]: string }, item: Translation) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return (
    <>
      <head>
        <meta name="description" content={metaTags.description} />
        <title>{metaTags.title}</title>
      </head>
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <BlogList blogs={data.blogs} />
      </section>
    </>
  );
};

export default BlogPage;
