import { client } from '@/lib/sanity';
import Technology from '@/lib/models/Technology';

export const fetchTechnologies = async (id: string): Promise<Technology | null> => {
  const query = `*[_type == "technology" && _id == $id]{
    _id,
    name
  }[0]`;

  const result = await client.fetch(query, { id });
  return result ? new Technology(result) : null;
};
