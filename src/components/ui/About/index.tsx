"use client";

import { motion } from "framer-motion";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  const socialLinks = [
    {
      icon: <FiGithub size={25} />,
      label: "GitHub",
      href: "https://github.com/catarinaguima",
      aria: "GitHub profile",
    },
    {
      icon: <FiLinkedin size={25} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/catarinaguimaraess/",
      aria: "LinkedIn profile",
    },
    {
      icon: <FiMail size={25} />,
      label: "E-mail",
      href: "mailto:catarina.guimaraes15@gmail.com",
      aria: "Send email",
    },
  ];

  const highlightedTech = ["React", "Next.js", "TypeScript"];
  const highlightedProjects = [
    "Pro Lidera Skills",
    "Sistema de Gerenciamento de Manutenção Industrial (SGM)",
  ];

  return (
    <section
      id="sobre"
      className="relative flex items-center justify-center py-12 sm:py-24 bg-black/5 dark:bg-white/5 min-h-screen w-full"
    >
      <div className=" max-w-4xl px-6 mx-auto">
        {/* Animated Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-transparent bg-gradient-to-r from-main-purple to-main-lilac bg-clip-text text-3xl sm:text-5xl font-bold leading-tight">
            <Typewriter
              words={["Um pouco mais sobre mim!"]}
              loop={false}
              cursor
              cursorColor="#8f00ff"
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </motion.div>

        {/* Content */}
        <div className="text-lg font-medium text-gray-500 dark:text-gray-300 space-y-6 text-justify">
          {/* First Paragraph */}

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="indent-8 leading-relaxed"
          >
            Com dupla formação em Administração e Análise e Desenvolvimento de
            Sistemas. Tenho vivência prática em projetos Web e mobile,
            explorando tecnologias como{" "}
            {highlightedTech.map((tech, index) => (
              <React.Fragment key={tech}>
                <span className="text-primary font-bold">
                  {tech}
                </span>
                {index < highlightedTech.length - 1 ? ", " : " "}
              </React.Fragment>
            ))}
            para transformar ideias em soluções funcionais e visualmente
            atraentes.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="indent-8 leading-relaxed"
          >
            Dentre os meus projetos mais relevantes, destaco{" "}
           {highlightedProjects.map((project, index) => (
              <React.Fragment key={project}>
                <span className="text-primary font-bold">
                  {project}
                </span>
                {index < highlightedProjects.length - 1 ? " e o " : ". "}
              </React.Fragment>
            ))}
            . Projetos que me permitiram unir criatividade, lógica e colaboração
            em equipe. Tenho interesse em atuar em projetos que impulsionem meu
            crescimento, estimulem a colaboração e gerem resultados relevantes.
          </motion.p>
        </div>

         {/* Social Links */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            Quer trocar uma ideia ou colaborar em um projeto?
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.aria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                whileHover={{ y: -3 }}
              >
                <span className=" group-hover:text-[#6a00b8] transition-colors">
                  {link.icon}
                </span>
                <span className="text-primary  group-hover:text-main-purple font-semibold transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
