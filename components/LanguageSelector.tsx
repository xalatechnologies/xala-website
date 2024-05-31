"use client";

import { useRouter } from 'next/router';
import { useLocale } from '@/context/LocaleContext';

const LanguageSelector = () => {
  const router = useRouter();
  const { locale, setLocale } = useLocale();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    document.cookie = `locale=${newLocale}; path=/`;
    router.push(`/${newLocale}`);
  };

  return (
    <select value={locale} onChange={changeLanguage} className="bg-gray-800 text-white p-2">
      <option value="en">English</option>
      <option value="no">Norwegian</option>
    </select>
  );
};

export default LanguageSelector;
