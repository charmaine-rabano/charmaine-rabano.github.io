import { SkipLink } from "@/components/layout/SkipLink";
import { Sheet } from "@/components/layout/Sheet";
import { Marquee } from "@/components/layout/Marquee";
import { Nav } from "@/components/layout/Nav/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip/ProofStrip";
import { Services } from "@/components/sections/Services/Services";
import { Work } from "@/components/sections/Work/Work";
import { Experience } from "@/components/sections/Experience/Experience";
import { Skills } from "@/components/sections/Skills/Skills";
import { HowIWork } from "@/components/sections/HowIWork/HowIWork";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Sheet>
        <Marquee />
        <Nav />
        <main id="main">
          <Hero />
          <ProofStrip />
          <Services />
          <Work />
          <Experience />
          <Skills />
          <HowIWork />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </Sheet>
    </>
  );
}
