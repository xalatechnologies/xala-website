"use client"; // Mark this as a client component

import { useLocale } from '@/context/LocaleContext';

const LanguageSelector = () => {
  const { locale, setLocale } = useLocale();

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <div className="flex items-center">
      <button onClick={() => changeLanguage('en')} className={`p-2 ${locale === 'en' ? 'border border-white' : ''}`}>
        <span className="fi fi-gb" style={{ fontSize: '24px' }}></span>
      </button>
      <button onClick={() => changeLanguage('no')} className={`p-2 ${locale === 'no' ? 'border border-white' : ''}`}>
        <span className="fi fi-no" style={{ fontSize: '24px' }}></span>
      </button>
    </div>
  );
};

export default LanguageSelector;
