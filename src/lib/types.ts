// ============================================================
// Portfolio Type Definitions
// ============================================================

export interface ProjectDetails {
  customer: string;
  projectDescription: string;
  technicalInfo: string[];
  jobDescription: string;
  challenges: string;
  achievements: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  tags: string[];
  techStack: string[];
  thumbnail: string;
  logo?: string;
  featured: boolean;
  year: string;
  // Case study fields
  highlights: string[];
  details?: ProjectDetails;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface TechDecision {
  technology: string;
  reason: string;
  tradeOff: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Organization {
  name: string;
  role: string;
  duration: string;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  location: string;
  bio: string;
  avatar: string;
  socials: SocialLink[];
}
