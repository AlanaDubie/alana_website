import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Night/Dark Theme Toggle */}
        <ThemeToggle />

        {/* Nav bar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <ProjectSection />  
          <AboutSection />  
          <SkillsSection />
          <Contact />
        </main>

        {/* Footer */}

        <footer className="px-6 md:px-16 pb-10 max-w-7xl mx-auto flex justify-center">
          <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-foreground/30">
            © Copyright Alana Dubie 2024. All rights reserved.
          </p>
        </footer>
    </div>
  );
}