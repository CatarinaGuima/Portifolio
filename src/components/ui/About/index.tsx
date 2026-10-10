import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Section from "../Section";
import Reveal from "../Reveal";
import { site } from "@/data/site";

const socialLinks = [
  { icon: <FiGithub size={20} aria-hidden="true" />, label: "GitHub", href: site.github },
  { icon: <FiLinkedin size={20} aria-hidden="true" />, label: "LinkedIn", href: site.linkedin },
  { icon: <FiMail size={20} aria-hidden="true" />, label: "E-mail", href: `mailto:${site.email}` },
];

function Highlight({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold text-foreground">{children}</strong>;
}

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim" intro="Um pouco mais sobre mim.">
      <Reveal>
        <div className="max-w-[40rem] space-y-6 text-lg leading-relaxed text-text-paragraph sm:text-xl sm:leading-relaxed">
          <p>
            Com dupla formação em Administração e Análise e Desenvolvimento de
            Sistemas, tenho vivência prática em projetos Web e mobile,
            explorando tecnologias como <Highlight>React</Highlight>,{" "}
            <Highlight>Next.js</Highlight> e{" "}
            <Highlight>TypeScript</Highlight> para transformar ideias em
            soluções funcionais e visualmente atraentes.
          </p>
          <p>
            Dentre os meus projetos mais relevantes, destaco o{" "}
            <Highlight>PRO Lidera Skills</Highlight> e o{" "}
            <Highlight>
              Sistema de Gerenciamento de Manutenção Industrial (SGM)
            </Highlight>
            , que me permitiram unir criatividade, lógica e colaboração em
            equipe. Tenho interesse em atuar em projetos que impulsionem meu
            crescimento, estimulem a colaboração e gerem resultados relevantes.
          </p>
        </div>
      </Reveal>

      <Reveal className="glass mt-12 rounded-2xl p-6 shadow-lg sm:p-8">
        <p className="font-display text-xl font-semibold sm:text-2xl">
          Quer trocar uma ideia ou colaborar em um projeto?
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 font-semibold transition-colors hover:border-text-primary hover:text-text-primary"
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
