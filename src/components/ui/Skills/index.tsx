const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "HTML5", "CSS3",
  "Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title mb-6">Habilidades</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <li key={s} className="px-3 py-2 rounded-lg border text-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
