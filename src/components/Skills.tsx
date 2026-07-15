"use client";
import { useState, useEffect } from "react";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("web");
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    // Reset and trigger bar animations when category changes
    const timer = setTimeout(() => {
      setBarsAnimated(true);
    }, 50);
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
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}
          >
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>{"//"}</span> expertise
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Skills &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Focus Areas
            </span>
          </h2>
          <div
            className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categories List */}
          <div className="md:col-span-4 space-y-3">
            {SKILLS.map((cat) => {
              const isActive = cat.key === activeCategory;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setBarsAnimated(false);
                    setActiveCategory(cat.key);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600/10 border-blue-500/40 shadow-[inset_4px_0_0_#3b82f6]"
                      : "bg-slate-900/10 border-transparent hover:bg-blue-900/10 hover:border-blue-900/20"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-sm"
                    style={{
                      background: isActive
                        ? "rgba(59,130,246,0.2)"
                        : "rgba(255,255,255,0.03)",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">
                      {cat.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {cat.bars.map((b) => b.name.split(" ")[0]).join(", ")}...
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Category Details Visualizer */}
          <div className="md:col-span-8">
            <div
              className="glass glow-border mouse-glow p-8 rounded-2xl min-h-[380px] flex flex-col justify-between"
              onMouseMove={onMouseMove}
            >
              <div>
                <div
                  className="text-xs font-bold tracking-[0.1em] uppercase mb-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#60a5fa",
                  }}
                >
                  {activeData.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeData.label}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {activeData.desc}
                </p>
              </div>

              {/* Progress bars matrix */}
              <div className="my-6 space-y-4">
                <div
                  className="text-xs font-bold tracking-[0.1em] uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#94a3b8",
                  }}
                >
                  Expertise Matrix
                </div>
                {activeData.bars.map((bar) => (
                  <div key={bar.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-slate-400">
                      <span>{bar.name}</span>
                      <span
                        className="font-bold"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          color: "#60a5fa",
                        }}
                      >
                        {bar.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900/60 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full skill-bar"
                        style={{ width: barsAnimated ? `${bar.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Ecosystem Tags */}
              <div>
                <div
                  className="text-xs font-bold tracking-[0.1em] uppercase mb-2"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#94a3b8",
                  }}
                >
                  Core Ecosystem
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeData.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold font-mono text-blue-300 bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:text-white transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
