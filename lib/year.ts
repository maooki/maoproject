import { cacheLife } from "next/cache";

/**
 * Tahun berjalan untuk copyright footer.
 *
 * Cache Components melarang pembacaan `new Date()` saat prerender, sehingga
 * nilainya dihitung di dalam scope cache. `max` menjaga nilainya stabil selama
 * deployment dan diperbarui pada deployment berikutnya.
 */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}
