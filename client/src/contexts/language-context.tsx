import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '@/i18n/locales/en.json';
import nb from '@/i18n/locales/nb.json';

export type Language = 'en' | 'no';

const translationMap = { en, no: nb };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('frostline-language');
    return (stored === 'no' || stored === 'en') ? stored : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('frostline-language', lang);
  };

  useEffect(() => {
    localStorage.setItem('frostline-language', language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translationMap[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
