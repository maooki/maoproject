"use client";

import { Avatar } from "./Avatar";
import { HeroScene } from "./scenes/HeroScene";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "./providers/LanguageProvider";
import { site } from "@/lib/site";

/**
 * Hero (FR-01..03): identitas lengkap, tagline, dua CTA, avatar dengan
 * indikator ketersediaan — dikelilingi ilustrasi luar angkasa.
 */
export function Hero() {
  const { dict } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden">
      <HeroScene />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
        {/* pendaran lembut agar teks tetap terbaca di atas ilustrasi */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-mid/55 blur-3xl"
        />

        <Reveal>
          <div className="relative mx-auto h-24 w-24">
            <Avatar
              className="h-24 w-24 drop-shadow-[0_14px_34px_var(--shadow)]"
              label={dict.hero.avatarAlt}
            />
            <span
              className="absolute right-0.5 bottom-0.5 h-5 w-5 rounded-full bg-mint ring-4 ring-sky-mid"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-7 text-[11px] font-semibold tracking-[0.32em] text-ink-soft uppercase">
            {dict.hero.greeting}
          </p>
          <h1 className="mt-3 text-4xl leading-[1.06] font-semibold tracking-tight text-balance text-ink sm:text-6xl lg:text-[4.25rem]">
            {site.name}
          </h1>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink-soft sm:text-base">
            <span>{dict.hero.grade}</span>
            <span aria-hidden="true" className="text-mint">
              ✦
            </span>
            <span>{dict.hero.role}</span>
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {dict.hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="#projects" variant="primary">
              {dict.hero.ctaProjects}
            </ButtonLink>
            <ButtonLink href="#contact">{dict.hero.ctaContact}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
