import { ILocale } from '@/lib/interfaces';

class Locale implements ILocale {
  _id: string;
  title: string;
  code: string;
  icon: string;

  constructor(data: ILocale) {
    this._id = data._id;
    this.title = data.title;
    this.code = data.code;
    this.icon = data.icon;
  }
}

export default Locale;
