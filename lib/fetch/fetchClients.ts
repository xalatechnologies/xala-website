import { client } from '@/lib/sanity';
import Client from '@/lib/models/Client';

export const fetchClients = async (id: string): Promise<Client | null> => {
  const query = `*[_type == "client" && _id == $id]{
    _id,
    name,
    contactPerson
  }[0]`;

  const result = await client.fetch(query, { id });
  return result ? new Client(result) : null;
};
