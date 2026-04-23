"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative">
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="Career Journey"
            title="Work Experience"
            description="A timeline of my professional journey, the teams I've been part of, and the impact I've made."
          />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-neutral-300 dark:to-neutral-700" />

            <StaggerContainer className="space-y-8">
              {experiences.map((exp, index) => (
                <StaggerItem key={exp.id}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full border-4 border-blue-500 dark:border-blue-400 bg-white dark:bg-neutral-950 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    />

                    {/* Current indicator */}
                    {exp.endDate === "Present" && (
                      <motion.div
                        className="absolute left-[18px] md:left-[26px] top-[34px] w-4 h-4 rounded-full bg-blue-500/30"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* Experience card */}
                    <motion.div
                      className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer"
                      onClick={() => toggleExpand(exp.id)}
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 hidden sm:block">
                            {exp.logo ? (
                              <div className="w-12 h-12 rounded-xl overflow-hidden relative shadow-md bg-white">
                                <Image
                                  src={exp.logo}
                                  alt={exp.company}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                {exp.company.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                              {exp.role}
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                              {exp.company}
                            </p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                              {exp.startDate} – {exp.endDate}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedId === exp.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 mt-1"
                        >
                          <svg
                            className="w-5 h-5 text-neutral-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable details */}
                      <AnimatePresence>
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-6">
                              {/* Responsibilities */}
                              <div>
                                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wider">
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {exp.responsibilities.map((resp, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                                    >
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                      {resp}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand hint */}
                      <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-4">
                        {expandedId === exp.id
                          ? "Click to collapse"
                          : "Click to expand details"}
                      </p>
                    </motion.div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
