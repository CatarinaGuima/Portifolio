export type Project = {
  title: string;
  description: string;
  techs: string[];
  image?: string;
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Protótipo Instagram",
    description:
      "Interface inspirada no Instagram com dados dinâmicos (Faker).",
    techs: ["HTML", "CSS", "TypeScript", "Faker"],
    repo: "https://github.com/CatarinaGuima/SOFTEX-FAP-Projeto-Instagram",
    demo: "https://github.com/user-attachments/assets/8a3d644b-2800-4754-905b-d2f2b49e3d45",
  },
  {
    title: "Pro Lídera Skills (MVP)",
    description:
      "App para avaliação de habilidades de liderança (18 perguntas).",
    techs: ["Next.js", "React", "Tailwind", "Supabase"],
    demo: "https://pro-lidera-skils-softex-equipe-2.vercel.app/",
  },
  {
    title: "Carrinho de Compras – DessertsFood",
    description:
      "Listagem e compra de produtos com deploy no Netlify.",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://dessertsfood.netlify.app",
  },
];
