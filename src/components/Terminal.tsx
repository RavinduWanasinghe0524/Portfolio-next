"use client";
import { useState, useRef, useEffect } from "react";
import { PERSONAL } from "@/lib/data";

type LogEntry = {
  type: "comment" | "prompt" | "success" | "info" | "error" | "warn" | "raw";
  text: string;
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const print = (text: string, type: LogEntry["type"] = "raw") => {
    setLogs((prev) => [...prev, { text, type }]);
  };

  const changeTheme = (themeName: string) => {
    const root = document.documentElement;
    const themes: Record<string, { v: string; r: string; a: string }> = {
      blue: { v: "#3b82f6", r: "#2563eb", a: "#1e3a8a" },
      cyberpunk: { v: "#7c3aed", r: "#e11d6a", a: "#f59e0b" },
      aurora: { v: "#10b981", r: "#06b6d4", a: "#3b82f6" },
      solar: { v: "#f59e0b", r: "#ef4444", a: "#eab308" },
      nebula: { v: "#d946ef", r: "#8b5cf6", a: "#ec4899" },
    };
    const t = themes[themeName];
    if (t) {
      root.style.setProperty("--blue-500", t.v);
      root.style.setProperty("--blue-600", t.r);
      root.style.setProperty("--blue-700", t.r);
      root.style.setProperty("--blue-900", t.a);
      return true;
    }
    return false;
  };

  const startMatrixRain = () => {
    const chars = "01STUDENT0101WEB0101ARCHITECT0101";
    let ticks = 0;
    const interval = setInterval(() => {
      let row = "";
      for (let i = 0; i < 50; i++) {
        row += chars[Math.floor(Math.random() * chars.length)];
      }
      print(row, "success");
      ticks++;
      if (ticks > 25) {
        clearInterval(interval);
        print("[SYSTEM OVERRIDE COMPLETE. SECURE CONNECTION RETAINED]", "success");
      }
    }, 80);
  };

  const handleCommand = (cmd: string) => {
    // Add command echo
    print(`visitor@ravindu-node:~$ ${cmd}`, "prompt");

    const tokens = cmd.toLowerCase().trim().split(/\s+/);
    const primary = tokens[0];
    const arg = tokens[1];

    if (!primary) return;

    switch (primary) {
      case "help":
        print("Available CLI commands:", "info");
        print("about    – Show brief bio info", "raw");
        print("skills   – List primary code expertise", "raw");
        print("projects – List active projects", "raw");
        print("contact  – Communication nodes", "raw");
        print("neofetch – System specifications", "raw");
        print("theme    – Change theme (blue, cyberpunk, aurora, solar, nebula)", "raw");
        print("matrix   – Launch matrix rain override", "raw");
        print("clear    – Flush console logs", "raw");
        print("sudo     – Root access elevation", "raw");
        break;

      case "about":
        print(`${PERSONAL.name} – BSc (Hons) Information Systems student at Sabaragamuwa University of Sri Lanka.`, "info");
        print("Focuses on software architecture, clean code, UI engineering, and digital forensics.", "raw");
        break;

      case "skills":
        print("TypeScript/JavaScript:  ■■■■■■■■■□ [90%]", "info");
        print("Python Core:            ■■■■■■■■□□ [80%]", "info");
        print("Next.js / React:        ■■■■■■■■■□ [85%]", "info");
        print("Java (OOP & Structures): ■■■■■■■□□□ [75%]", "info");
        print("Database Schema Design:  ■■■■■■■□□□ [75%]", "info");
        break;

      case "projects":
        print("Active repos on GitHub:", "info");
        print("📁 V-Mas Events - Interactive Virtual Events Dashboard (Vercel)", "success");
        print("📁 Galagama Gems - Sri Lankan Gem Trade E-Commerce (React/TS)", "success");
        print("📁 Elite Wheels Next - Automobile Catalog App (Next.js/TS)", "success");
        print("📁 TrueTrace - Multi-Modal Forensic Forgery Detection (ELA/TS)", "success");
        break;

      case "contact":
        print(`📧 Email: ${PERSONAL.email}`, "info");
        print(`🐙 GitHub: ${PERSONAL.github}`, "info");
        print(`💼 LinkedIn: ${PERSONAL.linkedin}`, "info");
        break;

      case "neofetch":
        print(`
   ██████╗   ██╗   ██╗
   ██╔══██╗  ██║   ██║
   ██████╔╝  ██║   ██║
   ██╔══██╗  ╚██╗ ██╔╝
   ██║  ██║   ╚████╔╝
   ╚═╝  ╚═╝    ╚═══╝  `, "raw");
        print(`OS: Ravindu-OS v3.5-NextJS`, "info");
        print(`Host: Sabaragamuwa University Student Node`, "info");
        print(`Uptime: ${new Date().toLocaleDateString()}`, "info");
        print(`Shell: browser-agentic-cli`, "info");
        print(`UI Theme: Modern Blue Glow`, "info");
        print(`CPU: Learning Mind`, "info");
        print(`RAM: Dynamic Expansion`, "info");
        break;

      case "theme":
        if (!arg) {
          print("Usage: theme <name> (Options: blue, cyberpunk, aurora, solar, nebula)", "warn");
        } else {
          const ok = changeTheme(arg);
          if (ok) {
            print(`[THEME CHANGED TO: ${arg.toUpperCase()}]`, "success");
          } else {
            print(`Unknown theme: '${arg}'. Try: blue, cyberpunk, aurora, solar, nebula`, "error");
          }
        }
        break;

      case "matrix":
        print("// INIT DECRYPT CHANNELS...", "success");
        startMatrixRain();
        break;

      case "clear":
        setLogs([]);
        break;

      case "sudo":
        print("Permission denied: Visitor is not in the sudoers file. This incident has been logged.", "error");
        break;

      default:
        print(`Command not found: '${primary}'. Type 'help' for instructions.`, "error");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = inputVal.trim();
      if (val) {
        setHistory((prev) => [...prev, val]);
        setHistoryIdx(-1);
        handleCommand(val);
      }
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > -1 && historyIdx < history.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      } else {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="terminal" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}
          >
            <span style={{ color: "#7dd3fc", opacity: 0.7 }}>{"//"}</span> interactive
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            AI <span style={{
              background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Terminal</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Type commands to interface with my profile directly. Try <code className="text-blue-300 font-mono">help</code>, <code className="text-sky-300 font-mono">neofetch</code> or <code className="text-indigo-300 font-mono">matrix</code>.
          </p>
          <div
            className="h-[3px] w-14 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563eb,#0ea5e9)" }}
          />
        </div>

        {/* Terminal Frame */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/10 shadow-2xl flex flex-col glass reveal">
          {/* Top Titlebar */}
          <div className="bg-slate-950/80 px-5 py-3 border-b border-white/5 flex items-center justify-between text-xs text-slate-500 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              <span className="ml-2 font-mono text-[10px] text-slate-400">
                visitor@ravindu-node:~
              </span>
            </div>
            <span className="font-mono text-[9px] text-blue-400/80 px-2 py-0.5 rounded border border-blue-500/10 bg-blue-500/5 uppercase font-bold tracking-wider">
              Agentic-CLI v3.5
            </span>
          </div>

          {/* Body */}
          <div
            ref={terminalBodyRef}
            onClick={focusInput}
            className="h-80 overflow-y-auto p-6 font-mono text-[11.5px] leading-relaxed bg-slate-950/95 space-y-2.5 cursor-text text-slate-300"
          >
            <div className="text-slate-600">{"// Welcome to Ravindu's Agentic CLI Console. Type 'help' for commands."}</div>
            <div>
              <span className="text-blue-400">visitor@ravindu-node:~$ </span>
              <span className="text-white">system_init --verbose</span>
            </div>
            <div className="text-emerald-400">● core_modules_active: TRUE</div>
            <div className="text-emerald-400">● learning_path: BSc_Information_Systems_SUSL</div>
            <div className="text-emerald-400">● primary_focus: Web_Architecture &amp; Digital_Forensics</div>
            <div className="text-slate-400">Node ready. Type command below...</div>

            {logs.map((log, idx) => {
              let classColor = "text-slate-300";
              if (log.type === "comment") classColor = "text-slate-600";
              else if (log.type === "prompt") classColor = "text-blue-400";
              else if (log.type === "success") classColor = "text-emerald-400";
              else if (log.type === "info") classColor = "text-sky-300";
              else if (log.type === "warn") classColor = "text-amber-400";
              else if (log.type === "error") classColor = "text-rose-400";

              return (
                <div key={idx} className={`${classColor} whitespace-pre-wrap`}>
                  {log.text}
                </div>
              );
            })}
          </div>

          {/* Input Row */}
          <div className="bg-slate-950/95 px-6 py-4 flex items-center gap-2 border-t border-white/5">
            <span className="text-blue-400 font-mono text-[11.5px] flex-shrink-0 select-none">
              visitor@ravindu-node:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-[11.5px] text-white placeholder-slate-600 caret-blue-500"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
