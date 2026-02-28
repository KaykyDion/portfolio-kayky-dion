"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Desenvolvedor Full-Stack",
      company: "Aliar Sistemas",
      date: "08/2025 - Presente",
      description: "Desenvolvimento e manutenção de um produto voltado a clínicas médicas, com foco em automações inteligentes para otimizar fluxos. Responsável pela integração de novas funcionalidades e expansão do ecossistema, aplicando boas práticas de arquitetura como SOLID e Repository Pattern."
    },
    {
      type: "work",
      title: "Estagiário em Dev. de Software",
      company: "Aliar Sistemas",
      date: "04/2025 - 08/2025",
      description: "Desenvolvimento de painel de relatórios integrado ao GA4 e Meta API. Mapeamento de leads via Webhooks (Moskit CRM) e automações do Instagram com IA."
    },
    {
      type: "education",
      title: "Engenharia de Software (Bacharelado)",
      company: "Unicesumar",
      date: "02/2024 - 02/2028",
      description: "Graduação com ênfase em engenharia de requisitos, design de software, e arquiteturas escaláveis."
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-zinc-900/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Trilha de <span className="text-gradient">Carreira</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400"
          >
            Minha jornada acadêmica e profissional até o momento.
          </motion.p>
        </div>

        <div className="relative border-l border-foreground/10 ml-4 md:ml-0 md:pl-0 md:w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-12 relative pl-8 md:pl-0 md:flex items-center group w-full"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1 w-[11px] h-[11px] rounded-full bg-primary ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all z-10" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                <div className="glass p-6 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors border border-foreground/5">
                  <div className={`flex items-center gap-3 mb-2 text-primary ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-foreground/80 mb-2">{exp.company}</h4>
                  <div className={`flex items-center gap-2 text-sm text-foreground/60 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
