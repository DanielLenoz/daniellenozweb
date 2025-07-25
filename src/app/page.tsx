import Image from "next/image";
import { HeroSection } from "./components/heroSection";
import { AboutSection } from "./components/aboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
