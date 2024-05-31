export interface Translation {
  id: number;
  locale: string;
  key: string;
  value: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  locale: string;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  locale: string;
}

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  locale: string;
}

export interface News {
  id: number;
  title: string;
  content: string;
  locale: string;
  date: string;
}

export interface Menu {
  id: number;
  locale: string;
  label: string;
  url: string;
  position: number;
}

export interface HeaderMenu {
  id: number;
  locale: string;
  label: string;
  url: string;
  position: number;
}

export interface MetaData {
  title: string;
  description: string;
}

export interface ApiResponse {
  services: Service[];
  blogs: Blog[];
  news: News[];
  menus: News[];
  portfolio: Portfolio[];
  metaTags: Translation[];
  footer: Translation[];
  notFound: Translation[];
  contact: Translation[];
}
