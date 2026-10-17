import { site } from "./site";

/**
 * Data struktural proyek unggulan (tidak diterjemahkan).
 * Teks judul/deskripsi tinggal di `lib/dictionaries/` per bahasa.
 *
 * Thumbnail menunjuk ke mockup SVG di `public/projects/`. Ganti file tersebut
 * dengan tangkapan layar asli (nama file sama; sesuaikan ekstensi di sini)
 * untuk memperbarui kartu tanpa mengubah komponen.
 */

export const projectCategories = ["game", "webapp", "ecommerce"] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = "all" | ProjectCategory;
export type ProjectId = "game-fighting" | "weather" | "shopping";

export type Project = {
  id: ProjectId;
  category: ProjectCategory;
  tech: string[];
  thumbnail: string;
  /** TODO: ganti dengan URL demo langsung setelah proyek di-hosting. */
  demo: string;
  /** TODO: ganti dengan URL repositori masing-masing proyek. */
  source: string;
};

export const projects: Project[] = [
  {
    id: "game-fighting",
    category: "game",
    tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
    thumbnail: "/projects/game-fighting.svg",
    demo: site.github,
    source: site.github,
  },
  {
    id: "weather",
    category: "webapp",
    tech: ["HTML5", "CSS3", "JavaScript", "Fetch API"],
    thumbnail: "/projects/web-cuaca.svg",
    demo: site.github,
    source: site.github,
  },
  {
    id: "shopping",
    category: "ecommerce",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
    thumbnail: "/projects/web-shopping.svg",
    demo: site.github,
    source: site.github,
  },
];
