"use client";
import { motion, Variants } from "framer-motion";
import { technologies } from "@/lib/data";

const floatVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const allSkills = [
    ...technologies.frontEnd,
    ...technologies.backEnd,
    ...technologies.languages,
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Minhas <span className="text-gradient">Habilidades</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl mx-auto"
          >
            Tecnologias e ferramentas que domino para construir aplicações modernas, escaláveis e de alta performance.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={floatVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-5 rounded-2xl flex flex-col items-center gap-3 w-28 hover:border-primary/50 transition-colors group border border-foreground/5 dark:border-white/5"
            >
              <div className="relative w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-foreground/5 group-hover:bg-primary/10 transition-colors">
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain filter group-hover:brightness-110" />
              </div>
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
