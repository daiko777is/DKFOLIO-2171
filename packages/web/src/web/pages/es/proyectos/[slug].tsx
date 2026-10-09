import { ProjectView } from "@/components/inner-views";
import { copy, projects } from "@/content/es";

export default function Page() {
  return <ProjectView c={copy} projects={projects} />;
}
