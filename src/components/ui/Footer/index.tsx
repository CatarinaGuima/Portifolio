"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import lineBar from "@/assets/images/lineBar.png";
import { Archivo_Black } from "next/font/google";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: "https://github.com/catarinaguima",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={20} />,
      href: "https://www.linkedin.com/in/catarinaguimaraess/",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={20} />,
      href: "mailto:catarina.guimaraes15@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer id="contato" className="border-t shadow-lg" aria-labelledby="footer-heading">
      <div><Image src={lineBar}
                alt="Linha decorativa"
                className="object-contain drop-shadow transition-transform duration-300 hover:scale-110"
                priority/></div>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mx-[8rem]">
          {/* Branding */}
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2">
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
                Catarina Guimarães
              </span>
            </div>
            <p className="flex items-center justify-center text-[#94a3b8] font-semibold text-sm">
              Desenvolvedora Front-end
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4"
            {...fadeUp(0.3)}
          >
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Entre em contato comigo!
            </p>
            <div className="flex item justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                             hover:bg-[#8f00ff] dark:hover:bg-[#8f00ff] hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  {...fadeUp(0.5 + index * 0.1)}
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
          {...fadeUp(0.6)}
        >
          © {currentYear} Catarina Guimarães. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
