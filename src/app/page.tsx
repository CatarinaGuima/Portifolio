"use client";

import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}