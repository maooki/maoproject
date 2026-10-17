"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  dictionaries,
  getLocaleSnapshot,
  getServerLocale,
  setStoredLocale,
  subscribeToLocale,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Menyediakan kamus aktif ke seluruh halaman. Selama hydration nilai yang
 * dipakai adalah default ("id"); setelah mount, `useSyncExternalStore`
 * memeriksa locale tersimpan di localStorage dan re-render bila berbeda.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocale,
  );
  const setLocale = useCallback((next: Locale) => setStoredLocale(next), []);

  return (
    <LanguageContext.Provider
      value={{ locale, dict: dictionaries[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage harus dipakai di dalam <LanguageProvider>.");
  }
  return context;
}
