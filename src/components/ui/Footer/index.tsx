import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import logo from "@/assets/images/logo.png";
import lineBar from "@/assets/images/lineBar.png";
import { site } from "@/data/site";

const socialLinks = [
  { icon: <FiGithub size={20} aria-hidden="true" />, href: site.github, label: "GitHub", rel: "me noopener noreferrer" },
  { icon: <FiLinkedin size={20} aria-hidden="true" />, href: site.linkedin, label: "LinkedIn", rel: "me noopener noreferrer" },
  { icon: <FiMail size={20} aria-hidden="true" />, href: `mailto:${site.email}`, label: "E-mail", rel: undefined },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      aria-labelledby="footer-heading"
      className="mt-8 border-t border-border bg-card/40 backdrop-blur"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé e contato
      </h2>

      {/* Linha colorida decorativa */}
      <Image src={lineBar} alt="" aria-hidden="true" className="h-1.5 w-full object-cover" />

      <div className="page-width py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src={logo}
                alt=""
                width={28}
                height={28}
                className="size-7 object-contain dark:invert"
              />
              <span className="display text-gradient text-2xl">{site.name}</span>
            </div>
            <p className="mt-1 font-semibold text-text-subtitle">{site.role}</p>
          </div>

          {/* Contato */}
          <div className="md:text-right">
            <p className="font-medium text-text-paragraph">Entre em contato comigo!</p>
            <a
              href={`mailto:${site.email}`}
              className="link-line mt-1 inline-block break-all font-semibold text-text-primary"
            >
              {site.email}
            </a>
            <ul className="mt-4 flex items-center gap-3 md:justify-end">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.rel}
                    className="flex size-11 items-center justify-center rounded-full border border-border bg-background/60 transition-all hover:-translate-y-0.5 hover:border-text-primary hover:text-text-primary"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-sm text-text-subtitle">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <a href="#" className="link-line">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
