import { useState } from "react";
import { ThemeToggle }   from "../components/ThemeToggle";
import { Navbar }        from "../components/Navbar";
import { HeroSection }   from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { DemoReelSection } from "../components/DemoReelSection";
import { Contact }       from "../components/Contact";
import { AboutSection }   from "../components/AboutSection";

export const Home = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar
        onAboutClick={() => setIsAboutOpen(true)}
        onNavigate={() => setIsAboutOpen(false)}
      />

      <main>
        <HeroSection />
        <ProjectSection />
        <DemoReelSection />
        <Contact />
      </main>

      {/* Footer — caption tier */}
      <footer className="px-6 md:px-16 pb-10 max-w-7xl mx-auto flex justify-center">
        <p className="caption-text">© Copyright Alana Dubie 2026. All rights reserved.</p>
      </footer>

      {isAboutOpen && <AboutSection onClose={() => setIsAboutOpen(false)} />}
    </div>
  );
};