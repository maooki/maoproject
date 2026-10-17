"use client";

import {
  LayersIcon,
  MonitorCodeIcon,
  ServerIcon,
  WrenchIcon,
} from "./icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";

/**
 * Keahlian Teknis (FR-06) — tata letak "What we build" BeanMachine §5.4:
 * grid 4 kolom tanpa kotak pembungkus, tiap item memiliki kotak ikon ungu
 * dengan pendaran halus yang menyala saat hover.
 */
export function Skills() {
  const { dict } = useLanguage();
  const itemIcons = [MonitorCodeIcon, ServerIcon, LayersIcon, WrenchIcon];

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.skills.eyebrow}
            title={dict.skills.title}
            accent={dict.skills.accent}
            description={dict.skills.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {dict.skills.items.map((item, index) => {
            const Icon = itemIcons[index] ?? MonitorCodeIcon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-iconbox text-white shadow-[0_0_20px_var(--iconbox-glow)] ring-1 ring-white/20 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-mint">
                    {item.tech}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
