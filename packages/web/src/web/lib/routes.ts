export type Lang = "en" | "es";
export type PageKey = "home" | "projects" | "about" | "skills" | "contact";

export const routes: Record<Lang, Record<PageKey, string>> = {
  en: {
    home: "/en",
    projects: "/en/projects",
    about: "/en/about",
    skills: "/en/skills",
    contact: "/en/contact",
  },
  es: {
    home: "/es",
    projects: "/es/proyectos",
    about: "/es/sobre-mi",
    skills: "/es/habilidades",
    contact: "/es/contacto",
  },
};

export const projectPath = (lang: Lang, slug: string) => `${routes[lang].projects}/${slug}`;

/** Maps the current URL to the equivalent URL in the other language. */
export function translatePath(pathname: string, to: Lang): string {
  const from: Lang = pathname.startsWith("/es") ? "es" : "en";
  const clean = pathname.replace(/\/+$/, "") || "/";
  const keys = Object.keys(routes[from]) as PageKey[];

  // Project detail pages: /en/projects/:slug <-> /es/proyectos/:slug
  const projBase = routes[from].projects + "/";
  if (clean.startsWith(projBase)) {
    return routes[to].projects + "/" + clean.slice(projBase.length);
  }

  const key = keys.find((k) => routes[from][k] === clean) ?? "home";
  return routes[to][key];
}

export function langFromPath(pathname: string): Lang {
  return pathname.startsWith("/es") ? "es" : "en";
}
