import ILocale from './ILocale';
import ICategory from './ICategory';

export default interface ITranslation {
  _id: string;
  key: string;
  value: string;
  locale: ILocale;
  category: ICategory;
}
