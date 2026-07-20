import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const navItems = [
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT",    href: "#about"    },
  { name: "CONTACT",  href: "#contact"  },
];

export const Navbar = () => {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMenuOpen,  setIsMenuOpen]  = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-500",
          isScrolled
            ? "py-3 px-4 bg-background/90 backdrop-blur-md border-b border-primary/15"
            : "py-5 px-4 pb-10 backdrop-blur-sm mask-[linear-gradient(to_bottom,black_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
        )}
      >
        <div className="container flex items-center justify-between relative">

          {/* Logo — Fraunces serif 300 */}
          <a href="#hero" className="t-h2 font-normal font-serif tracking-tight text-lg text-foreground hover:text-primary transition-colors duration-300">
            Alana Dubie
          </a>

          {/* Desktop nav — caption-text utility */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="caption-text font-medium tracking-[0.2em] text-foreground/55 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger toggle */}
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-foreground relative z-50"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={cn(
        "fixed top-0 left-0 w-full h-screen bg-background backdrop-blur-md z-40 flex flex-col md:hidden",
        "transition-all duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Overlay header row */}
        <div className="flex items-center justify-between px-4 py-5">
          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="t-h2 font-normal font-serif tracking-tight text-lg text-foreground hover:text-primary transition-colors duration-300"
          >
            Alana Dubie
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-foreground relative z-50"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="eyebrow normal-case text-foreground/60 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="flex gap-6 justify-center pt-4 mt-49">
            <a href="mailto:alanaldubie@gmail.com"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <MdEmail size={25} />
            </a>
            <a href="https://linkedin.com/in/alana-dubie" target="_blank" rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <FaLinkedin size={25} />
            </a>
            <a href="https://github.com/alanadubie" target="_blank" rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <FaGithub size={25} />
            </a>
            <a href="https://discord.com/users/alana808" target="_blank" rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <FaDiscord size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};