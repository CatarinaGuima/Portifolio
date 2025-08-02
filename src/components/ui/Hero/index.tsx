"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Olá, eu sou a <span className="text-brand">Catarina</span> 👋
          </h1>
          <p className="text-base md:text-lg opacity-80">
            Desenvolvedora Front-end focada em <strong>React</strong>, <strong>Next.js</strong> e <strong>TypeScript</strong>.
            Apaixonada por criar interfaces acessíveis e de alta performance.
          </p>
          <div className="flex gap-3">
            <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
            <a href="#contato" className="btn btn-ghost">Contato</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="justify-self-center"
        >
          {/* Placeholder do avatar/foto */}
          <div className="size-40 md:size-56 rounded-2xl border bg-gradient-to-br from-brand/10 to-brand/30 flex items-center justify-center text-brand font-bold">
            CG
          </div>
        </motion.div>
      </div>
    </section>
  );
}
