import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Xala Technologies - Top-notch Services in Office365, SharePoint, and Web Development</title>
        <meta name="description" content="We provide top-notch services in Office365, SharePoint, custom web application development, and software development consultancy." />
      </Head>
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold">{t('welcome')}</h1>
        <p className="mt-4">{t('description')}</p>
      </section>
    </>
  );
}
