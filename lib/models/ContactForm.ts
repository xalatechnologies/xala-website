import { IContactForm } from '@/lib/interfaces';
import Locale from './Locale';

class ContactForm implements IContactForm {
  _id: string;
  formTitle: string;
  formDescription: string;
  fields: Array<{ label: string; type: 'text' | 'email' | 'textarea'; required: boolean }>;
  locale: Locale;

  constructor(data: IContactForm) {
    this._id = data._id;
    this.formTitle = data.formTitle;
    this.formDescription = data.formDescription;
    this.fields = data.fields;
    this.locale = new Locale(data.locale);
  }
}

export default ContactForm;
