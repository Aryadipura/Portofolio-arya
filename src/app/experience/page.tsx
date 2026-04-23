import type { Metadata } from "next";
import ExperiencePage from "./ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and career journey of Arya Dipura — from backend development to senior engineering roles, building systems that scale.",
};

export default function Page() {
  return <ExperiencePage />;
}
