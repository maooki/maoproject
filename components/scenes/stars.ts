export type Star = {
  x: number;
  y: number;
  r: number;
  o: number;
  delay: number;
  twinkle: boolean;
};

/**
 * PRNG deterministik (mulberry32). Cache Components melarang operasi
 * nondeterministik seperti Math.random() saat prerender, sehingga posisi
 * bintang dibuat dari seed tetap agar HTML yang dirender selalu sama.
 */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeStars(
  count: number,
  seed: number,
  width: number,
  height: number,
): Star[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, () => {
    const r = 0.6 + rand() * 1.6;
    return {
      x: Math.round(rand() * width),
      y: Math.round(rand() * height),
      r: Math.round(r * 10) / 10,
      o: Math.round((0.25 + rand() * 0.6) * 100) / 100,
      delay: Math.round(rand() * 45) / 10,
      twinkle: rand() > 0.3,
    };
  });
}
