import { client } from '@/lib/sanity';
import CaseStudy from '@/lib/models/CaseStudy';

export const fetchCaseStudies = async (localeId: string): Promise<CaseStudy[]> => {
  const query = `*[_type == "caseStudy" && locale._ref == $localeId]{
    _id,
    title,
    slug,
    description,
    client->,
    url,
    platform,
    challenge,
    solution,
    features,
    result,
    thumbnail,
    images,
    location,
    period,
    technologies[]->,
    services[]->,
    locale->,
    metaTitle,
    metaDescription
  }`;

  const results = await client.fetch(query, { localeId });
  return results.map((result: any) => new CaseStudy(result));
};
