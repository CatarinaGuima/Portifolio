"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section id="sobre" className="py-8 bg-black/5 dark:bg-white/5">
      <div className="flex flex-col items-center justify-center max-w-4xl px-4 py-12 mx-auto">
        <motion.h2
          className="mb-8 text-center text-transparent bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typewriter
            words={["Um pouco mais sobre mim!"]}
            loop={true}
            cursor
            cursorColor="#8f00ff"
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <div className="text-lg font-medium text-gray-700 dark:text-gray-300 space-y-4 text-justify w-5/6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="indent-8"
          >
            Com dupla formação em Administração e Análise e Desenvolvimento de
            Sistemas. Tenho vivência prática em projetos full stack e mobile,
            explorando tecnologias como{" "}
            <span className="text-primary font-bold">React</span>,{" "}
            <span className="text-primary font-bold">Next.js</span> e{" "}
            <span className="text-primary font-bold">TypeScript</span> para
            transformar ideias em soluções funcionais e visualmente atraentes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className=" indent-8"
          >
            Dentre os meus projetos mais relevantes, destaco{" "}
            <span className="text-primary font-bold">Pro Lidera Skills</span> e
            o{" "}
            <span className="text-primary font-bold">
              Sistema de Gerenciamento de Manutenção Industrial (SGM)
            </span>
            . Projetos que me permitiram unir criatividade, lógica e colaboração
            em equipe. Tenho interesse em atuar em projetos que impulsionem meu
            crescimento, estimulem a colaboração e gerem resultados relevantes.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 mt-8">
          <p>Quer trocar uma ideia ou colaborar em um projeto?</p>

          {/* Redes sociais */}
          <motion.div
            className="flex gap-10 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://github.com/catarinaguima"
                aria-label="GitHub"
                className="hover:text-[#8f00ff] transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub size={25} />
              </a>
              <span>GitHub</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://www.linkedin.com/in/catarinaguimaraess/"
                aria-label="LinkedIn"
                className="hover:text-[#8f00ff] transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin size={25} />
              </a>
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href="mailto:catarina.guimaraes15@gmail.com"
                aria-label="Email"
                className="hover:text-[#8f00ff] transition-colors duration-200"
              >
                <FiMail size={25} />
              </a>
              <span>E-mail</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
