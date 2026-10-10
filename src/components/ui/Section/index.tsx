import type { ReactNode } from 'react';
import Typewriter from '@/components/ui/Typewriter';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  intro?: ReactNode;
  children: ReactNode;
};

/**
 * Seção com o título preso à esquerda enquanto o conteúdo rola.
 * No celular o título fica acima do conteúdo.
 */
export default function Section({
  id,
  title,
  subtitle,
  intro,
  children,
}: SectionProps) {
  return (
    <section id={id} className="border-t border-border/70">
      <div className="page-width grid gap-8 py-20 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-14 md:py-28 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <header className="relative md:sticky md:top-24 md:self-start">
          <div className="relative">
            <h1
              aria-hidden="true"
              className="absolute -top-3 left-0 select-none pointer-events-none whitespace-nowrap text-[4rem] font-extrabold uppercase leading-none text-accent-foreground opacity-10 md:-top-5 md:text-[5rem]"
            >
              {title}
            </h1>

            <h2 className="display relative z-10 text-gradient text-4xl sm:text-[2.6rem]">
              {subtitle}
            </h2>
          </div>

          <span
            aria-hidden="true"
            className="mt-3 block h-1 w-14 rounded-full bg-linear-to-r from-grad-a to-grad-b"
          />

          {intro && (
            <p>
              {typeof intro === 'string' ? (
                <Typewriter text={intro.replace(/\.$/, '')} />
              ) : (
                intro
              )}
            </p>
          )}
        </header>

        <div className="min-w-0 mt-20">{children}</div>
      </div>
    </section>
  );
}
