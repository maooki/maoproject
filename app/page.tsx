import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SkipLink } from "@/components/SkipLink";
import { SpaceBackground } from "@/components/SpaceBackground";
import { getCurrentYear } from "@/lib/year";

export default async function Home() {
  const year = await getCurrentYear();

  return (
    <>
      <SpaceBackground />
      <SkipLink />
      <Navbar />
      <main id="main-content" className="relative flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer year={year} />
    </>
  );
}
