import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

/**
 * Seção com o título preso à esquerda enquanto o conteúdo rola.
 * No celular o título fica acima do conteúdo.
 */
export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border/70">
      <div className="page-width grid gap-8 py-20 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-14 md:py-28 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <header className="md:sticky md:top-24 md:self-start">
          <h2 className="display text-gradient text-4xl sm:text-[2.6rem]">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-grad-a to-grad-b"
          />
          {intro && <p className="mt-4 text-text-subtitle">{intro}</p>}
        </header>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
