import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export type Tech = { name: string; icon: IconType; color: string };

export const tech: Record<string, Tech> = {
  HTML5: { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  CSS3: { name: "CSS3", icon: SiCss, color: "#663399" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  React: { name: "React", icon: SiReact, color: "#61dafb" },
  "Next.js": { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  TailwindCSS: { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8" },
  "Node.js": { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  "C#": { name: "C#", icon: TbBrandCSharp, color: "#a179dc" },
  C: { name: "C", icon: SiC, color: "#a8b9cc" },
  "C++": { name: "C++", icon: SiCplusplus, color: "#00599c" },
  Python: { name: "Python", icon: SiPython, color: "#ffd43b" },
  MySQL: { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  "SQL Server": { name: "SQL Server", icon: DiMsqlServer, color: "#cc2927" },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  Docker: { name: "Docker", icon: SiDocker, color: "#2496ed" },
  Git: { name: "Git", icon: SiGit, color: "#f05032" },
  GitHub: { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  "VS Code": { name: "VS Code", icon: TbBrandVscode, color: "#22a6f2" },
};

export type StackGroupKey = "frontend" | "backend" | "databases" | "devops";

export type StackGroup = {
  key: StackGroupKey;
  items: string[];
  /** FolderFloat styling — each folder gets its own personality */
  folder: {
    folderColor: string;
    frontColor: string;
    paperColor: string;
    itemColor: string;
    itemTextColor: string;
    labelColor: string;
    spread: number;
    lift: number;
    tilt: number;
    flapAngle: number;
    restAngle: number;
    drift: number;
    bounce: number;
  };
  accent: string;
};

export const stackGroups: StackGroup[] = [
  {
    key: "frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
    accent: "#ac77f2",
    folder: {
      folderColor: "#4c2d7a",
      frontColor: "#8b5cf6",
      paperColor: "#f3e8ff",
      itemColor: "#ede4ff",
      itemTextColor: "#2e1065",
      labelColor: "#faf5ff",
      spread: 190,
      lift: 28,
      tilt: 9,
      flapAngle: 36,
      restAngle: 16,
      drift: 0.6,
      bounce: 0.35,
    },
  },
  {
    key: "backend",
    items: ["Node.js", "C#", "C", "C++", "Python"],
    accent: "#3aa0dc",
    folder: {
      folderColor: "#123f5c",
      frontColor: "#2b8fcb",
      paperColor: "#e0f2fe",
      itemColor: "#dff1fd",
      itemTextColor: "#082f49",
      labelColor: "#f0f9ff",
      spread: 150,
      lift: 24,
      tilt: 7,
      flapAngle: 32,
      restAngle: 14,
      drift: 0.5,
      bounce: 0.3,
    },
  },
  {
    key: "databases",
    items: ["MySQL", "SQL Server", "PostgreSQL"],
    accent: "#34d399",
    folder: {
      folderColor: "#0b4a3a",
      frontColor: "#10b981",
      paperColor: "#d1fae5",
      itemColor: "#d7f9ea",
      itemTextColor: "#052e22",
      labelColor: "#ecfdf5",
      spread: 120,
      lift: 22,
      tilt: 10,
      flapAngle: 30,
      restAngle: 18,
      drift: 0.4,
      bounce: 0.4,
    },
  },
  {
    key: "devops",
    items: ["Docker", "Git", "GitHub", "VS Code"],
    accent: "#f59e0b",
    folder: {
      folderColor: "#5c3a08",
      frontColor: "#d98a0b",
      paperColor: "#fef3c7",
      itemColor: "#fff1cc",
      itemTextColor: "#451a03",
      labelColor: "#fffbeb",
      spread: 140,
      lift: 26,
      tilt: 12,
      flapAngle: 38,
      restAngle: 15,
      drift: 0.7,
      bounce: 0.25,
    },
  },
];

export const allTech = Object.values(tech);
