"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="section bg-black/5 dark:bg-white/5 py-12">
      <div className="container mx-auto px-4 text-center relative">
        {/* Animated title */}
        <motion.h3
          className="text-4xl font-bold bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text text-transparent mb-12 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h3>

        {/* Carrossel de projetos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
        <ProjectCard projects={projects} />
        </motion.div>
      </div>
    </section>
  );
}