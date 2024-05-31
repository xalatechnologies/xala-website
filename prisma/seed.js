import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.translation.createMany({
    data: [
      // Home Page
      { locale: 'en', key: 'welcome', value: 'Welcome to Xala Technologies', category: 'home' },
      { locale: 'no', key: 'welcome', value: 'Velkommen til Xala Technologies', category: 'home' },
      { locale: 'en', key: 'description', value: 'We provide top-notch services in Office365, SharePoint, custom web application development, and software development consultancy.', category: 'home' },
      { locale: 'no', key: 'description', value: 'Vi tilbyr førsteklasses tjenester innen Office365, SharePoint, tilpasset webapplikasjonsutvikling og programvareutviklingskonsultasjon.', category: 'home' },

      // Meta Tags
      { locale: 'en', key: 'title', value: 'Xala Technologies - Top-notch Services', category: 'meta_home' },
      { locale: 'no', key: 'title', value: 'Xala Technologies - Førsteklasses Tjenester', category: 'meta_home' },
      { locale: 'en', key: 'description', value: 'We provide top-notch services in Office365, SharePoint, custom web application development, and software development consultancy.', category: 'meta_home' },
      { locale: 'no', key: 'description', value: 'Vi tilbyr førsteklasses tjenester innen Office365, SharePoint, tilpasset webapplikasjonsutvikling og programvareutviklingskonsultasjon.', category: 'meta_home' },

      // Footer
      { locale: 'en', key: 'content', value: '&copy; 2024 Xala Technologies. All rights reserved.', category: 'footer' },
      { locale: 'no', key: 'content', value: '&copy; 2024 Xala Technologies. Alle rettigheter reservert.', category: 'footer' },

      // 404 Page
      { locale: 'en', key: 'title', value: '404', category: 'not_found' },
      { locale: 'no', key: 'title', value: '404', category: 'not_found' },
      { locale: 'en', key: 'message', value: 'Page Not Found', category: 'not_found' },
      { locale: 'no', key: 'message', value: 'Siden ble ikke funnet', category: 'not_found' },
      { locale: 'en', key: 'linkText', value: 'Go back home', category: 'not_found' },
      { locale: 'no', key: 'linkText', value: 'Gå tilbake til forsiden', category: 'not_found' },

      // Contact Page
      { locale: 'en', key: 'title', value: 'Contact Us', category: 'contact' },
      { locale: 'no', key: 'title', value: 'Kontakt Oss', category: 'contact' },
      { locale: 'en', key: 'name', value: 'Name', category: 'contact' },
      { locale: 'no', key: 'name', value: 'Navn', category: 'contact' },
      { locale: 'en', key: 'email', value: 'Email', category: 'contact' },
      { locale: 'no', key: 'email', value: 'E-post', category: 'contact' },
      { locale: 'en', key: 'message', value: 'Message', category: 'contact' },
      { locale: 'no', key: 'message', value: 'Melding', category: 'contact' },
      { locale: 'en', key: 'send', value: 'Send', category: 'contact' },
      { locale: 'no', key: 'send', value: 'Send', category: 'contact' },
      
      // Services
      { locale: 'en', key: 'title', value: 'Our Services', category: 'services' },
      { locale: 'no', key: 'title', value: 'Vår tjenester', category: 'services' },

      // News
      { locale: 'en', key: 'title', value: 'News', category: 'news' },
      { locale: 'no', key: 'title', value: 'Nyheter', category: 'news' },

      // Blogs
      { locale: 'en', key: 'title', value: 'Blog', category: 'blogs' },
      { locale: 'no', key: 'title', value: 'Blogg', category: 'blogs' },

      // Portfolio
      { locale: 'en', key: 'title', value: 'Portfolio', category: 'portfolio' },
      { locale: 'no', key: 'title', value: 'Referanser', category: 'portfolio' },

      // Add more translations as needed
    ],
  });

  await prisma.service.createMany({
    data: [
      { title: 'Office365 Integration', description: 'We provide seamless Office365 integration for your business.', locale: 'en' },
      { title: 'Integrasjon av Office365', description: 'Vi tilbyr sømløs Office365-integrasjon for din bedrift.', locale: 'no' },
      // Add more services as needed
    ],
  });

  await prisma.blog.createMany({
    data: [
      { title: 'Understanding Office365', excerpt: 'An introduction to Office365 and its features.', content: 'Full content for Office365...', locale: 'en' },
      { title: 'Forståelse av Office365', excerpt: 'En introduksjon til Office365 og dets funksjoner.', content: 'Fullt innhold for Office365...', locale: 'no' },
      // Add more blog posts as needed
    ],
  });

  await prisma.portfolio.createMany({
    data: [
      { title: 'Project Alpha', description: 'A detailed case study of Project Alpha.', locale: 'en' },
      { title: 'Prosjekt Alpha', description: 'En detaljert case-studie av Prosjekt Alpha.', locale: 'no' },
      // Add more portfolio items as needed
    ],
  });

  await prisma.news.createMany({
    data: [
      { title: 'New Office365 Features', content: 'Details about the latest Office365 features...', locale: 'en', date: new Date() },
      { title: 'Nye Office365-funksjoner', content: 'Detaljer om de nyeste Office365-funksjonene...', locale: 'no', date: new Date() },
      // Add more news items as needed
    ],
  });

  await prisma.menu.createMany({
    data: [
      { key: 'home', locale: 'en', label: 'Home', url: '/', position: 1 },
      { key: 'home', locale: 'no', label: 'Hjem', url: '/', position: 1 },
      { key: 'services', locale: 'en', label: 'Services', url: '/services', position: 2 },
      { key: 'services', locale: 'no', label: 'Tjenester', url: '/services', position: 2 },
      { key: 'blog', locale: 'en', label: 'Blog', url: '/blog', position: 3 },
      { key: 'blog', locale: 'no', label: 'Blogg', url: '/blog', position: 3 },
      { key: 'news', locale: 'en', label: 'News', url: '/news', position: 4 },
      { key: 'news', locale: 'no', label: 'Nyheter', url: '/news', position: 4 },
      { key: 'portfolio', locale: 'en', label: 'Portfolio', url: '/portfolio', position: 5 },
      { key: 'portfolio', locale: 'no', label: 'Portefølje', url: '/portfolio', position: 5 },
      { key: 'contact', locale: 'en', label: 'Contact', url: '/contact', position: 6 },
      { key: 'contact', locale: 'no', label: 'Kontakt', url: '/contact', position: 6 },
    ],
  });

  await prisma.headerMenu.createMany({
    data: [
      { key: 'home', locale: 'en', label: 'Home', url: '/', position: 1 },
      { key: 'home', locale: 'no', label: 'Hjem', url: '/', position: 1 },
      { key: 'services', locale: 'en', label: 'Services', url: '/services', position: 2 },
      { key: 'services', locale: 'no', label: 'Tjenester', url: '/services', position: 2 },
      { key: 'blog', locale: 'en', label: 'Blog', url: '/blog', position: 3 },
      { key: 'blog', locale: 'no', label: 'Blogg', url: '/blog', position: 3 },
      { key: 'news', locale: 'en', label: 'News', url: '/news', position: 4 },
      { key: 'news', locale: 'no', label: 'Nyheter', url: '/news', position: 4 },
      { key: 'portfolio', locale: 'en', label: 'Portfolio', url: '/portfolio', position: 5 },
      { key: 'portfolio', locale: 'no', label: 'Portefølje', url: '/portfolio', position: 5 },
      { key: 'contact', locale: 'en', label: 'Contact', url: '/contact', position: 6 },
      { key: 'contact', locale: 'no', label: 'Kontakt', url: '/contact', position: 6 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });