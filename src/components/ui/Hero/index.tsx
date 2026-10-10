import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { buttonVariants } from "../Button";
import { cn } from "@/lib/utils";
import { site, whatsappHref } from "@/data/site";

/**
 * Cada letra recebe um índice (--i) e entra engrossando em onda.
 * O h1 expõe o nome completo para leitores de tela; as letras são decorativas.
 */
function WaveWord({ word, offset = 0 }: { word: string; offset?: number }) {
  return (
    <span aria-hidden="true" className="block">
      {Array.from(word).map((letter, i) => (
        <span
          key={`${letter}-${i}`}
          className="hero-letter"
          style={{ "--i": i + offset } as React.CSSProperties}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="page-width relative flex min-h-[calc(100svh-4rem)] flex-col justify-center pb-24 pt-8 md:pb-20 md:pt-12">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-12 lg:gap-20">
        {/* Texto */}
        <div className="order-2 flex-1 text-center duration-700 animate-in fade-in slide-in-from-bottom-3 md:order-1 md:text-left">
          <p className="font-display text-lg font-semibold text-text-subtitle sm:text-xl">
            Olá, eu sou
          </p>

          <h1
            aria-label={site.name}
            className="display text-gradient mt-3 text-[clamp(3rem,9.5vw,6rem)] leading-[1.02]"
          >
            <WaveWord word={site.firstName} />
            <WaveWord word={site.lastName} offset={site.firstName.length} />
          </h1>

          <p className="mt-6 font-display text-xl font-semibold text-text-subtitle sm:text-2xl">
            {site.role}
          </p>

          <p className="mx-auto mt-4 max-w-[34rem] text-lg leading-relaxed text-text-paragraph md:mx-0">
            Especialista em criar experiências digitais performáticas e
            acessíveis com <strong className="font-bold">React</strong>,{" "}
            <strong className="font-bold">Next.js</strong> e{" "}
            <strong className="font-bold">TypeScript</strong>. Combinando design
            intuitivo com código eficiente para resultados excepcionais.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "whatsapp", size: "lg" }),
                "h-11 rounded-full px-6 text-base transition-transform hover:-translate-y-0.5",
              )}
            >
              <FaWhatsapp aria-hidden="true" size={18} />
              Entre em contato
            </a>
            <a
              href={site.cv}
              download={site.cvFileName}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-full border-2 px-6 text-base transition-transform hover:-translate-y-0.5",
              )}
            >
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        {/* Foto com contorno em gradiente e brilho */}
        <figure className="relative order-1 duration-700 animate-in fade-in zoom-in-95 md:order-2">
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-grad-a/40 to-grad-b/40 blur-2xl"
          />
          <div className="rounded-[1.75rem] bg-gradient-to-br from-grad-a to-grad-b p-[2px] shadow-2xl">
            <div className="relative aspect-[4/5] w-52 overflow-hidden rounded-[calc(1.75rem-2px)] bg-card md:w-64 lg:w-80">
              <Image
                src="/avatar.png"
                alt={`Retrato de ${site.name}`}
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 13rem"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </figure>
      </div>

      <a
        href="#sobre"
        aria-label="Ir para a seção Sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-text-primary md:block"
      >
        <SlArrowDown size={22} aria-hidden="true" />
      </a>
    </section>
  );
}
