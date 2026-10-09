import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";
import highlightProjects from "@/data/highlightProjects";
import { site } from "@/data/site";
import { getRepos } from "@/lib/github";
import RepoList from "./RepoList";

export default async function Projects() {
  const { repos, failed } = await getRepos(
    site.githubUser,
    highlightProjects.flatMap((project) =>
      project.githubUrl ? [project.githubUrl] : [],
    ),
  );

  return (
    <section id="projetos" className="border-t border-border">
      <div className="page-width py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">Projetos</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Os trabalhos que mais representam o que eu faço e, mais abaixo,
            os outros repositórios do meu GitHub.
          </p>
        </div>

        <div className="mt-14">
          {highlightProjects.map((project) => (
            <article
              key={project.title}
              className="group grid items-center gap-8 border-t border-border py-12 md:grid-cols-12 md:gap-12"
            >
              <a
                href={project.demoUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${project.title}`}
                className="relative block aspect-[2.15/1] overflow-hidden rounded-xl border border-border bg-card md:col-span-7"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 700px, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className="md:col-span-5">
                <h3 className="display text-3xl sm:text-4xl">{project.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-5 font-medium">
                  {project.technologies.join(", ")}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line inline-flex items-center gap-2 text-primary"
                    >
                      <MdOutlineOpenInNew aria-hidden="true" />
                      Ver demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line inline-flex items-center gap-2"
                    >
                      <FiGithub aria-hidden="true" />
                      Código no GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-12">
          <h3 className="display text-3xl sm:text-4xl">Outros repositórios</h3>

          <div className="mt-8">
            {failed ? (
              <p className="text-muted-foreground">
                Não foi possível carregar os repositórios agora. Veja todos
                direto no{" "}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line font-semibold text-foreground"
                >
                  meu GitHub
                </a>
                .
              </p>
            ) : repos.length === 0 ? (
              <p className="text-muted-foreground">
                Não há outros repositórios públicos além dos destacados acima.
              </p>
            ) : (
              <RepoList repos={repos} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
