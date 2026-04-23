import type { Metadata } from "next";
import CertificatesPage from "./CertificatesPage";

export const metadata: Metadata = {
  title: "Certificates",
  description: "A complete list of my professional certifications, awards, and credentials.",
};

export default function Page() {
  return <CertificatesPage />;
}
