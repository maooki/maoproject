/**
 * Konstanta situs yang tidak diterjemahkan (nama, kontak, URL).
 *
 * Nilai-nilai ini dipakai di metadata, robots, sitemap, kartu kontak, dan
 * tombol Source Code proyek.
 */
export const site = {
  name: "Muhammad Rizky Al-Hafidzi",
  shortName: "Rizky Al-Hafidzi",
  /** Wordmark navbar (ditampilkan dua warna: brand + sufiks). */
  brand: "Mao",
  brandSuffix: "Project",
  /** Bentuk utuh brand untuk footer, judul tab, dan metadata SEO. */
  brandFull: "MaoProject",
  role: "Web & Interactive Application Developer",
  grade: "Kelas 11",
  email: "mrizkyal129@gmail.com",
  github: "https://github.com/maooki",
  githubHandle: "maooki",
  /** Domain produksi di Vercel. */
  url: "https://maokii.vercel.app",
} as const;

/** id section satu halaman, dipakai navbar untuk pelacakan section aktif. */
export const sectionIds = ["home", "about", "skills", "projects", "contact"] as const;
