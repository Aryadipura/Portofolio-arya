import type { Metadata } from "next";
import SkillsPage from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise of Arya Dipura — programming languages, frameworks, databases, infrastructure, and system design concepts.",
};

export default function Page() {
  return <SkillsPage />;
}
