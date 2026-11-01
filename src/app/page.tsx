"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { credentials, personal, projects, type Project } from "@/lib/data";

const filters = ["All", "AI & Security", "Web & Systems", "Games & Tools"] as const;
type Filter = (typeof filters)[number];

/* ── Global scroll-reveal ────────────────────────────────────────────────── */
function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ── Sticky header scroll detection ─────────────────────────────────────── */
function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);
  return scrolled;
}

/* ── Arrow icon ─────────────────────────────────────────────────────────── */
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" style={{ fontSize: "15px", lineHeight: 1 }}>
      {diagonal ? "↗" : "→"}
    </span>
  );
}

/* ── Expertise data ──────────────────────────────────────────────────────── */
const expertiseItems = [
  {
    num: "01",
    icon: "⬡",
    title: "Full stack web",
    desc: "Responsive interfaces and complete applications built with clear, useful interactions.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "02",
    icon: "⚙",
    title: "Backend & data",
    desc: "REST APIs, data models, authentication, and reliable application logic.",
    stack: ["Spring Boot", "FastAPI", "PHP", "MySQL"],
  },
  {
    num: "03",
    icon: "◈",
    title: "AI & prompts",
    desc: "LLM-integrated tools, prompt design, agent workflows, and retrieval experiments.",
    stack: ["Prompt design", "RAG", "AI agents", "Jac"],
  },
  {
    num: "04",
    icon: "◎",
    title: "Digital forensics",
    desc: "Evidence-led analysis of documents, images, and metadata.",
    stack: ["ELA", "Noise variance", "Metadata", "Image analysis"],
  },
];

/* ── Marquee band items ──────────────────────────────────────────────────── */
const bandItems = [
  "Full stack engineering",
  "AI & prompt engineering",
  "Digital forensics",
  "React & Next.js",
  "Spring Boot & FastAPI",
  "LLM integration",
  "Multi-agent systems",
  "Document analysis",
];

