"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Archivo_Black } from "next/font/google";

const archivo = Archivo_Black({
  weight:  "400",
  subsets: ["latin"], 
  preload: true,
});

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  
  // Adicione um estado para forçar a atualização
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm  dark:border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
      </header>
    );
  }

  
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md dark:border-white/10 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4 py-4 ml-[4rem]">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain drop-shadow transition-all duration-300"
            priority
          />

          <span
            className={`${archivo.className} text-transparent bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text text-2xl font-bold `}
          >
            Catarina Guimarães
          </span>
        </div>

        <nav className="flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#8f00ff] transition-colors duration-200 font-medium text-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
