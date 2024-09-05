import { ITranslation } from '@/lib/interfaces';
import Locale from './Locale';
import Category from './Category';
import { PortableTextBlock } from '@portabletext/react';

class Translation implements ITranslation {
  _id: string;
  key: string;
  value: PortableTextBlock[] | string;
  locale: Locale;
  category: Category;

  constructor(data: ITranslation) {
    this._id = data._id;
    this.key = data.key;
    this.value = data.value;
    this.locale = new Locale(data.locale);
    this.category = new Category(data.category);
  }
}

export default Translation;
