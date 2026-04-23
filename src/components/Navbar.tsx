"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/certificates", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl shadow-sm border-b border-neutral-200/50 dark:border-neutral-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 text-lg font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
            arya
          </span>
          <span className="text-neutral-800 dark:text-neutral-200">
            .dev
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-950/50 rounded-lg"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}

        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-5 h-0.5 bg-current origin-center"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-current"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-5 h-0.5 bg-current origin-center"
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-2">
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-2xl font-medium px-6 py-3 rounded-xl transition-colors ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                            : "text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
