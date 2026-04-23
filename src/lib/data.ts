import {
  PersonalInfo,
  Project,
  Experience,
  SkillCategory,
  Education,
  Organization,
  Certificate,
} from "./types";

// ============================================================
// Personal Information
// ============================================================
export const personalInfo: PersonalInfo = {
  name: "Arya",
  role: "Software Developer",
  email: "aryadipurasasmita@gmail.com",
  location: "Indonesia",
  bio: `A detail-oriented and growth-driven Software Developer and Project Manager with a strong foundation in web development. 

Experienced in building scalable and responsive web applications using React JS, Next.js, and Vue.js, as well as mobile development using Flutter. 

Proven ability in analyzing software requirements, managing development workflows, and collaborating in Agile environments. Passionate about delivering high-quality software solutions through clean code, effective communication, and continuous improvement.`,
  avatar: "/avatar.jpg",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/aryadipura",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhamad-aryadipura-sasmita-atmadja-2aa088298/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:aryadipurasasmita@gmail.com",
      icon: "email",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arydipura/",
      icon: "instagram",
    }
  ],
};

// ============================================================
// Projects Data
// ============================================================
export const projects: Project[] = [
  {
    slug: "lahkerja-presence",
    title: "LahKerja Presence",
    subtitle: "Employee Attendance Management System",
    description:
      "Web and mobile-based application for managing employee attendance, leave, and operational requests.",
    category: "Project Management",
    tags: ["Agile", "Management", "Web & Mobile"],
    techStack: ["Trello"],
    thumbnail: "/projects/lahkerja.jpg",
    featured: true,
    year: "2025",
    highlights: [
      "Led end-to-end project development",
      "Managed team tasks and sprint planning",
      "Conducted client requirement gathering and presentations",
    ],
  },
  {
    slug: "los-nextjs",
    title: "Loan Origination System",
    description:
      "Developed and analyzed frontend system for financial loan processing platform.",
    category: "Frontend",
    tags: ["Next.js"],
    techStack: ["Next.js", "TypeScript"],
    thumbnail: "/projects/los.jpg",
    featured: true,
    year: "2025",
    highlights: [
      "Built responsive UI and features",
      "Integrated frontend with backend APIs",
      "Performed bug fixing and optimization",
      "Supported Software Design Definition (SDD)",
      "Analyzed large-scale codebase",
      "Ensured compliance with coding standards",
    ],
  },
  {
    slug: "hrms",
    title: "Human Resource Management System",
    description:
      "System for managing employee data and financial operations.",
    category: "Frontend",
    tags: ["Next.js"],
    techStack: ["Next.js"],
    thumbnail: "/projects/hrms.jpg",
    featured: true,
    year: "2025",
    highlights: [
      "Built responsive UI and features",
      "Integrated frontend with backend APIs",
      "Performed bug fixing and optimization",
    ],
  },
  {
    slug: "pos-system",
    title: "Point of Sales Application",
    subtitle: "Frontend Development",
    description:
      "POS system with UI migration from Bootstrap to React.",
    category: "Frontend",
    tags: ["React", "Bootstrap"],
    techStack: ["React", "Bootstrap"],
    thumbnail: "/projects/pos.jpg",
    featured: false,
    year: "2024",
    highlights: [
      "Migrated UI from Bootstrap to React",
      "Refactored into reusable components",
      "Integrated with backend APIs",
    ],
  },
  {
    slug: "media-monitoring",
    title: "Media Monitoring Application",
    subtitle: "Mobile Development",
    description:
      "Application for monitoring public opinion across industries.",
    category: "Mobile",
    tags: ["Flutter", "Firebase"],
    techStack: ["Flutter", "Firebase"],
    thumbnail: "/projects/media.jpg",
    featured: false,
    year: "2023",
    highlights: [
      "Built responsive mobile UI",
      "Designed system workflow",
      "Analyzed business requirements",
    ],
  },
];

// ============================================================
// Experience Data
// ============================================================
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "PT Padepokan Tujuh Sembilan",
    role: "Software Developer",
    startDate: "Nov 2024",
    endDate: "May 2026",
    description:
      "Worked on multiple enterprise systems including LOS and HRMS focusing on frontend development.",
    responsibilities: [
      "Develop frontend features using React and Next.js",
      "Integrate UI with backend APIs",
      "Perform testing and bug fixing",
      "Collaborate with cross-functional teams",
    ],
    technologies: ["React", "Next.js"],
    logo: "/79.jpg",
    featured: true,
  },
  {
    id: "exp-2",
    company: "PT Progantara Teknologi Indonesia",
    role: "Software Developer & Project Manager",
    startDate: "Jan 2025",
    endDate: "Dec 2025",
    description:
      "Managed and developed LahKerja Presence system.",
    responsibilities: [
      "Led project planning and execution",
      "Managed team and task distribution",
      "Handled client communication",
      "Designed workflows and timeline",
      "Contributed to UI/UX Design",
    ],
    technologies: ["Trello", "Figma"],
    logo: "/progantara.jpg",
    featured: true,
  },
  {
    id: "exp-3",
    company: "PT Kerjaku Inti Sejahtera",
    role: "Software Developer",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    description:
      "Developed media monitoring application using Flutter.",
    responsibilities: [
      "Develop frontend mobile application",
      "Design UI/UX",
      "Analyze business requirements",
    ],
    technologies: ["Flutter", "Firebase"],
    logo: "/kerjaku.jpg",
    featured: false,
  },
];

