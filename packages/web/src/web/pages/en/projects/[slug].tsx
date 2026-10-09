import { ProjectView } from "@/components/inner-views";
import { copy, projects } from "@/content/en";

export default function Page() {
  return <ProjectView c={copy} projects={projects} />;
}
