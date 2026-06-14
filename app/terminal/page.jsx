"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// cream/ink tokens for the dark "paper terminal"
const CREAM = "var(--ed-bg)";
const CREAM_SOFT = "rgba(245,241,234,0.62)";
const RUST = "#d8694a"; // lighter terracotta for contrast on ink bg
const RESUME_URL =
  "https://drive.google.com/file/d/1619GUOv6KQ0syMXMfWNjCa256k0-fQab/view?usp=sharing";

const COMMANDS = {
  help: "Available commands:  about · skills · projects · experience · contact · socials · resume · clear",
  about:
    "Harshal Tupe. Computer Engineer and web developer. I build fast, accessible interfaces with React, Next.js and Node.js, from REST APIs to clean front ends.",
  skills:
    "HTML · CSS · SASS · JavaScript · TypeScript · React · Next.js · Node.js · Express · MongoDB · PostgreSQL · Neon · Firebase · Git · Vercel · UI/UX",
  projects:
    "Hyper Serve (SaaS, 18+ services) · Mock Master (AI mock interviews) · Imaginary-INK (prompt → image) · AICTE Portal",
  experience:
    "3+ years building web apps · 20+ projects shipped · focus on product UX + fullstack delivery.",
  contact: "Email: harshaltupe12@gmail.com    Phone: +91 93709 46170",
  socials:
    "GitHub: github.com/harshaltupe12    LinkedIn: linkedin.com/in/harshal-tupe    Instagram: @harshal.tupe_",
  resume: "Opening resume in a new tab…",
};

const CHIPS = ["help", "about", "skills", "projects", "contact", "clear"];

const WELCOME = [
  "harshal.zsh - interactive portfolio shell",
  "Type a command, or tap a chip below. Try `help` to begin.",
];

function Cmd() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]); // {command, response}
  const [cmdLog, setCmdLog] = useState([]); // raw commands for ↑/↓
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // auto-scroll to newest line
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const run = (raw) => {
    const command = raw.trim();
    if (!command) return;
    if (command.toLowerCase() === "clear") {
      setHistory([]);
      setCmdLog((l) => [...l, command]);
      return;
    }
    const response =
      COMMANDS[command.toLowerCase()] ||
      `command not found: ${command}. type 'help' for the list`;
    setHistory((h) => [...h, { command, response }]);
    setCmdLog((l) => [...l, command]);
    if (command.toLowerCase() === "resume") {
      window.open(RESUME_URL, "_blank", "noopener");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
      setCursor(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdLog.length) return;
      const next = cursor < 0 ? cmdLog.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setInput(cmdLog[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cursor < 0) return;
      const next = cursor + 1;
      if (next >= cmdLog.length) {
        setCursor(-1);
        setInput("");
      } else {
        setCursor(next);
        setInput(cmdLog[next]);
      }
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <section className="bg-cream">
      <div className="container-ed" style={{ paddingTop: 56, paddingBottom: 64 }}>
        {/* Back + eyebrow */}
        <Link
          href="/"
          className="press inline-flex items-center gap-2 eyebrow text-soft hover:text-rust"
          style={{ marginBottom: 20 }}
        >
          <ArrowLeft size={14} strokeWidth={1.75} /> Back home
        </Link>

        {/* Terminal window */}
        <div
          className="mx-auto"
          style={{
            maxWidth: 860,
            border: "1px solid var(--ed-hair-2)",
            boxShadow: "10px 12px 0 var(--ed-hair-2)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-3"
            style={{
              height: 44,
              padding: "0 16px",
              backgroundColor: "var(--ed-fg)",
              borderBottom: "1px solid rgba(245,241,234,0.14)",
            }}
          >
            <div className="flex items-center gap-2">
              <Link href="/" aria-label="Close terminal, back home">
                <span style={dot("#c9533a")} className="press" />
              </Link>
              <span style={dot("rgba(245,241,234,0.34)")} />
              <span style={dot("rgba(245,241,234,0.34)")} />
            </div>
            <span
              className="font-mono"
              style={{ color: CREAM_SOFT, fontSize: 12, letterSpacing: "0.04em", marginLeft: 4 }}
            >
              harshal - zsh
            </span>
          </div>

          {/* Body */}
          <div
            ref={bodyRef}
            onClick={focusInput}
            className="term-body font-mono"
            style={{
              backgroundColor: "var(--ed-fg)",
              color: CREAM,
              padding: 20,
              height: "min(60vh, 520px)",
              overflowY: "auto",
              fontSize: 14,
              lineHeight: 1.7,
              cursor: "text",
            }}
          >
            {/* Welcome */}
            {WELCOME.map((line, i) => (
              <p key={i} style={{ color: i === 0 ? CREAM : CREAM_SOFT, margin: 0 }}>
                {line}
              </p>
            ))}

            {/* History */}
            {history.map((item, i) => (
              <div key={i} style={{ marginTop: 14 }}>
                <p style={{ margin: 0 }}>
                  <span style={{ color: RUST }}>❯</span>{" "}
                  <span style={{ color: CREAM }}>{item.command}</span>
                </p>
                <p style={{ margin: "2px 0 0", color: CREAM_SOFT, whiteSpace: "pre-wrap" }}>
                  {item.response}
                </p>
              </div>
            ))}

            {/* Live prompt */}
            <div className="flex items-center" style={{ marginTop: 14, gap: 8 }}>
              <span style={{ color: RUST }}>❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
                className="term-input font-mono"
                placeholder="type a command…"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: CREAM,
                  fontSize: 14,
                  minHeight: 24,
                }}
              />
            </div>
          </div>
        </div>

        {/* Command chips — discoverable, tappable */}
        <div className="flex flex-wrap gap-2" style={{ marginTop: 20, maxWidth: 860, marginInline: "auto" }}>
          {CHIPS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                run(c);
                focusInput();
              }}
              className="press font-mono text-soft hover:text-rust hover:border-rust"
              style={{
                fontSize: 12,
                letterSpacing: "0.04em",
                padding: "9px 14px",
                minHeight: 40,
                border: "1px solid var(--ed-hair-2)",
                backgroundColor: "var(--ed-bg-2)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const dot = (bg) => ({
  display: "block",
  width: 11,
  height: 11,
  borderRadius: 999,
  backgroundColor: bg,
  cursor: bg === "#c9533a" ? "pointer" : "default",
});

export default Cmd;
