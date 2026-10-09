import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Github, Menu, X, Code2, Asterisk } from "lucide-react";
import { routes, translatePath, type PageKey, type Lang } from "@/lib/routes";
import { site } from "@/content/site";
import type { copy as SpanishCopy } from "@/content/es";
import TechText from "./ui/TechText";

export type Copy = Omit<typeof SpanishCopy, "lang"> & { lang: Lang };

export function Logo() {
  return <span className="brand-logo"><Code2 size={25} strokeWidth={2.8} /><span>DAIKO<span className="text-violet-brand">.</span></span></span>;
}

function AnimatedNav({ c }: { c: Copy }) {
  const [pathname] = useLocation();
  const [expanded, setExpanded] = useState(true);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const last = useRef(0);
  const collapsedAt = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    if (expanded && y > last.current && y > 180) {
      setExpanded(false);
      collapsedAt.current = y;
    }
    if (!expanded && y < last.current && collapsedAt.current - y > 80) setExpanded(true);
    if (!expanded && y > last.current) collapsedAt.current = y;
    if (y < 100) setExpanded(true);
    last.current = y;
  });
  useEffect(() => setExpanded(true), [pathname]);
  return <div className="nav-position">
    <motion.nav layout={!reduce} transition={{ type: "spring", damping: 26, stiffness: 300 }} className={`floating-nav ${expanded ? "expanded" : "collapsed"}`} aria-label={c.lang === "es" ? "Navegación principal" : "Main navigation"}>
      <AnimatePresence mode="popLayout" initial={false}>
        {expanded ? <motion.div key="links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="nav-links">
          {(Object.keys(c.nav) as PageKey[]).map(key => {
            const href = routes[c.lang][key];
            const active = key === "home" ? pathname === href || pathname === "/" : pathname.startsWith(href);
            return <Link href={href} key={key} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>{c.nav[key]}</Link>;
          })}
          <button className="nav-close" onClick={() => setExpanded(false)} aria-label={c.lang === "es" ? "Cerrar navegación" : "Collapse navigation"}><X size={14} /></button>
        </motion.div> : <motion.button key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setExpanded(true)} aria-expanded={false} aria-label={c.lang === "es" ? "Abrir navegación" : "Expand navigation"}><Menu size={21} /></motion.button>}
      </AnimatePresence>
    </motion.nav>
  </div>;
}

export function Layout({ c, children, page = "home" }: { c: Copy; children: ReactNode; page?: PageKey }) {
  const [pathname] = useLocation();
  const reduce = useReducedMotion();
  useEffect(() => {
    document.documentElement.lang = c.lang;
    document.title = `${page === "home" ? "Full-stack developer" : c.nav[page]} — DAIKO`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, c.lang, c.nav, page]);
  return <>
    <a href="#main" className="skip-link">{c.lang === "es" ? "Ir al contenido" : "Skip to content"}</a>
    <header className="site-header container-shell">
      <Link href={routes[c.lang].home} aria-label="DAIKO — Home"><Logo /></Link>
      <div className="header-right">
        <div className="language-switch" aria-label={c.lang === "es" ? "Idioma" : "Language"}>
          {(["es", "en"] as Lang[]).map(lang => <Link key={lang} href={translatePath(pathname, lang)} className={c.lang === lang ? "selected" : ""} lang={lang}>{lang.toUpperCase()}</Link>)}
        </div>
        <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="header-github"><Github size={19} /></a>
      </div>
    </header>
    <AnimatedNav c={c} />
    <motion.main id="main" key={pathname} initial={reduce ? undefined : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>{children}</motion.main>
    <footer className="container-shell tech-footer">
      <div className="footer-wordmark font-display">
        <TechText text="DAIKO" fontWeight={700} fontSize={150} reveal="letter" dashLength={7} dashGap={2} specks={15} className="font-display" color="#947feb" accentColor="#5a8bdf" speed={0.6} sweep={false} />
      </div>
      <div className="site-footer">
        <div><p>© {site.year} DAIKO. {c.footer}</p></div>
        <div className="footer-actions"><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><Link href={routes[c.lang].contact}>{c.nav.contact} <ArrowUpRight size={14} /></Link><button onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "instant" : "smooth" })}>{c.top} <ArrowUp size={14} /></button></div>
      </div>
    </footer>
  </>;
}

export function SectionLabel({ children, end }: { children: ReactNode; end?: ReactNode }) {
  return <div className="section-label"><span><span className="tiny-dot" />{children}</span>{end && <span className="label-end">{end}</span>}</div>;
}

export function ContactCta({ c }: { c: Copy }) {
  return <section className="contact-cta container-shell">
    <div className="cta-spark"><Asterisk size={34} strokeWidth={1.4} /></div>
    <h2>{c.cta[0]}<br /><span>{c.cta[1]}</span></h2>
    <p>{c.ctaDescription}</p>
    <Link href={routes[c.lang].contact} className="pill-button light">{c.contactMe} <ArrowUpRight size={18} /></Link>
  </section>;
}