import { Sun, Moon } from "lucide-react"; 
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {

/* Dark is now the default. isDarkMode is true unless the user
   has explicitly stored "light" in a previous visit. */
const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme !== "light";
});

useEffect(() => {
    if (isDarkMode) {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
    }
}, [isDarkMode]);

    /* Toggle between dark (default, no class) and light (.light class) */
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
    <button onClick={toggleTheme} className={cn("fixed max-md:hidden lg:right-5 right-1 z-50 p-3 rounded-full transition-colors duration-300",
        "focus:outline-hidden "
    )}>
        {isDarkMode ? (
        <Sun className="h-6 w-6 text-accent" strokeWidth={1.5} />
        ) : (
        <Moon className="h-6 w-6 text-primary" strokeWidth={1.5} />
        )}
    </button>
    );
};