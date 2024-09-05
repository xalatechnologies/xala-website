import { PortableTextBlock } from "@portabletext/react";
import { Translation } from "./models";

export const getTranslation = (translations: Translation[], key: string, category: string): any => {
  const translation = translations.find(t => t.key === key && t.category.title === category);
  const parsedBlockContent = Array.isArray(translation?.value) ? translation.value : [];
  
  return translation?.value;
};