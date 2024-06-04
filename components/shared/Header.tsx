"use client";

import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import LanguageSelector from '@/components/shared/LanguageSelector';

const Header = () => {
  const { menu, isLoading } = useLocale();
  
  if (isLoading) return null;

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-2xl font-bold">
          <Link href="/">Xala Technologies</Link>
        </div>
        <div className="flex items-center">
          {Array.isArray(menu) && menu.map(item => (
            <Link key={item._id} href={item.url} className="mr-4">
              {item.label}
            </Link>
          ))}
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
