export type Repo = {
  id: number;
  title: string;
  description: string | null;
  language: string | null;
  url: string;
  homepage: string | null;
  updatedLabel: string;
};

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

function formatRepoName(name: string): string {
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
 * Busca os repositórios públicos no servidor (com cache de 1 hora).
 * Assim a API do GitHub não é chamada a cada visita e não há limite de
 * requisições por visitante. Defina GITHUB_TOKEN no ambiente para um limite maior.
 */
export async function getRepos(
  user: string,
  excludeUrls: string[] = [],
): Promise<{ repos: Repo[]; failed: boolean }> {
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

    if (!res.ok) return { repos: [], failed: true };

    const data = (await res.json()) as GithubRepo[];

    const repos = data
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.archived &&
          !excluded.has(repo.html_url.toLowerCase()),
      )
      .map<Repo>((repo) => ({
        id: repo.id,
        title: formatRepoName(repo.name),
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
        homepage: repo.homepage || null,
        updatedLabel: monthYear.format(new Date(repo.pushed_at)),
      }));

    return { repos, failed: false };
  } catch {
    return { repos: [], failed: true };
  }
}
