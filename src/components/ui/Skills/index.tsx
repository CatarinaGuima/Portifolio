"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "../Badge";

interface SkillProps {
  id: string;
  icon: string;
  title: string;
}

interface SkillCategory {
  name: string;
  skills: SkillProps[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { id: "html", icon: "html", title: "HTML" },
      { id: "css", icon: "css", title: "CSS" },
      { id: "javascript", icon: "javascript", title: "JavaScript" },
      { id: "typescript", icon: "typescript", title: "TypeScript" },
      { id: "react", icon: "react", title: "React" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { id: "nodejs", icon: "nodejs", title: "Node.js" },
      { id: "python", icon: "python", title: "Python" },
      { id: "java", icon: "java", title: "Java" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { id: "nextjs", icon: "nextjs", title: "Next.js" },
      { id: "tailwind", icon: "tailwind", title: "Tailwind" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { id: "git", icon: "git", title: "Git" },
      { id: "github", icon: "github", title: "GitHub" },
      { id: "netlify", icon: "netlify", title: "Netlify" },
      { id: "vercel", icon: "vercel", title: "Vercel" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { id: "figma", icon: "figma", title: "Figma" },
      { id: "vscode", icon: "vscode", title: "VSCode" },
      { id: "trello", icon: "trello", title: "Trello" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        {/* Background title */}
        <motion.h2
          className="text-[4rem] md:text-[6rem] font-extrabold uppercase text-gray-800 dark:text-gray-200 opacity-10 select-none pointer-events-none leading-none absolute w-full"
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

          {/* Skills categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card/20 rounded-xl p-6 shadow-lg border border-border/50"
              >
                <h4 className="text-xl font-bold mb-4 text-primary">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-2 bg-secondary/10 dark:bg-secondary/40 rounded-lg px-3 py-2 hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors"
                    >
                      {skill.icon && (
                        <div className="relative h-5 w-5">
                          <Image
                            src={`https://skillicons.dev/icons?i=${skill.icon}`}
                            alt={skill.title}
                            width={20}
                            height={20}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <Badge variant={"outline"} className="text-sm font-medium">{skill.title}</Badge>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}