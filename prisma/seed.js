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
      { locale: 'en', label: 'Home', url: '/en', position: 1 },
      { locale: 'en', label: 'Services', url: '/en/services', position: 2 },
      { locale: 'en', label: 'Blog', url: '/en/blog', position: 3 },
      { locale: 'en', label: 'News', url: '/en/news', position: 4 },
      { locale: 'en', label: 'Portfolio', url: '/en/portfolio', position: 5 },
      { locale: 'en', label: 'Contact', url: '/en/contact', position: 6 },
      { locale: 'no', label: 'Hjem', url: '/no', position: 1 },
      { locale: 'no', label: 'Tjenester', url: '/no/services', position: 2 },
      { locale: 'no', label: 'Blogg', url: '/no/blog', position: 3 },
      { locale: 'no', label: 'Nyheter', url: '/no/news', position: 4 },
      { locale: 'no', label: 'Portefølje', url: '/no/portfolio', position: 5 },
      { locale: 'no', label: 'Kontakt', url: '/no/contact', position: 6 },
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