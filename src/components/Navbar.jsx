import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
     { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => { 
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-500", 
                isScrolled ? "py-3 px-4 bg-background/80 backdrop-blur-md border-b border-primary/10" : "py-5 px-4 bg-linear-to-b from-black/20 to-transparent"
            )}
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-serif font-light text-primary flex items-center tracking-wide"
                    href="#hero"
                > 
                    <span className="relative z-10 text-glow text-foreground">Alana Dubie</span>
                </a>

                {/* desktop nav items */}
                <div className="hidden md:flex space-x-10">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 hover:text-primary transition-colors duration-300"> 
                        {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav items */}
                <button 
                    onClick= {() => setIsMenuOpen((prev)=> !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8">
                    {navItems.map((item, key) => (
                        <a 
                            key={key}
                            href={item.href} 
                            className="font-mono text-sm uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                        {item.name}
                        </a>
                    ))}
                </div>

                </div>
                
            </div>
        </nav>);
}