import { ITechnology } from '@/lib/interfaces';

class Technology implements ITechnology {
  _id: string;
  name: string;

  constructor(data: ITechnology) {
    this._id = data._id;
    this.name = data.name;
  }
}

export default Technology;
