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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MusicProduction />
        <AudioPostProduction />
        <YoutubeSection />
        <BeatStore />
        <Companies />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
