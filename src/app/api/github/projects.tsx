import { useEffect, useState } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image?: string;
  repo: string;
  demo?: string;
  stars?: number;
  updatedAt?: string;
};

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: number,
  updated_at: string;
  topics?: string[];
};

export function useGithubProjects(username: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
        );

        if (!res.ok) {
          throw new Error(
            res.status === 404 
              ? "User not found" 
              : `Failed to fetch: ${res.status}`
          );
        }

        const data: GithubRepo[] = await res.json();

        const mappedProjects: Project[] = data
          .filter(repo => !repo.fork) 
          .map((repo) => ({
            id: repo.id.toString(),
            title: formatProjectName(repo.name),
            description: repo.description || "sem descrição disponível",
            techs: repo.language ? [repo.language, ...(repo.topics || [])] : [...(repo.topics || [])],
            repo: repo.html_url,
            demo: repo.homepage || undefined,
            stars: repo.stargazers_count,
            updatedAt: repo.updated_at,
          }));

        setProjects(mappedProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
}

// Helper function to format repository names
function formatProjectName(name: string): string {
  return name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}