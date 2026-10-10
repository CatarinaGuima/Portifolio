import Image, { StaticImageData } from "next/image";
import Section from "../Section";
import Reveal from "../Reveal";

// Ícones locais
import iconTrello from "@/assets/images/trello.png";
import iconFrontEnd from "@/assets/images/frontend.png";
import iconBackEnd from "@/assets/images/backend.png";
import iconFrameworks from "@/assets/images/frameworks.png";
import iconDevOps from "@/assets/images/devops.png";
import iconTools from "@/assets/images/tools.png";

interface SkillProps {
  id: string;
  icon: string;
  title: string;
}

interface SkillCategory {
  image: StaticImageData;
  name: string;
  skills: SkillProps[];
}

const skillCategories: SkillCategory[] = [
  {
    image: iconFrontEnd,
    name: "Frontend",
    skills: [
      { id: "html", icon: "html", title: "HTML" },
      { id: "css", icon: "css", title: "CSS" },
      { id: "javascript", icon: "javascript", title: "JavaScript" },
      { id: "typescript", icon: "typescript", title: "TypeScript" },
      { id: "react", icon: "react", title: "React" },
    ],
  },
  {
    image: iconBackEnd,
    name: "Backend",
    skills: [
      { id: "nodejs", icon: "nodejs", title: "Node.js" },
      { id: "python", icon: "python", title: "Python" },
      { id: "java", icon: "java", title: "Java" },
    ],
  },
  {
    image: iconFrameworks,
    name: "Frameworks",
    skills: [
      { id: "nextjs", icon: "nextjs", title: "Next.js" },
      { id: "tailwind", icon: "tailwind", title: "Tailwind" },
    ],
  },
  {
    image: iconDevOps,
    name: "DevOps",
    skills: [
      { id: "git", icon: "git", title: "Git" },
      { id: "github", icon: "github", title: "GitHub" },
      { id: "netlify", icon: "netlify", title: "Netlify" },
      { id: "vercel", icon: "vercel", title: "Vercel" },
    ],
  },
  {
    image: iconTools,
    name: "Tools",
    skills: [
      { id: "figma", icon: "figma", title: "Figma" },
      { id: "vscode", icon: "vscode", title: "VSCode" },
      { id: "trello", icon: "trello", title: "Trello" },
    ],
  },
];

function SkillIcon({ skill }: { skill: SkillProps }) {
  const isLocal = skill.icon === "trello";
  return (
    <Image
      src={isLocal ? iconTrello : `https://skillicons.dev/icons?i=${skill.icon}`}
      alt=""
      width={20}
      height={20}
      className="size-5 object-contain"
      unoptimized={!isLocal}
    />
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Habilidades"
      intro="Tecnologias e ferramentas que uso no dia a dia."
    >
      <div className="grid gap-x-5 gap-y-14 pt-8 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.name}
            delay={(index % 2) * 0.08}
            className="glass relative rounded-2xl px-5 pb-6 pt-10 shadow-lg transition-colors hover:border-text-primary/40 sm:[&:last-child:nth-child(odd)]:col-span-2"
          >
            {/* Ícone da categoria flutuando sobre o cartão */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-md">
              <Image
                src={category.image}
                alt=""
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <h3 className="text-center font-display text-xl font-bold">
              {category.name}
            </h3>

            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.id}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm font-medium transition-colors hover:border-text-primary/60 hover:bg-text-primary/10"
                >
                  <SkillIcon skill={skill} />
                  {skill.title}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
