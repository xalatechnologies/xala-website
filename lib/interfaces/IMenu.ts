import ILocale from './ILocale';

export default interface IMenu {
  _id: string;
  label: string;
  url: string;
  locale: ILocale;
  order: number;
  icon: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: boolean;
  };
}
