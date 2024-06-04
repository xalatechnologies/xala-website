import ITechnology from './ITechnology';
import ILocale from './ILocale';

export default interface IBlog {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  content: string;
  thumbnail: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: boolean;
  };
  technologies: Array<ITechnology>;
  locale: ILocale;
  metaTitle: string;
  metaDescription: string;
}
