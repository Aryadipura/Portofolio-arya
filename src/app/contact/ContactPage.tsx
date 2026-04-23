"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo } from "@/lib/data";

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Best for detailed discussions",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    title: "GitHub",
    value: "aryadipura",
    href: "https://github.com/aryadipura",
    description: "Check out my code",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    title: "LinkedIn",
    value: "Muhamad Aryadipura Sasmita Atmadja",
    href: "https://linkedin.com/in/aryadipura",
    description: "Let's connect professionally",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    title: "Instagram",
    value: "arydipura",
    href: "https://www.instagram.com/arydipura/",
    description: "Let's mutual on IG!",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formState;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || "New Message from Portfolio"
    )}&body=${encodeURIComponent(body)}`;

    // Open default mail client
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative">
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Get in Touch"
            title="Let's Connect"
            description="Whether you have a project idea, a collaboration opportunity, or just want to say hello — I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact methods */}
            <div className="lg:col-span-2 space-y-6">
              <StaggerContainer className="space-y-4">
                {contactMethods.map((method) => (
                  <StaggerItem key={method.title}>
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                              {method.title}
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              {method.value}
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Location info */}
              <FadeIn delay={0.3}>
                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-5 h-5 text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Based in {personalInfo.location}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    Open to remote work and relocation for the right opportunity.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Send a Message
                  </h3>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-green-600 dark:text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Thank you for reaching out. I&apos;ll get back to you
                        as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none"
                          placeholder="Tell me about your project, idea, or just say hi..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={
                          isSubmitting ? {} : { scale: 1.01, y: -1 }
                        }
                        whileTap={isSubmitting ? {} : { scale: 0.99 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
