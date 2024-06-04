export default interface IClient {
    _id: string;
    name: string;
    contactPerson: {
      name: string;
      email: string;
      phone: string;
    };
  }
  