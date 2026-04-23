import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Aryadipura — a software developer passionate about building scalable systems, clean architecture, and thoughtful engineering.",
};

export default function Page() {
  return <AboutPage />;
}
