import { makeStars } from "./scenes/stars";

/**
 * Latar belakang tetap (fixed) untuk seluruh halaman: gradasi langit malam
 * gelap → indigo, dua kabut nebula, dan lapisan bintang yang berkelip.
 * Karena `fixed`, langit ini terasa menyambung tanpa sambungan di setiap
 * section — sesuai pendekatan "storytelling scroll" BeanMachine.
 */

const stars = makeStars(120, 7, 1440, 900);
const brightStars = makeStars(9, 21, 1440, 880);

export function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-sky-mid"
    >
      {/* gradasi langit */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-top via-sky-mid to-sky-bottom" />

      {/* kabut nebula */}
      <div className="animate-drift absolute -top-48 -right-40 h-[44rem] w-[44rem] rounded-full bg-peri/20 blur-[150px] will-change-transform" />
      <div className="absolute top-1/3 -left-52 h-[40rem] w-[40rem] rounded-full bg-cyan/10 blur-[150px]" />
      <div className="absolute -bottom-64 left-1/3 h-[42rem] w-[42rem] rounded-full bg-peri/10 blur-[160px]" />

      {/* lapisan bintang */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full day:opacity-45"
      >
        {stars.map((star, index) => (
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

        {brightStars.map((star, index) => (
          <g
            key={`bright-${index}`}
            className="animate-twinkle svg-float"
            style={{ animationDelay: `${star.delay}s` }}
          >
            <circle cx={star.x} cy={star.y} r={star.r + 1.2} fill="var(--art-star)" opacity="0.85" />
            <path
              d={`M${star.x} ${star.y - 7} L${star.x + 1.3} ${star.y} L${star.x} ${star.y + 7} L${star.x - 1.3} ${star.y} Z`}
              fill="var(--art-star)"
              opacity="0.5"
            />
            <path
              d={`M${star.x - 7} ${star.y} L${star.x} ${star.y - 1.3} L${star.x + 7} ${star.y} L${star.x} ${star.y + 1.3} Z`}
              fill="var(--art-star)"
              opacity="0.5"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
