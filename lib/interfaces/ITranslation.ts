import ILocale from './ILocale';
import ICategory from './ICategory';
import { PortableTextBlock } from '@portabletext/react';

export default interface ITranslation {
  _id: string;
  key: string;
  value: PortableTextBlock[] | string;
  locale: ILocale;
  category: ICategory;
}
