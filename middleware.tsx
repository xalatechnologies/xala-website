import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export function middleware(req: NextRequest) {
  const negotiator = new Negotiator({ headers: { 'accept-language': req.headers.get('accept-language') || '' } });
  const languages = negotiator.languages();
  const locales = ['en', 'no'];
  const defaultLocale = 'en';

  const locale = match(languages, locales, defaultLocale);

  const response = NextResponse.next();
  response.cookies.set('locale', locale);

  return response;
}

export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)',
};
