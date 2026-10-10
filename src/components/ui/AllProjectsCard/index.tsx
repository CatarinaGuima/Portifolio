"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FiFolder, FiGithub } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { Button } from "../Button";
import type { Project } from "@/lib/github";

const MAX_DOTS = 10;

export default function AllProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const reduceMotion = useReducedMotion();

  // Passa sozinho a cada 4,5 s; para ao tocar, arrastar ou pôr o mouse em cima
  const autoplay = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        plugins={reduceMotion ? [] : [autoplay.current]}
        opts={{ align: "start", loop: true }}
        className="w-full"
        aria-label="Todos os projetos do GitHub"
      >
        <CarouselContent className="py-1">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="basis-full pl-4 sm:basis-1/2">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur transition-colors hover:border-text-primary/50">
                {project.image ? (
                  <div className="relative h-40 w-full">
                    <Image
                      src={project.image}
                      alt={`Captura de tela do projeto ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 400px, 100vw"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-24 items-center bg-gradient-to-br from-grad-a/25 via-transparent to-grad-b/25 px-5"
                  >
                    <FiFolder className="size-8 text-text-primary" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display text-xl font-bold">{project.title}</h4>
                  <p className="mt-2 line-clamp-3 text-sm text-text-paragraph">
                    {project.description}
                  </p>

                  {project.techs.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.techs.slice(0, 4).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-4 text-xs text-text-subtitle">
                    Atualizado em {project.updatedLabel}
                  </p>

                  <div className="mt-auto flex gap-2 pt-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir demo de ${project.title}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <MdOutlineOpenInNew aria-hidden="true" />
                        Demo
                      </a>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${project.title} no GitHub`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-accent/50 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <FiGithub aria-hidden="true" />
                      Código
                    </a>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controles: indicador à esquerda, setas à direita */}
      <div className="mt-6 flex items-center justify-between gap-4">
        {count > MAX_DOTS ? (
          <p aria-live="polite" className="text-sm font-medium text-text-subtitle">
            {current + 1} de {count}
          </p>
        ) : (
          <div role="group" aria-label="Escolher projeto" className="flex items-center">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para o projeto ${index + 1}`}
                aria-current={current === index}
                className="cursor-pointer p-1.5"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    current === index
                      ? "w-6 bg-text-primary"
                      : "w-2 bg-muted-foreground/40 hover:bg-text-primary/60"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-10 rounded-full"
            onClick={() => api?.scrollPrev()}
            aria-label="Projeto anterior"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-10 rounded-full"
            onClick={() => api?.scrollNext()}
            aria-label="Próximo projeto"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
