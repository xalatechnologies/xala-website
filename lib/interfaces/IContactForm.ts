import ILocale from './ILocale';

interface IField {
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
}

export default interface IContactForm {
  _id: string;
  formTitle: string;
  formDescription: string;
  fields: IField[];
  locale: ILocale;
}
