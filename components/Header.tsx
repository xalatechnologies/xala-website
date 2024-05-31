"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { Menu } from '@/lib/interfaces';

const fetchMenus = async (locale: string): Promise<Menu[]> => {
  const res = await fetch(`/api/data?locale=${locale}&type=menu`);
  if (!res.ok) {
    throw new Error('Failed to fetch menu items');
  }
  return res.json();
};

const Header = () => {
  const { locale } = useLocale();
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetchMenus(locale).then(setMenus).catch(console.error);
  }, [locale]);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-2xl font-bold">
          <Link href={`/${locale}`}>
            <a>Xala Technologies</a>
          </Link>
        </div>
        <div>
          {menus.map(menu => (
            <Link key={menu.id} href={menu.url}>
              <a className="mr-4">{menu.label}</a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
