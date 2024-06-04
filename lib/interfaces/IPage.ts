import ILocale from './ILocale';

interface IBlock {
  _key: string;
  _type: string;
  children: Array<{
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }>;
  markDefs: Array<{
    _key: string;
    _type: string;
  }>;
  style: string;
}

export default interface IPage {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  metaTitle: string;
  metaDescription: string;
  locale: ILocale;
  content: IBlock[];
}
