"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Project } from "@/lib/types";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Projects
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                {project.category}
              </span>
              <span className="px-3 py-1 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {project.year}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              {project.subtitle}
            </p>
          </FadeIn>

          {/* Tech stack */}
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono rounded-lg bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Links */}
          {project.links && (
            <FadeIn delay={0.3}>
              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Case Study Content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Implementation Highlights */}
          <CaseStudySection title="Feature Highlights" icon="💡">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, i) => (
                <StaggerItem key={i}>
                  <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/10 border border-blue-200/30 dark:border-blue-800/20">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-blue-500 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {highlight}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </CaseStudySection>

          {/* Navigation */}
          <FadeIn>
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Back to All Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Case Study Section Component
// ============================================================
function CaseStudySection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </FadeIn>
  );
}
