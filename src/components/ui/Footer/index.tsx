"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="contato" className="border-t">
      <div className="container py-8 text-sm opacity-80 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Catarina Guimarães. Todos os direitos
          reservados.
        </p>
        <div className="flex flex-col items-center justify-center space-y-2">
          <p>Quer trocar uma ideia ou colaborar em um projeto?</p>
          
            {/* Redes sociais */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/catarinaguima"
                aria-label="GitHub"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/catarinaguimaraess/"
                aria-label="LinkedIn"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:catarina.guimaraes15@gmail.com"
                aria-label="Email"
                className="social-icon"
              >
                <FiMail size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      
    </footer>
  );
}
