"use client";

import Image from "next/image";
import { useState } from "react";
import { credentials, personal, projects, type Project } from "@/lib/data";

const filters = ["All", "AI & Security", "Web & Systems", "Games & Tools"] as const;
type Filter = (typeof filters)[number];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <article className="project-card">
      <div className="project-art">
        {project.image ? (
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        ) : (
          <div className="project-monogram" aria-hidden="true">{project.title.split(" ").map((word) => word[0]).slice(0, 2).join("")}</div>
        )}
        <span className="project-index">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.kind}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.code} target="_blank" rel="noopener noreferrer">Source <Arrow diagonal /></a>
          {project.alternateCode && <a href={project.alternateCode} target="_blank" rel="noopener noreferrer">PHP edition <Arrow diagonal /></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live site <Arrow diagonal /></a>}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const matching = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.kind === filter;
    const text = `${project.title} ${project.summary} ${project.stack.join(" ")}`.toLowerCase();
    return matchesFilter && text.includes(query.trim().toLowerCase());
  });
  const visible = showAll || filter !== "All" || query ? matching : matching.filter((project) => project.featured);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Ravindu Wanasinghe, back to top">RW<span className="brand-dot">.</span><span className="brand-name">Ravindu Wanasinghe</span></a>
          <nav id="mobile-navigation" className={menuOpen ? "nav is-open" : "nav"} aria-label="Main navigation">
            {["Work", "About", "Expertise", "Education", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </nav>
          <a className="header-cta" href={`mailto:${personal.email}`}>Let’s talk <Arrow diagonal /></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "+"}</span></button>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Information Systems student · Sri Lanka</p>
            <h1>Hi, I’m Ravindu.<br />I build <em>web & AI tools.</em></h1>
            <p className="hero-description">Full stack developer and Information Systems undergraduate working across web applications, prompt engineering, and digital forensics.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#work">Explore my work <Arrow /></a>
              <a className="button button-outline" href="/Ravindu-Wanasinghe-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-footnote"><span>Currently studying at</span><strong>Sabaragamuwa University of Sri Lanka</strong><span>· Faculty of Computing</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><Image src="/2.jpg" alt="Portrait of Ravindu Wanasinghe" fill priority sizes="(max-width: 800px) 80vw, 38vw" /></div>
            <div className="hero-stamp"><span>Full stack</span><span className="stamp-star">✳</span><span>AI & forensics</span></div>
            <div className="hero-visual-caption"><span>01 / INTRODUCTION</span><span>Based in Sri Lanka ↗</span></div>
          </div>
        </section>

        <section className="intro-band" aria-label="Focus areas">
          <div className="section-shell intro-band-inner"><span>Full stack engineering</span><span className="band-divider" /><span>AI & prompt engineering</span><span className="band-divider" /><span>Digital forensics</span></div>
        </section>

        <section className="section-shell section-pad" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Selected projects</p><h2>Work that speaks<br /><em>for itself.</em></h2></div>
            <p>A selection of experiments, team efforts, and products built across AI, security, and the web.</p>
          </div>
          <div className="project-toolbar">
            <div className="filter-list" role="group" aria-label="Filter projects">
              {filters.map((option) => <button type="button" key={option} className={filter === option ? "filter active" : "filter"} aria-pressed={filter === option} onClick={() => { setFilter(option); setShowAll(false); }}>{option}</button>)}
            </div>
            <label className="search-label"><span className="sr-only">Search projects</span><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search work…" /></label>
          </div>
          {visible.length ? <div className="project-grid">{visible.map((project, index) => <ProjectCard key={project.title} project={project} index={index} total={visible.length} />)}</div> : <p className="empty-state">No projects match that search. Try a different term.</p>}
          {!showAll && filter === "All" && !query && <button className="more-button" type="button" onClick={() => setShowAll(true)}>View all {projects.length} projects <Arrow /></button>}
        </section>

        <section className="about-wrap" id="about">
          <div className="section-shell about-grid">
            <div><p className="eyebrow">02 / About me</p><h2>Curiosity is<br />my <em>compass.</em></h2></div>
            <div className="about-copy"><p className="about-lead">I build end-to-end systems and explore how AI can make them more useful.</p><p>I study Information Systems at Sabaragamuwa University of Sri Lanka. My projects range from React and Spring Boot applications to multi-agent scam detection and document forensics. I care about reliable systems and clear experiences for the people who use them.</p><p>I led Team Shadow Sense to first runner-up at the AURORA 2026 AI Ideathon. I’m currently exploring LLM applications, retrieval workflows, and agent frameworks while continuing to build full stack products.</p><a className="text-link" href={personal.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <Arrow diagonal /></a></div>
          </div>
        </section>

        <section className="section-shell section-pad" id="expertise">
          <div className="section-heading"><div><p className="eyebrow">03 / What I work with</p><h2>Tools for the <em>job.</em></h2></div><p>Skills shaped by shipped projects, team work, and ongoing study.</p></div>
          <div className="expertise-grid">
            <article><span className="expertise-number">01</span><h3>Full stack web</h3><p>Responsive interfaces and complete applications built with clear, useful interactions.</p><div className="stack"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span></div></article>
            <article><span className="expertise-number">02</span><h3>Backend & data</h3><p>REST APIs, data models, authentication, and reliable application logic.</p><div className="stack"><span>Spring Boot</span><span>FastAPI</span><span>PHP</span><span>MySQL</span></div></article>
            <article><span className="expertise-number">03</span><h3>AI & prompts</h3><p>LLM-integrated tools, prompt design, agent workflows, and retrieval experiments.</p><div className="stack"><span>Prompt design</span><span>RAG</span><span>AI agents</span><span>Jac</span></div></article>
            <article><span className="expertise-number">04</span><h3>Digital forensics</h3><p>Evidence-led analysis of documents, images, and metadata.</p><div className="stack"><span>ELA</span><span>Noise variance</span><span>Metadata</span><span>Image analysis</span></div></article>
          </div>
          <p className="exploring-note"><strong>Currently exploring</strong> LangChain, LlamaIndex, Hugging Face, and cloud-native ML.</p>
        </section>

        <section className="education-wrap" id="education">
          <div className="section-shell education-grid">
            <div><p className="eyebrow">04 / Learning path</p><h2>Always in<br /><em>progress.</em></h2></div>
            <div className="timeline">
              <article><span className="timeline-date">Current</span><h3>BSc (Hons) Information Systems</h3><p>Sabaragamuwa University of Sri Lanka · Faculty of Computing</p><p>Software systems, databases, systems analysis, and web technologies.</p></article>
              <article><span className="timeline-date">2023</span><h3>Advanced Level · Physical Science</h3><p>Mathematics, Physics & Chemistry</p><p>An analytical foundation for problem solving and engineering.</p></article>
              <div className="credentials"><h3>Selected certifications</h3>{credentials.map((item) => <div key={item.title}><span>{item.title}</span><small>{item.issuer}</small></div>)}<a className="text-link" href={personal.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn profile <Arrow diagonal /></a></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="section-shell contact-inner"><p className="eyebrow">05 / Get in touch</p><h2>Have a project<br />in <em>mind?</em></h2><p>Open to internships, open-source collaboration, AI research, and interesting conversations. Let’s build something useful together.</p><a className="button button-dark" href={`mailto:${personal.email}`}>Email me <Arrow diagonal /></a><div className="contact-bottom"><a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={personal.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="/Ravindu-Wanasinghe-Europass-CV.pdf" download>Europass CV ↓</a></div></div></section>
      </main>
      <footer className="footer"><div className="section-shell"><span>© {new Date().getFullYear()} {personal.name}</span><span>Designed and built with Next.js.</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
