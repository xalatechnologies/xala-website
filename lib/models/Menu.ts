import { IMenu } from '@/lib/interfaces';
import Locale from './Locale';

class Menu implements IMenu {
  _id: string;
  label: string;
  url: string;
  locale: Locale;
  order: number;
  icon: { _type: 'image'; asset: { _ref: string; _type: 'reference' }; hotspot?: boolean };

  constructor(data: IMenu) {
    this._id = data._id;
    this.label = data.label;
    this.url = data.url;
    this.locale = new Locale(data.locale);
    this.order = data.order;
    this.icon = data.icon;
  }
}

export default Menu;
