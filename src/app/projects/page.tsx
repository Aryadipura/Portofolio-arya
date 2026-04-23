import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Arya Dipura — from microservices platforms to real-time analytics dashboards. Each project includes detailed case studies with system design and architecture decisions.",
};

export default function Page() {
  return <ProjectsPage />;
}
