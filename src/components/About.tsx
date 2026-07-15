"use client";
import { useEffect } from "react";
import { PERSONAL } from "@/lib/data";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 60);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useReveal();

  // Mouse glow handler
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}>
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>{"//"}</span> about me
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Who I Am &amp; <span style={{
              background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>What I Do</span>
          </h2>
          <div className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }} />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Journey — spans 2 cols */}
          <div className="glass glow-border mouse-glow md:col-span-2 p-7 rounded-2xl reveal-left"
            onMouseMove={onMouseMove}
            style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{ background: "rgba(37,99,235,0.15)" }}>🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">My Journey</h3>
            <p className="text-slate-400 leading-relaxed text-sm mb-3">{PERSONAL.bio}</p>
            <p className="text-slate-400 leading-relaxed text-sm mb-5">{PERSONAL.bio2}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#34d399", fontFamily: "var(--font-geist-mono)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping-dot" />
              Available for Collaboration
            </div>
          </div>

          {/* Repos stat */}
          <div className="glass glow-border mouse-glow p-6 rounded-2xl flex flex-col justify-between reveal"
            onMouseMove={onMouseMove}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3"
              style={{ background: "rgba(14,165,233,0.15)" }}>📦</div>
            <div>
              <div className="text-5xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>17+</div>
              <div className="text-slate-400 text-sm">GitHub Repositories</div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping-dot" />
              Synced
            </div>
          </div>

          {/* Core Focus */}
          <div className="glass glow-border mouse-glow p-6 rounded-2xl reveal"
            onMouseMove={onMouseMove}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{ background: "rgba(79,70,229,0.15)" }}>🎯</div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase mb-3"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#94a3b8" }}>Core Focus</h4>
            <ul className="space-y-2">
              {[
                { c: "#60a5fa", t: "Software Architecture" },
                { c: "#7dd3fc", t: "Web Technologies" },
                { c: "#93c5fd", t: "Digital Forensics" },
                { c: "#a5b4fc", t: "Full-Stack Development" },
              ].map(({ c, t }) => (
                <li key={t} className="flex items-center gap-2 text-sm text-slate-300">
                  <span style={{ color: c }}>▸</span> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Status card */}
          <div className="glass glow-border mouse-glow p-6 rounded-2xl reveal"
            onMouseMove={onMouseMove}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{ background: "rgba(14,165,233,0.15)" }}>🖥️</div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase mb-3"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#94a3b8" }}>Dev Status</h4>
            <div className="space-y-2" style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem" }}>
              {[
                { k: "ENV", v: "PROD-ACTIVE", c: "#34d399" },
                { k: "BUILD", v: "PASSING ✓", c: "#60a5fa" },
                { k: "DEPLOY", v: "VERCEL", c: "#a5b4fc" },
              ].map(({ k, v, c }) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-500">{k}:</span>
                  <span style={{ color: c }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* University — spans 2 */}
          <div className="glass glow-border mouse-glow md:col-span-2 p-7 rounded-2xl reveal-right"
            onMouseMove={onMouseMove}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{ background: "rgba(37,99,235,0.15)" }}>🎓</div>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <p className="text-xs font-bold tracking-[0.1em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-geist-mono)", color: "#94a3b8" }}>Academic Anchor</p>
                <h5 className="text-lg font-bold text-white">Sabaragamuwa University of Sri Lanka</h5>
                <p className="text-sm mt-0.5" style={{ color: "#60a5fa", fontFamily: "var(--font-geist-mono)" }}>
                  Faculty of Applied Sciences • BSc Information Systems
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ fontFamily: "var(--font-geist-mono)", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#93c5fd" }}>
                2024 – 2028
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Immersed in database systems, software architecture, and digital forensic pipelines. Building a strong foundation in modern technology and engineering principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
