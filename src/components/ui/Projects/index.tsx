import highlightProjects from "@/data/highlightProjects";
import { site } from "@/data/site";
import { getProjects } from "@/lib/github";
import Section from "../Section";
import Reveal from "../Reveal";
import HighlightsProjectsCard from "../HighlightsProjects";
import AllProjectsCarousel from "../AllProjectsCard";

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-2xl font-semibold sm:text-3xl">{children}</h3>
      <span
        aria-hidden="true"
        className="mt-2 block h-1 w-16 rounded-full bg-linear-to-r from-grad-a to-grad-b"
      />
    </div>
  );
}

export default async function Projects() {
  // Busca no servidor, uma vez por hora. Os destaques não se repetem no carrossel.
  const { projects, failed } = await getProjects(
    site.githubUser,
    highlightProjects.flatMap((project) =>
      project.githubUrl ? [project.githubUrl] : [],
    ),
  );

  return (
    <Section
      id="projetos"
      title="Overview"
      subtitle="Projetos"
      intro={
        <>
          Os trabalhos em destaque e os demais repositórios do meu{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line font-semibold text-text-primary"
          >
            GitHub
          </a>
          .
        </>
      }
    >
      <div className="space-y-20">
        <div>
          <SubTitle>Destaques</SubTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {highlightProjects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.08}
                className="sm:col-span-2"
              >
                <HighlightsProjectsCard
                  featured={false}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SubTitle>Todos os Projetos</SubTitle>
          {failed ? (
            <p className="text-text-paragraph">
              Não foi possível carregar os repositórios agora. Veja todos direto
              no{" "}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line font-semibold text-text-primary"
              >
                meu GitHub
              </a>
              .
            </p>
          ) : projects.length === 0 ? (
            <p className="text-text-paragraph">
              Não há outros repositórios públicos além dos destacados acima.
            </p>
          ) : (
            <AllProjectsCarousel projects={projects} />
          )}
        </div>
      </div>
    </Section>
  );
}
