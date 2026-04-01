"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Lock } from "lucide-react";

type ProjectType = typeof projects[0];

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleTechs = expanded ? project.technologies : project.technologies.slice(0, 3);
  const hiddenCount = project.technologies.length - 3;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden group flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-black/5 dark:bg-white/5 shrink-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs font-semibold tracking-wider text-primary mb-2 uppercase">
          {project.theme}
        </span>
        <h3 className="text-2xl font-bold mb-3 text-foreground">{project.name}</h3>

        <motion.div layout className="flex flex-wrap gap-2 mb-6">
          <AnimatePresence>
            {visibleTechs.map((tech) => (
              <motion.span
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </motion.span>
            ))}
          </AnimatePresence>
          {!expanded && hiddenCount > 0 && (
            <motion.button
              layout
              onClick={() => setExpanded(true)}
              className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-foreground/60 border border-foreground/10 hover:bg-foreground/10 transition-colors cursor-pointer"
            >
              +{hiddenCount}
            </motion.button>
          )}
        </motion.div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-foreground/10">
          <a
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} /> Deploy
          </a>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors text-sm font-medium"
            >
              <Github size={16} /> GitHub
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors text-sm font-medium"
            >
              <Lock size={16} /> Privado
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/5 dark:bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Meus <span className="text-gradient">Projetos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-xl mx-auto"
          >
            Alguns dos trabalhos que desenvolvi. Explore o código ou veja a aplicação rodando.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
