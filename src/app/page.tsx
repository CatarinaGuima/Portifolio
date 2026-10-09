import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";

export default function HomePage() {
  return (
    <main id="conteudo">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
