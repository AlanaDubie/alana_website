import { Sun, Moon } from "lucide-react"; 
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {

const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
});

useEffect(() => {
    if (isDarkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}, [isDarkMode]);

    /* Toggle between light and dark mode */
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
    <button onClick={toggleTheme} className={cn("fixed max-md:hidden lg:right-5 right-1 z-50 p-3 rounded-full transition-colors duration-300",
        "focus:outline-hidden "
    )}>
        {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
        <Moon className="h-6 w-6 text-blue-900" />
        )}
    </button>
    );
};