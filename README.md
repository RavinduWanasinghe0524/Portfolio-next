# Ravindu Wanasinghe — Personal Portfolio

> A modern, high-performance personal portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

---

## ✨ Features

- **Animated Hero** — Typewriter effect cycling through roles, animated profile ring, floating tech badges & counter stats
- **About** — Personal introduction with bio, tech highlights, and social links
- **Skills** — Interactive tabbed skill categories with animated progress bars and tool chips
- **Projects** — Filterable project grid (All / Web / Tools) showcasing 11 real projects with live demos
- **Interactive Terminal** — A fully simulated in-browser CLI terminal with commands like `help`, `projects`, `skills`, `contact`, `whoami`, and more
- **Education** — Timeline of academic background with highlighted modules
- **Contact** — Email/social contact section
- **Dynamic Background** — Canvas-powered animated particle background
- **Scroll-to-top** — Smooth floating button with gradient styling
- **Responsive** — Fully mobile-friendly layout across all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans & Geist Mono (via `next/font`) |
| Deployment | Vercel |
| Linting | ESLint 9 + eslint-config-next |

---

## 📁 Project Structure

```
portfolio-nextjs/
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata & fonts
│   │   ├── page.tsx      # Main page — assembles all sections
│   │   └── globals.css   # Global styles & custom animations
│   ├── components/
│   │   ├── Background.tsx  # Canvas particle animation
│   │   ├── Navbar.tsx      # Floating navigation bar
│   │   ├── Hero.tsx        # Animated landing section
│   │   ├── About.tsx       # About me section
│   │   ├── Skills.tsx      # Tabbed skills with progress bars
│   │   ├── Projects.tsx    # Filterable project grid
│   │   ├── Terminal.tsx    # Interactive CLI terminal
│   │   ├── Education.tsx   # Academic timeline
│   │   └── Contact.tsx     # Contact & social links
│   └── lib/
│       └── data.ts         # Central data file (all portfolio content)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/RavinduWanasinghe0524/RavinduWanasinghe0524.github.io.git
cd portfolio-nextjs
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Customisation

All portfolio content — personal info, projects, skills, and education — is centrally managed in a single file:

```
src/lib/data.ts
```

Edit `PERSONAL`, `PROJECTS`, `SKILLS`, and `EDUCATION` exports to update any content without touching component code.

---

## 📂 Featured Projects

| Project | Stack | Status |
|---|---|---|
| [V-Mas Events](https://v-mas.vercel.app) | JS, HTML, CSS | 🟢 Live |
| [Galagama Gems](https://ravinduwanasinghe0524.github.io/Galagama-Gems/) | TypeScript, React, Tailwind | 🟢 Live |
| Elite Wheels (Next.js) | Next.js, TypeScript, Tailwind | ⭐ Featured |
| [Elite Wheels (HTML)](https://ravinduwanasinghe0524.github.io/Elite-Wheels/) | HTML, CSS, JS | 🟢 Live |
| [Royal Mushrooms](https://ravinduwanasinghe0524.github.io/royal-mushrooms-frontend/) | TypeScript, React | 🟢 Live |
| TrueTrace | TypeScript, ELA, Node.js | ✅ Completed |
| Eco-Ceylon | Next.js, Tailwind | 🔬 Prototype |
| IronLogix | Python, Automation | ✅ Completed |
| Zen Productivity | Python, CLI | ✅ Completed |
| EMS Backend | Java, Spring, REST API | ✅ Completed |
| Power Fitness | HTML, CSS | ✅ Completed |

---

## 📬 Contact

- **Email:** [ravinduwanasinghe97@gmail.com](mailto:ravinduwanasinghe97@gmail.com)
- **GitHub:** [@RavinduWanasinghe0524](https://github.com/RavinduWanasinghe0524)
- **LinkedIn:** [Ravindu Wanasinghe](https://www.linkedin.com/in/ravindu-wanasinghe-b08a50315/)
- **Instagram:** [@ravindu_wanasinghe_](https://www.instagram.com/ravindu_wanasinghe_/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ♥ using Next.js, React, TypeScript &amp; Tailwind CSS</p>
