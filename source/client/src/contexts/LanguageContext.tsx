import React, { createContext, useContext, useState } from 'react';

type Lang = 'zh' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: (_zh, en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to English — portfolio targets international audience
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(l => l === 'zh' ? 'en' : 'zh');

  const t = (zh: string, en: string) => lang === 'zh' ? zh : en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
