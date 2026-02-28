"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { env } from "@/lib/env";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Vamos <span className="text-gradient">Conversar!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400"
          >
            Tem um projeto em mente ou quer apenas bater um papo? Entre em contato.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">E-mail</h3>
                <p className="text-zinc-400 text-sm mb-3">Estou sempre disponível para responder suas dúvidas por e-mail.</p>
                <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`} className="text-primary hover:text-primary/80 font-medium transition-colors">
                  {env.NEXT_PUBLIC_EMAIL}
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl flex items-start gap-4 hover:border-accent/30 transition-colors">
              <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                <p className="text-zinc-400 text-sm mb-3">Conecte-se comigo pelo LinkedIn para acompanharmos nossos progressos.</p>
                <a href="https://linkedin.com/in/kayky-dion" target="_blank" rel="noreferrer" className="text-accent hover:text-accent/80 font-medium transition-colors">
                  Acessar Perfil
                </a>
              </div>
            </div>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl flex flex-col gap-4 border border-foreground/10"
          >
            <h3 className="text-2xl font-bold mb-2 text-foreground">Envie uma mensagem</h3>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-foreground/70 ml-1">Nome</label>
              <input type="text" id="name" placeholder="Seu nome" className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground placeholder-foreground/40" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-foreground/70 ml-1">E-mail</label>
              <input type="email" id="email" placeholder="seu@email.com" className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground placeholder-foreground/40" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-foreground/70 ml-1">Mensagem</label>
              <textarea id="message" rows={4} placeholder="Como posso ajudar?" className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none text-foreground placeholder-foreground/40" />
            </div>
            <button type="button" className="mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
              Enviar Mensagem <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
