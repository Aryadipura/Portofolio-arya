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
    logo: "/progantara.jpg",
    featured: true,
    year: "2025",
    highlights: [
      "Led end-to-end development of a web and mobile-based attendance system, coordinating cross-functional teams and ensuring on-time delivery",
      "Designed project workflows, timelines, and milestones to ensure alignment with business objectives and scalability for multi-client usage",
      "Managed project planning, task distribution, and progress tracking using Agile (Scrum) methodology and Trello (tools)",
      "Conducted client meetings to gather requirements, present prototypes, and refine system features based on feedback",
    ],
    details: {
      customer: "PT Progantara Teknologi Indonesia",
      projectDescription:
        "Web and mobile-based application designed to help companies manage employee attendance efficiently, flexibly, and in real-time. This application integrates various key functions such as geolocation-based attendance, leave requests, overtime requests, item borrowing, and an automatic approval and notification system.",
      technicalInfo: ["Monitoring Tools: Spreadsheet", "Trello"],
      jobDescription:
        "As Project Manager, my responsibilities include meeting with clients to understand their needs and present solutions, monitoring project progress to ensure adherence to scope and timeline, assigning tasks to the development team, and designing project timelines and milestones. I am also responsible for ensuring smooth communication and collaboration among all stakeholders, and for making sure the project aligns with the overall vision of an integrated system for efficient and accountable operational environments.",
      challenges:
        "To address the challenges of this project, I needed to effectively present application prototypes to clients and accurately capture their requirements. A significant challenge was the shift in project concept from a single-client focus to a dynamic multi-client solution, which required adapting our approach and system design. This involved ensuring the prototype could demonstrate the adaptability needed for multiple clients while still addressing specific initial requests.",
      achievements: [
        "Successfully conducted client presentations, effectively showcasing the application prototypes.",
        "Successfully captured and understood evolving client requirements.",
      ],
    },
  },
  {
    slug: "los-nextjs",
    title: "Loan Origination System",
    subtitle: "Financial Loan Processing Platform",
    description:
      "Developed and analyzed frontend system for financial loan processing platform.",
    category: "Frontend",
    tags: ["Next.js", "TypeScript"],
    techStack: ["Next.js", "TypeScript"],
    thumbnail: "/projects/los.jpg",
    logo: "/ist.jpg",
    featured: true,
    year: "2025",
    highlights: [
      "Developed 35+ feature modules built on Next.js App Router (TypeScript)",
      "Leveraged URL-based useGlobalStepper custom hook for navigation validation across modules",
      "Integrated typed API clients from OpenAPI Generator CLI (typescript-axios)",
      "Participated in migration from OpenAPI to manual Axios-based API integration",
      "Applied custom form management system (useMasintonForm) with regex-based validation",
      "Guided team on GitLab collaboration workflow and merge conflict resolution",
    ],
    details: {
      customer: "PT Infosys Solusi Terpadu (IST)",
      projectDescription:
        "A Loan Origination System (LOS) is a platform used to handle the full process of loan or financing applications, starting from the initial submission up to the final disbursement. This system enables banks and financial institutions to work more efficiently and faster by automating workflows, enhancing data accuracy, and offering complete visibility across the entire loan lifecycle.",
      technicalInfo: ["FE: NextJS (Typescript) 14"],
      jobDescription:
        "As a Front End Developer, I started during Sprint 0 by supporting the System Analyst in creating the Software Design Definition (SDD), reviewing and providing input on frontend-related design aspects, and performing code checks to ensure compliance with existing coding standards and change requests. From Sprint 1 onwards, I took on full development responsibilities, building feature screens and integrating them with backend APIs within an established modular codebase, while ensuring consistency with the existing architecture and conventions.",
      challenges:
        "During Sprint 0, one of the key challenges was understanding a complex and unfamiliar codebase without being able to run the application locally, which required manually tracing the code line by line to map out the application's flow. Moving into Sprint 1, the primary challenge shifted to designing and building reusable global components that could be shared across many modules with the same expected behavior, requiring careful abstraction to ensure the components remained flexible for different feature modules.",
      achievements: [
        "Successfully collaborated with the System Analyst in drafting and refining the frontend-related sections of the Software Design Definition (SDD).",
        "Efficiently conducted initial code checks, ensuring compliance with change requests.",
        "Developed reusable global components adopted across multiple feature modules, ensuring behavioral and visual consistency throughout the application.",
        "Successfully built and integrated feature screens with backend APIs, contributing to the overall progress of the loan origination workflow.",
      ],
    },
  },
  {
    slug: "hrms",
    title: "Human Resource Management System",
    subtitle: "Employee Data & Financial Management System",
    description:
      "System for managing employee data and financial operations with role-based access control.",
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "MUI"],
    techStack: ["Next.js", "TypeScript"],
    thumbnail: "/projects/hrms.jpg",
    logo: "/79.jpg",
    featured: true,
    year: "2025",
    highlights: [
      "Developed multiple feature modules on Next.js App Router (TypeScript)",
      "Built data table views with server-side filtering, sorting, and pagination",
      "Applied Yup schema validation with React Hook Form for complex forms",
      "Implemented role-based conditional rendering from authenticated user cookies",
      "Performed bug fixing validated against API response contracts and SDD",
    ],
    details: {
      customer: "PT Padepokan 79",
      projectDescription:
        "Employee data and financial management system. This system is expected to reduce the risk of input errors, enable easier integration with other applications, and support the development of additional features that can enhance efficiency and effectiveness in managing employee data, including both staff and talent, as well as the company's financial management.",
      technicalInfo: [
        "NextJS (Typescript) 15",
      ],
      jobDescription:
        "As part of a project focused on improving employee data and financial management, my responsibilities include implementing features — creating frontend screens, integrating them with backend APIs, testing the application flow, and performing bug fixes both functionally and for performance, which were checked using SonarQube.",
      challenges:
        "To address the challenges of adapting to the project, I had to learn Next.js in a short time while exploring the structure of an already large and complex codebase. I adopted a learn-by-doing approach, actively developing features while deepening my understanding of the technology. Additionally, I thoroughly reviewed the existing codebase and interacted with senior developers to ensure smooth integration. I also faced difficulties in communication with some team members, particularly in aligning the development process across different teams.",
      achievements: [
        "Successfully completed frontend development tasks, including creating screens aligned with the project's design and usability standards.",
        "Integrated frontend screens with backend APIs, ensuring seamless data flow and real-time functionality.",
        "Successfully performed bug fixing, addressing both functional and performance issues to improve overall system stability.",
        "Successfully learned and applied Next.js within a short timeframe to contribute effectively.",
        "Identified and fixed bugs beyond the provided test cases.",
        "Enhanced communication with the development team, ensuring smooth collaboration and efficient issue resolution.",
      ],
    },
  },
  {
    slug: "ship-recognition",
    title: "Ship Recognition System",
    subtitle: "AI-Powered Maritime Awareness System",
    description:
      "System for identifying ship types using machine learning and computer vision for PT. LEN Industri (Persero).",
    category: "Machine Learning",
    tags: ["YOLOv8", "Computer Vision", "Python"],
    techStack: ["YOLOv8", "Python", "Flask"],
    thumbnail: "/projects/ship.jpg",
    logo: "/len.jpg",
    featured: true,
    year: "2024",
    highlights: [
      "Researched and implemented YOLOv8 for ship type recognition using computer vision",
      "Improved model accuracy through extensive hyperparameter tuning (learning rate, batch size, epochs)",
      "Developed a Flask-based prototype application to test and validate model performance",
    ],
    details: {
      customer: "PT LEN Industri (Persero)",
      projectDescription:
        "Ship Recognition is a project developed by PT LEN to identify ship types using machine learning and computer vision, aimed at enhancing maritime awareness through imagery intelligence (IMINT) systems.",
      technicalInfo: [
        "Machine Learning Model: YOLOv8",
        "Programming Language: Python 3",
        "API Framework: Flask 3",
      ],
      jobDescription:
        "As part of a project aimed at enhancing maritime awareness, my responsibilities included conducting research to identify the most suitable machine learning model and methods for ship recognition, modifying the selected model to improve its performance and accuracy, and developing a simple application for testing and validating the enhanced model.",
      challenges:
        "To address the challenge of determining the most suitable machine learning model for ship recognition, I conducted extensive research on various models, evaluating their strengths and limitations for maritime imagery datasets. After selecting YOLOv8, I focused on fine-tuning its hyperparameters and optimizing its architecture. Once the model's performance was improved, I explored how ML models could be deployed in a web environment and developed a Flask-based application for model testing and validation.",
      achievements: [
        "Significantly increased ship recognition accuracy, enabling reliable identification of ship types in varying environmental conditions.",
        "Built a Flask-based prototype application as a simple platform for testing and validating the enhanced model's accuracy.",
      ],
    },
  },
  {
    slug: "pos-system",
    title: "BLEVEN POS",
    subtitle: "Point of Sales Application",
    description:
      "POS system with UI migration from Bootstrap to React for Politeknik Negeri Bandung.",
    category: "Frontend",
    tags: ["React", "Bootstrap"],
    techStack: ["React", "Bootstrap"],
    thumbnail: "/projects/pos.jpg",
    logo: "/polban.jpg",
    featured: false,
    year: "2023",
    highlights: [
      "Developed user interface screens using Bootstrap",
      "Migrated the application to React.js for better scalability and maintainability",
      "Refactored existing UI into reusable React components",
      "Integrated frontend with backend APIs for real-time transaction processing",
    ],
    details: {
      customer: "Politeknik Negeri Bandung",
      projectDescription:
        "Point of Sales application designed to enable real-time transaction processing and data synchronization for retail operations. The project focused on improving the scalability and maintainability of the existing system through modern frontend frameworks.",
      technicalInfo: ["FE: React.js", "UI Library: Bootstrap"],
      jobDescription:
        "As Front-end Developer, I was responsible for developing the UI screens and migrating the existing Bootstrap-based interface to React.js, refactoring it into reusable components, and integrating the frontend with backend APIs.",
      challenges:
        "This was my first project using React.js, and I had to learn and apply it within a short timeframe while delivering working features. Adapting to React's component-based paradigm quickly enough to contribute meaningfully was the core challenge.",
      achievements: [
        "Successfully built a real-time transaction flow that automatically reduces product stock upon each sale, providing accurate inventory tracking without requiring payment gateway integration.",
        "Delivered the UI migration from Bootstrap to React.js on time, with a cleaner component structure and improved maintainability.",
      ],
    },
  },
  {
    slug: "media-monitoring",
    title: "Media Monitoring Application",
    subtitle: "Public Opinion Monitoring Platform",
    description:
      "Application for monitoring public opinion on products and services across industries.",
    category: "Mobile",
    tags: ["Flutter", "Firebase"],
    techStack: ["Flutter", "Firebase", "Firestore"],
    thumbnail: "/projects/media.jpg",
    logo: "/kerjaku.jpg",
    featured: false,
    year: "2023",
    highlights: [
      "Performed frontend UI slicing using Flutter for multi-device compatibility",
      "Implemented secure user authentication using Firebase Authentication",
      "Analyzed business processes and defined application features",
    ],
    details: {
      customer: "PT Kerjaku Inti Sejahtera",
      projectDescription:
        "The Media Monitoring Application is a service provider for monitoring public opinion on products and services offered by clients across various industries. The application needed to be responsive and capable of operating seamlessly across multiple devices.",
      technicalInfo: [
        "BE: Firebase 12",
        "FE: Flutter 3",
        "Database: Firestore 4",
      ],
      jobDescription:
        "My responsibilities included determining the most suitable technologies for the project, analyzing the business processes of the application, defining the required features, and designing a user-friendly interface. Additionally, I was tasked with developing the frontend screens and making them responsive across various devices.",
      challenges:
        "This was my first mobile project using Flutter, which meant I had to learn the framework from scratch while simultaneously contributing to an active project. On top of that, I needed to evaluate the most suitable technologies for the stack and understand stakeholder needs through direct discussions, all within a limited timeframe.",
      achievements: [
        "Created a structured application framework through thorough feature analysis, application flow, and UI/UX design.",
        "Developed a responsive frontend screen enabling the application to work seamlessly across various devices and browsers.",
      ],
    },
  },
  {
    slug: "oss-telkom",
    title: "Online Single Submission",
    subtitle: "Integrated Licensing System",
    description:
      "An integrated licensing system by BKPM managing the full Risk-Based Business Licensing process.",
    category: "Quality Assurance",
    tags: ["Testing", "QA", "Data Validation"],
    techStack: ["Black Box Testing", "Jira"],
    thumbnail: "/projects/telkom.jpg",
    logo: "/telkom.jpg",
    featured: true,
    year: "2026",
    highlights: [
      "Performed detailed system testing with a strong focus on finding hidden bugs and errors within the application",
      "Performed deep data validation to detect and report any discrepancies, missing data, or mismatches",
      "Documented all identified defects and data inconsistencies with clear replication steps",
    ],
    details: {
      customer: "PT Telekomunikasi Indonesia (Persero)",
      projectDescription:
        "The Online Single Submission (OSS) System is an integrated electronic licensing system managed by the Ministry of Investment and Downstream Industry/BKPM as the OSS Institution. It handles the entire Risk-Based Business Licensing (PBBR) process — from registration through to business activity supervision.",
      technicalInfo: ["Testing: Black Box Testing", "Jira"],
      jobDescription:
        "As Quality Assurance, I was responsible for performing detailed system testing with a strong focus on uncovering hidden bugs and errors. I conducted deep data validation to detect and report discrepancies, missing data, or mismatches between the application's output and the expected system behavior. I also documented all identified defects clearly to facilitate fast and accurate resolutions by the development team.",
      challenges:
        "The main challenge was identifying subtle data mismatches and edge-case bugs within a large and complex enterprise system. This required thorough understanding of the expected business logic, careful test case design, and systematic validation of data flows across different modules.",
      achievements: [
        "Successfully identified and reported hidden bugs and data inconsistencies that were not covered by initial test cases.",
        "Provided clear, reproducible defect documentation that significantly accelerated the resolution process for the development team.",
      ],
    },
  },
  {
    slug: "pokode-elearning",
    title: "e-Learning Application Pokode",
    subtitle: "e-learning and LMS Platform",
    description:
      "UI/UX design for an interactive e-learning platform at PT Progantara Teknologi Indonesia.",
    category: "UI/UX Design",
    tags: ["Figma", "UI/UX", "Design System"],
    techStack: ["Figma"],
    thumbnail: "/projects/pokode.jpg",
    logo: "/progantara.jpg",
    featured: false,
    year: "2025",
    highlights: [
      "Translated business requirements into clear, interactive, and user-friendly UI/UX designs",
      "Developed a consistent color palette and visual style to make the application look attractive and professional",
      "Created a library of reusable design components in Figma to maintain design consistency",
    ],
    details: {
      customer: "PT Progantara Teknologi Indonesia",
      projectDescription:
        "Pokode is an e-learning application designed to provide accessible, structured, and engaging online learning experiences. The design effort focused on creating an intuitive user interface that supports learners through various modules, quizzes, and progress tracking features.",
      technicalInfo: ["Design Tool: Figma"],
      jobDescription:
        "As UI/UX Designer, I was responsible for translating business requirements into clear, interactive, and user-friendly designs. I developed a consistent color palette and visual style to ensure the application looked attractive and professional. I also created a comprehensive library of reusable design components in Figma to maintain design consistency and speed up the overall design workflow.",
      challenges:
        "The key challenge was balancing visual appeal with usability across different user segments, ranging from students to instructors. Translating abstract business requirements into concrete UI flows.",
      achievements: [
        "Successfully delivered detailed and dynamic UI/UX designs complete with interactive prototypes, covering the full flow from the login and landing page through to the initial stages of the LMS module.",
        "Established a reusable Figma component library that maintained design consistency across all screens and accelerated the overall design process.",
      ],
    },
  },
  {
    slug: "national-student-competitions",
    title: "National Student Competitions",
    subtitle: "IT Support for OSN, O2SN & FLS2N — Kemendikbud",
    description:
      "On-site IT support and jury data management for national-level student competitions organized by Kemendikbud.",
    category: "IT Support",
    tags: ["IT Support", "Data Management", "Excel"],
    techStack: ["Microsoft Excel"],
    thumbnail: "/projects/kemendikbud.jpg",
    logo: "/kemendikbud.jpg",
    featured: false,
    year: "2023",
    highlights: [
      "Provided prompt on-site technical support and troubleshooting to resolve application or system issues during the events",
      "Processed and managed jury scoring data accurately and efficiently using Microsoft Excel formulas",
    ],
    details: {
      customer: "Kemendikbud (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi)",
      projectDescription:
        "National Student Competitions including OSN (Olimpiade Sains Nasional), O2SN (Olimpiade Olahraga Siswa Nasional), and FLS2N (Festival Lomba Seni Siswa Nasional) are large-scale government events organized by Kemendikbud. The role involved ensuring smooth technical operations and accurate data management throughout the events.",
      technicalInfo: ["Tools: Microsoft Excel", "On-site Technical Support"],
      jobDescription:
        "As IT Support, I provided prompt on-site technical assistance and troubleshooting to resolve any application or system issues that arose during the events. I also processed and managed jury scoring data accurately and efficiently using Microsoft Excel formulas to ensure reliable and timely reporting.",
      challenges:
        "The primary challenge was responding quickly to unpredictable technical issues in a live, high-stakes event environment with large numbers of participants and strict timelines. Accurate and efficient management of jury scoring data was also critical, requiring both precision and speed.",
      achievements: [
        "Successfully resolved all on-site technical issues in a timely manner, ensuring uninterrupted event operations.",
        "Maintained accurate and efficient jury scoring data management across multiple competition categories.",
      ],
    },
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
    endDate: "June 2026",
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
      "Managed and developed LahKerja Presence system as Project Manager. Developed web design for LMS platform as UI/UX Designer",
    responsibilities: [
      "Led project planning and execution",
      "Managed team and task distribution",
      "Handled client communication",
      "Designed workflows and timeline",
      "UI/UX Design",
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
      "Developed media monitoring application using Flutter. Become IT Support during national student competitions such as O2SN, OSN, and FLS2N.",
    responsibilities: [
      "Develop frontend mobile application",
      "UI/UX Design",
      "Analyze business requirements",
      "Support data reporting",
      "Troubleshoot technical issues"
    ],
    technologies: ["Flutter", "Firebase", "Excell"],
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
      { name: "Black Box Testing", level: "advanced" },
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
      { name: "Microsoft Excell", level: "advanced" },
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
    description: "Graduated with an overall rank of 22nd out of 360 students."
  },
  {
    institution: "Politeknik Negeri Bandung",
    degree: "D4 Teknik Informatika / Applied Bachelors Degree in Informatics Engineering",
    duration: "2020 - 2024",
    description: "Graduated with a Bachelor's degree (S.Tr.Kom.) with a GPA of 3.19 / 4.00."
  },
];

export const organizationRecords: Organization[] = [
  {
    name: "HIMAKOM POLBAN",
    role: "Ketua Angkatan JTK20 / Head of Cohort JTK20",
    duration: "2021 - 2023",
    description: "Responsible for coordination and communication between the JTK20 student cohort, HIMAKOM, and BEM KEMA POLBAN."
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
