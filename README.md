# Portofolio — Muhammad Rizky Al-Hafidzi

Landing page portofolio satu halaman untuk **Muhammad Rizky Al-Hafidzi** — Web & Interactive Application Developer.
Konten mengikuti PRD portofolio; tampilan memakai design system **BeanMachine "Space Station"** (deep space gelap, aksen mint, ilustrasi planet/pegunungan kristal/pesawat).

**Live:** [maokii.vercel.app](https://maokii.vercel.app)

## Fitur

- **Dwibahasa** — Bahasa Indonesia (default) + toggle English. Berganti seketika tanpa pindah halaman; pilihan tersimpan di `localStorage`.
- **Dua tema** — Gelap (default) & terang ("langit siang"), tanpa kedipan saat dimuat (inline script sebelum paint). Semua warna diatur sebagai CSS variable di `app/globals.css`.
- **Halaman lengkap** — Hero (identitas + planet bercincin beranimasi), Tentang Saya, Keahlian Teknis (4 kategori), Galeri Proyek dengan **tab filter kategori**, dan Kontak.
- **Formulir kontak** — Validasi di sisi klien (nama, format email, subjek, panjang pesan) dengan pesan galat dwibahasa, lalu membuka aplikasi email lewat `mailto:`.
- **Interaksi halus** — scroll reveal, parallax hero, pelacakan section aktif di navbar, animasi float bintang/pesawat — semuanya menghormati `prefers-reduced-motion`. Animasi otomatis diringankan di layar kecil (≤ 767 px) agar tetap mulus di HP.
- **Aksesibel & responsif** — navigasi keyboard, skip-link, ARIA label, layout 360 px–1440 px+.

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Perintah lain: `npm run build`, `npm run start`, `npm run lint`.

## Struktur

```
app/
  layout.tsx          # font, metadata, script anti-flash tema, provider bahasa
  page.tsx            # komposisi section
  globals.css         # design token BeanMachine (tema gelap & terang), utility, animasi
  robots.ts, sitemap.ts, icon.svg
components/
  Navbar, Hero, About, Skills, Projects, Contact, Footer, SkipLink
  ThemeToggle, LanguageToggle          # kontrol navbar
  Avatar, SpaceBackground              # ilustrasi
  scenes/                              # HeroScene, FooterScene, helper bintang
  providers/LanguageProvider.tsx       # konteks kamus aktif
  ui/                                  # Button, Reveal, SectionHeading
lib/
  site.ts             # nama, email, GitHub, URL domain
  projects.ts         # data struktural 3 proyek (tech, thumbnail, tautan)
  dictionaries/       # id.ts (sumber tipe) + en.ts
  i18n.ts             # locale store (useSyncExternalStore)
  year.ts             # tahun footer via cache scope
public/projects/      # mockup SVG pratinjau proyek
```

## Placeholder yang tersisa

| Lokasi | Placeholder | Ganti dengan |
| --- | --- | --- |
| `lib/projects.ts` | `demo` & `source` | URL demo langsung & repo tiap proyek |
| `public/projects/*.svg` | mockup | tangkapan layar asli (nama berkas sama, sesuaikan ekstensi di `lib/projects.ts`) |

## Deploy

Produksi berjalan di Vercel (proyek `maokii`): [maokii.vercel.app](https://maokii.vercel.app).

```bash
vercel deploy --prod
```

## Teknologi

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Plus Jakarta Sans.
