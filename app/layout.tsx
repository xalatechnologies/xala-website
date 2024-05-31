import '@/styles/globals.scss';
import Header from '@/components/shared/Header';
import ClientFooter from '@/components/shared/ClientFooter';
import LocaleProviderWrapper from '@/components/shared/LocaleProviderWrapper';
import { MetaData } from '@/lib/interfaces';
import 'flag-icons/css/flag-icons.min.css';

export const metadata: MetaData = {
  title: 'Xala Technologies',
  description: 'Top-notch services in Office365, SharePoint, and custom web application development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <LocaleProviderWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <ClientFooter footerContent={''} />
        </LocaleProviderWrapper>
      </body>
    </html>
  );
}
