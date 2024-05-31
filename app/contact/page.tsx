import { ApiResponse, Translation } from '@/lib/interfaces';

const fetchData = async (locale: string): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data?locale=${locale}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const ContactPage = async () => {
  const locale = typeof window !== 'undefined' ? navigator.language : 'en';
  const data = await fetchData(locale);
  const metaTags: { [key: string]: string } = data.metaTags.filter(tag => tag.category === 'meta_contact').reduce((acc: { [key: string]: string }, item: Translation) => {
    acc[item.key] = item.value;
    return acc;
  }, {});
  const contactTranslations: { [key: string]: string } = data.contact.reduce((acc: { [key: string]: string }, item: Translation) => {
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
        <h1 className="text-4xl font-bold">{contactTranslations.title}</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">{contactTranslations.name}</label>
            <input className="w-full px-3 py-2 border" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">{contactTranslations.email}</label>
            <input className="w-full px-3 py-2 border" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">{contactTranslations.message}</label>
            <textarea className="w-full px-3 py-2 border" id="message" name="message" required></textarea>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white" type="submit">{contactTranslations.send}</button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
