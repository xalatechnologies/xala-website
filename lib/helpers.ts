import { Translation } from '@/lib/interfaces';

export const getTranslation = (translations: Translation[], key: string, category: string) => {
  const translation = translations.find(t => t.key === key && t.category === category);
  return translation ? translation.value : key;
};