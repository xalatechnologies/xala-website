import '@styles/globals.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Xala Technologies',
  description: 'Top-notch services in Office365, SharePoint, and custom web application development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}