"use client";

import { useLayoutEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useLanguage } from "./providers/LanguageProvider";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "portfolio-theme";

/**
 * Tombol ganti tema. Tema sendiri murni berbasis atribut `data-theme` pada
 * <html> + CSS variable, sehingga tidak ada React state yang bisa memicu
 * hydration mismatch. Ikon bulan/matahari dipilih lewat varian CSS `day:`.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { dict } = useLanguage();

  // Inline script di root layout menyetel data-theme sebelum paint. Pada dev,
  // remount StrictMode mereset atribut <html/>, jadi nilai tersimpan
  // diterapkan ulang di sini — no-op di produksi.
  useLayoutEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {
      // localStorage bisa diblokir; abaikan.
    }
  }, []);

  function toggleTheme() {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // abaikan; tema tetap berubah untuk sesi ini.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dict.a11y.toggleTheme}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      <MoonIcon className="h-4 w-4 day:hidden" />
      <SunIcon className="hidden h-4 w-4 day:block" />
    </button>
  );
}
