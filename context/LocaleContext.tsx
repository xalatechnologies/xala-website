"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { client } from "@/lib/sanity";
import {
  fetchServices,
  fetchNews,
  fetchCaseStudies,
  fetchTranslations,
  fetchMenus,
  fetchBlogs,
  fetchContactForm,
} from "@/lib/fetch";
import {
  Translation,
  Service,
  Blog,
  CaseStudy,
  News,
  Menu,
  ContactForm,
} from "@/lib/models";
import { Locale } from "sanity";
import { ICaseStudy, ILocale } from "@/lib/interfaces";

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  translations: Translation[];
  services: Service[];
  blogs: Blog[];
  caseStudies: CaseStudy[];
  news: News[];
  menu: Menu[];
  locales: Locale[];
  contactForm: ContactForm | null;
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleString] = useState<string>("en");
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [menu, setMenu] = useState<Menu[]>([]);
  const [locales, setLocales] = useState<Locale[]>([]);
  const [contactForm, setContactForm] = useState<ContactForm | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedLocale =
      localStorage.getItem("locale") ||
      navigator.language.split("-")[0] ||
      "en";
    console.log("Initial Locale:", savedLocale);
    setLocaleString(savedLocale);
    fetchData(savedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocaleString(newLocale);
    localStorage.setItem("locale", newLocale);
    fetchData(newLocale);
  };

  const fetchData = async (locale: string) => {
    setIsLoading(true);
    try {
      // Fetch locale IDs
      const localeRefs = await client.fetch(`*[_type == "locale"]{_id, code}`);
      const localeId = localeRefs.find((l: ILocale) => l.code === locale)._id;

      const [
        translations,
        services,
        blogs,
        news,
        caseStudies,
        menus,
        contactForm,
      ] = await Promise.all([
        fetchTranslations(localeId),
        fetchServices(localeId),
        fetchBlogs(localeId),
        fetchNews(localeId),
        fetchCaseStudies(localeId),
        fetchMenus(localeId),
        fetchContactForm(localeId),
      ]);

      // Set the fetched data

      setTranslations(translations);
      setServices(services);
      setBlogs(blogs);
      setCaseStudies(caseStudies);
      setNews(news);
      setMenu(menus);
      setLocales(localeRefs);
      setContactForm(contactForm);

    } catch (error) {
      console.error("Failed to fetch data", error);
    }
    setIsLoading(false);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: changeLocale,
        translations,
        services,
        blogs,
        caseStudies,
        news,
        menu,
        locales,
        contactForm,
        isLoading,
      }}
    >
      {isLoading && <LoadingSpinner />}
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
