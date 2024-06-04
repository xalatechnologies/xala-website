import { IClient } from '@/lib/interfaces';

class Client implements IClient {
  _id: string;
  name: string;
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };

  constructor(data: IClient) {
    this._id = data._id;
    this.name = data.name;
    this.contactPerson = data.contactPerson;
  }
}

export default Client;
