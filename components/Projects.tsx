"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon, CheckIcon, GitHubIcon } from "./icons";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";
import { projectCategories, projects, type ProjectFilter } from "@/lib/projects";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Galeri Proyek (FR-07..08): tab filter kategori + tiga kartu studi kasus
 * dengan pratinjau, badge teknologi, dan tombol Live Demo / Source Code.
 */
export function Projects() {
  const { dict } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filters: Array<{ key: ProjectFilter; label: string }> = [
    { key: "all", label: dict.projects.filterAll },
    ...projectCategories.map((category) => ({
      key: category,
      label: dict.projects.categories[category],
    })),
  ];

  const visibleProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={dict.projects.eyebrow}
            title={dict.projects.title}
            accent={dict.projects.accent}
            description={dict.projects.description}
          />
        </Reveal>

        {/* tab filter */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((item) => {
              const isActive = filter === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setFilter(item.key)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300",
                    isActive
                      ? "bg-mint text-mint-ink shadow-lg shadow-mint/25"
                      : "border border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* grid proyek */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const text = dict.projects.items[project.id];
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-line-strong"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={text.title}
                      width={800}
                      height={500}
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full border border-line bg-sky-top/60 px-3 py-1 text-[11px] font-medium tracking-widest text-ink uppercase backdrop-blur-md">
                      {dict.projects.categories[project.category]}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {text.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      {text.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {text.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[13px] text-ink-soft"
                        >
                          <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex-1" />

                    <div className="flex flex-wrap items-center gap-2.5">
                      <ButtonLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="px-4 py-2 text-[13px]"
                      >
                        {dict.projects.liveDemo}
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </ButtonLink>
                      <ButtonLink
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-[13px]"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        {dict.projects.source}
                      </ButtonLink>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <ButtonLink
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5"
            >
              <GitHubIcon className="h-4 w-4" />
              {dict.projects.moreOnGithub}
              <ArrowUpRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
