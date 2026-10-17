/**
 * Kamus Bahasa Indonesia (default).
 * Tipe `Dictionary` diturunkan dari objek ini, sehingga versi English
 * (`en.ts`) wajib memiliki bentuk yang sama persis.
 */
export const id = {
  nav: {
    items: [
      { label: "Beranda", href: "#home" },
      { label: "Tentang", href: "#about" },
      { label: "Keahlian", href: "#skills" },
      { label: "Proyek", href: "#projects" },
    ],
    contact: "Kontak",
  },
  a11y: {
    primaryNav: "Navigasi utama",
    homeLink: "MaoProject — kembali ke beranda",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    toggleTheme: "Ganti tema terang atau gelap",
    languageGroup: "Pilih bahasa",
    idOption: "Bahasa Indonesia",
    enOption: "English",
    footerNav: "Navigasi footer",
    backToTop: "Kembali ke atas",
    skipToContent: "Lewati ke konten utama",
  },
  hero: {
    greeting: "Halo, saya",
    role: "Web & Interactive Application Developer",
    grade: "Siswa Kelas 11",
    tagline:
      "Saya membangun antarmuka web modern, sistem back-end yang dinamis, dan logika gim interaktif — dari HTML, CSS, dan JavaScript hingga PHP.",
    ctaProjects: "Lihat Proyek Saya",
    ctaContact: "Hubungi Saya",
    avatarAlt: "Ilustrasi avatar astronot Muhammad Rizky Al-Hafidzi",
  },
  about: {
    eyebrow: "Tentang Saya",
    title: "Belajar, membangun,",
    accent: "dan terus meluncur.",
    paragraphs: [
      "Saya Muhammad Rizky Al-Hafidzi, siswa kelas 11 yang punya ketertarikan mendalam pada rekayasa perangkat lunak. Saya menikmati proses mengubah ide menjadi produk yang bisa dipakai: merancang antarmuka web yang modern, menulis logika back-end yang dinamis, dan menciptakan pengalaman interaktif seperti gim berbasis browser.",
      "Setiap proyek saya kerjakan sebagai ruang belajar — mulai dari menyusun struktur HTML yang semantik, merapikan tampilan dengan CSS, sampai memproses data dengan JavaScript dan PHP. Cara terbaik untuk berkembang, menurut saya, adalah dengan membangun hal nyata sekecil apa pun itu.",
    ],
    cards: [
      {
        title: "Pendidikan",
        body: "Siswa Kelas 11 yang suka bereksperimen dengan banyak hal.",
      },
      {
        title: "Fokus Eksplorasi",
        body: "Pengembangan web full-stack (HTML/CSS/JS/PHP) dan logika gim interaktif berbasis web.",
      },
    ],
    nowTitle: "Sedang dipelajari",
    now: ["Tailwind CSS", "PHP & basis data", "Logika gim canvas", "Git & versioning"],
  },
  skills: {
    eyebrow: "Keahlian Teknis",
    title: "Alat dan bahasa",
    accent: "yang saya pakai",
    description:
      "Kombinasi dasar yang saya gunakan sehari-hari untuk membangun halaman, aplikasi, dan gim di web.",
    items: [
      {
        title: "Front-End",
        tech: "HTML5 · CSS3 · JavaScript (ES6+)",
        body: "Struktur semantik, animasi antarmuka, manipulasi DOM, dan logika canvas gim.",
      },
      {
        title: "Back-End & Server",
        tech: "PHP",
        body: "Pemrosesan data sisi server, manajemen sesi keranjang belanja, dan integrasi basis data.",
      },
      {
        title: "Framework & Library",
        tech: "Tailwind CSS · Bootstrap · Library pendukung",
        body: "Percepatan styling responsif serta struktur aplikasi JS dan PHP yang modular.",
      },
      {
        title: "Alat Pengembangan",
        tech: "Git · Code Editor · Browser DevTools",
        body: "Manajemen versi kode, debugging performa, dan pengujian tampilan lintas perangkat.",
      },
    ],
  },
  projects: {
    eyebrow: "Galeri Proyek",
    title: "Tiga proyek",
    accent: "unggulan",
    description:
      "Studi kasus nyata yang menunjukkan rentang kemampuan saya — dari gim interaktif hingga alur transaksi e-commerce.",
    filterAll: "Semua",
    categories: {
      game: "Game Development",
      webapp: "Web App",
      ecommerce: "E-Commerce",
    },
    items: {
      "game-fighting": {
        title: "Game Fighting",
        description:
          "Gim pertarungan dua pemain langsung di browser. Dibangun dengan canvas HTML5 untuk mendeteksi tabrakan, mengelola state pertarungan, dan merender animasi setiap frame.",
        features: [
          "Mode 2 pemain & AI",
          "Health bar dan timer",
          "Kontrol papan ketik responsif",
        ],
      },
      weather: {
        title: "Web Cuaca",
        description:
          "Aplikasi cuaca yang mengambil data real-time dari API publik. Pengguna mencari kota, lalu melihat suhu, kelembapan, dan kecepatan angin dengan ikon kondisi yang berubah dinamis.",
        features: [
          "Pencarian kota real-time",
          "Suhu, kelembapan & kecepatan angin",
          "Ikon cuaca dinamis",
        ],
      },
      shopping: {
        title: "Web Shopping",
        description:
          "Simulasi toko online dengan katalog produk, pencarian dan filter, keranjang belanja, hingga alur checkout. Logika keranjang dan kalkulasi harga diproses dengan JavaScript dan PHP.",
        features: [
          "Katalog produk dengan filter",
          "Keranjang & kalkulasi total",
          "Simulasi alur checkout",
        ],
      },
    },
    liveDemo: "Live Demo",
    source: "Source Code",
    moreOnGithub: "Lihat proyek lain di GitHub",
  },
  contact: {
    eyebrow: "Kontak",
    title: "Punya ide? Mari",
    accent: "berkolaborasi.",
    description:
      "Terbuka untuk kolaborasi proyek, kompetisi, maupun sekadar berdiskusi soal web dan gim. Kirim pesan lewat formulir atau temukan saya di GitHub.",
    emailCardTitle: "Email",
    githubCardTitle: "GitHub",
    form: {
      name: "Nama",
      namePlaceholder: "Nama Anda",
      email: "Email",
      emailPlaceholder: "nama@email.com",
      subject: "Subjek",
      subjectPlaceholder: "Apa yang ingin dibahas?",
      message: "Pesan",
      messagePlaceholder: "Ceritakan proyek, ide, atau pertanyaan Anda…",
      submit: "Kirim Pesan",
      errors: {
        name: "Mohon isi nama Anda.",
        email: "Masukkan alamat email yang valid.",
        subject: "Mohon isi subjek pesan.",
        message: "Mohon tulis pesan Anda, minimal 10 karakter.",
      },
      idle: "Tombol ini akan membuka aplikasi email Anda dengan pesan yang sudah terisi otomatis.",
      success:
        "Terima kasih! Aplikasi email Anda seharusnya terbuka dengan pesan yang siap dikirim.",
      successFallback: "Jika tidak terbuka, kirim langsung ke",
    },
  },
  footer: {
    tagline:
      "Membangun antarmuka web dan pengalaman interaktif — satu baris kode setiap hari.",
    rights: "Seluruh hak cipta dilindungi.",
    builtWith: "Dibangun dengan Next.js, Tailwind CSS, dan tema Space Station.",
  },
};

/** Bentuk kamus yang dikunci dari versi Bahasa Indonesia. */
export type Dictionary = typeof id;
