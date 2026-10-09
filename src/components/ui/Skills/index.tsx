import Image from "next/image";
import iconTrello from "@/assets/images/trello.png";
import { skillGroups, type Skill } from "@/data/skills";

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <Image
      src={
        skill.icon === "trello"
          ? iconTrello
          : `https://skillicons.dev/icons?i=${skill.icon}`
      }
      alt=""
      width={24}
      height={24}
      className="size-6 object-contain"
      unoptimized={skill.icon !== "trello"}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="page-width grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 md:py-28">
        <h2 className="display self-start text-4xl sm:text-5xl md:sticky md:top-28">
          Habilidades
        </h2>

        <div className="border-t border-border">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <h3 className="font-display text-xl font-semibold">{group.name}</h3>
              <ul className="flex flex-wrap gap-x-7 gap-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.title} className="flex items-center gap-2.5">
                    <SkillIcon skill={skill} />
                    <span className="font-medium">{skill.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
