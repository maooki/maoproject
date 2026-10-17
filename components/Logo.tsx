/**
 * Logo "Rizky" — roket kecil yang menggabungkan identitas luar angkasa
 * dengan semangat membangun. Digambar inline agar mewarisi `currentColor`.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Logo roket Rizky"
    >
      {/* sirip kiri & kanan */}
      <g fill="currentColor" opacity="0.55">
        <path d="M17.5 25.5c-3.4 1.9-4.8 5.6-4.9 10.1 0 .8.9 1.2 1.5.7l5.3-4.6a1 1 0 0 0 .3-1l-1-5.2a1 1 0 0 0-1.2-.8Z" />
        <path d="M30.5 25.5c3.4 1.9 4.8 5.6 4.9 10.1 0 .8-.9 1.2-1.5.7l-5.3-4.6a1 1 0 0 0-.3-1l1-5.2a1 1 0 0 1 1.2-.8Z" />
      </g>

      {/* badan roket */}
      <path
        d="M24 4.5c5.4 3.9 8 9.6 8 16.1 0 4.6-1.9 9-4.9 12.5a4.4 4.4 0 0 1-6.2 0A18.7 18.7 0 0 1 16 20.6c0-6.5 2.6-12.2 8-16.1Z"
        fill="currentColor"
      />

      {/* jendela kokpit */}
      <circle cx="24" cy="19.5" r="3.4" opacity="0.35" />

      {/* nyala api */}
      <path
        d="M24 35.6c1.9 2.5 1.9 5.8 0 8.4-1.9-2.6-1.9-5.9 0-8.4Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
