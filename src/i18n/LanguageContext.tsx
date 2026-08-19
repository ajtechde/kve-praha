import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Lang {
  // Russian is always the default; only an explicit user choice changes it.
  const stored = localStorage.getItem("kve-lang") as Lang | null;
  if (stored && ["ru", "cz", "de", "en"].includes(stored)) return stored;
  return "ru";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("kve-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "cz" ? "cs" : lang;
  }, [lang]);

  const t = (obj: Record<string, string>) => obj[lang] || obj["ru"] || "";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
