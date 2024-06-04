import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

async function main() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '88raldx3',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
    token: 'sk6MgnFKfeO6t9UbabkQz9jwfKGLsWCdFP6mAgHA5uaowmIzQp511ejZubpfGmdNGq8pWF9WIRR52WQoqF2MMCB8UuKaeLQ33X1PpTdf4LSSqzfW5QeL8Syfu23gkz5h2g9v4bZDofOaUNzsdLXgIl2QAB7Aa6m7XdWvG26jE6rB9dWwYXpJ',
  });

  // Fetch all document IDs to delete them
  const docs = await client.fetch(`*[_type in ["translation", "service", "blog", "caseStudy", "news", "menu", "contactForm", "header", "footer"]] { _id }`);
  
  // Delete all documents
  for (const doc of docs) {
    await client.delete(doc._id);
  }

  // Fetch locale IDs
  const locales = await client.fetch(`*[_type == "locale"]{_id, code}`);
  const localeMap = locales.reduce((acc, locale) => {
    acc[locale.code] = {
      _type: 'reference',
      _ref: locale._id,
    };
    return acc;
  }, {});

  // Define the content to seed
  const translations = [
    { locale: localeMap['en'], key: 'welcome', value: 'Welcome to Xala Technologies', category: 'home' },
    { locale: localeMap['no'], key: 'welcome', value: 'Velkommen til Xala Technologies', category: 'home' },
    { locale: localeMap['en'], key: 'description', value: 'We provide top-notch services in Office365, SharePoint, custom web application development, and software development consultancy.', category: 'home' },
    { locale: localeMap['no'], key: 'description', value: 'Vi tilbyr førsteklasses tjenester innen Office365, SharePoint, tilpasset webapplikasjonsutvikling og programvareutviklingskonsultasjon.', category: 'home' },
    { locale: localeMap['en'], key: 'title', value: 'Xala Technologies - Top-notch Services', category: 'meta_home' },
    { locale: localeMap['no'], key: 'title', value: 'Xala Technologies - Førsteklasses Tjenester', category: 'meta_home' },
    { locale: localeMap['en'], key: 'description', value: 'We provide top-notch services in Office365, SharePoint, custom web application development, and software development consultancy.', category: 'meta_home' },
    { locale: localeMap['no'], key: 'description', value: 'Vi tilbyr førsteklasses tjenester innen Office365, SharePoint, tilpasset webapplikasjonsutvikling og programvareutviklingskonsultasjon.', category: 'meta_home' },
    { locale: localeMap['en'], key: 'content', value: '&copy; 2024 Xala Technologies. All rights reserved.', category: 'footer' },
    { locale: localeMap['no'], key: 'content', value: '&copy; 2024 Xala Technologies. Alle rettigheter reservert.', category: 'footer' },
    { locale: localeMap['en'], key: 'title', value: '404', category: 'not_found' },
    { locale: localeMap['no'], key: 'title', value: '404', category: 'not_found' },
    { locale: localeMap['en'], key: 'message', value: 'Page Not Found', category: 'not_found' },
    { locale: localeMap['no'], key: 'message', value: 'Siden ble ikke funnet', category: 'not_found' },
    { locale: localeMap['en'], key: 'linkText', value: 'Go back home', category: 'not_found' },
    { locale: localeMap['no'], key: 'linkText', value: 'Gå tilbake til forsiden', category: 'not_found' },
    { locale: localeMap['en'], key: 'title', value: 'Contact Us', category: 'contact' },
    { locale: localeMap['no'], key: 'title', value: 'Kontakt Oss', category: 'contact' },
    { locale: localeMap['en'], key: 'name', value: 'Name', category: 'contact' },
    { locale: localeMap['no'], key: 'name', value: 'Navn', category: 'contact' },
    { locale: localeMap['en'], key: 'email', value: 'Email', category: 'contact' },
    { locale: localeMap['no'], key: 'email', value: 'E-post', category: 'contact' },
    { locale: localeMap['en'], key: 'message', value: 'Message', category: 'contact' },
    { locale: localeMap['no'], key: 'message', value: 'Melding', category: 'contact' },
    { locale: localeMap['en'], key: 'send', value: 'Send', category: 'contact' },
    { locale: localeMap['no'], key: 'send', value: 'Send', category: 'contact' },
    { locale: localeMap['en'], key: 'title', value: 'Our Services', category: 'services' },
    { locale: localeMap['no'], key: 'title', value: 'Vår tjenester', category: 'services' },
    { locale: localeMap['en'], key: 'title', value: 'News', category: 'news' },
    { locale: localeMap['no'], key: 'title', value: 'Nyheter', category: 'news' },
    { locale: localeMap['en'], key: 'title', value: 'Blog', category: 'blogs' },
    { locale: localeMap['no'], key: 'title', value: 'Blogg', category: 'blogs' },
    { locale: localeMap['en'], key: 'title', value: 'Case Study', category: 'caseStudies' },
    { locale: localeMap['no'], key: 'title', value: 'Referanser', category: 'caseStudies' },
  ];

  const services = [
    { title: 'Office365 Integration', description: 'We provide seamless Office365 integration for your business.', locale: localeMap['en'] },
    { title: 'Integrasjon av Office365', description: 'Vi tilbyr sømløs Office365-integrasjon for din bedrift.', locale: localeMap['no'] },
  ];

  const blogs = [
    { title: 'Understanding Office365', content: 'Full content for Office365...', locale: localeMap['en'], metaTitle: 'Understanding Office365', metaDescription: 'An introduction to Office365 and its features.' },
    { title: 'Forståelse av Office365', content: 'Fullt innhold for Office365...', locale: localeMap['no'], metaTitle: 'Forståelse av Office365', metaDescription: 'En introduksjon til Office365 og dets funksjoner.' },
  ];

  const caseStudies = [
    { title: 'Project Alpha', description: 'A detailed case study of Project Alpha.', locale: localeMap['en'], metaTitle: 'Project Alpha', metaDescription: 'A detailed case study of Project Alpha.' },
    { title: 'Prosjekt Alpha', description: 'En detaljert case-studie av Prosjekt Alpha.', locale: localeMap['no'], metaTitle: 'Prosjekt Alpha', metaDescription: 'En detaljert case-studie av Prosjekt Alpha.' },
  ];

  const news = [
    { title: 'New Office365 Features', content: 'Details about the latest Office365 features...', locale: localeMap['en'], metaTitle: 'New Office365 Features', metaDescription: 'Details about the latest Office365 features...', date: new Date() },
    { title: 'Nye Office365-funksjoner', content: 'Detaljer om de nyeste Office365-funksjonene...', locale: localeMap['no'], metaTitle: 'Nye Office365-funksjoner', metaDescription: 'Detaljer om de nyeste Office365-funksjonene...', date: new Date() },
  ];

  const menus = [
    { label: 'Home', url: '/', locale: localeMap['en'], order: 1 },
    { label: 'Hjem', url: '/', locale: localeMap['no'], order: 1 },
    { label: 'Services', url: '/services', locale: localeMap['en'], order: 2 },
    { label: 'Tjenester', url: '/services', locale: localeMap['no'], order: 2 },
    { label: 'Blog', url: '/blog', locale: localeMap['en'], order: 3 },
    { label: 'Blogg', url: '/blog', locale: localeMap['no'], order: 3 },
    { label: 'News', url: '/news', locale: localeMap['en'], order: 4 },
    { label: 'Nyheter', url: '/news', locale: localeMap['no'], order: 4 },
    { label: 'Case Study', url: '/case-study', locale: localeMap['en'], order: 5 },
    { label: 'Referanser', url: '/case-study', locale: localeMap['no'], order: 5 },
    { label: 'Contact', url: '/contact', locale: localeMap['en'], order: 6 },
    { label: 'Kontakt', url: '/contact', locale: localeMap['no'], order: 6 },
  ];

  const contactForms = [
    {
      formTitle: 'Contact Us',
      formDescription: 'Please fill out the form below to contact us.',
      fields: [
        { label: 'Name', type: 'text', required: true },
        { label: 'Email', type: 'email', required: true },
        { label: 'Message', type: 'textarea', required: true },
      ],
      locale: localeMap['en'],
    },
    {
      formTitle: 'Kontakt Oss',
      formDescription: 'Vennligst fyll ut skjemaet nedenfor for å kontakte oss.',
      fields: [
        { label: 'Navn', type: 'text', required: true },
        { label: 'E-post', type: 'email', required: true },
        { label: 'Melding', type: 'textarea', required: true },
      ],
      locale: localeMap['no'],
    },
  ];

  const headers = [
    { title: 'Xala Technologies', locale: localeMap['en'] },
    { title: 'Xala Technologies', locale: localeMap['no'] },
  ];

  const footers = [
    { text: '&copy; 2024 Xala Technologies. All rights reserved.', locale: localeMap['en'] },
    { text: '&copy; 2024 Xala Technologies. Alle rettigheter reservert.', locale: localeMap['no'] },
  ];

  // Batch create documents
  const createDocuments = async (documents, type) => {
    for (const doc of documents) {
      await client.create({
        _type: type,
        ...doc,
      });
    }
  };

  await createDocuments(translations, 'translation');
  await createDocuments(services, 'service');
  await createDocuments(blogs, 'blog');
  await createDocuments(caseStudies, 'caseStudy');
  await createDocuments(news, 'news');
  await createDocuments(menus, 'menu');
  await createDocuments(contactForms, 'contactForm');
  await createDocuments(headers, 'header');
  await createDocuments(footers, 'footer');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});