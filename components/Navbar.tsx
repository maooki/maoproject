"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { LanguageToggle } from "./LanguageToggle";
import { LogoMark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "./ui/Button";
import { useLanguage } from "./providers/LanguageProvider";
import { sectionIds, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Navbar pil melayang (BeanMachine §5.1): tautan di kiri, brand di tengah,
 * kontrol (bahasa, tema, CTA) di kanan. Di layar kecil mengecil jadi
 * brand + kontrol + menu hamburger yang membuka island.
 */
export function Navbar() {
  const { dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(`#${sectionIds[0]}`);
  const islandRef = useRef<HTMLElement>(null);

  // Lacak scroll untuk keadaan padat/ringkas dan section aktif.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const line = window.scrollY + window.innerHeight * 0.35;
      let current: string = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (
          element &&
          element.getBoundingClientRect().top + window.scrollY <= line
        ) {
          current = id;
        }
      }
      setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu yang terbuka dengan Escape atau klik di luar island.
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!islandRef.current?.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        ref={islandRef}
        aria-label={dict.a11y.primaryNav}
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={cn(
          "flex w-full max-w-md flex-col border p-2 backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-500 lg:w-auto lg:max-w-5xl",
          open ? "rounded-[26px] lg:rounded-full" : "rounded-full",
          scrolled || open
            ? "border-line-strong bg-sky-mid/80 shadow-[0_18px_50px_-12px_var(--shadow)]"
            : "border-line bg-sky-mid/50 shadow-[0_10px_36px_-16px_var(--shadow)]",
        )}
      >
        <div className="flex items-center justify-between gap-2 lg:grid lg:w-full lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* kiri: tautan desktop */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {dict.nav.items.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ duration: 0.35, ease: EASE }}
                        className="absolute inset-0 -z-10 rounded-full bg-surface-strong ring-1 ring-line"
                      />
                    ) : null}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* tengah: brand */}
          <a
            href="#home"
            aria-label={dict.a11y.homeLink}
            className="flex shrink-0 items-center gap-2 rounded-full py-1 pr-3 pl-1.5 transition-colors hover:bg-surface lg:justify-self-center"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-mint ring-1 ring-line">
              <LogoMark className="h-4.5 w-4.5" />
            </span>
            <span className="hidden text-[15px] leading-none font-semibold tracking-tight text-ink sm:inline">
              {site.brand}
              <span className="font-normal text-ink-soft">{site.brandSuffix}</span>
            </span>
          </a>

          {/* kanan: kontrol */}
          <div className="flex items-center gap-1.5 lg:justify-self-end">
            <LanguageToggle />
            <ThemeToggle />
            <ButtonLink
              href="#contact"
              variant="primary"
              className="hidden px-4 py-2 text-[13px] lg:inline-flex"
            >
              {dict.nav.contact}
            </ButtonLink>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-1 pt-3 pb-1">
                {dict.nav.items.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "block rounded-2xl px-4 py-3 text-sm transition-colors",
                          isActive
                            ? "bg-surface-strong font-medium text-ink"
                            : "text-ink-soft hover:bg-surface hover:text-ink",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-1">
                  <ButtonLink
                    href="#contact"
                    variant="primary"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    {dict.nav.contact}
                  </ButtonLink>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
