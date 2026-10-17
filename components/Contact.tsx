"use client";

import { useState, type FormEvent } from "react";
import { GitHubIcon, MailIcon } from "./icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-soft/60 focus:border-mint/60 focus:bg-surface-strong focus:outline-none";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-xs text-danger">
      {message}
    </p>
  );
}

/**
 * Kontak (FR-09..10): kartu GitHub & email + formulir dengan validasi
 * JavaScript di sisi klien. Karena situs ini statis, pengiriman memakai
 * mailto: — pola yang sama dengan proyek referensi.
 */
export function Contact() {
  const { dict } = useLanguage();
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = dict.contact.form.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = dict.contact.form.errors.email;
    }
    if (!subject) nextErrors.subject = dict.contact.form.errors.subject;
    if (message.length < 10) {
      nextErrors.message = dict.contact.form.errors.message;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    const mailSubject = `${subject} — ${name}`;
    const body = `${dict.contact.form.name}: ${name}\n${dict.contact.form.email}: ${email}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={dict.contact.eyebrow}
              title={dict.contact.title}
              accent={dict.contact.accent}
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              {dict.contact.description}
            </p>

            <div className="mt-8 grid gap-4 sm:max-w-md">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors hover:border-line-strong hover:bg-surface-strong"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-iconbox text-white shadow-[0_0_18px_var(--iconbox-glow)]">
                  <GitHubIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium tracking-widest text-ink-soft uppercase">
                    {dict.contact.githubCardTitle}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    {site.githubHandle}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors hover:border-line-strong hover:bg-surface-strong"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-iconbox text-white shadow-[0_0_18px_var(--iconbox-glow)]">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium tracking-widest text-ink-soft uppercase">
                    {dict.contact.emailCardTitle}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              noValidate
              onSubmit={handleSubmit}
              className="glass card-shadow rounded-2xl p-6 sm:p-8"
              aria-describedby="contact-note"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    {dict.contact.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={dict.contact.form.namePlaceholder}
                    className={cn(fieldClass, errors.name && "border-danger/60")}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <FieldError id="name-error" message={errors.name} />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    {dict.contact.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={dict.contact.form.emailPlaceholder}
                    className={cn(fieldClass, errors.email && "border-danger/60")}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <FieldError id="email-error" message={errors.email} />
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-ink"
                  >
                    {dict.contact.form.subject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={dict.contact.form.subjectPlaceholder}
                    className={cn(fieldClass, errors.subject && "border-danger/60")}
                    aria-invalid={errors.subject ? true : undefined}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  <FieldError id="subject-error" message={errors.subject} />
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink"
                  >
                    {dict.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={dict.contact.form.messagePlaceholder}
                    className={cn(
                      fieldClass,
                      "resize-y",
                      errors.message && "border-danger/60",
                    )}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold tracking-wide text-mint-ink shadow-lg shadow-mint/25 transition-all duration-300 hover:scale-[1.02] hover:bg-mint-hover hover:shadow-[var(--glow-mint)] focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {dict.contact.form.submit}
                </button>

                <p
                  id="contact-note"
                  role="status"
                  aria-live="polite"
                  className="text-xs leading-relaxed text-ink-soft"
                >
                  {sent ? (
                    <>
                      <span className="font-medium text-mint">
                        {dict.contact.form.success}
                      </span>{" "}
                      {dict.contact.form.successFallback}{" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="text-mint underline underline-offset-2"
                      >
                        {site.email}
                      </a>
                    </>
                  ) : (
                    dict.contact.form.idle
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
