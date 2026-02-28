"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // skeleton shape
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full glass hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center relative overflow-hidden group"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className="absolute inset-0 transform transition-transform duration-500 text-foreground"
          size={20}
          style={{
            opacity: theme === "dark" ? 0 : 1,
            transform: theme === "dark" ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)",
          }}
        />
        <Moon
          className="absolute inset-0 transform transition-transform duration-500 text-foreground"
          size={20}
          style={{
            opacity: theme === "dark" ? 1 : 0,
            transform: theme === "dark" ? "rotate(0) scale(1)" : "rotate(90deg) scale(0)",
          }}
        />
      </div>
    </button>
  );
}
