"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";
import { certificates } from "@/lib/data";

export default function CertificatesPage() {
  return (
    <div className="relative">
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Achievements"
            title="Certifications & Awards"
            description="A complete list of my professional certifications, awards, and credentials."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certificates.map((cert, i) => (
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
                        <svg
                          className="w-3.5 h-3.5"
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
                      </a>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
