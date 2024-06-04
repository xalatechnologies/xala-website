import IClient from './IClient';
import ITechnology from './ITechnology';
import IService from './IService';
import ILocale from './ILocale';

export default interface ICaseStudy {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  client: IClient;
  url: string;
  platform: string;
  challenge: string;
  solution: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  result: string;
  thumbnail: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: boolean;
  };
  images: Array<{
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
  location: string;
  period: string;
  technologies: Array<ITechnology>;
  services: Array<IService>;
  locale: ILocale;
  metaTitle: string;
  metaDescription: string;
}
