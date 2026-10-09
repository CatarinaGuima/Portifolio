import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { site, whatsappHref } from "@/data/site";

/**
 * Cada letra do nome recebe um índice (--i) e entra engrossando em onda.
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
    <section className="page-width pt-14 pb-20 sm:pt-20 md:pb-28 lg:pt-24">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h1
            aria-label={site.name}
            className="display text-[clamp(3.25rem,11.5vw,7.75rem)] leading-[0.92]"
          >
            <WaveWord word={site.firstName} />
            <WaveWord word={site.lastName} offset={site.firstName.length} />
          </h1>

          <p className="mt-8 font-display text-xl font-semibold text-primary sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-4 max-w-[34rem] text-lg text-muted-foreground">
            {site.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp aria-hidden="true" size={18} />
              Falar no WhatsApp
            </a>
            <a
              href={site.cv}
              download={site.cvFileName}
              className="link-line inline-flex items-center gap-2 font-semibold"
            >
              <FiDownload aria-hidden="true" />
              Baixar currículo
            </a>
          </div>
        </div>

        {/* Foto em duotone: a imagem em preto e branco "multiplica" sobre o lilás */}
        <figure className="relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:ml-auto lg:max-w-[22rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-[1.75rem] border-[1.5px] border-sky sm:translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.75rem] bg-duotone">
            <Image
              src="/avatar.png"
              alt={`Retrato de ${site.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 22rem, 19rem"
              className="object-cover mix-blend-multiply"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
