import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js memblokir sumber daya dev (chunk JS, HMR) dari origin lintas host
  // secara default. Tanpa ini, membuka situs dari perangkat lain di jaringan
  // lokal (mis. HP di http://<ip-laptop>:3000) memuat HTML-nya, tetapi semua
  // chunk JS dibalas 403 sehingga halaman tampil tanpa konten apa pun.
  // Berlaku hanya untuk `next dev` — build produksi tidak terpengaruh.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
