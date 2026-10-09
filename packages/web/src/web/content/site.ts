// Placeholder contact data — swap for the real values.
export const site = {
  name: "DAIKO",
  email: "hola@daiko.dev",
  github: "https://github.com/daiko777is",
  githubHandle: "daiko777is",
  linkedin: "https://www.linkedin.com/in/daiko",
  linkedinHandle: "in/daiko",
  year: new Date().getFullYear(),
};

export type ProjectBase = {
  slug: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  year: string;
  accent: string;
};

export const projectBases: ProjectBase[] = [
  {
    slug: "stockline",
    image: "/images/projects/stockline.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Docker"],
    github: "https://github.com/daiko777is/stockline",
    demo: "https://stockline-demo.vercel.app",
    year: "2026",
    accent: "#ac77f2",
  },
  {
    slug: "flowbot",
    image: "/images/projects/flowbot.png",
    tech: ["Python", "Node.js", "SQL Server", "Docker"],
    github: "https://github.com/daiko777is/flowbot",
    demo: "https://flowbot-demo.vercel.app",
    year: "2025",
    accent: "#3aa0dc",
  },
  {
    slug: "turnia",
    image: "/images/projects/agenda.png",
    tech: ["C#", "SQL Server", "React", "TypeScript"],
    github: "https://github.com/daiko777is/turnia",
    demo: "https://turnia-demo.vercel.app",
    year: "2025",
    accent: "#34d399",
  },
  {
    slug: "lumen-studio",
    image: "/images/projects/lumen.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "JavaScript"],
    github: "https://github.com/daiko777is/lumen-studio",
    demo: "https://lumen-studio-demo.vercel.app",
    year: "2024",
    accent: "#ff7a2f",
  },
];
