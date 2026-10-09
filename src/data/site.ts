export const site = {
  name: "Catarina Guimarães",
  firstName: "Catarina",
  lastName: "Guimarães",
  role: "Desenvolvedora Front-end",
  url: "https://catarinaguimaraes.netlify.app",
  email: "catarina.guimaraes15@gmail.com",
  githubUser: "CatarinaGuima",
  github: "https://github.com/catarinaguima",
  linkedin: "https://www.linkedin.com/in/catarinaguimaraess/",
  cv: "/docs/curriculum.pdf",
  cvFileName: "Catarina_Guimaraes_CV.pdf",
  whatsappMessage: "Olá Catarina! Vi seu portfólio e gostaria de conversar sobre.",
  summary:
    "Crio experiências digitais performáticas e acessíveis com React, Next.js e TypeScript, unindo design intuitivo e código eficiente.",
} as const;

export const whatsappHref = `/api/whatsapp?message=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;
