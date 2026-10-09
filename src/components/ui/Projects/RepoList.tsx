"use client";

import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";
import type { Repo } from "@/lib/github";

const INITIAL_COUNT = 6;

export default function RepoList({ repos }: { repos: Repo[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? repos : repos.slice(0, INITIAL_COUNT);
  const hiddenCount = repos.length - INITIAL_COUNT;

  return (
    <div>
      <ul className="border-t border-border">
        {visible.map((repo) => (
          <li
            key={repo.id}
            className="grid gap-x-8 gap-y-2 border-b border-border py-5 sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <div className="min-w-0">
              <h4 className="font-display text-xl font-semibold">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  {repo.title}
                </a>
              </h4>
              {repo.description && (
                <p className="mt-1 max-w-[40rem] text-muted-foreground">
                  {repo.description}
                </p>
              )}
              <p className="mt-2 text-sm text-muted-foreground">
                {repo.language ? `${repo.language}, ` : ""}
                atualizado em {repo.updatedLabel}
              </p>
            </div>

            <div className="flex items-start gap-5 text-sm font-semibold sm:pt-1">
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line inline-flex items-center gap-1.5"
                  aria-label={`Abrir demo de ${repo.title}`}
                >
                  <MdOutlineOpenInNew aria-hidden="true" />
                  Demo
                </a>
              )}
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex items-center gap-1.5"
                aria-label={`Ver código de ${repo.title} no GitHub`}
              >
                <FiGithub aria-hidden="true" />
                Código
              </a>
            </div>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-6 cursor-pointer font-semibold text-primary link-line"
        >
          {expanded
            ? "Mostrar menos"
            : `Mostrar mais ${hiddenCount} ${hiddenCount === 1 ? "repositório" : "repositórios"}`}
        </button>
      )}
    </div>
  );
}
