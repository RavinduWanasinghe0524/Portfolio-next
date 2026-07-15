"use client";
import { EDUCATION } from "@/lib/data";

export default function Education() {
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
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>//</span> background
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Education <span style={{
              background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Timeline</span>
          </h2>
          <div
            className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }}
          />
        </div>

        {/* Timeline body */}
        <div className="relative pl-10 border-l border-blue-500/20 max-w-3xl mx-auto">
          {EDUCATION.map((item, idx) => {
            const isBlue = item.color === "blue";
            return (
              <div key={idx} className="relative mb-12 last:mb-0 reveal">
                {/* Connector Point */}
                <div
                  className="absolute -left-[50px] top-5 w-5 h-5 rounded-full bg-slate-950 border-2 flex items-center justify-center transition-all duration-300 hover:scale-125"
                  style={{
                    borderColor: isBlue ? "#3b82f6" : "#0ea5e9",
                    boxShadow: isBlue
                      ? "0 0 10px rgba(59,130,246,0.3)"
                      : "0 0 10px rgba(14,165,233,0.3)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: isBlue ? "#3b82f6" : "#0ea5e9" }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass glow-border mouse-glow p-6 rounded-2xl transition-all duration-300 hover:translate-x-1.5"
                  onMouseMove={onMouseMove}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className="text-[10px] font-bold font-mono px-3 py-1 rounded-full border"
                      style={{
                        background: isBlue
                          ? "rgba(37,99,235,0.06)"
                          : "rgba(14,165,233,0.06)",
                        borderColor: isBlue
                          ? "rgba(37,99,235,0.25)"
                          : "rgba(14,165,233,0.25)",
                        color: isBlue ? "#93c5fd" : "#7dd3fc",
                      }}
                    >
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.school}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5">
                    {item.degree}
                  </h3>
                  {item.faculty && (
                    <p
                      className="text-xs font-semibold mb-3.5"
                      style={{ color: isBlue ? "#60a5fa" : "#0ea5e9" }}
                    >
                      {item.faculty}
                    </p>
                  )}

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-500 font-mono"
                      >
                        <span style={{ color: isBlue ? "#60a5fa" : "#0ea5e9" }}>
                          →
                        </span>
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
