"use client";

import { useLanguage } from "./providers/LanguageProvider";

/** Tautan lompat ke konten utama — muncul saat fokus keyboard (Tab). */
export function SkipLink() {
  const { dict } = useLanguage();

  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-mint focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-mint-ink"
    >
      {dict.a11y.skipToContent}
    </a>
  );
}
