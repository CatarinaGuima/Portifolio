"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Figma",
  "Java",
  "Python",
  "Git",
  "GitHub",
  "Netlify",
  "Vercel",
  "Vscode",
  "Trello",
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        {/* Background title */}
        <motion.h2 
          className="text-[80px] md:text-[120px] font-extrabold uppercase text-gray-800 dark:text-gray-200 opacity-10 select-none pointer-events-none leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          Minhas Skills
        </motion.h2>

        {/* Main content container */}
        <div className="relative z-10">
          {/* Animated title */}
          <motion.h3
            className="text-4xl font-bold bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text text-transparent mb-12 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Habilidades
          </motion.h3>

          {/* Skills list */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ul className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  className="px-4 py-2 text-sm md:text-base bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#8f00ff",
                    color: "#ffffff"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}