/* ── Project Card ────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <article
      className="project-card reveal"
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <div className="project-art">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        ) : (
          <div className="project-monogram" aria-hidden="true">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
        <span className="project-index">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.kind}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Source <Arrow diagonal />
          </a>
          {project.alternateCode && (
            <a
              href={project.alternateCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              PHP edition <Arrow diagonal />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live site <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Main Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  /* Run global reveal observer on every render so newly-mounted cards get watched */
  useRevealAll();

  /* Close mobile menu on resize */
  useEffect(() => {
    const handle = () => {
      if (window.innerWidth > 800) setMenuOpen(false);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const matching = projects.filter((p) => {
    const matchesFilter = filter === "All" || p.kind === filter;
    const text =
      `${p.title} ${p.summary} ${p.stack.join(" ")}`.toLowerCase();
    return matchesFilter && text.includes(query.trim().toLowerCase());
  });
  const visible =
    showAll || filter !== "All" || query
      ? matching
      : matching.filter((p) => p.featured);

  return (
    <>
      {/* Animated background */}
      <div className="page-bg" aria-hidden="true">
        <div className="page-bg-orb" />
      </div>

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Ravindu Wanasinghe, back to top"
          >
            <span className="brand-logo" aria-hidden="true">
              RW
            </span>
            <span className="brand-name">Ravindu Wanasinghe</span>
          </a>

          <nav
            id="mobile-navigation"
            className={menuOpen ? "nav is-open" : "nav"}
            aria-label="Main navigation"
          >
            {["Work", "About", "Expertise", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <a
            className="header-cta"
            href={`mailto:${personal.email}`}
          >
            Let&apos;s talk <Arrow diagonal />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main id="main">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              <span className="eyebrow-dot" aria-hidden="true" />
              Information Systems student · Sri Lanka
            </p>

            <h1 className="reveal reveal-delay-1">
              Hi, I&apos;m{" "}
              <span className="hero-name-gradient">Ravindu.</span>
              <br />
              I build <em className="hero-em">web &amp; AI tools.</em>
            </h1>

            <p className="hero-description reveal reveal-delay-2">
              Full stack developer and Information Systems undergraduate working
              across web applications, prompt engineering, and digital forensics.
            </p>

            <div className="hero-actions reveal reveal-delay-3">
              <a className="button button-accent" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="button button-outline"
                href="/Ravindu-Wanasinghe-CV.pdf"
                download
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-footnote reveal reveal-delay-4">
              <span>Currently studying at</span>
              <strong>Sabaragamuwa University of Sri Lanka</strong>
              <span>· Faculty of Computing</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <div className="portrait-frame">
              <Image
                src="/2.jpg"
                alt="Portrait of Ravindu Wanasinghe"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 42vw"
              />
            </div>

            <div className="hero-badge" aria-hidden="true">
              <span className="hero-badge-icon">🏆</span>
              <span className="hero-badge-label">AURORA 2026 Runner-up</span>
            </div>

            <div className="hero-visual-caption">
              <span>01 / INTRODUCTION</span>
              <span>Based in Sri Lanka ↗</span>
            </div>
          </div>
        </section>

        {/* ── MARQUEE BAND ─────────────────────────────────────────────── */}
        <section className="intro-band" aria-label="Focus areas">
          <div className="intro-band-track" aria-hidden="true">
            {[...bandItems, ...bandItems].map((item, i) => (
              <div key={i} className="intro-band-inner">
                <span>{item}</span>
                <span className="band-divider" />
              </div>
            ))}
          </div>
        </section>

        {/* ── WORK ─────────────────────────────────────────────────────── */}
        <section className="section-shell section-pad" id="work">
          <div className="section-heading reveal">
            <div>
              <p className="section-tag">01 / Selected projects</p>
              <h2>
                Work that speaks
                <br />
                <em>for itself.</em>
              </h2>
            </div>
            <p>
              A selection of experiments, team efforts, and products built
              across AI, security, and the web.
            </p>
          </div>

          <div className="project-toolbar reveal">
            <div className="filter-list" role="group" aria-label="Filter projects">
              {filters.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={filter === option ? "filter active" : "filter"}
                  aria-pressed={filter === option}
                  onClick={() => {
                    setFilter(option);
                    setShowAll(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <label className="search-label">
              <span className="sr-only">Search projects</span>
              <span aria-hidden="true">⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search work…"
              />
            </label>
          </div>

          {visible.length ? (
            <div className="project-grid">
              {visible.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  total={visible.length}
                />
              ))}
            </div>
          ) : (
            <p className="empty-state">
              No projects match that search. Try a different term.
            </p>
          )}

          {!showAll && filter === "All" && !query && (
            <button
              className="more-button reveal"
              type="button"
              onClick={() => setShowAll(true)}
            >
              View all {projects.length} projects <Arrow />
            </button>
          )}
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────── */}
        <section className="about-wrap" id="about">
          <div className="section-shell about-grid">
            <div className="reveal">
              <p className="section-tag">02 / About me</p>
              <h2>
                Curiosity is
                <br />
                my <em>compass.</em>
              </h2>
            </div>
            <div className="about-copy reveal reveal-delay-2">
              <p className="about-lead">
                I build end-to-end systems and explore how AI can make them
                more useful.
              </p>
              <p>
                I study Information Systems at Sabaragamuwa University of Sri
                Lanka. My projects range from React and Spring Boot applications
                to multi-agent scam detection and document forensics. I care
                about reliable systems and clear experiences for the people who
                use them.
              </p>
              <p>
                I led Team Shadow Sense to first runner-up at the AURORA 2026
                AI Ideathon. I&apos;m currently exploring LLM applications,
                retrieval workflows, and agent frameworks while continuing to
                build full stack products.
              </p>
              <a
                className="text-link"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        {/* ── EXPERTISE ────────────────────────────────────────────────── */}
        <section className="section-shell section-pad" id="expertise">
          <div className="section-heading reveal">
            <div>
              <p className="section-tag">03 / What I work with</p>
              <h2>
                Tools for the <em>job.</em>
              </h2>
            </div>
            <p>Skills shaped by shipped projects, team work, and ongoing study.</p>
          </div>

          <div className="expertise-grid">
            {expertiseItems.map((item, i) => (
              <article
                key={item.num}
                className={`expertise-card reveal reveal-delay-${i + 1}`}
              >
                <span className="expertise-number">{item.num}</span>
                <span className="expertise-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="stack">
                  {item.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="exploring-note reveal">
            <strong>Currently exploring</strong>
            LangChain, LlamaIndex, Hugging Face, and cloud-native ML.
          </p>
        </section>

        {/* ── EDUCATION ────────────────────────────────────────────────── */}
        <section className="education-wrap" id="education">
          <div className="section-shell education-grid">
            <div className="reveal">
              <p className="section-tag">04 / Learning path</p>
              <h2>
                Always in
                <br />
                <em>progress.</em>
              </h2>
            </div>

            <div className="timeline reveal reveal-delay-2">
              <article>
                <span className="timeline-date">Current</span>
                <h3>BSc (Hons) Information Systems</h3>
                <p>
                  Sabaragamuwa University of Sri Lanka · Faculty of Computing
                </p>
                <p>
                  Software systems, databases, systems analysis, and web
                  technologies.
                </p>
              </article>

              <article>
                <span className="timeline-date">2023</span>
                <h3>Advanced Level · Physical Science</h3>
                <p>Mathematics, Physics &amp; Chemistry</p>
                <p>
                  An analytical foundation for problem solving and engineering.
                </p>
              </article>

              <div className="credentials">
                <h3>Selected certifications</h3>
                {credentials.map((item) => (
                  <div key={item.title}>
                    <span>{item.title}</span>
                    <small>{item.issuer}</small>
                  </div>
                ))}
                <a
                  className="text-link"
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn profile <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────── */}
        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <p className="eyebrow reveal">
              <span className="eyebrow-dot" aria-hidden="true" />
              05 / Get in touch
            </p>
            <h2 className="reveal reveal-delay-1">
              Have a project
              <br />
              in mind?
            </h2>
            <p className="reveal reveal-delay-2">
              Open to internships, open-source collaboration, AI research, and
              interesting conversations. Let&apos;s build something useful
              together.
            </p>
            <a
              className="button button-accent reveal reveal-delay-3"
              href={`mailto:${personal.email}`}
            >
              Email me <Arrow diagonal />
            </a>
            <div className="contact-bottom reveal reveal-delay-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
              <a href="/Ravindu-Wanasinghe-Europass-CV.pdf" download>
                Europass CV ↓
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="section-shell">
          <span>
            © {new Date().getFullYear()} {personal.name}
          </span>
          <span>Designed &amp; built with Next.js</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
