"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button";
import { FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
// import curriculumVitae from "@/assets/docs/curriculum.pdf";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, Catarina! Gostaria de entrar em contato."
    );
    window.open(
      `/api/whatsapp?message=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
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
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Conteúdo de texto */}
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
            <span className="text-lg md:text-xl text-primary mb-8">
              Olá, eu sou
            </span>
            <motion.span
              className="flex flex-col justify-center text-4xl md:text-5xl lg:text-6xl font-bold space-y-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-[#8f00ff] bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
                Catarina
              </span>
              <span className="text-[#a6d3ff] bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Guimarães
              </span>
            </motion.span>
          </motion.h1>

          <motion.h2
            className="flex flex-col text-base md:text-lg text-muted-foreground max-w-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-[#94a3b8] font-extrabold text-xl mb-8">
              Desenvolvedora Front-end
            </div>
            <div className="flex">
              <p>
                Especializada em{" "}
                <span className="text-primary font-bold">React</span>,{" "}
                <span className="text-primary font-bold">Next.js</span> e{" "}
                <span className="text-primary font-bold">TypeScript</span>.
                Apaixonada por criar interfaces acessíveis e de alta
                performance.
              </p>
            </div>
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant={"whatsapp"}
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <FaWhatsapp size={20} />
              Entre em contato
            </Button>
            <Button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
              variant="outline"
            >
              <FiDownload />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar/Foto */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 md:order-2 mb-8 md:mb-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-400/10">
            <Image
              src="/avatar.png"
              width={500}
              height={500}
              alt="Catarina Guimarães"
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
          </div>

          {/* Decoração */}
          <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-purple-500/10 blur-xl" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 rounded-full bg-blue-400/20 blur-xl" />
        </motion.figure>
      </div>
    </section>
  );
}
