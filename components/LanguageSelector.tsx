"use client"; // Mark this as a client component

import { useLocale } from '@/context/LocaleContext';

const LanguageSelector = () => {
  const { locale, setLocale } = useLocale();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <select value={locale} onChange={changeLanguage} className="bg-gray-800 text-white p-2 ml-4">
      <option value="en">English</option>
      <option value="no">Norwegian</option>
    </select>
  );
};

export default LanguageSelector;
