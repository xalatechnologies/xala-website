import ILocale from './ILocale';

interface IContactDetails {
  email: string;
  phone: string;
}

interface ISocialMedia {
  linkedin: string;
  twitter: string;
  portfolio: string;
}

export default interface ITeam {
  _id: string;
  name: string;
  position: string;
  bio: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: boolean;
  };
  contactDetails: IContactDetails;
  socialMedia: ISocialMedia;
  locale: ILocale;
  metaTitle: string;
  metaDescription: string;
}
