"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { useGithubProjects } from "@/app/api/github/projects";

export default function Projects() {
  const projects = useGithubProjects("CatarinaGuima");
  return (
    <section id="projetos" className=" bg-black/5 dark:bg-white/5 py-12 ">
      <div className="container mx-auto px-4 text-center relative mt-6">
        {/* Animated title */}
        <motion.h3
          className="relative z-10 text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h3>

        <div className="">Destaques</div>

        {/* Carrossel de projetos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ProjectCard projects={projects.projects} />
        </motion.div>
      </div>
    </section>
  );
}
