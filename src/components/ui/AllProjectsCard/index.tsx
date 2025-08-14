"use client";
import * as React from "react";
import type { Project } from "@/app/api/github/projects";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export default function AllProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Container do Carrossel */}
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={project.id || `${project.title}-${index}`}
              className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="h-full p-1"
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-0 flex flex-col h-full">
                    <article className="rounded-xl overflow-hidden bg-card flex flex-col h-full">
                      {project.image && (
                        <div className="relative h-48 w-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow text-justify">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techs.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-secondary rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {project.demo && (
                            <a
                              className="text-sm px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-1/2 flex items-center justify-center gap-2"
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <MdOutlineOpenInNew />
                              Demo
                            </a>
                          )}
                          {project.repo && (
                            <a
                              className="text-sm px-3 py-1 border rounded-md hover:bg-accent transition-colors w-1/2 flex items-center justify-center gap-2"
                              href={project.repo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FiGithub />
                              Código
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-accent" />
        <CarouselNext className="hidden sm:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-accent" />
      </Carousel>
      {/* Indicador com bolinhas */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <Button
          size={"icon"}
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index
                ? "bg-primary w-4"
                : "bg-muted hover:bg-primary/50"
            }`}
            aria-label={`Ir para o projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
