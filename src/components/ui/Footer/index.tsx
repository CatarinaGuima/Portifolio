"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import lineBar from "@/assets/images/lineBar.png";
import { Archivo_Black } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

export default function Footer() {

  const userName = useSelector((state: RootState) => state.user.value);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: "https://github.com/catarinaguima",
      label: "GitHub",
      rel: "me",
    },
    {
      icon: <FiLinkedin size={20} />,
      href: "https://www.linkedin.com/in/catarinaguimaraess/",
      label: "LinkedIn",
      rel: "me",
    },
    {
      icon: <FiMail size={20} />,
      href: "mailto:catarina.guimaraes15@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer id="contato" className="border-t shadow-lg" aria-labelledby="footer-heading">
      {/* heading semântico invisível para acessibilidade */}
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>

      {/* Linha decorativa */}
      <div>
        <Image
          src={lineBar}
          alt="Linha decorativa"
          className="object-contain drop-shadow transition-transform duration-300 hover:scale-110 w-full"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-5xl mx-auto">
          
          {/* Branding */}
          <motion.div>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={logo}
                alt="Logo Catarina Guimarães"
                width={20}
                height={20}
                className="object-contain drop-shadow transition-transform duration-300 hover:scale-110"
                priority
              />
              <span
                className={`${archivo.className} text-transparent bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text text-lg font-bold`}
              >
                {userName}
              </span>
            </div>
            <p className="flex items-center justify-center text-[#94a3b8] font-semibold text-sm">
              Desenvolvedora Front-end
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4"
          >
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Entre em contato comigo!
            </p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  rel={link.rel || "noopener noreferrer"}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                             hover:bg-[#8f00ff] dark:hover:bg-[#8f00ff]/80 hover:text-white transition-all duration-300"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                 
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-center mt-8"
        
        >
          © {currentYear} Catarina Guimarães. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
