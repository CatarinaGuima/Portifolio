const facts = [
  {
    label: "Formação",
    value: ["Administração", "Análise e Desenvolvimento de Sistemas"],
  },
  {
    label: "Tecnologias de foco",
    value: ["React", "Next.js", "TypeScript"],
  },
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-border">
      <div className="page-width grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 md:py-28">
        <h2 className="display self-start text-4xl sm:text-5xl md:sticky md:top-28">
          Sobre mim
        </h2>

        <div>
          <div className="max-w-[38rem] space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
            <p>
              Transformo ideias em soluções funcionais e visualmente
              atraentes, com vivência prática em projetos web e mobile.
            </p>
            <p className="text-muted-foreground">
              Entre os meus projetos mais relevantes estão o{" "}
              <a href="#projetos" className="link-line font-semibold text-foreground">
                PRO Lidera Skills
              </a>{" "}
              e o{" "}
              <a href="#projetos" className="link-line font-semibold text-foreground">
                Sistema de Gerenciamento de Manutenção Industrial (SGM)
              </a>
              , que me permitiram unir criatividade, lógica e colaboração em
              equipe. Busco projetos que impulsionem meu crescimento,
              estimulem a colaboração e gerem resultados relevantes.
            </p>
          </div>

          <dl className="mt-14 border-t border-border">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 border-b border-border py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="text-muted-foreground">{fact.label}</dt>
                <dd className="font-semibold">
                  {fact.value.map((item) => (
                    <span key={item} className="block">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
