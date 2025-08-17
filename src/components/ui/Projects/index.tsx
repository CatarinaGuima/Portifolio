"use client";

import { motion } from "framer-motion";
import { useGithubProjects } from "@/app/api/github/projects";
import { Loading } from "@/components/ui/Loading";
import highlightProjects from "@/data/highlightProjects"; 
import HighlightsProjectsCard from "../HighlightsProjects";
import AllProjecstCard from "@/components/ui/AllProjectsCard";

export default function Projects() {
  const { projects, loading, error } = useGithubProjects("CatarinaGuima");

  return (
    <section
      id="projetos"
      className="relative py-20 sm:py-24 overflow-hidden bg-black/5 dark:bg-white/5"
    >
      <div className="container px-4 mx-auto">
        {/* Content container */}
        <div className="relative z-10">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="h-1 w-16 bg-gray-500 rounded-full" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text">
              Meus Projetos
            </h3>
            <span className="h-1 w-16 bg-gray-500 rounded-full" />
          </motion.div>

          {/* Decorative elements */}
          <div className="flex flex-col items-start gap-2 mx-[8rem]">
            <h4 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-500 flex items-center">
              Destaques
            </h4>
            <span className="h-1 w-16 bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] rounded-full" />
          </div>

          {/* Projects content */}
          {loading ? (
            <div className="flex justify-center py-8">
              <Loading size={48} />
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              Error loading projects: {error}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center gap-4 my-[2rem]"
            >
              {highlightProjects.map((project) => (
                <HighlightsProjectsCard
                  key={project.title}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </motion.div>
          )}

          {/* Decorative elements */}
          <div className="flex flex-col items-start gap-2 mx-[8rem] mt-12 mb-8">
            <h4 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 flex items-center">
              Todos
            </h4>
            <span className="h-1 w-16 bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] rounded-full" />
          </div>

          {/* All Projects content */}
          {loading ? (
            <div className="flex justify-center py-8">
              <Loading size={48} />
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              Error loading projects: {error}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <AllProjecstCard projects={projects} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
