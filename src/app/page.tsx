"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeIn,
  TextReveal,
  FloatingElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo, projects, experiences, skillCategories } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredExperiences = experiences.filter((e) => e.featured).slice(0, 3);

  return (
    <div className="relative">
      {/* ====== Hero Section ====== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement
            className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"
            duration={8}
            distance={30}
          />
          <FloatingElement
            className="absolute bottom-20 right-[10%] w-96 h-96 bg-violet-500/5 dark:bg-violet-400/5 rounded-full blur-3xl"
            duration={10}
            distance={25}
          />
          <FloatingElement
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/3 to-violet-500/3 rounded-full blur-3xl"
            duration={12}
            distance={15}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          {/* Status badge */}
          <TextReveal>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200/50 dark:border-green-800/30 mb-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Open to opportunities
              </span>
            </motion.div>
          </TextReveal>

          {/* Name & Title */}
          <TextReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-neutral-900 dark:text-neutral-100">
                Hi, I&apos;m{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 dark:from-blue-400 dark:via-blue-300 dark:to-violet-400 bg-clip-text text-transparent">
                {personalInfo.name.split(" ")[0]}
              </span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium mb-4">
              {personalInfo.role}
            </p>
          </TextReveal>

          {/* <TextReveal delay={0.3}>
            <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10">
              {personalInfo.tagline}
            </p>
          </TextReveal> */}

          {/* CTA Buttons */}
          <TextReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects">
                <motion.button
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link href="/experience">
                <motion.button
                  className="px-8 py-3.5 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Experience
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-3.5 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me →
                </motion.button>
              </Link>
            </div>
          </TextReveal>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ====== Featured Projects ====== */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Featured Work"
            title="Projects I'm Proud Of"
            description="Selected projects that I have worked on."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link href="/projects">
              <motion.button
                className="px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors border border-blue-200/50 dark:border-blue-800/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Projects →
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ====== Experience Highlight ====== */}
      <section className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Experience"
            title="Where I've Made Impact"
            description="Professional journey building products and systems that matter."
          />

          <StaggerContainer className="space-y-6">
            {featuredExperiences.map((exp) => (
              <StaggerItem key={exp.id}>
                <motion.div
                  className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="flex-shrink-0">
                      {exp.logo ? (
                        <div className="w-12 h-12 rounded-xl overflow-hidden relative shadow-sm bg-white">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                          {exp.company.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-500">
                          at {exp.company}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">
                        {exp.startDate} – {exp.endDate}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 hidden md:block">
                      <svg
                        className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <Link href="/experience">
              <motion.button
                className="px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors border border-blue-200/50 dark:border-blue-800/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Full Experience →
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ====== Tech Stack Preview  ====== */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Tech Stack"
            title="Tools & Technologies"
            description="A curated set of technologies I use to build reliable, scalable systems."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.slice(0, 3).map((category) => (
              <StaggerItem key={category.title}>
                <motion.div
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all h-full"
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                    {category.description}
                  </p>
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
                </motion.div>
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

      {/* ====== CTA Section ====== */}
      <section className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
              Whether you have a project idea, a technical challenge, or just
              want to connect—I&apos;d love to hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 text-white rounded-xl font-medium text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
