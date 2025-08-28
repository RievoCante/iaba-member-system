// simple i18n context for switching languages across the app
"use client";

import React from "react";

export type AppLanguage = "th" | "en";

type LanguageContextValue = {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "iaba-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<AppLanguage>("th");

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(
        STORAGE_KEY
      ) as AppLanguage | null;
      if (stored === "th" || stored === "en") setLanguageState(stored);
    } catch {}
  }, []);

  const setLanguage = React.useCallback((lang: AppLanguage) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, []);

  const value = React.useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
