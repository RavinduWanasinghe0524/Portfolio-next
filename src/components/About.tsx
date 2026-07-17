"use client";
import { useEffect } from "react";
import { PERSONAL } from "@/lib/data";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 80);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useReveal();

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" style={{ padding: "5rem 0" }}>
      <style>{`
        .about-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .about-bento {
            grid-template-columns: 2fr 1fr;
          }
          .about-bento .span2 {
            grid-column: 1 / -1;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", fontFamily: "var(--font-geist-mono)", marginBottom: "0.75rem" }}>
            <span style={{ color: "#7dd3fc", opacity: 0.6 }}>//</span> about me
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.2 }}>
            Who I Am &amp;{" "}
            <span style={{
              background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>What I Do</span>
          </h2>
          <div style={{ height: 3, width: 56, margin: "0.75rem auto 0", borderRadius: 99, background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }} />
        </div>

        {/* ── Bento Grid ── */}
        <div className="about-bento">

          {/* My Journey — full width row */}
          <div className="glass glow-border mouse-glow card-hover reveal-left span2" onMouseMove={onMouseMove} style={{ padding: "1.75rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", background: "rgba(37,99,235,0.15)", marginBottom: "1rem" }}>🚀</div>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>My Journey</h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.75, fontSize: "0.875rem", marginBottom: "0.75rem" }}>{PERSONAL.bio}</p>
            <p style={{ color: "#94a3b8", lineHeight: 1.75, fontSize: "0.875rem", marginBottom: "1.25rem" }}>{PERSONAL.bio2}</p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0.4rem 0.9rem", borderRadius: 99, fontSize: "0.7rem", fontWeight: 700,
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)",
              color: "#34d399", fontFamily: "var(--font-geist-mono)",
            }}>
              <span className="animate-ping-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
              Available for Collaboration
            </div>
          </div>

          {/* Repos stat */}
          <div className="glass glow-border mouse-glow card-hover reveal" onMouseMove={onMouseMove} style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", background: "rgba(14,165,233,0.15)", marginBottom: "0.75rem" }}>📦</div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1, background: "linear-gradient(135deg,#60a5fa,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>17+</div>
              <div style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.25rem" }}>GitHub Repositories</div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.7rem", fontWeight: 700, color: "#60a5fa", fontFamily: "var(--font-geist-mono)", marginTop: "0.75rem" }}>
              <span className="animate-ping-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", display: "inline-block" }} />
              Synced
            </div>
          </div>

          {/* Core Focus */}
          <div className="glass glow-border mouse-glow card-hover reveal" onMouseMove={onMouseMove} style={{ padding: "1.5rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", background: "rgba(79,70,229,0.15)", marginBottom: "1rem" }}>🎯</div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", fontFamily: "var(--font-geist-mono)", marginBottom: "0.75rem" }}>Core Focus</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { c: "#60a5fa", t: "Software Architecture" },
                { c: "#7dd3fc", t: "Web Technologies" },
                { c: "#93c5fd", t: "Digital Forensics" },
                { c: "#a5b4fc", t: "Full-Stack Development" },
              ].map(({ c, t }) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: "#cbd5e1" }}>
                  <span style={{ color: c, fontSize: "0.7rem", flexShrink: 0 }}>▸</span> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Status card */}
          <div className="glass glow-border mouse-glow card-hover reveal" onMouseMove={onMouseMove} style={{ padding: "1.5rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", background: "rgba(14,165,233,0.15)", marginBottom: "1rem" }}>🖥️</div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", fontFamily: "var(--font-geist-mono)", marginBottom: "0.75rem" }}>Dev Status</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem" }}>
              {[
                { k: "ENV", v: "PROD-ACTIVE", c: "#34d399" },
                { k: "BUILD", v: "PASSING ✓", c: "#60a5fa" },
                { k: "DEPLOY", v: "VERCEL", c: "#a5b4fc" },
              ].map(({ k, v, c }) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#475569" }}>{k}:</span>
                  <span style={{ color: c, fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* University — full width row */}
          <div className="glass glow-border mouse-glow card-hover reveal-right span2" onMouseMove={onMouseMove} style={{ padding: "1.75rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", background: "rgba(37,99,235,0.15)", marginBottom: "1rem" }}>🎓</div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", fontFamily: "var(--font-geist-mono)", marginBottom: "0.25rem" }}>Academic Anchor</p>
                <h5 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Sabaragamuwa University of Sri Lanka</h5>
                <p style={{ fontSize: "0.8rem", marginTop: "0.2rem", color: "#60a5fa", fontFamily: "var(--font-geist-mono)" }}>
                  Faculty of Applied Sciences • BSc Information Systems
                </p>
              </div>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.3rem 0.75rem", borderRadius: 99, background: "rgba(37,99,235,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#93c5fd", fontFamily: "var(--font-geist-mono)", whiteSpace: "nowrap" }}>
                2024 – 2028
              </span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.75 }}>
              Immersed in database systems, software architecture, and digital forensic pipelines. Building a strong foundation in modern technology and engineering principles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
