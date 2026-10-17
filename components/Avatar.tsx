/**
 * Avatar astronot — ilustrasi profil dengan helm berrefleksi, panel dada,
 * dan antena. Semua warna memakai token ilustrasi agar ikut berganti tema.
 */
export function Avatar({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <radialGradient id="av-bg" cx="30%" cy="25%" r="85%">
          <stop offset="0%" stopColor="var(--art-planet-light)" />
          <stop offset="100%" stopColor="var(--art-planet)" />
        </radialGradient>
        <linearGradient id="av-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b1550" />
          <stop offset="100%" stopColor="#0b0726" />
        </linearGradient>
        <linearGradient id="av-suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--art-vehicle)" />
          <stop offset="100%" stopColor="var(--art-vehicle-alt)" />
        </linearGradient>
      </defs>

      {/* dasar */}
      <circle cx="60" cy="60" r="58" fill="url(#av-bg)" />
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="var(--peri)"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="3 9"
        strokeLinecap="round"
      />

      {/* antena */}
      <path
        d="M43 33 34 22"
        stroke="var(--art-vehicle)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="33" cy="20" r="3" fill="var(--mint)" />

      {/* pundak / suit */}
      <path
        d="M60 74c14 0 26 7 30 18a58 58 0 0 1-60 0c4-11 16-18 30-18Z"
        fill="url(#av-suit)"
      />

      {/* helm */}
      <circle cx="60" cy="52" r="27" fill="var(--art-vehicle)" />

      {/* visor */}
      <circle cx="60" cy="52" r="19.5" fill="url(#av-visor)" />
      <path
        d="M49 45a14 14 0 0 1 13-7.5"
        stroke="var(--art-window)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="70" cy="43" r="1.7" fill="var(--art-star)" opacity="0.9" />

      {/* panel dada */}
      <rect x="49" y="84" width="22" height="12" rx="4" fill="var(--art-planet)" opacity="0.5" />
      <circle cx="56" cy="90" r="2" fill="var(--mint)" />
      <circle cx="64" cy="90" r="2" fill="var(--art-window)" opacity="0.9" />
    </svg>
  );
}
