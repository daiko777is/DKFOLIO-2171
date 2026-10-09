import { Route, Switch, Redirect } from "wouter";
import type { ComponentType } from "react";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import { Layout } from "./components/portfolio-layout";
import { copy } from "./content/es";
import { routes } from "./lib/routes";

// Files are routes: /pages/es/proyectos/[slug].tsx -> /es/proyectos/:slug.
// Localized pages import their own content; no i18n library or runtime translation.
const modules = import.meta.glob<{ default: ComponentType }>("./pages/{en,es}/**/*.tsx", { eager: true });
const pages = Object.entries(modules).map(([file, module]) => ({
  path: file.replace("./pages", "").replace(/\.tsx$/, "").replace(/\/home$/, "").replace(/\[([^\]]+)\]/g, ":$1"),
  component: module.default,
})).sort((a, b) => b.path.length - a.path.length);

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/"><Redirect to="/es" /></Route>
        {pages.map(page => <Route key={page.path} path={page.path} component={page.component} />)}
        <Route><Layout c={copy}><section className="container-shell inner-page"><div className="page-heading"><p>404</p><h1>{copy.notFound}</h1></div><a href={routes.es.home} className="pill-button light">{copy.nav.home}</a></section></Layout></Route>
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
