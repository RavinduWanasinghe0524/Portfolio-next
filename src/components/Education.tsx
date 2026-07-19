"use client";
import { useEffect } from "react";
import { EDUCATION } from "@/lib/data";

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

export default function Education() {
  useReveal();
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}
          >
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>{"// "}</span> background
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Education{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Timeline
            </span>
          </h2>
          <div
            className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }}
          />
        </div>

        {/* Timeline body */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.4), rgba(14,165,233,0.15), transparent)" }}
          />

          {EDUCATION.map((item, idx) => {
            const isBlue = item.color === "blue";
            return (
              <div key={idx} className={`relative pl-16 mb-12 last:mb-0 ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                {/* Connector dot */}
                <div
                  className="absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center text-lg z-10"
                  style={{
                    background: isBlue ? "rgba(37,99,235,0.15)" : "rgba(14,165,233,0.12)",
                    border: `2px solid ${isBlue ? "rgba(59,130,246,0.5)" : "rgba(14,165,233,0.5)"}`,
                    boxShadow: isBlue
                      ? "0 0 16px rgba(59,130,246,0.35)"
                      : "0 0 16px rgba(14,165,233,0.35)",
                  }}
                >
                  {idx === 0 ? "🎓" : "📐"}
                </div>

                {/* Card */}
                <div
                  className="glass glow-border mouse-glow card-hover p-6 rounded-2xl"
                  onMouseMove={onMouseMove}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className="text-[10px] font-bold font-mono px-3 py-1 rounded-full border"
                      style={{
                        background: isBlue ? "rgba(37,99,235,0.08)" : "rgba(14,165,233,0.08)",
                        borderColor: isBlue ? "rgba(37,99,235,0.3)" : "rgba(14,165,233,0.3)",
                        color: isBlue ? "#93c5fd" : "#7dd3fc",
                      }}
                    >
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{item.school}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5">{item.degree}</h3>

                  {item.faculty && (
                    <p
                      className="text-xs font-semibold mb-3.5"
                      style={{ color: isBlue ? "#60a5fa" : "#0ea5e9" }}
                    >
                      {item.faculty}
                    </p>
                  )}

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                  <ul className="space-y-2">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-500 font-mono">
                        <span style={{ color: isBlue ? "#60a5fa" : "#0ea5e9" }}>→</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
