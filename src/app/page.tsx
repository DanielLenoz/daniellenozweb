import Image from "next/image";
import { HeroSection } from "./components/heroSection";
import { AboutSection } from "./components/aboutSection";
import { ExperienceSection } from "./components/experienceSection";
import { ProjectsSection } from "./components/projectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
