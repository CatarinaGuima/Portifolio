"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@/assets/images/logo.png";
import ThemeToggle from "../ThemeToggle";
import { navLinks, site } from "@/data/site";

export default function Header() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // No topo (hero) nenhuma seção do menu está ativa
      if (window.scrollY < 120) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // A seção "ativa" é a que cruza a faixa central da tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled || menuOpen
          ? "border-border bg-background/85"
          : "border-transparent bg-background/60"
      }`}
    >
      <div className="page-width flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label={`${site.name}, ir ao topo`}>
          <Image
            src={logo}
            alt=""
            width={28}
            height={28}
            priority
            className="size-7 object-contain dark:invert"
          />
          <span className="display text-xl">{site.name}</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active === link.href ? "location" : undefined}
                    className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                      active === link.href
                        ? "bg-text-primary/10 text-text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-secondary md:hidden"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="page-width py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.href ? "location" : undefined}
                  className={`display block py-3 text-3xl ${
                    active === link.href ? "text-text-primary" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
