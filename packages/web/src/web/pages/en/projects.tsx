import { ProjectsView } from "@/components/inner-views";
import { copy, projects } from "@/content/en";

export default function Page() {
  return <ProjectsView c={copy} projects={projects} />;
}
