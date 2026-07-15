"use client";
import { PERSONAL } from "@/lib/data";

export default function Contact() {
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const links = [
    {
      label: "GitHub",
      val: "RavinduWanasinghe0524",
      url: PERSONAL.github,
      icon: "🐙",
      bg: "rgba(255, 255, 255, 0.04)",
    },
    {
      label: "LinkedIn",
      val: "ravindu-wanasinghe",
      url: PERSONAL.linkedin,
      icon: "💼",
      bg: "rgba(10, 102, 194, 0.12)",
    },
    {
      label: "Instagram",
      val: "@ravindu_wanasinghe_",
      url: PERSONAL.instagram,
      icon: "📸",
      bg: "rgba(225, 29, 106, 0.08)",
    },
    {
      label: "Facebook",
      val: "ravindu.wanasinghe.50",
      url: PERSONAL.facebook,
      icon: "👤",
      bg: "rgba(24, 119, 242, 0.12)",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}
          >
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>{"//"}</span> connect
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Get in <span style={{
              background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Touch</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Open to internships, open-source collaborations, and learning opportunities.
          </p>
          <div
            className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }}
          />
        </div>

        {/* Contact panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-3xl mx-auto">
          {/* Left panel message */}
          <div className="reveal">
            <h3 className="text-xl font-bold text-white mb-3">
              Let&apos;s build something together
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether you want to discuss a software project, ask about academic research, or just say hello — my inbox is always open.
            </p>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
                boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.4)";
              }}
            >
              ✉ Send Me an Email
            </a>
          </div>

          {/* Right links panel */}
          <div className="space-y-3.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-border mouse-glow flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 hover:translate-x-1.5"
                onMouseMove={onMouseMove}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg select-none"
                  style={{ background: link.bg }}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">
                    {link.label}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {link.val}
                  </div>
                </div>
                <span className="ml-auto text-slate-500 text-sm">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
