"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">
          KD.
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">Sobre</a>
          <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Habilidades</a>
          <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">Experiência</a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projetos</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contato</a>
          <ThemeToggle />
        </div>

        {/* Mobile Theme Toggle */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
