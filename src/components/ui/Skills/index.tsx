"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Badge } from "../Badge";

// Ícones locais
import iconTrello from "@/assets/images/trello.png";
import iconFrontEnd from "@/assets/images/frontend.png";
import iconBackEnd from "@/assets/images/backend.png";
import iconFrameworks from "@/assets/images/frameworks.png";
import iconDevOps from "@/assets/images/devops.png";
import iconTools from "@/assets/images/tools.png";


interface SkillProps {
  id: string;
  icon: string;
  title: string;
}

interface SkillCategory {
  image: StaticImageData;
  name: string;
  skills: SkillProps[];
}

const skillCategories: SkillCategory[] = [
  {
    image: iconFrontEnd,
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
    image: iconBackEnd,
    name: "Backend",
    skills: [
      { id: "nodejs", icon: "nodejs", title: "Node.js" },
      { id: "python", icon: "python", title: "Python" },
      { id: "java", icon: "java", title: "Java" },
    ],
  },
  {
    image: iconFrameworks,
    name: "Frameworks",
    skills: [
      { id: "nextjs", icon: "nextjs", title: "Next.js" },
      { id: "tailwind", icon: "tailwind", title: "Tailwind" },
    ],
  },
  {
    image: iconDevOps,
    name: "DevOps",
    skills: [
      { id: "git", icon: "git", title: "Git" },
      { id: "github", icon: "github", title: "GitHub" },
      { id: "netlify", icon: "netlify", title: "Netlify" },
      { id: "vercel", icon: "vercel", title: "Vercel" },
    ],
  },
  {
    image: iconTools,
    name: "Tools",
    skills: [
      { id: "figma", icon: "figma", title: "Figma" },
      { id: "vscode", icon: "vscode", title: "VSCode" },
      { id: "trello", icon: "trello", title: "Trello" },
    ],
  },
];

export default function Skills() {

  const renderIcon = (skill: SkillProps) => {
    const isTrello = skill.icon === "trello";

    return (
      <Image
        src={
          isTrello ? iconTrello : `https://skillicons.dev/icons?i=${skill.icon}`
        }
        alt={skill.title}
        width={20}
        height={20}
        className="object-contain"
        unoptimized={!isTrello}
      />
    );
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20 sm:py-20 relative overflow-hidden "
    >
      {/* Header */}
      <div className="container mx-auto px-4 text-center relative flex flex-col justify-center items-center mt-4">
        <motion.h2
          className="text-[4rem] md:text-[5rem] font-extrabold uppercase text-gray-500 opacity-10 select-none pointer-events-none absolute leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          Minhas Skills
        </motion.h2>

        <motion.h3
          className="relative z-10 text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-main-purple to-main-lilac bg-clip-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Habilidades
        </motion.h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full px-4">
        {skillCategories.map((category) => (
          <motion.div
          
            key={category.name}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-200/30 dark:border-gray-700/30 hover:shadow-xl transition-all my-8 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
          >
            {/* Category header */}
            <div className="flex flex-col items-center mb-4">
              <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-200/30 dark:border-gray-700/30 -mt-10">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mt-2">
                {category.name}
              </h4>
            </div>

            {/* Skills list */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  layout
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/20 dark:bg-black/30 rounded-lg px-3 py-2 hover:bg-white/30 dark:hover:bg-black/40 transition-colors min-w-[8rem]"
                >
                  <div className=" flex items-center justify-center">
                    {renderIcon(skill)}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-center"
                  >
                    {skill.title}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}