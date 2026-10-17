import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandFull} — ${site.role}`,
    template: `%s · ${site.brandFull}`,
  },
  description:
    "Portofolio Muhammad Rizky Al-Hafidzi, siswa kelas 11 yang membangun antarmuka web modern, sistem back-end dinamis, dan gim interaktif. Jelajahi tiga proyek unggulan: Game Fighting, Web Cuaca, dan Web Shopping.",
  keywords: [
    "Muhammad Rizky Al-Hafidzi",
    "portofolio",
    "web developer",
    "front-end",
    "JavaScript",
    "PHP",
    "game development",
    "siswa kelas 11",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.brandFull,
    title: `${site.brandFull} — ${site.role}`,
    description:
      "Antarmuka web modern, back-end dinamis, dan gim interaktif — portofolio karya Muhammad Rizky Al-Hafidzi.",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: `${site.brandFull} — ${site.role}`,
    description:
      "Antarmuka web modern, back-end dinamis, dan gim interaktif — portofolio karya Muhammad Rizky Al-Hafidzi.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0726",
  colorScheme: "dark light",
};

/**
 * Script sinkron sebelum paint: menerapkan tema & bahasa tersimpan agar tidak
 * ada kedipan (flash) konten terang di atas tema gelap. Pola resmi dari
 * docs Next.js "preventing flash before hydration".
 */
const themeScript = `(function(){try{var d=document.documentElement;if(localStorage.getItem("portfolio-theme")==="light"){d.setAttribute("data-theme","light")}if(localStorage.getItem("portfolio-locale")==="en"){d.lang="en"}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-theme="dark"
      suppressHydrationWarning
      className={`${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
