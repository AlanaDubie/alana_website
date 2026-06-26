import { ThemeToggle }   from "../components/ThemeToggle";
import { Navbar }        from "../components/Navbar";
import { HeroSection }   from "../components/HeroSection";
import { AboutSection }  from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { Contact }       from "../components/Contact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />

      <main>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
        <Contact />
      </main>

      {/* Footer — caption tier */}
      <footer className="px-6 md:px-16 pb-10 max-w-7xl mx-auto flex justify-center">
        <p className="caption-text">© Copyright Alana Dubie 2026. All rights reserved.</p>
      </footer>
    </div>
  );
};