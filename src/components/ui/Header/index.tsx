"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import lightLogo from "@/assets/images/lightLogo.png";
import darkLogo from "@/assets/images/darkLogo.png";
import { Monoton } from "next/font/google";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
});

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b dark:border-white/10 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 py-4">
            <div className="w-10 h-10" /> {/* Espaço reservado para a logo */}
          </div>
          <ThemeToggle />
        </div>
      </header>
    );
  }

  const isDark = resolvedTheme === "dark";
  const logo = isDark ? darkLogo : lightLogo;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b dark:border-white/10 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4 py-4">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain drop-shadow transition-all duration-300"
            priority
          />

          <span
            className={`${monoton.className} text-lg font-black dark:text-white`}
          >
            Catarina Guimarães
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm hover:text-primary dark:hover:text-primary transition-colors dark:text-white/80"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}