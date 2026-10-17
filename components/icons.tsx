import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Ikon garis (line/duotone) dengan viewBox 24×24. Ikon stroke mewarisi warna
 * via `currentColor`; bentuk sekunder memakai opacity untuk kesan duotone.
 */
function Icon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function StrokeIcon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <Icon
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </Icon>
  );
}

/* ---------------------------------------------------------------- */
/*  Navigasi & aksi                                                  */
/* ---------------------------------------------------------------- */

export function MenuIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </StrokeIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </StrokeIcon>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
    </StrokeIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </StrokeIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Icon fill="currentColor" {...props}>
      <path d="M20.9 13.4A9 9 0 1 1 10.6 3.1a7.3 7.3 0 0 0 10.3 10.3Z" />
    </Icon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7" />
    </StrokeIcon>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Icon fill="currentColor" {...props}>
      <path d="M12 2c.62 4.9 3.4 7.68 8.3 8.3-4.9.62-7.68 3.4-8.3 8.3-.62-4.9-3.4-7.68-8.3-8.3C8.6 9.68 11.38 6.9 12 2Z" />
    </Icon>
  );
}

/* ---------------------------------------------------------------- */
/*  Kontak                                                           */
/* ---------------------------------------------------------------- */

export function GitHubIcon(props: IconProps) {
  return (
    <Icon fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon fill="currentColor" {...props}>
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.42 2L12 12.02 19.58 7H4.42ZM20 8.32l-7.44 4.93a1 1 0 0 1-1.12 0L4 8.32V17h16V8.32Z" />
    </Icon>
  );
}

/* ---------------------------------------------------------------- */
/*  Ikon bagian "Tentang Saya"                                       */
/* ---------------------------------------------------------------- */

export function EducationIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m3 9.5 9-4.7 9 4.7-9 4.7-9-4.7Z" />
      <path d="M7 11.8v4.1c0 1.2 2.2 2.4 5 2.4s5-1.2 5-2.4v-4.1" />
      <path d="M21 9.8v4.4" />
    </StrokeIcon>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" opacity="0.55" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </StrokeIcon>
  );
}

/* ---------------------------------------------------------------- */
/*  Ikon kategori keahlian (gaya duotone)                            */
/* ---------------------------------------------------------------- */

export function MonitorCodeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="2.5" y="4" width="19" height="13" rx="2.4" opacity="0.9" />
      <path d="m9 8.2-2.4 2.3L9 12.8" />
      <path d="m15 8.2 2.4 2.3-2.4 2.3" opacity="0.6" />
      <path d="M12 19v2.5M8.5 21.5h7" />
    </StrokeIcon>
  );
}

export function ServerIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" opacity="0.6" />
      <circle cx="7" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="16.5" r="0.9" fill="currentColor" stroke="none" opacity="0.6" />
    </StrokeIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3.5 12.6 8.5 4.7 8.5-4.7" opacity="0.6" />
      <path d="m3.5 16.6 8.5 4.7 8.5-4.7" opacity="0.35" />
    </StrokeIcon>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M14.6 6.2a4.6 4.6 0 0 0-6.1 6L3 17.7a2.1 2.1 0 1 0 3 3l5.5-5.5a4.6 4.6 0 0 0 6.1-6.1L14.9 12l-2.7-2.7 2.4-3.1Z" />
      <path d="M15.9 18.7 21 21" opacity="0.45" />
    </StrokeIcon>
  );
}
