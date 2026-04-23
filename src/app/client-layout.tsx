"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
