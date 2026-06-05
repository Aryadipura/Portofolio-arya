"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.article
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Gradient top bar */}
          <div className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Thumbnail area */}
          <div className="relative h-48 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {project.logo ? (
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center p-3 border border-neutral-100 dark:border-neutral-700">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              ) : (
                <div className="text-4xl font-bold bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-blue-400/20 dark:to-violet-400/20 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600/40 dark:text-blue-400/40">
                  {project.title.charAt(0)}
                </div>
              )}
            </div>

            {/* Category badge */}
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
                {project.category}
              </span>
            </div>

            {/* Year */}
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {project.year}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tech stack */}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="px-2 py-0.5 text-xs font-mono text-neutral-400">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Read more indicator */}
            <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View Case Study</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
