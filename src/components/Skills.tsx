"use client";
import { useState, useEffect } from "react";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("web");
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    setBarsAnimated(false);
    const timer = setTimeout(() => setBarsAnimated(true), 80);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const activeData = SKILLS.find((s) => s.key === activeCategory) || SKILLS[0];

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills" style={{ padding: "5rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-overline">
            <span style={{ color: "#7dd3fc", opacity: 0.6 }}>//</span> expertise
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.2 }}>
            Skills &amp;{" "}
            <span style={{
              background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Focus Areas</span>
          </h2>
          <div style={{ height: 3, width: 56, margin: "0.75rem auto 0", borderRadius: 99, background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }} />
        </div>

        {/* ── Two-column layout ── */}
        <div className="skills-grid">

          {/* Left: Category List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {SKILLS.map((cat) => {
              const isActive = cat.key === activeCategory;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setBarsAnimated(false);
                    setActiveCategory(cat.key);
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.875rem 1rem",
                    borderRadius: "0.875rem",
                    textAlign: "left",
                    cursor: "pointer",
                    border: isActive ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.05)",
                    background: isActive ? "rgba(37,99,235,0.1)" : "rgba(255,255,255,0.02)",
                    boxShadow: isActive ? "inset 4px 0 0 #3b82f6" : "none",
                    transition: "all 0.25s ease",
                    outline: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                      e.currentTarget.style.border = "1px solid rgba(59,130,246,0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)";
                    }
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.15rem",
                    background: isActive ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.04)",
                    flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <div style={{ overflow: "hidden", minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: isActive ? "#e2e8f0" : "#94a3b8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {cat.label}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#475569", marginTop: "0.15rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {cat.bars.slice(0, 3).map((b) => b.name.split(" ")[0]).join(" · ")}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detail Panel */}
          <div
            className="glass glow-border mouse-glow"
            onMouseMove={onMouseMove}
            style={{ padding: "2rem", minHeight: "400px", display: "flex", flexDirection: "column" }}
          >
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", fontFamily: "var(--font-geist-mono)", marginBottom: "0.4rem" }}>
                {activeData.subtitle}
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{activeData.label}</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7, marginTop: "0.6rem" }}>{activeData.desc}</p>
            </div>

            {/* Progress bars */}
            <div style={{ marginBottom: "1.5rem", flex: 1 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", fontFamily: "var(--font-geist-mono)", marginBottom: "0.75rem" }}>
                Expertise Matrix
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {activeData.bars.map((bar) => (
                  <div key={bar.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>{bar.name}</span>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#60a5fa", fontFamily: "var(--font-geist-mono)" }}>{bar.level}%</span>
                    </div>
                    <div style={{ height: 6, background: "rgba(15,23,42,0.8)", borderRadius: 99, overflow: "hidden", border: "1px solid rgba(255,255,255,0.04)" }}>
                      <div
                        className="skill-bar"
                        style={{
                          height: "100%",
                          width: barsAnimated ? `${bar.level}%` : "0%",
                          borderRadius: 99,
                          background: "linear-gradient(90deg,#2563eb,#0ea5e9)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem tags */}
            <div>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", fontFamily: "var(--font-geist-mono)", marginBottom: "0.6rem" }}>
                Core Ecosystem
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {activeData.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      padding: "0.25rem 0.6rem", borderRadius: 6,
                      fontSize: "0.68rem", fontWeight: 700, fontFamily: "var(--font-geist-mono)",
                      color: "#93c5fd", background: "rgba(59,130,246,0.06)",
                      border: "1px solid rgba(59,130,246,0.12)",
                      cursor: "default", transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(59,130,246,0.14)";
                      e.currentTarget.style.color = "#e2e8f0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                      e.currentTarget.style.color = "#93c5fd";
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
