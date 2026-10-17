"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { makeStars } from "./stars";

/**
 * Ilustrasi hero bergaya stasiun antariksa BeanMachine:
 * planet bercincin (kiri), pegunungan kristal + stasiun berbentuk bola
 * (kanan), dan pesawat kecil yang melayang. Dua lapisan (belakang & depan)
 * bergerak dengan kecepatan berbeda saat scroll untuk kesan kedalaman.
 */

const desktopStars = makeStars(64, 11, 1440, 760);

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* ----------------------------- DESKTOP ----------------------------- */}
      <div className="hidden md:block">
        {/* lapisan belakang: bintang, planet, komet */}
        <motion.div
          style={reduceMotion ? undefined : { y: backY }}
          className="absolute inset-0"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 760"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="hs-planet" cx="34%" cy="28%" r="80%">
                <stop offset="0%" stopColor="var(--art-planet-light)" />
                <stop offset="62%" stopColor="var(--art-planet-mid)" />
                <stop offset="100%" stopColor="var(--art-planet)" />
              </radialGradient>
              <clipPath id="hs-planet-clip">
                <circle cx="285" cy="215" r="148" />
              </clipPath>
              <clipPath id="hs-ring-back">
                <rect x="-240" y="-240" width="1080" height="455" />
              </clipPath>
              <clipPath id="hs-ring-front">
                <rect x="-240" y="215" width="1080" height="320" />
              </clipPath>
              <linearGradient id="hs-comet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--art-star)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--art-star)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {desktopStars.map((star, index) => (
              <circle
                key={index}
                cx={star.x}
                cy={star.y}
                r={star.r}
                fill="var(--art-star)"
                opacity={star.o}
                className={star.twinkle ? "animate-twinkle svg-float" : undefined}
                style={
                  star.twinkle ? { animationDelay: `${star.delay}s` } : undefined
                }
              />
            ))}

            {/* planet bercincin — cincin dipotong dua supaya bagian belakang
                tertutup planet, bagian depan digambar ulang di atas planet */}
            <g className="animate-planet svg-float">
              <circle cx="285" cy="215" r="228" fill="var(--art-ring)" opacity="0.06" />

              {/* cincin separuh belakang (di bawah planet) */}
              <g transform="rotate(-16 285 215)">
                <g clipPath="url(#hs-ring-back)">
                  <ellipse
                    cx="285"
                    cy="215"
                    rx="262"
                    ry="62"
                    fill="none"
                    stroke="var(--art-ring)"
                    strokeWidth="9"
                    opacity="0.8"
                  />
                  <ellipse
                    cx="285"
                    cy="215"
                    rx="215"
                    ry="48"
                    fill="none"
                    stroke="var(--art-ring)"
                    strokeWidth="2.5"
                    opacity="0.45"
                  />
                  {/* cincin titik-titik yang berputar mengelilingi planet */}
                  <ellipse
                    cx="285"
                    cy="215"
                    rx="238"
                    ry="55"
                    fill="none"
                    stroke="var(--art-ring)"
                    strokeWidth="3"
                    strokeDasharray="9 21"
                    strokeLinecap="round"
                    opacity="0.9"
                    className="animate-ring-spin"
                  />
                </g>
              </g>

              <circle cx="285" cy="215" r="148" fill="url(#hs-planet)" />
              <g clipPath="url(#hs-planet-clip)">
                <circle cx="336" cy="262" r="146" fill="var(--sky-top)" opacity="0.3" />
                <circle cx="232" cy="182" r="17" fill="var(--art-star)" opacity="0.1" />
                <circle cx="302" cy="148" r="10" fill="var(--art-star)" opacity="0.1" />
                <circle cx="256" cy="268" r="21" fill="var(--art-star)" opacity="0.08" />
              </g>

              {/* cincin separuh depan (di atas planet) */}
              <g transform="rotate(-16 285 215)">
                <g clipPath="url(#hs-ring-front)">
                  <ellipse
                    cx="285"
                    cy="215"
                    rx="262"
                    ry="62"
                    fill="none"
                    stroke="var(--art-ring)"
                    strokeWidth="9"
                    opacity="0.8"
                  />
                  <ellipse
                    cx="285"
                    cy="215"
                    rx="215"
                    ry="48"
                    fill="none"
                    stroke="var(--art-ring)"
                    strokeWidth="2.5"
                    opacity="0.45"
                  />
                  <ellipse
                    cx="285"
                    cy="215"
                    rx="238"
                    ry="55"
                    fill="none"
                    stroke="var(--art-ring)"
                    strokeWidth="3"
                    strokeDasharray="9 21"
                    strokeLinecap="round"
                    opacity="0.9"
                    className="animate-ring-spin"
                  />
                </g>
              </g>
            </g>

            {/* bulan kecil & komet */}
            <circle cx="472" cy="86" r="12" fill="var(--art-star-soft)" />
            <circle cx="468" cy="82" r="3.5" fill="var(--art-star)" opacity="0.25" />
            <path
              d="M1272 66 1398 148"
              stroke="url(#hs-comet)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="1270" cy="64" r="3" fill="var(--art-star)" />
          </svg>
        </motion.div>

        {/* lapisan depan: pegunungan kristal, stasiun, pesawat */}
        <motion.div
          style={reduceMotion ? undefined : { y: frontY }}
          className="absolute inset-x-0 bottom-0 h-[82%]"
        >
          <svg
            className="block h-full w-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <linearGradient id="hs-ground" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--art-ground)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--art-ground)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <ellipse cx="1120" cy="420" rx="330" ry="115" fill="var(--art-ring)" opacity="0.07" />

            {/* daratan yang menyatu ke bawah (seamless) */}
            <path
              d="M0 470C240 430 420 484 720 464 1020 444 1200 476 1440 442V600H0Z"
              fill="url(#hs-ground)"
            />

            {/* pegunungan kristal */}
            <polygon points="960,470 1130,268 1250,470" fill="var(--art-mountain)" />
            <polygon
              points="1130,268 1250,470 1178,470"
              fill="var(--art-mountain-dark)"
              opacity="0.75"
            />
            <polygon points="1130,268 1102,322 1152,322" fill="var(--art-mountain-top)" />

            <polygon points="830,470 958,332 1058,470" fill="var(--art-mountain-dark)" />
            <polygon
              points="958,332 1030,470 985,470"
              fill="var(--art-mountain)"
              opacity="0.5"
            />
            <polygon
              points="958,332 936,374 980,374"
              fill="var(--art-mountain-top)"
              opacity="0.9"
            />

            <polygon
              points="1248,470 1348,352 1440,470"
              fill="var(--art-mountain-dark)"
              opacity="0.9"
            />
            <polygon
              points="1348,352 1328,390 1368,390"
              fill="var(--art-mountain-top)"
              opacity="0.85"
            />

            {/* stasiun berbentuk bola + menara meruncing */}
            <g className="animate-float-slow svg-float">
              <polygon points="1283,470 1296,352 1310,470" fill="var(--art-station)" />
              <circle cx="1297" cy="330" r="26" fill="var(--art-station)" />
              <circle cx="1289" cy="321" r="8" fill="var(--art-star)" opacity="0.18" />
              <ellipse
                cx="1297"
                cy="330"
                rx="38"
                ry="10"
                fill="none"
                stroke="var(--art-ring)"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <circle cx="1288" cy="338" r="2" fill="var(--art-window)" />
              <circle cx="1298" cy="342" r="2" fill="var(--art-window)" />
              <circle cx="1306" cy="334" r="2" fill="var(--art-window)" />
              <path
                d="M1297 304v-16"
                stroke="var(--art-star-soft)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="1297" cy="284" r="2.6" fill="var(--mint)" />
            </g>

            {/* rute putus-putus pesawat menuju stasiun */}
            <path
              d="M846 236C1000 204 1130 252 1264 316"
              stroke="var(--art-star-soft)"
              strokeWidth="2"
              strokeDasharray="1 11"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />

            {/* pesawat luar angkasa */}
            <g className="animate-float svg-float" transform="translate(890 200) rotate(-10)">
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
              <rect
                x="-22"
                y="-13"
                width="5"
                height="26"
                rx="2.5"
                fill="var(--art-vehicle-alt)"
                opacity="0.85"
              />
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
          </svg>
        </motion.div>
      </div>

      {/* ------------------------------ MOBILE ------------------------------ */}
      <div className="md:hidden">
        {/* planet kecil kiri atas */}
        <svg
          viewBox="0 0 200 200"
          className="absolute top-24 -left-12 h-40 w-40 day:opacity-60"
        >
          <defs>
            <radialGradient id="hs-planet-m" cx="34%" cy="28%" r="80%">
              <stop offset="0%" stopColor="var(--art-planet-light)" />
              <stop offset="100%" stopColor="var(--art-planet)" />
            </radialGradient>
            <clipPath id="hs-ring-m-back">
              <rect x="-60" y="-60" width="320" height="160" />
            </clipPath>
            <clipPath id="hs-ring-m-front">
              <rect x="-60" y="100" width="320" height="100" />
            </clipPath>
          </defs>
          <g className="animate-planet svg-float">
            <circle cx="100" cy="100" r="120" fill="var(--art-ring)" opacity="0.07" />

            {/* cincin separuh belakang (di bawah planet) */}
            <g transform="rotate(-16 100 100)">
              <g clipPath="url(#hs-ring-m-back)">
                <ellipse
                  cx="100"
                  cy="100"
                  rx="138"
                  ry="33"
                  fill="none"
                  stroke="var(--art-ring)"
                  strokeWidth="6"
                  opacity="0.75"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="118"
                  ry="28"
                  fill="none"
                  stroke="var(--art-ring)"
                  strokeWidth="2.5"
                  strokeDasharray="6 14"
                  strokeLinecap="round"
                  opacity="0.9"
                  className="animate-ring-spin"
                />
              </g>
            </g>

            <circle cx="100" cy="100" r="78" fill="url(#hs-planet-m)" />

            {/* cincin separuh depan (di atas planet) */}
            <g transform="rotate(-16 100 100)">
              <g clipPath="url(#hs-ring-m-front)">
                <ellipse
                  cx="100"
                  cy="100"
                  rx="138"
                  ry="33"
                  fill="none"
                  stroke="var(--art-ring)"
                  strokeWidth="6"
                  opacity="0.75"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="118"
                  ry="28"
                  fill="none"
                  stroke="var(--art-ring)"
                  strokeWidth="2.5"
                  strokeDasharray="6 14"
                  strokeLinecap="round"
                  opacity="0.9"
                  className="animate-ring-spin"
                />
              </g>
            </g>
          </g>
        </svg>

        {/* pesawat kecil kanan atas */}
        <svg viewBox="0 0 120 80" className="animate-float absolute top-40 right-0 h-16 w-24">
          <g transform="translate(64 40) rotate(-10)">
            <ellipse cx="-26" cy="0" rx="5" ry="3.2" fill="var(--mint)" opacity="0.85" />
            <path
              d="M-19 -8l-7 -6c-1.2 -1 -0.6 -2.6 1 -2.2l8 2.2Z"
              fill="var(--art-vehicle-alt)"
            />
            <path
              d="M-19 8l-7 6c-1.2 1 -0.6 2.6 1 2.2l8 -2.2Z"
              fill="var(--art-vehicle-alt)"
            />
            <rect x="-22" y="-8" width="46" height="16" rx="8" fill="var(--art-vehicle)" />
            <path d="M24 -8c6.5 2 10 5 10 8s-3.5 6 -10 8Z" fill="var(--art-vehicle)" />
            <circle cx="5" cy="0" r="4" fill="var(--art-window)" />
          </g>
        </svg>

        {/* daratan + pegunungan + stasiun */}
        <svg
          viewBox="0 0 720 340"
          preserveAspectRatio="xMidYMax meet"
          className="absolute inset-x-0 -bottom-px h-auto w-full"
        >
          <defs>
            <linearGradient id="hs-ground-m" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--art-ground)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--art-ground)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="470" cy="250" rx="230" ry="80" fill="var(--art-ring)" opacity="0.07" />
          <path
            d="M0 280C120 256 240 292 360 278 480 264 600 288 720 268V340H0Z"
            fill="url(#hs-ground-m)"
          />
          <polygon points="380,280 480,160 566,280" fill="var(--art-mountain)" />
          <polygon
            points="480,160 566,280 512,280"
            fill="var(--art-mountain-dark)"
            opacity="0.75"
          />
          <polygon points="480,160 460,200 500,200" fill="var(--art-mountain-top)" />
          <polygon
            points="560,280 630,206 706,280"
            fill="var(--art-mountain-dark)"
            opacity="0.9"
          />
          <g className="animate-float-slow svg-float">
            <polygon points="618,280 627,204 637,280" fill="var(--art-station)" />
            <circle cx="627" cy="190" r="15" fill="var(--art-station)" />
            <ellipse
              cx="627"
              cy="190"
              rx="22"
              ry="6"
              fill="none"
              stroke="var(--art-ring)"
              strokeWidth="2"
              opacity="0.8"
            />
            <circle cx="627" cy="176" r="2" fill="var(--mint)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
