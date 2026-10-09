import { Link } from "wouter";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectBases } from "@/content/site";
import { projectPath } from "@/lib/routes";
import { BlurFade } from "./ui/blur-fade";
import { CutoutCard, CutoutCardMedia, CutoutCardImage, CutoutCardInsetLabel, CutoutCorner, CutoutCardPin } from "./ui/cutout-card";
import type { Copy } from "./portfolio-layout";
import type { projects as SpanishProjects } from "@/content/es";

export type ProjectCopy = (typeof SpanishProjects)[number];

export function ProjectGrid({ c, projects }: { c: Copy; projects: ProjectCopy[] }) {
  return <div className="project-grid">{projects.map((project, i) => {
    const base = projectBases.find(p => p.slug === project.slug)!;
    return <BlurFade key={project.slug} delay={i * .06} inView inViewMargin="0px">
      <article className="project-item">
        <Link href={projectPath(c.lang, project.slug)} aria-label={`${c.details}: ${project.name}`} className="project-link">
          <CutoutCard className="project-media-card group/cutout">
            <CutoutCardMedia className="project-media">
              <CutoutCardImage src={base.image} alt={`${project.name} — ${project.subtitle}`} />
              <CutoutCardPin className="project-pin">{String(projectBases.indexOf(base) + 1).padStart(2, "0")}<CutoutCorner className="absolute -left-[19px] top-0 -rotate-90 text-background" size={20} /></CutoutCardPin>
              <CutoutCardInsetLabel className="project-inset">{c.filters[project.category as keyof typeof c.filters]}<CutoutCorner size={25} className="absolute -right-6 bottom-0 rotate-90 text-background" /><CutoutCorner size={25} className="absolute -top-6 left-0 rotate-90 text-background" /></CutoutCardInsetLabel>
            </CutoutCardMedia>
          </CutoutCard>
          <div className="project-caption"><div><h3>{project.name}</h3><p>{project.subtitle}</p></div><span className="arrow-pill"><ArrowUpRight size={20} /></span></div>
        </Link>
        <div className="project-tech">{base.tech.slice(0, 3).map(t => <span key={t}>{t}</span>)}<span className="example-label">{c.example}</span></div>
      </article>
    </BlurFade>;
  })}</div>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-link">{children} <ArrowRight size={17} /></Link>;
}