import { HomeView } from "@/components/home-view";
import { copy, projects } from "@/content/en";

export default function Page() {
  return <HomeView c={copy} projects={projects} />;
}
