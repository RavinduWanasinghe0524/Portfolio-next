export const personal = {
  name: "Ravindu Wanasinghe",
  email: "ravinduwanasinghe97@gmail.com",
  github: "https://github.com/RavinduWanasinghe0524",
  linkedin: "https://www.linkedin.com/in/ravindu-wanasinghe-b08a50315/",
  instagram: "https://www.instagram.com/ravindu_wanasinghe_/",
};

export type Project = {
  title: string;
  kind: "AI & Security" | "Web & Systems" | "Games & Tools";
  summary: string;
  stack: string[];
  year: string;
  image?: string;
  code: string;
  demo?: string;
  alternateCode?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { title: "ShadowSense Aurora", kind: "AI & Security", summary: "Led the team behind a four-agent scam detection system for freelance platforms, combining a browser extension, FastAPI, and ChromaDB. First runner-up at the AURORA 2026 AI Ideathon.", stack: ["Python", "FastAPI", "ChromaDB", "React"], year: "2026", image: "/shadowsense.png", code: "https://github.com/RavinduWanasinghe0524/ShadowSense-2026-Aurora", featured: true },
  { title: "V-MAS", kind: "Web & Systems", summary: "Team-built fleet platform for administrators, controllers, and drivers. It brings together dispatch, fuel analytics, maintenance alerts, role-based access, and exportable reports. A newer PHP backend edition is also in progress.", stack: ["React", "Spring Boot / PHP", "MySQL", "JWT"], year: "2025–26", code: "https://github.com/RavinduWanasinghe0524/V---Mas", alternateCode: "https://github.com/RavinduWanasinghe0524/V-Mas-PHP-", demo: "https://v-mas.vercel.app", featured: true },
  { title: "TrueTrace", kind: "AI & Security", summary: "Document forgery analysis using error level analysis, noise variance, and metadata inspection.", stack: ["TypeScript", "Digital forensics", "Image processing"], year: "2026", image: "/truetrace.png", code: "https://github.com/RavinduWanasinghe0524/TrueTrace", featured: true },
  { title: "GridWalk AI", kind: "AI & Security", summary: "A team-built Jac microgrid recovery simulator. I worked on graph modelling, allocation rules, and validation; the live recovery workflow is still being integrated.", stack: ["Jac", "Graph modelling", "AI planning"], year: "2026", code: "https://github.com/RavinduWanasinghe0524/GridWalk-AI" },
  { title: "AyurFlow", kind: "Web & Systems", summary: "Collaborative clinic operations pilot with a Go API scaffold, PostgreSQL migrations, and Next.js module pages. Clinical features are in development.", stack: ["Go", "PostgreSQL", "Next.js"], year: "2026", code: "https://github.com/thimira20011/AyurFlow" },
  { title: "Gambix", kind: "Games & Tools", summary: "Python chess analysis that grounds move explanations in engine and symbolic evidence, including checks, pins, forks, and hanging pieces.", stack: ["Python", "Chess", "Pytest"], year: "2026", code: "https://github.com/RavinduWanasinghe0524/Gambix", featured: true },
  { title: "Elite Wheels / Next.js", kind: "Web & Systems", summary: "Responsive car dealership experience rebuilt with Next.js and TypeScript.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], year: "2026", image: "/8.png", code: "https://github.com/RavinduWanasinghe0524/Elite-wheels-next", featured: true },
  { title: "Elite Wheels / Original", kind: "Web & Systems", summary: "The original car dealership site built with HTML, CSS, and JavaScript.", stack: ["HTML", "CSS", "JavaScript"], year: "2024", image: "/8.png", code: "https://github.com/RavinduWanasinghe0524/Elite-Wheels", demo: "https://ravinduwanasinghe0524.github.io/Elite-Wheels/" },
  { title: "Royal Mushrooms", kind: "Web & Systems", summary: "React storefront for a mushroom business, focused on catalog search and responsive design.", stack: ["TypeScript", "React", "CSS"], year: "2025", image: "/10.png", code: "https://github.com/RavinduWanasinghe0524/royal-mushrooms-frontend", demo: "https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/", featured: true },
  { title: "Galagama Gems", kind: "Web & Systems", summary: "Sri Lankan gem catalog with product filtering and a premium visual direction.", stack: ["TypeScript", "React", "Tailwind CSS"], year: "2025", code: "https://github.com/RavinduWanasinghe0524/Galagama-Gems", demo: "https://ravinduwanasinghe0524.github.io/Galagama-Gems/" },
  { title: "3D Car Racing Game", kind: "Games & Tools", summary: "Java Swing racing game with dynamic obstacles and a custom physics model.", stack: ["Java", "Swing", "Game physics"], year: "2025", image: "/6.png", code: "https://github.com/RavinduWanasinghe0524/car-racing-game" },
  { title: "EMS Backend", kind: "Games & Tools", summary: "Employee management API for records, departments, and authentication.", stack: ["Java", "Spring", "REST API"], year: "2025", code: "https://github.com/RavinduWanasinghe0524/ems-backend" },
  { title: "Eco-Ceylon", kind: "Web & Systems", summary: "Prototype for sustainable tourism and environmental conservation in Sri Lanka.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], year: "2025", code: "https://github.com/RavinduWanasinghe0524/Eco-Ceylon" },
  { title: "IronLogix", kind: "Games & Tools", summary: "Python utility for system log scanning, error detection, and report generation.", stack: ["Python", "Regex", "Automation"], year: "2025", code: "https://github.com/RavinduWanasinghe0524/IronLogix" },
  { title: "Zen Productivity", kind: "Games & Tools", summary: "A minimal CLI dashboard for daily focus and time blocking.", stack: ["Python", "CLI"], year: "2026", code: "https://github.com/RavinduWanasinghe0524/Zen-" },
  { title: "Power Fitness", kind: "Web & Systems", summary: "Visual gym landing page with classes, trainers, and membership inquiries.", stack: ["HTML", "CSS", "Responsive design"], year: "2024", code: "https://github.com/RavinduWanasinghe0524/power-fitness" },
];

export const credentials = [
  { title: "Gemini Certified Student", issuer: "Google for Education", year: "2026" },
  { title: "Introduction to Artificial Intelligence", issuer: "Simplilearn SkillUp", year: "2026" },
  { title: "Introduction to Prompt Engineering", issuer: "Simplilearn SkillUp", year: "2026" },
  { title: "Machine Learning Using Python", issuer: "Simplilearn SkillUp", year: "2026" },
  { title: "Certificate of Appreciation — SabraXtreme 3.0", issuer: "IEEE Student Branch, SUSL", year: "2025" },
];

export const aiPractice = [
  { title: "Prompt engineering", detail: "Training in structured prompts and few-shot techniques for useful LLM workflows." },
  { title: "Multi-agent systems", detail: "Built a four-agent scam detection workflow for ShadowSense Aurora." },
  { title: "RAG & vector search", detail: "Used ChromaDB to bring relevant fraud context into AI analysis." },
  { title: "Machine learning", detail: "Completed Python ML coursework and continue to explore applied AI and ML." },
];

export const techStack = [
  { area: "Languages", tools: "Python · TypeScript · Java · SQL" },
  { area: "Frontend", tools: "React · Next.js · Tailwind CSS" },
  { area: "Backend", tools: "Spring Boot · FastAPI · Node.js" },
  { area: "Data & tools", tools: "MySQL · Git · Docker · Postman" },
  { area: "AI / ML", tools: "Gemini API · Groq · DeepSeek-R1 · ChromaDB" },
];
