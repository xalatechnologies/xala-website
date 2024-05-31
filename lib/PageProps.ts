import { Service, Blog, MetaTag, News, Footer } from './interfaces';

export interface HomeProps {
  translations: Record<string, string>;
  metaTags: MetaTag;
  footer: Footer;
}

export interface ServicesProps {
  services: Service[];
  metaTags: MetaTag;
  footer: Footer;
}

export interface BlogProps {
  blogs: Blog[];
  metaTags: MetaTag;
  footer: Footer;
}

export interface NewsProps {
  news: News[];
  metaTags: MetaTag;
  footer: Footer;
}
