// ─── data.ts ────────────────────────────────────────────────────────────────
// Central data file — all portfolio content lives here.

export const PERSONAL = {
  name: "Ravindu Wanasinghe",
  role: "Full Stack Developer",
  university: "Sabaragamuwa University of Sri Lanka",
  degree: "BSc (Hons) Information Systems",
  period: "2024 – 2028",
  location: "Sri Lanka",
  email: "ravinduwanasinghe97@gmail.com",
  bio: "I'm an Information Systems student who loves crafting beautiful web experiences and diving deep into software architecture. I build full-stack apps with TypeScript & Next.js, explore digital forensics, and am always levelling up.",
  bio2: "From sleek e-commerce platforms to event management dashboards — every project I take on is driven by curiosity and a passion for clean, performant code.",
  github: "https://github.com/RavinduWanasinghe0524",
  linkedin: "https://www.linkedin.com/in/ravindu-wanasinghe-b08a50315/",
  instagram: "https://www.instagram.com/ravindu_wanasinghe_/",
  facebook: "https://web.facebook.com/ravindu.wanasinghe.50",
  avatar: "/avatar.jpg",
  phrases: [
    "Full Stack Developer",
    "TypeScript Enthusiast",
    "Next.js Builder",
    "Software Architecture Student",
    "Digital Forensics Explorer",
  ],
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  category: "web" | "tools" | "other";
  tech: string[];
  date: string;
  status: "Live" | "Completed" | "Featured" | "Active" | "Prototype";
  img?: string;
  code: string;
  demo?: string;
  stars?: number;
  forks?: number;
};

export const PROJECTS: Project[] = [
  {
    id: "vmas",
    title: "V-Mas Events",
    tagline: "Event Dashboard",
    desc: "Interactive virtual events management platform with ticket simulation, live dashboard controls, and real-time data views. Deployed on Vercel — 1 star, 3 forks.",
    category: "web",
    tech: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    date: "Mar 2026",
    status: "Live",
    code: "https://github.com/RavinduWanasinghe0524/V---Mas",
    demo: "https://v-mas.vercel.app",
    stars: 1,
    forks: 3,
  },
  {
    id: "galagama",
    title: "Galagama Gems",
    tagline: "Luxury E-Commerce",
    desc: "Elegant e-commerce portal for authentic Sri Lankan gem trade with high-end visual catalog, advanced filtering, and premium UI. 1 star, 5 forks — most forked project.",
    category: "web",
    tech: ["TypeScript", "React", "Tailwind CSS", "GitHub Pages"],
    date: "Nov 2025",
    status: "Live",
    code: "https://github.com/RavinduWanasinghe0524/Galagama-Gems",
    demo: "https://ravinduwanasinghe0524.github.io/Galagama-Gems/",
    stars: 1,
    forks: 5,
  },
  {
    id: "elite-next",
    title: "Elite Wheels (Next.js)",
    tagline: "Car Dealership",
    desc: "Premium car dealership upgraded to Next.js with TypeScript, server-side rendering, and a modern full-stack architecture for a top-tier browsing experience.",
    category: "web",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    date: "Jun 2026",
    status: "Featured",
    img: "/8.png",
    code: "https://github.com/RavinduWanasinghe0524/Elite-wheels-next",
  },
  {
    id: "elite-html",
    title: "Elite Wheels (HTML)",
    tagline: "Car Dealership",
    desc: "The original car dealership site built with pure HTML, CSS & JavaScript. Responsive, clean design, easy navigation. Lives on GitHub Pages.",
    category: "web",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    date: "Oct 2024",
    status: "Live",
    img: "/8.png",
    code: "https://github.com/RavinduWanasinghe0524/Elite-Wheels",
    demo: "https://ravinduwanasinghe0524.github.io/Elite-Wheels/",
  },
  {
    id: "royal-mushrooms",
    title: "Royal Mushrooms",
    tagline: "AgroTech Web App",
    desc: "Modern React & TypeScript frontend for a mushroom agro-business featuring catalog search, responsive design, and clean architecture deployed on GitHub Pages.",
    category: "web",
    tech: ["TypeScript", "React", "CSS3", "GitHub Pages"],
    date: "Nov 2025",
    status: "Live",
    img: "/10.png",
    code: "https://github.com/RavinduWanasinghe0524/royal-mushrooms-frontend",
    demo: "https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/",
  },
  {
    id: "truetrace",
    title: "TrueTrace",
    tagline: "Digital Forensics",
    desc: "A multi-modal forensic tool for detecting document forgery using Error Level Analysis (ELA), Noise Variance, and Metadata inspection to validate ID cards & financial documents.",
    category: "tools",
    tech: ["TypeScript", "ELA Analysis", "Image Processing", "Node.js"],
    date: "Feb 2026",
    status: "Completed",
    img: "/truetrace.png",
    code: "https://github.com/RavinduWanasinghe0524/TrueTrace",
  },
  {
    id: "eco-ceylon",
    title: "Eco-Ceylon",
    tagline: "EcoTech Platform",
    desc: "A sustainable tourism and environmental conservation web app designed to promote eco-friendly travel experiences across Sri Lanka.",
    category: "web",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    date: "Jan 2025",
    status: "Prototype",
    code: "https://github.com/RavinduWanasinghe0524/Eco-Ceylon",
  },
  {
    id: "ironlogix",
    title: "IronLogix",
    tagline: "Python Automation",
    desc: "Smart Python utility for automated system log analysis, regex-based error scanning, and report generation for system administrators.",
    category: "tools",
    tech: ["Python", "Regex", "Log Analysis", "Automation"],
    date: "Dec 2025",
    status: "Completed",
    code: "https://github.com/RavinduWanasinghe0524/IronLogix",
  },
  {
    id: "zen",
    title: "Zen Productivity",
    tagline: "CLI Dashboard",
    desc: "A minimalist Python productivity dashboard for tracking daily focuses, time-blocking sessions, and clean CLI analytics.",
    category: "tools",
    tech: ["Python", "CLI", "Analytics"],
    date: "Feb 2026",
    status: "Completed",
    code: "https://github.com/RavinduWanasinghe0524/Zen-Productivity",
  },
  {
    id: "ems",
    title: "EMS Backend",
    tagline: "Java Backend",
    desc: "Robust Employee Management System backend handling employee records, department structures, authentication, and enterprise-grade RESTful API endpoints.",
    category: "tools",
    tech: ["Java", "Spring", "REST API", "Backend"],
    date: "Nov 2025",
    status: "Completed",
    code: "https://github.com/RavinduWanasinghe0524/ems-backend",
  },
  {
    id: "power-fitness",
    title: "Power Fitness",
    tagline: "Gym Landing Page",
    desc: "Modern, highly visual landing page for a premium gym featuring class schedules, trainer highlights, and membership inquiry forms.",
    category: "web",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    date: "Oct 2024",
    status: "Completed",
    code: "https://github.com/RavinduWanasinghe0524/power-fitness",
  },
];

