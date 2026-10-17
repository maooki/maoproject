import { makeStars } from "./stars";

/**
 * Ilustrasi bawah halaman (footer art) sesuai spesifikasi BeanMachine:
 * pesawat melayang menuju pulau terapung berisi kota masa depan, menara
 * kristal, dan stasiun berbentuk bola — dengan planet besar sebagai latar.
 */

const footerStars = makeStars(46, 31, 1440, 460);

const sparkles = [
  { x: 560, y: 130, s: 6 },
  { x: 878, y: 88, s: 8 },
  { x: 1176, y: 178, s: 5 },
];

type Tower = {
  x: number;
  y: number;
  w: number;
  h: number;
  opacity: number;
  windows: Array<[number, number]>;
};

const towers: Tower[] = [
  {
    x: 756,
    y: 332,
    w: 26,
    h: 82,
    opacity: 1,
    windows: [
      [764, 346],
      [774, 346],
      [764, 362],
      [774, 362],
      [764, 378],
    ],
  },
  {
    x: 800,
    y: 300,
    w: 30,
    h: 112,
    opacity: 0.92,
    windows: [
      [808, 316],
      [820, 316],
      [808, 332],
      [820, 332],
      [808, 348],
      [820, 348],
      [808, 364],
    ],
  },
  {
    x: 962,
    y: 324,
    w: 28,
    h: 92,
    opacity: 0.9,
    windows: [
      [970, 340],
      [980, 340],
      [970, 356],
      [980, 356],
      [970, 372],
    ],
  },
  {
    x: 1004,
    y: 344,
    w: 34,
    h: 74,
    opacity: 0.82,
    windows: [
      [1012, 358],
      [1024, 358],
      [1012, 374],
      [1024, 374],
      [1012, 390],
    ],
  },
];

