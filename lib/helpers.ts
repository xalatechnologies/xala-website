import { Translation } from "./models";

export const getTranslation = (translations: Translation[], key: string, category: string) => {
  const translation = translations.find(t => t.key === key && t.category.title === category);
  return translation ? translation.value : key;
};