import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

export { dictionaries };
export type { Dictionary, Locale };

/**
 * Penyimpanan locale di luar React.
 *
 * Locale dibaca dari `localStorage` secara sinkron saat bundle dievaluasi di
 * browser (sebelum hydration). `useSyncExternalStore` memakai snapshot server
 * ("id") selama hydration, lalu otomatis re-render ke nilai tersimpan —
 * sehingga tidak pernah terjadi hydration mismatch.
 */

export const DEFAULT_LOCALE: Locale = "id";

const STORAGE_KEY = "portfolio-locale";

let currentLocale: Locale = DEFAULT_LOCALE;

if (typeof window !== "undefined") {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") {
      currentLocale = stored;
    }
  } catch {
    // localStorage bisa diblokir (mode privat ketat); abaikan.
  }
}

const listeners = new Set<() => void>();

export function getLocaleSnapshot(): Locale {
  return currentLocale;
}

export function getServerLocale(): Locale {
  return DEFAULT_LOCALE;
}

export function subscribeToLocale(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setStoredLocale(next: Locale): void {
  currentLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // abaikan; pilihan tetap berlaku untuk sesi ini.
  }
  document.documentElement.lang = next;
  for (const listener of listeners) {
    listener();
  }
}
