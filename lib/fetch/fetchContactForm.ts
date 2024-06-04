import { client } from '@/lib/sanity';
import ContactForm from '@/lib/models/ContactForm';

export const fetchContactForm = async (localeId: string): Promise<ContactForm | null> => {
  const query = `*[_type == "contactForm" && locale._ref == $localeId]{
    _id,
    formTitle,
    formDescription,
    fields,
    locale->
  }[0]`;

  const result = await client.fetch(query, { localeId });
  return result ? new ContactForm(result) : null;
};
