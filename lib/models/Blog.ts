import { IBlog } from '@/lib/interfaces';
import Technology from './Technology';
import Locale from './Locale';

class Blog implements IBlog {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  content: string;
  thumbnail: { _type: 'image'; asset: { _ref: string; _type: 'reference' }; hotspot?: boolean };
  technologies: Technology[];
  locale: Locale;
  metaTitle: string;
  metaDescription: string;

  constructor(data: IBlog) {
    this._id = data._id;
    this.title = data.title;
    this.slug = data.slug;
    this.content = data.content;
    this.thumbnail = data.thumbnail;
    this.technologies = data.technologies.map(t => new Technology(t));
    this.locale = new Locale(data.locale);
    this.metaTitle = data.metaTitle;
    this.metaDescription = data.metaDescription;
  }
}

export default Blog;
