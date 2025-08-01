import Image from "next/image";
import { HeroSection } from "./components/heroSection/heroSection";
import { AboutSection } from "./components/aboutSection";
import { ExperienceSection } from "./components/experienceSection";
import { ProjectsSection } from "./components/projectsSection";
import { SkillsSection } from "./components/skillSection";
import { ContactSection } from "./components/contactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
