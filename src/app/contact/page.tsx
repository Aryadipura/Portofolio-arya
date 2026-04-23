import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arya Dipura for collaboration, project inquiries, or just to connect. Available for freelance and full-time opportunities.",
};

export default function Page() {
  return <ContactPage />;
}
