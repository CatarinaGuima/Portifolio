import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Button } from "../Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  /** Cartão largo, com a imagem ao lado do texto (a partir de telas médias) */
  featured?: boolean;
}

export default function HighlightsProjectsCard({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  demoUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-text-primary/50 hover:shadow-xl",
        featured && "sm:flex-row",
      )}
    >
      {/* Imagem */}
      <div
        className={cn(
          "relative aspect-2/1 w-full shrink-0 overflow-hidden",
          featured && "sm:aspect-auto sm:min-h-72 sm:w-[46%]",
        )}
      >
        <Image
          src={imageUrl}
          alt={`Captura de tela do projeto ${title}`}
          fill
          loading="eager"
          className="object-cover object-top-left transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 420px, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-display text-2xl font-bold">{title}</h4>
        <p className="mt-3 text-text-paragraph">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-6">
          {demoUrl && (
            <Button asChild variant="default" size="sm" className="flex-1 gap-2 rounded-full">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir demo de ${title}`}
              >
                <MdOutlineOpenInNew aria-hidden="true" className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 gap-2 rounded-full">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${title} no GitHub`}
              >
                <FiGithub aria-hidden="true" className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
