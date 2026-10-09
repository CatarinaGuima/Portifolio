export type Skill = {
  title: string;
  /** slug do skillicons.dev, ou "trello" para o ícone local */
  icon: string;
};

export type SkillGroup = {
  name: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css" },
      { title: "JavaScript", icon: "javascript" },
      { title: "TypeScript", icon: "typescript" },
      { title: "React", icon: "react" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { title: "Next.js", icon: "nextjs" },
      { title: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { title: "Node.js", icon: "nodejs" },
      { title: "Python", icon: "python" },
      { title: "Java", icon: "java" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { title: "Git", icon: "git" },
      { title: "GitHub", icon: "github" },
      { title: "Netlify", icon: "netlify" },
      { title: "Vercel", icon: "vercel" },
    ],
  },
  {
    name: "Ferramentas",
    skills: [
      { title: "Figma", icon: "figma" },
      { title: "VS Code", icon: "vscode" },
      { title: "Trello", icon: "trello" },
    ],
  },
];
