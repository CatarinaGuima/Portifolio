export type HighlightProject = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  imageAlt: string;
};

const highlightProjects: HighlightProject[] = [
  {
    title: "PRO Lidera Skills",
    description:
      "Aplicação web para avaliar habilidades de liderança por meio de um teste dinâmico de 18 perguntas. O resultado pode ser baixado em PDF.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://prolideraskills.vercel.app/",
    githubUrl:
      "https://github.com/CatarinaGuima/PI-PRO-LIDERA-TURMA-07-EQUIPE-02",
    imageUrl: "/prolideraskills.png",
    imageAlt: "Página inicial do PRO Lidera Skills com o convite para fazer o teste",
  },
  {
    title: "Meta Service SGM",
    description:
      "Sistema de Gerenciamento de Manutenção Industrial para ajudar empresas a controlar ordens de serviço.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://project-meta-service-sgm.vercel.app/",
    githubUrl: "https://github.com/CatarinaGuima/project-meta-service-sgm",
    imageUrl: "/sgm.png",
    imageAlt: "Tela de login do sistema Meta Service SGM",
  },
];

export default highlightProjects;
