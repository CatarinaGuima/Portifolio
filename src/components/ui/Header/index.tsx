"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Archivo_Black } from "next/font/google";
import MenuSidebar from "@/components/ui/Sidebar/menuSidebar";
import { Menu } from "lucide-react";
import { Button } from "../Button";

const archivo = Archivo_Black({
  weight: "400",
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
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-transparent">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            <div className="hidden sm:block w-32 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              {links.map((_, i) => (
                <div key={i} className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              ))}
            </div>
            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse md:hidden" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "border-gray-200 dark:border-gray-800 shadow-sm" : "border-transparent"
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo and Name */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={logo}
              alt="Logo Catarina Guimarães"
              width={36}
              height={36}
              className="object-contain drop-shadow hover:rotate-12 transition-transform duration-300"
              priority
            />
            <span
              className={`${archivo.className} text-transparent bg-gradient-to-r from-[#8f00ff] to-[#a6d3ff] bg-clip-text text-xl sm:text-2xl font-bold`}
            >
              Catarina Guimarães
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 font-medium text-md transition-colors ${
                  activeSection === link.href
                    ? "text-[#8f00ff] dark:text-[#a6d3ff] font-semibold"
                    : "text-gray-700 hover:text-[#8f00ff] dark:text-gray-300 dark:hover:text-[#a6d3ff]"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-[#8f00ff] dark:bg-[#a6d3ff]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              aria-label="Abrir menu"
              variant="ghost"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MenuSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
        activeSection={activeSection}
      />
    </>
  );
}