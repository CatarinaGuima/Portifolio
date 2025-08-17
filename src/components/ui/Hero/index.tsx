"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button";
import { FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

export default function Hero() {
 const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    "Olá Catarina! Vi seu portfólio e gostaria de conversar sobre."
  );
  window.open(`/api/whatsapp?message=${message}`, "_blank");
};


  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/docs/curriculum.pdf";
    link.download = "Catarina_Guimaraes_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative overflow-hidden pt-2 pb-2 md:pt-14 md:pb-14 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1"
        >
          <motion.h1
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="flex flex-col items-center sm:items-start text-lg md:text-xl text-primary mb-8 font-semibold">
              Olá, eu sou
            </span>
            <motion.span
              className="flex flex-col items-center sm:items-start text-4xl md:text-5xl lg:text-6xl font-bold space-y-2 md:space-y-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-transparent bg-gradient-to-r from-main-purple to-main-lilac bg-clip-text">
                Catarina
              </span>
              <span className="text-transparent bg-gradient-to-r from-main-lilac to-main-purple bg-clip-text">
                Guimarães
              </span>
            </motion.span>
          </motion.h1>

          <motion.h2
            className="flex flex-col items-center sm:items-start text-base md:text-lg text-muted-foreground max-w-[600px] mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-[#94a3b8] font-extrabold text-xl mb-6 md:mb-8 text-center sm:text-left">
              Desenvolvedora Front-end
            </div>
            <p className="leading-relaxed text-justify w-11/12 mx-auto sm:mx-0">
              Especialista em criar experiências digitais performáticas e
              acessíveis com{" "}
              <span className="text-primary font-bold">React</span>,{" "}
              <span className="text-primary font-bold">Next.js</span> e{" "}
              <span className="text-primary font-bold">TypeScript</span>.
              Combinando design intuitivo com código eficiente para resultados
              excepcionais.
            </p>
          </motion.h2>

          <motion.div
            className="flex sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="whatsapp"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg bg-chart-2 hover:bg-chart-3 text-white"
              aria-label="Entrar em contato via WhatsApp"
            >
              <FaWhatsapp size={20} />
              <span>Entre em contato</span>
            </Button>

            <Button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 border-2"
              variant="outline"
              aria-label="Baixar currículo"
            >
              <FiDownload className="shrink-0" />
              <span>Download CV</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 md:order-2 md:mb-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-400/10 shadow-xl">
            <Image
              src="/avatar.png"
              width={500}
              height={500}
              alt="Catarina Guimarães - Desenvolvedora Front-end"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-purple-500/10 blur-xl" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 rounded-full bg-blue-400/20 blur-xl" />
        </motion.figure>
      </div>
      {/* Scroll indicator - posicionamento absoluto relativo à section */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center justify-center mt-8 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a href="#sobre" className="cursor-pointer">
          <SlArrowDown size={24} className="text-primary" />
        </a>
      </motion.div>
    </section>
  );
}
