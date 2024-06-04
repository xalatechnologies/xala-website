import { IPage } from '@/lib/interfaces';
import Locale from './Locale';

class Page implements IPage {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  metaTitle: string;
  metaDescription: string;
  locale: Locale;
  content: Array<{
    _key: string;
    _type: string;
    children: Array<{ _key: string; _type: string; marks: string[]; text: string }>;
    markDefs: Array<{ _key: string; _type: string }>;
    style: string;
  }>;

  constructor(data: IPage) {
    this._id = data._id;
    this.title = data.title;
    this.slug = data.slug;
    this.metaTitle = data.metaTitle;
    this.metaDescription = data.metaDescription;
    this.locale = new Locale(data.locale);
    this.content = data.content;
  }
}

export default Page;
