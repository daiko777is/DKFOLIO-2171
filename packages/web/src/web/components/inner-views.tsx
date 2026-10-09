import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, Copy as CopyIcon, Github, Info, Mail, MousePointer2, Send, Sparkles, Workflow } from "lucide-react";
import { TbBrandLinkedin } from "react-icons/tb";
import { Layout, SectionLabel, ContactCta, type Copy } from "./portfolio-layout";
import { ProjectGrid, type ProjectCopy } from "./project-grid";
import { projectBases, site } from "@/content/site";
import { stackGroups, tech } from "@/content/tech";
import { routes, projectPath } from "@/lib/routes";
import { BlurFade } from "./ui/blur-fade";
import FolderFloat from "./ui/FolderFloat";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { BorderBeam } from "./ui/border-beam";

function PageHeading({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return <BlurFade><div className="page-heading"><p className="page-eyebrow"><span className="tiny-dot" />{label}</p><h1>{title}</h1>{intro && <p className="page-intro">{intro}</p>}</div></BlurFade>;
}

export function ProjectsView({ c, projects }: { c: Copy; projects: ProjectCopy[] }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  return <Layout c={c} page="projects"><section className="container-shell inner-page">
    <PageHeading label={c.featured} title={c.projectsTitle} intro={c.projectsIntro} />
    <fieldset className="filter-row" aria-label={c.nav.projects}>{["all", ...Object.keys(c.filters)].map(key => <button key={key} aria-pressed={filter === key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{key === "all" ? c.all : c.filters[key as keyof typeof c.filters]}<span>{key === "all" ? projects.length : projects.filter(p => p.category === key).length}</span></button>)}</fieldset>
    <ProjectGrid c={c} projects={filtered} /><p className="placeholder-note"><Info size={14} />{c.examplesNotice}</p>
  </section><ContactCta c={c} /></Layout>;
}

export function ProjectView({ c, projects }: { c: Copy; projects: ProjectCopy[] }) {
  const { slug } = useParams<{ slug: string }>();
  const p = projects.find(p => p.slug === slug);
  if (!p) return <Layout c={c} page="projects"><section className="container-shell inner-page"><PageHeading label="404" title={c.notFound} /><Link href={routes[c.lang].projects} className="pill-button light">{c.backProjects}</Link></section></Layout>;
  const base = projectBases.find(b => b.slug === slug)!;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return <Layout c={c} page="projects"><article className="container-shell inner-page project-detail">
    <Link href={routes[c.lang].projects} className="text-link back-link"><ArrowLeft size={16} />{c.backProjects}</Link>
    <div className="detail-top"><PageHeading label={c.filters[p.category as keyof typeof c.filters]} title={p.name} intro={p.subtitle} /><span className="draft-chip">{c.example}</span></div>
    <div className="detail-cover"><img src={base.image} alt={`${p.name} — ${p.subtitle}`} /><span className="cover-number">0{projects.indexOf(p) + 1}</span></div>
    <div className="detail-columns"><aside><p className="page-eyebrow">TECH STACK</p><div className="detail-stack">{base.tech.map(t => { const Icon = tech[t]?.icon ?? Code2; return <span key={t}><Icon size={17} />{t}</span>; })}</div><div className="detail-links"><Button variant="outline" disabled><Github size={16} />{c.code}</Button><Button variant="outline" disabled><ArrowUpRight size={16} />{c.demo}</Button></div><p className="placeholder-note">{c.pending} · {c.example}</p></aside><div className="detail-story"><section><h2>{c.problem}</h2><p>{p.problem}</p></section><section><h2>{c.solution}</h2><p>{p.solution}</p></section><section><h2>{c.highlights}</h2><ul>{p.highlights.map(h => <li key={h}><Check size={18} />{h}</li>)}</ul></section></div></div>
    <p className="placeholder-note">{c.examplesNotice}</p><Link href={projectPath(c.lang, next.slug)} className="next-project"><div><small>{c.nextProject}</small><h2>{next.name}</h2></div><ArrowRight size={36} /></Link>
  </article></Layout>;
}

export function AboutView({ c }: { c: Copy }) {
  const icons = [MousePointer2, Code2, Workflow];
  return <Layout c={c} page="about"><section className="container-shell inner-page">
    <PageHeading label={c.aboutLabel} title={c.aboutTitle} />
    <div className="bio-grid"><div className="bio-photo"><img src="/images/about-desk.png" alt={c.lang === "es" ? "Mi inspiración: un espacio para crear" : "A space for building and creating"} /><span>DAIKO / FULL-STACK DEVELOPER</span></div><div className="bio-text"><h2>{c.aboutIntro}</h2>{c.bio.map(p => <p key={p}>{p}</p>)}<p className="placeholder-note">{c.draft}</p><Link href={routes[c.lang].contact} className="pill-button light">{c.contactMe}<ArrowUpRight size={18} /></Link></div></div>
    <div className="principles-section"><SectionLabel>{c.principlesLabel}</SectionLabel><div className="principles-grid">{c.principles.map((p, i) => { const Icon = icons[i]; return <div key={p.title}><span className="principle-icon"><Icon size={24} /></span><span className="principle-number">0{i+1}</span><h3>{p.title}</h3><p>{p.body}</p></div>; })}</div></div>
  </section><ContactCta c={c} /></Layout>;
}

export function SkillsView({ c }: { c: Copy }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [compact, setCompact] = useState(() => window.matchMedia("(max-width: 700px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    const sync = () => setCompact(mq.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return <Layout c={c} page="skills"><section className="container-shell inner-page">
    <PageHeading label={c.stackLabel} title={c.stackTitle} intro={c.skillsIntro} />
    <p className="folder-hint"><MousePointer2 size={15} />{c.folderHint}</p>
    <div className="folders-grid">{stackGroups.map((group, index) => {
      const text = c.groups[group.key];
      return <div className="folder-card" key={group.key}>
        <div className="folder-card-heading"><span>0{index + 1} / {text.label.toUpperCase()}</span><span style={{ color: group.accent }}>●</span></div>
        <div className="folder-stage"><FolderFloat {...group.folder} spread={compact ? Math.min(group.folder.spread, 140) : group.folder.spread} items={group.items} label={text.label} sublabel={`${group.items.length} ${c.technologies}`} trigger={compact ? "click" : "hover"} closeOnSelect physics width={210} height={150} radius={14} openDuration={520} stagger={45} onSelect={value => setPicked(value)} /></div>
        <p>{text.description}</p><div className="skill-tags">{group.items.map(t => { const Icon = tech[t].icon; return <button key={t} onClick={() => setPicked(t)} className={picked === t ? "picked" : ""}><Icon size={16} />{t}</button>; })}</div>
      </div>;
    })}</div>
    <output className="picked-status">{picked ? <><Sparkles size={16} /><span>{c.selectedTech}: <strong>{picked}</strong></span></> : <><Code2 size={17} /><span>{stackGroups.reduce((sum, g) => sum + g.items.length, 0)} {c.technologies} / 4 {c.lang === "es" ? "categorías" : "categories"}</span></>}</output>
  </section><ContactCta c={c} /></Layout>;
}

export function ContactView({ c }: { c: Copy }) {
  const [notice, setNotice] = useState(false);
  const [copied, setCopied] = useState(false);
  async function copyHandle() {
    try { await navigator.clipboard.writeText(site.githubHandle); setCopied(true); } catch { setCopied(false); }
  }
  return <Layout c={c} page="contact"><section className="container-shell inner-page contact-page">
    <PageHeading label={c.nav.contact} title={c.cta.join("\n")} intro={c.contactIntro} />
    <div className="contact-grid"><div className="contact-info"><div className="availability"><span />{c.available}</div><h2>{c.findMe}</h2><a href={site.github} target="_blank" rel="noopener noreferrer" className="contact-channel"><Github size={22} /><div><strong>GitHub</strong><span>@{site.githubHandle}</span></div><ArrowUpRight size={19} /></a><div className="contact-channel unconfigured"><Mail size={22} /><div><strong>Email</strong><span>{c.unconfigured}</span></div></div><div className="contact-channel unconfigured"><TbBrandLinkedin size={22} /><div><strong>LinkedIn</strong><span>{c.unconfigured}</span></div></div><button className="copy-handle" onClick={copyHandle}>{copied ? <Check size={15} /> : <CopyIcon size={15} />}{copied ? (c.lang === "es" ? "Copiado" : "Copied") : (c.lang === "es" ? "Copiar usuario de GitHub" : "Copy GitHub handle")}</button></div>
      <div className="contact-form-wrapper"><BorderBeam size={180} duration={12} colorFrom="#ac77f2" colorTo="#3aa0dc" />
      <form onSubmit={event => { event.preventDefault(); setNotice(true); }} className="contact-form"><div><Label htmlFor="name">{c.name}</Label><Input id="name" name="name" autoComplete="name" placeholder={c.lang === "es" ? "¿Cómo te llamas?" : "What should I call you?"} required /></div><div><Label htmlFor="email">{c.email}</Label><Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div><div><Label htmlFor="message">{c.message}</Label><Textarea id="message" name="message" rows={5} placeholder={c.lang === "es" ? "La idea, el reto, lo que quieres construir..." : "The idea, the challenge, what you'd like to build..."} required /></div><Button type="submit" className="form-submit">{c.send}<Send size={16} /></Button><p className="form-notice"><Info size={13} />{c.formNotice}</p>{notice && <output className="form-result">{c.formResult}</output>}</form>
      </div>
    </div>
  </section></Layout>;
}