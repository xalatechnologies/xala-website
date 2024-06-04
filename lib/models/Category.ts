import { ICategory } from '@/lib/interfaces';

class Category implements ICategory {
  _id: string;
  title: string;

  constructor(data: ICategory) {
    this._id = data._id;
    this.title = data.title;
  }
}

export default Category;
