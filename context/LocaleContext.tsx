"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Blog, Menu, News, Service, Translation } from '@/lib/interfaces';
import { Portfolio } from '@prisma/client';

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  translations: Translation[];
  services: Service[];
  blogs: Blog[];
  portfolios: Portfolio[];
  news: News[];
  menu: Menu[];
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('en');
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [menu, setMenu] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en';
    console.log('Initial Locale:', savedLocale);
    setLocale(savedLocale);
    fetchData(savedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    fetchData(newLocale);
  };

  const fetchData = async (locale: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/data?locale=${locale}`);
      const data = await res.json();
      setTranslations(data.translations);
      setServices(data.services);
      setBlogs(data.blogs);
      setPortfolios(data.portfolios);
      setNews(data.news);
      setMenu(data.menu);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
    setIsLoading(false);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale, translations, services, blogs, portfolios, news, menu, isLoading }}>
      {isLoading && <LoadingSpinner />}
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
