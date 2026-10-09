import { HomeView } from "@/components/home-view";
import { copy, projects } from "@/content/es";

export default function Page() {
  return <HomeView c={copy} projects={projects} />;
}
