"use client";

import { TextReveal } from "./animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <TextReveal>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50 mb-4">
            {label}
          </span>
        </TextReveal>
      )}
      <TextReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      </TextReveal>
      {description && (
        <TextReveal delay={0.2}>
          <p
            className={`mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed ${
              centered ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        </TextReveal>
      )}
    </div>
  );
}
