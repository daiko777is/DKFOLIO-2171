# DAIKO — Portfolio design system

Inspired by a minimal dark designer portfolio: near-black canvas, huge display type, big rounded media cards with a small caption row + pill arrow button, thin divider section headers, pill buttons, centered contact form.

## Colors
- Background `#0e0e10`, surface/card `#18181b`, raised `#1f1f23`, border `rgba(255,255,255,0.08)`
- Foreground `#f4f4f5`, muted text `#a1a1aa`
- Accent violet `#ac77f2` (primary), accent blue `#3aa0dc` (secondary) — both come from the Scanner hero shader
- Status green `#4ade80` (availability dot)
- Folder palettes per stack: Frontend violet, Backend blue, Databases emerald, DevOps amber

## Typography
- `font-display`: "Plus Jakarta Sans" (custom Tailwind token) for headings, nav, buttons; tracking tight (-0.03em) at large sizes
- Body: `ui-sans-serif, system-ui` stack (`font-sans`)
- Hero 64–120px, page titles 48–88px, section labels 14px semibold with top hairline

## Layout
- Max width 1200px, 24px gutters mobile / 48px desktop
- Section headers: hairline `border-t` + small label left (like "About")
- Project grid: 2 columns, square media cards radius 28px, caption below (title + tags) with round arrow pill on the right
- Generous vertical rhythm (py-24/32)

## Components
- Navbar: floating pill (animated-nav-framer), collapses to a circle on scroll down, bg `#18181b/80` blur, active link white
- Cards: cult-ui CutoutCard (inset label + pin with cutout corners)
- Buttons: pill, `bg-white text-black` primary, `bg-[#1f1f23]` secondary; Magic UI ShimmerButton for the main hero CTA
- Stack: React Bits FolderFloat per category; Magic UI Marquee for icon strip; BlurFade for reveals
- Contact form: dark filled inputs `#1f1f23`, white full-width submit, BorderBeam around

## Motion
- Page enter: staggered BlurFade (0.04s steps)
- Hover: media scale 1.05, arrow pill translate-x
- Respect reduced motion

## Routing
- `/en/*` and `/es/*` are separate routes with localized slugs (no i18n lib): projects/proyectos, about/sobre-mi, skills/habilidades, contact/contacto
