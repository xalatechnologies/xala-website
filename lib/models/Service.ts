import { IService } from '@/lib/interfaces';
import Locale from './Locale';

class Service implements IService {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  description: string;
  thumbnail: { _type: 'image'; asset: { _ref: string; _type: 'reference' }; hotspot?: boolean };
  locale: Locale;
  metaTitle: string;
  metaDescription: string;

  constructor(data: IService) {
    this._id = data._id;
    this.title = data.title;
    this.slug = data.slug;
    this.description = data.description;
    this.thumbnail = data.thumbnail;
    this.locale = new Locale(data.locale);
    this.metaTitle = data.metaTitle;
    this.metaDescription = data.metaDescription;
  }
}

export default Service;
