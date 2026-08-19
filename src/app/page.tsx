import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MusicProduction } from "@/components/MusicProduction";
import { YoutubeSection } from "@/components/YoutubeSection";
import { BeatStore } from "@/components/BeatStore";
import { AudioPostProduction } from "@/components/AudioPostProduction";
import { Companies } from "@/components/Companies";
import { AboutMe } from "@/components/AboutMe";
import { Expertise } from "@/components/Expertise";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionReveal>
          <MusicProduction />
        </SectionReveal>
        <SectionReveal delay={50}>
          <AudioPostProduction />
        </SectionReveal>
        <SectionReveal direction="left" delay={100}>
          <YoutubeSection />
        </SectionReveal>
        <SectionReveal>
          <BeatStore />
        </SectionReveal>
        <SectionReveal delay={50}>
          <Companies />
        </SectionReveal>
        <SectionReveal direction="right">
          <AboutMe />
        </SectionReveal>
        <SectionReveal delay={100}>
          <Contact />
        </SectionReveal>
      </main>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </>
  );
}