export function FooterScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-56 w-full overflow-hidden sm:h-72"
    >
      <svg
        className="absolute inset-x-0 bottom-0 h-full w-full"
        viewBox="0 0 1440 520"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <radialGradient id="fs-neb-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--peri)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--peri)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fs-neb-b" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fs-planet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-planet-mid)" />
            <stop offset="65%" stopColor="var(--art-planet)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--art-planet)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fs-rock" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-mountain)" />
            <stop offset="55%" stopColor="var(--art-mountain-dark)" />
            <stop offset="100%" stopColor="var(--art-mountain-dark)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* nebula */}
        <circle cx="280" cy="150" r="220" fill="url(#fs-neb-a)" />
        <circle cx="1250" cy="110" r="190" fill="url(#fs-neb-b)" />

        {/* bintang kecil */}
        {footerStars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="var(--art-star)"
            opacity={star.o}
            className={
              star.twinkle
                ? `animate-twinkle svg-float${index % 2 === 1 ? " star-calm" : ""}`
                : undefined
            }
            style={star.twinkle ? { animationDelay: `${star.delay}s` } : undefined}
          />
        ))}

        {/* kilau berbentuk bintang */}
        {sparkles.map((sparkle, index) => (
          <g
            key={`sparkle-${index}`}
            className="animate-twinkle svg-float"
            style={{ animationDelay: `${index * 0.9}s` }}
          >
            <path
              d={`M${sparkle.x} ${sparkle.y - sparkle.s} L${sparkle.x + sparkle.s * 0.22} ${sparkle.y} L${sparkle.x} ${sparkle.y + sparkle.s} L${sparkle.x - sparkle.s * 0.22} ${sparkle.y} Z`}
              fill="var(--mint)"
              opacity="0.7"
            />
            <path
              d={`M${sparkle.x - sparkle.s} ${sparkle.y} L${sparkle.x} ${sparkle.y - sparkle.s * 0.22} L${sparkle.x + sparkle.s} ${sparkle.y} L${sparkle.x} ${sparkle.y + sparkle.s * 0.22} Z`}
              fill="var(--mint)"
              opacity="0.5"
            />
          </g>
        ))}

        {/* planet besar di belakang kota */}
        <circle cx="1060" cy="330" r="238" fill="url(#fs-planet)" />
        <g transform="rotate(-14 1060 330)">
          <ellipse
            cx="1060"
            cy="330"
            rx="312"
            ry="84"
            fill="none"
            stroke="var(--art-ring)"
            strokeWidth="3"
            opacity="0.2"
          />
        </g>

        {/* pesawat & rutenya */}
        <path
          d="M470 216C560 190 640 196 716 226"
          stroke="var(--art-star-soft)"
          strokeWidth="2"
          strokeDasharray="1 11"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <g className="animate-float svg-float" transform="translate(420 190) rotate(-12)">
          <circle cx="-44" cy="0" r="13" fill="var(--mint)" opacity="0.16" />
          <ellipse cx="-46" cy="0" rx="7" ry="4.5" fill="var(--mint)" opacity="0.85" />
          <path
            d="M-34 -13l-12 -10c-2 -1.6 -1 -4.2 1.6 -3.6l14 3.6Z"
            fill="var(--art-vehicle-alt)"
          />
          <path
            d="M-34 13l-12 10c-2 1.6 -1 4.2 1.6 3.6l14 -3.6Z"
            fill="var(--art-vehicle-alt)"
          />
          <rect x="-40" y="-13" width="78" height="26" rx="13" fill="var(--art-vehicle)" />
          <path d="M38 -13c11 3.4 17 8.4 17 13s-6 9.6 -17 13Z" fill="var(--art-vehicle)" />
          <circle cx="8" cy="0" r="6.5" fill="var(--art-window)" />
          <path
            d="M4.5 -3.5a5 5 0 0 1 6 -1"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </g>

        {/* pulau terapung */}
        <path
          d="M690 424C760 386 950 376 1064 398 1150 414 1196 440 1212 468 1136 496 940 506 820 498 736 492 700 468 690 424Z"
          fill="url(#fs-rock)"
        />
        <ellipse cx="950" cy="428" rx="232" ry="26" fill="var(--art-mountain-top)" opacity="0.28" />

        {/* batu-batu kecil yang mengorbit di bawah pulau */}
        <polygon
          points="880,522 916,544 878,556 846,542"
          fill="var(--art-mountain-dark)"
          opacity="0.5"
          className="animate-float-slow svg-float"
        />
        <polygon
          points="1010,516 1036,534 1006,550 980,532"
          fill="var(--art-mountain-dark)"
          opacity="0.35"
          className="animate-float svg-float"
        />

        {/* menara kota */}
        {towers.map((tower) => (
          <rect
            key={`${tower.x}-${tower.y}`}
            x={tower.x}
            y={tower.y}
            width={tower.w}
            height={tower.h}
            rx="4"
            fill="var(--art-station)"
            opacity={tower.opacity}
          />
        ))}
        {towers.flatMap((tower) =>
          tower.windows.map(([wx, wy]) => (
            <rect
              key={`w-${wx}-${wy}`}
              x={wx}
              y={wy}
              width="4"
              height="5"
              rx="1.5"
              fill="var(--art-window)"
              opacity="0.9"
            />
          )),
        )}

        {/* menara kristal + stasiun bola (melayang) */}
        <g className="animate-float-slow svg-float">
          <polygon points="868,406 906,262 944,406" fill="var(--art-mountain-top)" />
          <polygon
            points="906,262 944,406 920,406"
            fill="var(--art-planet)"
            opacity="0.25"
          />
          <circle cx="906" cy="258" r="10" fill="var(--mint)" opacity="0.25" />
          <circle cx="906" cy="256" r="3" fill="var(--mint)" />

          <circle cx="1021" cy="322" r="20" fill="var(--art-station)" />
          <circle cx="1014" cy="315" r="6" fill="var(--art-star)" opacity="0.2" />
          <ellipse
            cx="1021"
            cy="322"
            rx="30"
            ry="8"
            fill="none"
            stroke="var(--art-ring)"
            strokeWidth="2"
            opacity="0.75"
          />
          <path
            d="M1021 302v-14"
            stroke="var(--art-star-soft)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1021" cy="286" r="2.4" fill="var(--mint)" />
        </g>
      </svg>
    </div>
  );
}
