"use client";

import { EducationIcon, TargetIcon } from "./icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";

/**
 * Tentang Saya (FR-04..05): narasi latar belakang + kartu pendidikan,
 * fokus eksplorasi, dan daftar yang sedang dipelajari.
 */
export function About() {
  const { dict } = useLanguage();
  const cardIcons = [EducationIcon, TargetIcon];

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={dict.about.eyebrow}
              title={dict.about.title}
              accent={dict.about.accent}
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
              {dict.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-5">
              {dict.about.cards.map((card, index) => {
                const Icon = cardIcons[index] ?? EducationIcon;
                return (
                  <div
                    key={card.title}
                    className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-line-strong hover:bg-surface-strong"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-iconbox text-white shadow-[0_0_18px_var(--iconbox-glow)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {card.body}
                    </p>
                  </div>
                );
              })}

              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-semibold tracking-wide text-ink">
                  {dict.about.nowTitle}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {dict.about.now.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
