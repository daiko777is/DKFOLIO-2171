import { Link, useLocation } from "wouter";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import { Layout, SectionLabel, ContactCta, type Copy } from "./portfolio-layout";
import { ProjectGrid, TextLink, type ProjectCopy } from "./project-grid";
import { routes } from "@/lib/routes";
import { tech } from "@/content/tech";
import PatternWaves from "./ui/PatternWaves";
import { BlurFade } from "./ui/blur-fade";
import { ShimmerButton } from "./ui/shimmer-button";
import { Marquee } from "./ui/marquee";

export function HomeView({ c, projects }: { c: Copy; projects: ProjectCopy[] }) {
  const [, navigate] = useLocation();
  return <Layout c={c}>
    <section className="hero container-shell">
      <div className="hero-pattern-waves" aria-hidden="true">
        <PatternWaves preset="silk" color="#542eed" backgroundColor="#000000" fade="edges" interactive={false} cursorSize={50} cursorStrength={0.6} shine={0.55} scale={0.7} direction={120} fadeSize={0.55} />
      </div>
      <div className="hero-content">
        <BlurFade delay={.05}><div className="availability"><span />{c.available}</div></BlurFade>
        <BlurFade delay={.12}><p className="hero-eyebrow">DAIKO <span>/</span> {c.role}</p></BlurFade>
        <BlurFade delay={.2}><h1>{c.hero[0]}<br /><span>{c.hero[1]}</span></h1></BlurFade>
        <BlurFade delay={.28}><p className="hero-description">{c.description}</p></BlurFade>
        <BlurFade delay={.35}><div className="hero-buttons"><ShimmerButton shimmerColor="#ac77f2" background="#f4f4f5" className="hero-primary" onClick={() => navigate(routes[c.lang].projects)}>{c.viewProjects}<ArrowUpRight size={18} /></ShimmerButton><Link href={routes[c.lang].contact} className="pill-button secondary">{c.contactMe}<ArrowUpRight size={18} /></Link></div></BlurFade>
      </div>
      <div className="hero-bottom"><span>SYSTEMS / WEBSITES / AUTOMATIONS</span><a href="#selected" aria-label={c.featured}><ArrowDown size={18} /></a></div>
    </section>
    <section className="container-shell work-section" id="selected">
      <SectionLabel end={c.selected}>{c.featured}</SectionLabel>
      <div className="section-heading"><h2>{c.projectsTitle}</h2><TextLink href={routes[c.lang].projects}>{c.allProjects}</TextLink></div>
      <ProjectGrid c={c} projects={projects} />
      <p className="placeholder-note">{c.examplesNotice}</p>
    </section>
    <section className="container-shell toolbox-section">
      <SectionLabel>{c.stackLabel}</SectionLabel>
      <div className="toolbox-panel">
        <div className="toolbox-top"><div><h2>{c.stackTitle}</h2><p>{c.stackDescription}</p></div><Link className="circle-link" href={routes[c.lang].skills} aria-label={c.stackCta}><ArrowUpRight size={28} /></Link></div>
        <Marquee pauseOnHover className="tech-marquee [--duration:38s] [--gap:3rem]">{["React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "PostgreSQL", "C#", "Git"].map(name => { const Icon = tech[name].icon; return <div className="marquee-tech" key={name}><Icon size={30} /><span>{name}</span></div>; })}</Marquee>
      </div>
    </section>
    <section className="container-shell about-teaser">
      <SectionLabel>{c.aboutLabel}</SectionLabel>
      <div className="about-teaser-grid"><div className="about-photo"><img src="/images/about-desk.png" alt={c.lang === "es" ? "Un espacio de trabajo con código en pantalla" : "A workspace with code on screen"} loading="lazy" /><div className="photo-label"><Asterisk size={20} /> ALWAYS BUILDING.</div></div><div><h2>{c.aboutTitle}</h2><p>{c.aboutShort}</p><TextLink href={routes[c.lang].about}>{c.aboutCta}</TextLink></div></div>
    </section>
    <ContactCta c={c} />
  </Layout>;
}