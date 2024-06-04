import { client } from '@/lib/sanity';
import Team from '@/lib/models/Team';

export const fetchTeam = async (id: string): Promise<Team | null> => {
  const query = `*[_type == "team" && _id == $id]{
    _id,
    name,
    position,
    bio,
    image,
    contactDetails,
    socialMedia,
    locale->,
    metaTitle,
    metaDescription
  }[0]`;

  const result = await client.fetch(query, { id });
  return result ? new Team(result) : null;
};