// ============================================================
// Skills Data
// ============================================================
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    description: "Web development technologies",
    skills: [
      { name: "React JS", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Vue.js", level: "beginner" },
      { name: "JavaScript", level: "intermediate" },
    ],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    description: "Cross-platform mobile development",
    skills: [
      { name: "Flutter", level: "beginner" },
    ],
  },
  {
    title: "Testing & Database",
    icon: "🧪",
    description: "Testing and data management",
    skills: [
      { name: "Selenium", level: "beginner" },
      { name: "SQL", level: "intermediate" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "⚙️",
    description: "Development tools and methodologies",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "CI/CD", level: "intermediate" },
      { name: "Agile (Scrum)", level: "advanced" },
    ],
  },
  {
    title: "Project Management",
    icon: "📊",
    description: "Managing teams and projects",
    skills: [
      { name: "Project Planning", level: "advanced" },
      { name: "Team Coordination", level: "advanced" },
      { name: "Client Communication", level: "advanced" },
    ],
  },
];

// ============================================================
// Education, Organization & Certificates
// ============================================================
export const educationRecords: Education[] = [
  {
    institution: "SMA Negeri 9 Bandung",
    degree: "IPA / Science",
    duration: "2017 - 2020",
    description: "Lulus dengan mendapat ranking umum 22 dari total 360 siswa."
  },
  {
    institution: "Politeknik Negeri Bandung",
    degree: "D4 Teknik Informatika / Applied Bachelors Degree in Informatics Engineering",
    duration: "2020 - 2024",
    description: "Lulus dengan gelar S.Tr.Kom. dengan IPK 3.19 / 4.00."
  },
];

export const organizationRecords: Organization[] = [
  {
    name: "HIMAKOM POLBAN",
    role: "Ketua Angkatan JTK20 / Head of Cohort JTK20",
    duration: "2021 - 2023",
    description: "Bertanggung jawab atas koordinasi dan komunikasi antara mahasiswa angkatan JTK20 dengan HIMAKOM dan BEM KEMA POLBAN"
  }
];

export const certificates: Certificate[] = [
  {
    name: "Basic Java Programming",
    issuer: "Arutala Lab",
    date: "2024 - 2027",
    url: "https://drive.google.com/file/d/11RKt4OdwUQN0mjR-rXaujvqlQNXvICNI/view?usp=sharing"
  },
  {
    name: "Front End Technology NextJs",
    issuer: "PT. Padepokan 79",
    date: "2025",
    url: "https://drive.google.com/file/d/1g7EwttEUPlfQVFf2l05GDz2E-PAcy8yA/view?usp=sharing"
  },
  {
    name: "Front End Technology ReactJs",
    issuer: "HackerRank",
    date: "2025",
    url: "https://drive.google.com/file/d/1cr2CfQUxZxf2bh4WWaKt46RqO8YBUayJ/view?usp=sharing"
  },
  {
    name: "Scrum Master Practicioner",
    issuer: "Arutala lab",
    date: "2021",
    url: "https://drive.google.com/file/d/1Ty9_ITwh8im6-rmM26ZJZHcqJdl4663d/view?usp=sharing"
  },
  {
    name: "Tisigram Competitive Programming",
    issuer: "HIMAKOM POLBAN",
    date: "2021",
    url: "https://drive.google.com/file/d/1h98DOITfB0UjRSDZ0h4g4tB5Og2__yMd/view?usp=sharing"
  },
  {
    name: "Business Plan Competition",
    issuer: "Prasetya Mulya University",
    date: "2020",
    url: "https://drive.google.com/file/d/1HKY-79Vil3AbAuvB6E8aCuOPsMEBnGO3/view?usp=sharing"
  },
  {
    name: "Mentor for LKMM",
    issuer: "BEM KEMA POLBAN",
    date: "2021",
    url: "https://drive.google.com/file/d/1KGLJkqOmeQjA4PVoEgnv1D3FPWeifFIO/view?usp=sharing"
  },
  {
    name: "Expert Staff for HIMAKOM",
    issuer: "HIMAKOM POLBAN",
    date: "2022",
    url: "https://drive.google.com/file/d/1u9hpxH4t_MAvsxZoUHH1e0He0NZsRgUk/view?usp=sharing"
  },
  {
    name: "TOEIC",
    issuer: "PT. International Test Center",
    date: "2024",
    url: "https://drive.google.com/file/d/1vYwNmbMDRoQ7tFyz7UjE2ssDg_fruq52/view?usp=sharing"
  },
];
