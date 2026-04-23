"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/data";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative">
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Portfolio"
            title="Projects & Case Studies"
            description="Each project tells a story of problem-solving, system design, and engineering trade-offs. Click any project to read the full case study."
          />

          {/* Search & Filter */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects or tech stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeCategory === category
                      ? "bg-blue-600 dark:bg-blue-500 text-white shadow-md shadow-blue-500/25"
                      : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, i) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={i}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-neutral-500 dark:text-neutral-500 text-lg">
                    No projects match your search.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Total count */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
