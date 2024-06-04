import ILocale from './ILocale';

export default interface IService {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  thumbnail: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: boolean;
  };
  locale: ILocale;
  metaTitle: string;
  metaDescription: string;
}
