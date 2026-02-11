import { useLanguage } from '@/contexts/language-context';
import en from './locales/en.json';
import nb from './locales/nb.json';

const translations = { en, no: nb } as const;

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}
