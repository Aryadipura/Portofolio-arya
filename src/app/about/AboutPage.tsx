"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeIn,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo, skillCategories, educationRecords, organizationRecords, certificates } from "@/lib/data";

export default function AboutPage() {

  return (
    <div className="relative">
      {/* Hero */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="About Me"
            title="The Engineer Behind the Code"
          />

          {/* Story */}
          <div className="space-y-8">
            <FadeIn>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 relative">
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="prose-custom text-neutral-700 dark:text-neutral-300">
                  {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <p className="text-base md:text-lg leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education & Organization */}
      <section className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Background"
            title="Education & Organization"
            description="My academic background and organizational experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center gap-3">
                <span className="text-3xl">🎓</span> Education History
              </h3>
              <div className="space-y-6 relative border-l-2 border-blue-200 dark:border-blue-800/50 ml-4">
                {educationRecords.map((edu, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative pl-6 pb-2">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-white dark:border-neutral-900"></div>
                      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 block">
                          {edu.duration}
                        </span>
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                          {edu.institution}
                        </h4>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-3">
                          {edu.degree}
                        </span>
                        {edu.description && (
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Organization Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center gap-3">
                <span className="text-3xl">🤝</span> Organization History
              </h3>
              <div className="space-y-6 relative border-l-2 border-violet-200 dark:border-violet-800/50 ml-4">
                {organizationRecords.map((org, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative pl-6 pb-2">
                      <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-1 border-4 border-white dark:border-neutral-900"></div>
                      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                        <span className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-1 block">
                          {org.duration}
                        </span>
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                          {org.name}
                        </h4>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-3">
                          {org.role}
                        </span>
                        {org.description && (
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {org.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Achievements"
            title="Certifications & Achievements"
            description="Professional certifications and credentials I've earned."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.slice(0, 3).map((cert, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-amber-300 dark:hover:border-amber-700 transition-all h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="flex-1">
                    <div className="w-12 h-12 flex items-center justify-center bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 rounded-xl mb-4 text-2xl">
                      🏆
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                      Issued: {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs font-mono text-neutral-400 mt-2 p-1.5 bg-neutral-50 dark:bg-neutral-800/50 rounded-md inline-block">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  {cert.url && cert.url !== "#" && (
                    <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                      >
                        View Credential
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <Link href="/certificates">
              <motion.button
                className="px-6 py-3 text-sm font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors border border-amber-200/50 dark:border-amber-800/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Certificates →
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="pb-24 md:pb-32 bg-neutral-50/50 dark:bg-neutral-950/50 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Tech Stack"
            title="Technologies I Work With"
            description="A comprehensive overview of tools and technologies in my toolkit."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.slice(0, 3).map((category) => (
              <StaggerItem key={category.title}>
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 h-full">
                  <div className="text-2xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <Link href="/skills">
              <motion.button
                className="px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors border border-blue-200/50 dark:border-blue-800/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Skills →
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Bridge to Experience */}
      <section className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Curious About My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                Journey
              </span>
              ?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
              See my journey
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/experience">
                <motion.button
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Experience
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  className="px-8 py-3.5 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium border border-neutral-200 dark:border-neutral-700"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
