"use client";
import Antigravity from "./react-bits/Antigravity";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-background">
        <Antigravity
          color="#8b5cf6"
          count={400}
          particleSize={1.2}
          ringRadius={8}
          magnetRadius={25}
          lerpSpeed={0.08}
          isRepelled={true}
          autoAnimate={true}
          particleShape="capsule"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 text-center space-y-8 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-glass-border glass text-sm font-medium mb-4 pointer-events-auto"
        >
          👋 Olá, eu sou Kayky Dion
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Desenvolvedor <span className="text-gradient">Full Stack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construindo produtos incríveis com Clean Code e foco em performance.
          Bem-vindo ao meu portfólio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
          >
            Ver Projetos <ArrowRight size={18} />
          </a>
          <div className="flex gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/KaykyDion"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none p-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all flex items-center justify-center hover:-translate-y-1 border border-foreground/10"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaykydion/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none p-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all flex items-center justify-center hover:-translate-y-1 border border-foreground/10"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none p-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all flex items-center justify-center hover:-translate-y-1 border border-foreground/10"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
