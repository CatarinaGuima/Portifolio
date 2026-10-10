export type Project = {
  id: string;
  title: string;
  description: string;
  techs: string[];
  repo: string;
  demo?: string;
  image?: string;
  stars: number;
  updatedLabel: string;
};

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  topics?: string[];
};

function formatProjectName(name: string): string {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const monthYear = new Intl.DateTimeFormat("pt-BR", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/**
 * Busca os repositórios públicos no servidor, com cache de 1 hora.
 * Assim a API do GitHub não é chamada a cada visita e não há limite de
 * requisições por visitante. Defina GITHUB_TOKEN no ambiente para um limite maior.
 * `excludeUrls` remove da lista os projetos que já aparecem em destaque.
 */
export async function getProjects(
  user: string,
  excludeUrls: string[] = [],
): Promise<{ projects: Project[]; failed: boolean }> {
  const excluded = new Set(excludeUrls.map((url) => url.toLowerCase()));

  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=pushed&direction=desc`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return { projects: [], failed: true };

    const data = (await res.json()) as GithubRepo[];

    const projects = data
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.archived &&
          !excluded.has(repo.html_url.toLowerCase()),
      )
      .map<Project>((repo) => ({
        id: String(repo.id),
        title: formatProjectName(repo.name),
        description: repo.description || "Sem descrição disponível.",
        techs: Array.from(
          new Set([...(repo.language ? [repo.language] : []), ...(repo.topics ?? [])]),
        ),
        repo: repo.html_url,
        demo: repo.homepage || undefined,
        stars: repo.stargazers_count,
        updatedLabel: monthYear.format(new Date(repo.pushed_at)),
      }));

    return { projects, failed: false };
  } catch {
    return { projects: [], failed: true };
  }
}
