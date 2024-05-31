"use client";

import { useLocale } from '@/context/LocaleContext';
import { getTranslation } from '@/lib/helpers';

const ContactPageClient = () => {
  const { translations, isLoading } = useLocale();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><div>Loading...</div></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{getTranslation(translations, 'title', 'contact')}</h1>
      <p>{getTranslation(translations, 'description', 'contact')}</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">{getTranslation(translations, 'form.name', 'contact')}</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{getTranslation(translations, 'form.email', 'contact')}</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">{getTranslation(translations, 'form.message', 'contact')}</label>
          <textarea id="message" name="message" className="mt-1 p-2 block w-full border border-gray-300 rounded-md"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">{getTranslation(translations, 'form.submit', 'contact')}</button>
      </form>
    </div>
  );
};

export default ContactPageClient;
