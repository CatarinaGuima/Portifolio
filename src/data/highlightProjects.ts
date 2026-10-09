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
  {
    title: "Idesserts",
    description:
      "Carrinho de compras totalmente funcional em TypeScript: gerencia produtos, calcula o total e controla a quantidade de cada item.",
    technologies: ["TypeScript", "SCSS", "HTML", "JavaScript", "Vite"],
    demoUrl: "https://idesserts.netlify.app/",
    githubUrl:
      "https://github.com/CatarinaGuima/SOFTEX-FAP-Projeto-Product-List-with-Cart",
    imageUrl: "/idesserts.png",
    imageAlt: "Lista de sobremesas e carrinho de compras do Idesserts",
  },
];

export default highlightProjects;
