import { FaWhatsapp } from "react-icons/fa";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { site, whatsappHref } from "@/data/site";

const links = [
  {
    label: "WhatsApp",
    href: whatsappHref,
    icon: <FaWhatsapp aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    icon: <FiLinkedin aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: site.github,
    icon: <FiGithub aria-hidden="true" />,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="border-t border-border">
      <div className="page-width py-24 md:py-32">
        <h2 className="display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95]">
          Vamos conversar?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Tem um projeto, uma vaga em aberto ou só quer trocar uma ideia? Me
          escreva.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="link-line mt-10 inline-block break-all font-display text-2xl font-semibold text-primary sm:text-4xl"
        >
          {site.email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-semibold">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex items-center gap-2"
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.cv}
              download={site.cvFileName}
              className="link-line inline-flex items-center gap-2"
            >
              <FiDownload aria-hidden="true" />
              Currículo em PDF
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
