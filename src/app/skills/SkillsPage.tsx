"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";
import { skillCategories } from "@/lib/data";

const levelColors = {
  beginner:
    "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700",
  intermediate:
    "bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/30",
  advanced:
    "bg-violet-50 dark:bg-violet-950/20 text-violet-700 dark:text-violet-300 border-violet-200/50 dark:border-violet-800/30",
  expert:
    "bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 text-blue-800 dark:text-blue-200 border-blue-300/50 dark:border-blue-700/30",
};

const levelLabels = {
  beginner: "Learning",
  intermediate: "Proficient",
  advanced: "Advanced",
  expert: "Expert",
};

const levelDots = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

export default function SkillsPage() {
  return (
    <div className="relative">
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Technical Expertise"
            title="Skills & Technologies"
            description="A comprehensive overview of the tools, languages, and concepts I use to build reliable, scalable systems."
          />

          {/* Skill level legend */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {(
                Object.entries(levelLabels) as [
                  keyof typeof levelLabels,
                  string,
                ][]
              ).map(([level, label]) => (
                <div
                  key={level}
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < levelDots[level]
                            ? "bg-blue-500 dark:bg-blue-400"
                            : "bg-neutral-200 dark:bg-neutral-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Skill categories */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <motion.div
                  className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all h-full"
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                        {category.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 4 }).map((_, j) => (
                              <motion.div
                                key={j}
                                className={`w-2 h-2 rounded-full ${
                                  j <
                                  levelDots[skill.level || "intermediate"]
                                    ? "bg-blue-500 dark:bg-blue-400"
                                    : "bg-neutral-200 dark:bg-neutral-700"
                                }`}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: i * 0.05 + j * 0.05,
                                  type: "spring",
                                }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-neutral-400 dark:text-neutral-600 w-16 text-right hidden sm:block">
                            {
                              levelLabels[
                                skill.level || "intermediate"
                              ]
                            }
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
