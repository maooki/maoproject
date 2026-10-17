"use client";

import { GitHubIcon, MailIcon } from "./icons";
import { LogoMark } from "./Logo";
import { FooterScene } from "./scenes/FooterScene";
import { useLanguage } from "./providers/LanguageProvider";
import { site } from "@/lib/site";

/**
 * Footer dengan ilustrasi stasiun luar angkasa di atasnya, tautan navigasi,
 * media sosial, dan copyright. `year` dihitung di server lewat scope cache.
 */
export function Footer({ year }: { year: number }) {
  const { dict } = useLanguage();

  return (
    <footer className="relative">
      <FooterScene />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 pb-10 text-center sm:px-8">
        <a
          href="#home"
          aria-label={dict.a11y.backToTop}
          className="glass flex h-12 w-12 items-center justify-center rounded-2xl text-mint transition-colors hover:bg-surface-strong"
        >
          <LogoMark className="h-7 w-7" />
        </a>

        <p className="text-lg font-semibold tracking-tight text-ink">
          {site.brandFull}
        </p>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          {dict.footer.tagline}
        </p>

        <nav aria-label={dict.a11y.footerNav}>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {dict.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {dict.nav.contact}
              </a>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass flex h-10 w-10 items-center justify-center rounded-xl text-ink-soft transition-colors hover:bg-surface-strong hover:text-ink"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="glass flex h-10 w-10 items-center justify-center rounded-xl text-ink-soft transition-colors hover:bg-surface-strong hover:text-ink"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>

        <p className="text-xs text-ink-soft">
          © {year} {site.brandFull}. {dict.footer.rights}
        </p>
        <p className="text-xs text-ink-soft/70">{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
