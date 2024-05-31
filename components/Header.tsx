"use client"; // Mark this as a client component

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { Menu } from '@/lib/interfaces';
import LanguageSelector from '@/components/LanguageSelector';

const fetchMenus = async (locale: string): Promise<Menu[]> => {
  const res = await fetch(`/api/data?locale=${locale}&type=menu`);
  if (!res.ok) {
    throw new Error('Failed to fetch menu items');
  }
  const data = await res.json();
  return data;
};

const Header = () => {
  const { locale, isLoading } = useLocale();
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    if (!isLoading) {
      console.log('Fetching menus for locale:', locale); // Debugging line
      fetchMenus(locale)
        .then((res: any) => {
          setMenus(res.headerMenus);
        })
        .catch(console.error);
    }
  }, [locale, isLoading]);

  if (isLoading) return null;

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-2xl font-bold">
          <Link href="/">Xala Technologies</Link>
        </div>
        <div className="flex items-center">
          {Array.isArray(menus) && menus.map(menu => (
            <Link key={menu.id} href={menu.url} className="mr-4">
              {menu.label}
            </Link>
          ))}
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
