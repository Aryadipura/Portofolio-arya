import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aryadipura — Software Developer",
    template: "%s | Aryadipura",
  },
  description:
    "Software Developer building scalable systems with clean architecture and thoughtful engineering decisions. Specializing in backend development, system design, and full-stack applications.",
  keywords: [
    "Software Developer",
    "Backend Developer",
    "Full Stack Developer",
    "System Design",
    "Java",
    "TypeScript",
    "Go",
    "Microservices",
    "Portfolio",
  ],
  authors: [{ name: "Aryadipura" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aryadipura Portfolio",
    title: "Aryadipura — Software Developer",
    description:
      "Building scalable systems with clean architecture and thoughtful engineering decisions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryadipura — Software Developer",
    description:
      "Building scalable systems with clean architecture and thoughtful engineering decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
