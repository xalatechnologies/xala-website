import '@/styles/globals.scss';
import Header from '@/components/Header';
import ClientFooter from '@/components/ClientFooter';
import { Metadata } from 'next';
import { ApiResponse, Translation } from '@/lib/interfaces';

const fetchData = async (locale: string): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data?locale=${locale}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const metadata: Metadata = {
  title: 'Xala Technologies',
  description: 'Top-notch services in Office365, SharePoint, and custom web application development',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = typeof window !== 'undefined' ? navigator.language : 'en';
  const data = await fetchData(locale);
  const metaTags: { [key: string]: string } = data.metaTags.reduce((acc: { [key: string]: string }, item: Translation) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return (
    <html lang={locale}>
      <head>
        <meta name="description" content={metaTags.description} />
        <title>{metaTags.title}</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <ClientFooter footerContent={data.footer[0].value} />
      </body>
    </html>
  );
}