export type SkillCategory = {
  key: string;
  label: string;
  icon: string;
  color: string;
  subtitle: string;
  desc: string;
  bars: { name: string; level: number }[];
  tools: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    key: "web",
    label: "Web & Frameworks",
    icon: "🌐",
    color: "blue",
    subtitle: "Frontend & Full-Stack",
    desc: "Building fast, beautiful, production-ready web apps. Focused on Next.js, React, and clean TypeScript architecture.",
    bars: [
      { name: "Next.js & React", level: 85 },
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "Tailwind CSS & Styling", level: 90 },
      { name: "REST APIs & Integrations", level: 80 },
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Vite", "Axios", "Vercel"],
  },
  {
    key: "backend",
    label: "Backend & Languages",
    icon: "⚙️",
    color: "indigo",
    subtitle: "Server-Side & Systems",
    desc: "Writing clean, structured server-side code with Java, Python, and Node.js. Strong OOP and REST API design principles.",
    bars: [
      { name: "Java Core (OOP, Spring)", level: 75 },
      { name: "Python (automation, tools)", level: 80 },
      { name: "SQL & Database Design", level: 75 },
      { name: "Node.js & Express", level: 78 },
    ],
    tools: ["Java", "Python", "Maven", "Spring", "MySQL", "Node.js"],
  },
  {
    key: "tools",
    label: "Tools & Ecosystem",
    icon: "🛠️",
    color: "sky",
    subtitle: "DevOps & Workflow",
    desc: "Git, GitHub Actions, deployment pipelines, and digital forensics tooling. Comfortable in the full development lifecycle.",
    bars: [
      { name: "Git & GitHub", level: 85 },
      { name: "Digital Forensics (ELA, Metadata)", level: 78 },
      { name: "Image & File Processing", level: 75 },
      { name: "Responsive & Accessible Design", level: 88 },
    ],
    tools: ["Git", "GitHub", "ELA Tools", "ImageJS", "Vercel", "GitHub Pages"],
  },
  {
    key: "soft",
    label: "Soft Skills",
    icon: "🧠",
    color: "blue",
    subtitle: "Collaboration & Thinking",
    desc: "Systems thinking, clear documentation, academic research methodology, and collaborative problem-solving.",
    bars: [
      { name: "Problem Solving", level: 90 },
      { name: "System Logic & Analysis", level: 85 },
      { name: "Technical Writing", level: 80 },
      { name: "Academic Research", level: 78 },
    ],
    tools: ["Agile / SDLC", "System Mapping", "Markdown", "Academic Writing"],
  },
];

export const EDUCATION = [
  {
    degree: "BSc (Hons) in Information Systems",
    school: "Sabaragamuwa University of Sri Lanka",
    faculty: "Faculty of Applied Sciences",
    period: "2024 – 2028",
    desc: "Focused on software systems, backend architecture, algorithmic principles, database design, and systems analytics. Actively participating in campus tech forums and software clubs.",
    highlights: [
      "Object-Oriented Java, Database Architectures, Systems Analysis",
      "Active in campus tech clubs and software development communities",
      "Exploring Software Architecture & Web Technologies",
    ],
    color: "blue" as const,
  },
  {
    degree: "Advanced Level Examinations",
    school: "Physical Science Stream",
    faculty: "Mathematics, Physics & Chemistry",
    period: "Graduated 2023",
    desc: "Built strong analytical foundations through advanced physics, chemistry, and mathematics — developing core logic and mathematical formulation capacities.",
    highlights: [
      "Advanced Mathematics, Physics, Chemistry",
      "Developed strong analytical and problem-solving skills",
    ],
    color: "sky" as const,
  },
];
