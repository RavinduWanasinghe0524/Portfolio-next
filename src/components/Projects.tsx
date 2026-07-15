"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "tools">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory("all");
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}
          >
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>{"//"}</span> portfolio
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            My Project{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Showcase
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Explore my systems, web applications, and desktop/CLI helper scripts.
          </p>
          <div
            className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }}
          />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 reveal">
          <div className="flex flex-wrap gap-1.5 bg-slate-900/40 p-1 border border-white/5 rounded-xl">
            {(["all", "web", "tools"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat === "all"
                  ? "All Projects"
                  : cat === "web"
                  ? "Web & Fullstack"
                  : "Utilities & Tools"}
              </button>
            ))}
          </div>

          <div className="relative">
            <svg
              className="absolute left-3.5 top-3 text-slate-500 width-[14px] height-[14px]"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tags..."
              className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-slate-950/60 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => {
              const isWeb = p.category === "web";
              return (
                <article
                  key={p.id}
                  className="glass glow-border mouse-glow flex flex-col justify-between overflow-hidden group"
                  onMouseMove={onMouseMove}
                  style={{ transition: "transform 0.4s ease, box-shadow 0.4s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 15px 45px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div>
                    {/* Placeholder Grid Header / Image banner */}
                    <div
                      className="w-full h-40 flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: isWeb
                          ? "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(14,165,233,0.1))"
                          : "linear-gradient(135deg, rgba(79,70,229,0.15), rgba(14,165,233,0.1))",
                      }}
                    >
                      {/* Grid overlay */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <span className="text-4xl select-none filter drop-shadow-md">
                        {isWeb ? "🌐" : "⚙️"}
                      </span>
                      <span
                        className="absolute bottom-2.5 right-3.5 text-[9px] font-mono tracking-wider opacity-30 select-none uppercase font-bold text-white"
                      >
                        {p.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <span
                          className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                          style={{
                            background: isWeb
                              ? "rgba(37,99,235,0.06)"
                              : "rgba(79,70,229,0.06)",
                            borderColor: isWeb
                              ? "rgba(37,99,235,0.18)"
                              : "rgba(79,70,229,0.18)",
                            color: isWeb ? "#93c5fd" : "#a5b4fc",
                          }}
                        >
                          {p.tagline}
                        </span>
                        {p.status && (
                          <span className="text-[8px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 text-slate-500 px-1.5 py-0.5 rounded-sm">
                            {p.status}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  {/* Actions & tags footer */}
                  <div className="px-6 pb-6 mt-auto">
                    {/* Stars and forks metrics if present */}
                    {(p.stars || p.forks) && (
                      <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 mb-3 select-none">
                        {p.stars !== undefined && (
                          <span className="flex items-center gap-1">
                            ⭐ {p.stars} {p.stars === 1 ? "Star" : "Stars"}
                          </span>
                        )}
                        {p.forks !== undefined && (
                          <span className="flex items-center gap-1">
                            🍴 {p.forks} {p.forks === 1 ? "Fork" : "Forks"}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-semibold text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-90 active:scale-[0.98] transition-all"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-white/5 border border-white/5 text-white hover:bg-white/10 hover:border-white/10 active:scale-[0.98] transition-all"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center glass border border-white/5 p-8 rounded-2xl reveal">
              <p className="text-slate-400 text-sm mb-4">
                No projects matched your criteria.
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
