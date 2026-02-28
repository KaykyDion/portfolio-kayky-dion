"use client";
import { motion } from "framer-motion";
import { Terminal, Code, Database, Sparkles } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Clean Code",
      description: "Escrevo código limpo, legível e de fácil manutenção, seguindo as melhores práticas e padrões de projeto.",
      icon: <Code size={24} className="text-primary" />
    },
    {
      title: "Full Stack",
      description: "Experiência desde a construção de interfaces interativas até a modelagem de bancos de dados complexos e APIs robustas.",
      icon: <Terminal size={24} className="text-accent" />
    },
    {
      title: "Performance",
      description: "Foco em otimização, entregando aplicações rápidas e responsivas para a melhor experiência do usuário.",
      icon: <Sparkles size={24} className="text-yellow-500" />
    },
    {
      title: "Arquitetura",
      description: "Desenho de soluções estruturadas e escaláveis, utilizando as melhores ferramentas para cada necessidade do cliente.",
      icon: <Database size={24} className="text-green-500" />
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                Desenvolvedor Full-Stack com vasta experiência em React, Next.js, TypeScript, Node.js e Python. Tenho domínio tanto na criação de interfaces interativas e responsivas (usando TailwindCSS, Styled-components e UI libraries), quanto no fluxo de dados de aplicação no Back-End.
              </p>
              <p>
                No lado do servidor, construo APIs RESTful sólidas utilizando ferramentas como Express, Fastify, Django e bancos de dados SQL. Utilizo práticas avançadas de arquitetura de software (como SOLID e Repository Pattern) baseadas em metodologias ágeis, mantendo sempre o foco em escalabilidade.
              </p>
              <p>
                Sou motivado pela construção de aplicações modernas e completas. Acredito que a excelência técnica através de testes automatizados (Jest, Cypress, E2E) e código sustentável resulta na melhor experiência para o usuário.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-2xl border border-foreground/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{card.title}</h3>
                <p className="text-sm text-foreground/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
