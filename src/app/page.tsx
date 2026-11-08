import Image from "next/image";
import { aiPractice, credentials, personal, projects, techStack } from "@/lib/data";

const selectedProjects = ["ShadowSense Aurora", "V-MAS", "TrueTrace"].map(
  (title) => projects.find((project) => project.title === title)!,
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Ravindu Wanasinghe, back to top">
            <span className="wordmark-symbol" aria-hidden="true">RW<span>.</span></span>
            <span>Ravindu Wanasinghe</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#recognition">Recognition</a>
          </nav>
          <a className="header-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="main">
        <section className="container hero" aria-labelledby="hero-title">
          <div className="hero-main">
            <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" /> Full stack · Prompt engineer</p>
            <h1 id="hero-title">Building software<br />and shaping <span>AI.</span></h1>
            <p className="hero-intro">I&apos;m Ravindu, an Information Systems undergraduate in Sri Lanka. I build full stack applications, design prompts for language models, and explore AI and machine learning.</p>
            <div className="hero-links">
              <a className="primary-link" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="quiet-link" href="/Ravindu-Wanasinghe-CV.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-image"><Image src="/2.jpg" alt="Portrait of Ravindu Wanasinghe" fill priority sizes="(max-width: 800px) 100vw, 330px" /></div>
            <figcaption>Ravindu Wanasinghe <span>Sri Lanka</span></figcaption>
          </figure>
        </section>

        <section className="container work section" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <p className="section-index">01 — Selected work</p>
            <div><h2 id="work-title">Work that solves<br />real problems.</h2><p>Three projects across security, operations, and forensics.</p></div>
          </div>
          <div className="work-list">
            {selectedProjects.map((project, index) => (
              <article className="work-item" key={project.title}>
                <div className="work-visual">
                  {project.image ? <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 800px) 100vw, 650px" /> : <div className="visual-wordmark" aria-hidden="true">V<span>—</span>MAS</div>}
                </div>
                <div className="work-info">
                  <p className="work-meta"><span>{String(index + 1).padStart(2, "0")}</span> {project.kind} / {project.year}</p>
                  <h3>{project.title}</h3>
                  <p className="work-summary">{project.summary}</p>
                  <p className="work-stack">{project.stack.slice(0, 3).join(" · ")}</p>
                  <div className="work-links">
                    <a href={project.code} target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="text-link all-projects" href={personal.github} target="_blank" rel="noopener noreferrer">See more on GitHub <span aria-hidden="true">↗</span></a>
        </section>

        <section className="container expertise section" id="expertise" aria-labelledby="expertise-title">
          <div className="section-head">
            <p className="section-index">02 — Expertise</p>
            <div><h2 id="expertise-title">AI, prompts, and<br />engineering.</h2><p>The methods and tools behind my projects and current learning.</p></div>
          </div>
          <div className="expertise-grid">
            <div className="ai-practice">
              <h3>AI practice</h3>
              <div className="expertise-list">
                {aiPractice.map((item) => (
                  <div className="expertise-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="stack-panel">
              <h3>Tech stack</h3>
              <dl className="stack-list">
                {techStack.map((group) => (
                  <div key={group.area}>
                    <dt>{group.area}</dt>
                    <dd>{group.tools}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="recognition section" id="recognition" aria-labelledby="recognition-title">
          <div className="container">
            <div className="section-head">
              <p className="section-index">03 — Recognition</p>
              <div><h2 id="recognition-title">A record of learning<br />and achievement.</h2><p>Recognition earned through projects, study, and community work.</p></div>
            </div>
            <div className="recognition-grid">
              <div className="award">
                <p className="eyebrow">Award / 2026</p>
                <span className="award-number">1<span>st</span></span>
                <h3>Runner-up, AURORA 2026</h3>
                <p>National AI Ideathon · Team Shadow Sense</p>
                <p>Led the team behind ShadowSense Aurora, a multi-agent system for detecting scams on freelance platforms.</p>
                <a className="text-link" href="https://github.com/RavinduWanasinghe0524/ShadowSense-2026-Aurora" target="_blank" rel="noopener noreferrer">Explore the project <span aria-hidden="true">↗</span></a>
              </div>
              <div className="certifications">
                <h3>Certifications</h3>
                <ol>
                  {credentials.map((credential, index) => (
                    <li key={credential.title}>
                      <span className="cert-number">{String(index + 1).padStart(2, "0")}</span>
                      <div><strong>{credential.title}</strong><span>{credential.issuer}</span></div>
                      <time>{credential.year}</time>
                    </li>
                  ))}
                </ol>
                <a className="text-link" href="/Ravindu-Wanasinghe-CV.pdf" download>Download full résumé <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="container about section" id="about" aria-labelledby="about-title">
          <div className="section-head">
            <p className="section-index">04 — About</p>
            <div><h2 id="about-title">Curious by nature.<br />Practical by design.</h2></div>
          </div>
          <div className="about-grid">
            <p className="about-lead">I like taking complex ideas and turning them into clear, useful software.</p>
            <div className="about-side">
              <p>I study Information Systems at Sabaragamuwa University of Sri Lanka. My projects bring together web engineering, prompt engineering, AI-assisted workflows, and digital forensics. I&apos;m especially interested in applying AI and machine learning to useful products.</p>
              <div className="about-facts">
                <div><span>Education</span><strong>BSc (Hons) Information Systems<br />Sabaragamuwa University of Sri Lanka</strong></div>
                <div><span>Focus</span><strong>Prompt engineering · AI/ML · Full stack systems</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <p className="section-index">05 — Contact</p>
            <div>
              <h2 id="contact-title">Let&apos;s talk about<br />what&apos;s next.</h2>
              <p>Open to internships, collaborations, and thoughtful conversations.</p>
              <a className="contact-email" href={`mailto:${personal.email}`}>{personal.email} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ravindu Wanasinghe</span>
          <div><a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/Ravindu-Wanasinghe-Europass-CV.pdf" download>Europass CV ↓</a></div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
