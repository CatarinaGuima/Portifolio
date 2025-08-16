"use client";

import { useState, useEffect } from "react";
import { Loading } from "./index";

type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export function AppLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/catarinaguima/repos"); 
        if (!response.ok) throw new Error("Erro ao buscar dados do GitHub");
        const data: GitHubUser = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return <>{children}</>;
}
