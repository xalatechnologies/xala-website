import Link from 'next/link';
import { ApiResponse, Translation } from '@/lib/interfaces';

const fetchData = async (locale: string): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data?locale=${locale}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const NotFoundPage = async () => {
  const locale = typeof window !== 'undefined' ? navigator.language : 'en';
  const data = await fetchData(locale);

  const notFoundContent: { [key: string]: string } = data.notFound.reduce((acc: { [key: string]: string }, item: Translation) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <head>
        <title>{notFoundContent.title}</title>
      </head>
      <h1 className="text-6xl font-bold mb-4">{notFoundContent.title}</h1>
      <p className="text-2xl mb-8">{notFoundContent.message}</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">{notFoundContent.linkText}</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
