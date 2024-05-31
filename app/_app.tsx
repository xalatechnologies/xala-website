import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { LocaleProvider, useLocale } from '@/context/LocaleContext';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { setLocale } = useLocale();

  useEffect(() => {
    const savedLocale = Cookies.get('locale') || 'en';
    if (router.query.locale !== savedLocale) {
      router.push(`/${savedLocale}`);
    }
    setLocale(savedLocale);
    localStorage.setItem('locale', savedLocale);
  }, []);

  return <Component {...pageProps} />;
}

function MyApp(props: AppProps) {
  return (
    <LocaleProvider>
      <App {...props} />
    </LocaleProvider>
  );
}

export default MyApp;
