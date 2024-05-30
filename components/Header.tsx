import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { usePathname, useSearchParams } from 'next/navigation';

const Header = () => {
    const { t } = useTranslation('common');
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const changeLanguage = (lang: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('locale', lang);
        window.location.href = `${pathname}?${params.toString()}`;
    };

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto p-4">
                <ul className="flex justify-around">
                    <li><Link href="/">{t('home')}</Link></li>
                    <li><Link href="/about">{t('about_us')}</Link></li>
                    <li><Link href="/services">{t('services')}</Link></li>
                    <li><Link href="/portfolio">{t('portfolio')}</Link></li>
                    <li><Link href="/blog">{t('blog')}</Link></li>
                    <li><Link href="/knowledge-base">{t('knowledge_base')}</Link></li>
                    <li><Link href="/contact">{t('contact_us')}</Link></li>
                </ul>
                <div className="mt-4">
                    <button onClick={() => changeLanguage('en')} className="mr-2">English</button>
                    <button onClick={() => changeLanguage('no')}>Norsk</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
