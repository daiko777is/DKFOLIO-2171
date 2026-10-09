import type { Lang } from "@/lib/routes";
import type { StackGroupKey } from "./tech";

export type ProjectText = {
  name: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  results: { value: string; label: string }[];
  role: string;
};

export type Project = ProjectText & {
  slug: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  year: string;
  accent: string;
};

export type Content = {
  lang: Lang;
  nav: { home: string; projects: string; about: string; skills: string; contact: string };
  switchTo: string;
  hero: {
    badge: string;
    role: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  home: {
    featuredLabel: string;
    featuredTitle: string;
    viewAll: string;
    stackLabel: string;
    stackTitle: string;
    stackCta: string;
    aboutLabel: string;
    aboutTeaser: string;
    aboutCta: string;
    ctaTitle: [string, string];
    ctaButton: string;
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    featured: string;
    problem: string;
    solution: string;
    highlights: string;
    results: string;
    stack: string;
    role: string;
    year: string;
    code: string;
    demo: string;
    back: string;
    next: string;
    notFound: string;
    moreTitle: string;
    moreBody: string;
    moreCta: string;
    screenshot: string;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    paragraphs: string[];
    passionsLabel: string;
    passions: { title: string; body: string }[];
    experienceLabel: string;
    experience: { period: string; role: string; place: string; body: string }[];
    offLabel: string;
    off: string[];
    cta: string;
    location: string;
  };
  skills: {
    label: string;
    title: string;
    intro: string;
    hint: string;
    groups: Record<StackGroupKey, { label: string; sublabel: string; description: string }>;
    picked: string;
    usedIn: string;
    none: string;
  };
  contact: {
    label: string;
    title: [string, string];
    intro: string;
    name: string;
    email: string;
    message: string;
    send: string;
    soon: string;
    channels: string;
    emailLabel: string;
    copy: string;
    copied: string;
    response: string;
  };
  footer: { rights: string; top: string; made: string };
};
