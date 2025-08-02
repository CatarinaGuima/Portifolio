import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border overflow-hidden bg-white/70 dark:bg-black/20 backdrop-blur">
      {p.image && (
        <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm opacity-80">{p.description}</p>
        <ul className="flex flex-wrap gap-2">
          {p.techs.map((t) => (
            <li key={t} className="text-xs px-2 py-1 border rounded-lg">{t}</li>
          ))}
        </ul>
        <div className="pt-3 flex gap-3">
          {p.demo && (
            <a className="btn btn-primary" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
          )}
          {p.repo && (
            <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noreferrer">Código</a>
          )}
        </div>
      </div>
    </article>
  );
}
