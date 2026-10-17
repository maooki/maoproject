"use client";

import { useLanguage } from "./providers/LanguageProvider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const OPTIONS: Array<{ value: Locale; label: string }> = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

/** Sakelar bahasa ID ⇄ EN berbentuk pil tersegmentasi. */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, dict } = useLanguage();

  return (
    <div
      role="group"
      aria-label={dict.a11y.languageGroup}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-line p-0.5",
        className,
      )}
    >
      {OPTIONS.map((option) => {
        const isActive = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={isActive}
            title={option.value === "id" ? dict.a11y.idOption : dict.a11y.enOption}
            className={cn(
              "rounded-full px-2 py-1 text-[11px] font-semibold tracking-wide transition-colors",
              isActive
                ? "bg-surface-strong text-ink"
                : "text-ink-soft hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
