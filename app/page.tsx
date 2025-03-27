import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoAnimation from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Stack from "@/components/Stack";
import { TimelineDemo } from "@/components/TimelineDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <TimelineDemo />
      <Stack />
      <LogoAnimation />
      <Contact />
      <Footer/>
    </>
  );
}
