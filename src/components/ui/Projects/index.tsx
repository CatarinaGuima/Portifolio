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
      className="relative py-16 sm:py-20 overflow-hidden bg-secondary-foreground/5 dark:bg-secondary-foreground/5"
    >
      <div className="container px-4 mx-auto">
        {/* Content container */}
        <div className="relative z-10">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-1 w-12 bg-gray-400 rounded-full" />
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-center">
                Meus Projetos
              </h3>
              <span className="h-1 w-12 bg-gray-400 rounded-full" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              Confira meus projetos destacados e todos os repositórios do GitHub
            </p>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col items-start gap-2 mb-8 md:ml-[8rem]">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Destaques
              </h4>
              <span className="h-1 w-16 bg-gradient-to-r from-text-primary to-text-secondary rounded-full" />
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loading size={48} />
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">
                Erro ao carregar projetos: {error}
              </div>
            ) : (
              <div className="flex flex-wrap gap-8 items-center justify-center">
                {highlightProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="w-full max-w-sm"
                  >
                    <HighlightsProjectsCard
                      imageUrl={project.imageUrl}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      demoUrl={project.demoUrl}
                      githubUrl={project.githubUrl}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* All Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col items-start gap-2 mb-8 md:ml-[8rem]">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Todos os Projetos
              </h4>
              <span className="h-1 w-16 bg-gradient-to-r from-text-primary to-text-secondary rounded-full" />
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loading size={48} />
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">
                Erro ao carregar projetos: {error}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AllProjecstCard projects={projects} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}