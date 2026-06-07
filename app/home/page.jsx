"use client";
import React from "react";
import Link from "next/link";

const STATS = [
  { value: "3+", label: "Years Building" },
  { value: "20+", label: "Projects Shipped" },
  { value: "REST", label: "APIs & Fullstack" },
];

const RESUME =
  "https://drive.google.com/file/d/1619GUOv6KQ0syMXMfWNjCa256k0-fQab/view?usp=sharing";

function Home() {
  return (
    <section className="bg-cream" style={{ minHeight: "calc(100dvh - 64px)" }}>
      <div className="container-ed flex flex-col justify-center" style={{ minHeight: "calc(100dvh - 64px)", paddingTop: 48, paddingBottom: 64 }}>
        {/* Eyebrow */}
        <p className="eyebrow fu" style={{ marginBottom: 24 }}>
          Pune, India · Available for work
        </p>

        {/* Headline */}
        <h1
          className="fu text-ink font-sans"
          style={{
            fontSize: "clamp(48px, 8.6vw, 112px)",
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
            fontWeight: 600,
            margin: 0,
            maxWidth: 1100,
          }}
        >
          Harshal Tupe.
          <br />
          <span className="font-serif italic text-rust" style={{ fontWeight: 400, letterSpacing: "-0.02em" }}>
            Builder
          </span>{" "}
          of the web.
        </h1>

        {/* Subhead */}
        <p
          className="fu2 text-soft"
          style={{
            marginTop: 28,
            maxWidth: 620,
            fontSize: "clamp(16px, 1.7vw, 19px)",
            lineHeight: 1.6,
          }}
        >
          Web developer and software engineer crafting fast, accessible
          interfaces with React, Next.js, and modern tooling — from REST APIs to
          pixel-clean front ends.
        </p>

        {/* CTAs */}
        <div className="fu2 flex flex-wrap items-center gap-4" style={{ marginTop: 36 }}>
          <Link
            href="/contact"
            className="inline-flex items-center bg-rust text-[15px] font-medium px-5 py-3 transition-transform duration-200 ease-out hover:scale-[1.02]"
            style={{ color: "var(--ed-bg)" }}
          >
            Get in touch&nbsp;→
          </Link>
          <Link
            href="/terminal"
            className="inline-flex items-center text-ink text-[15px] font-medium border border-hair-2 px-5 py-3 transition-colors duration-200 ease-out hover:border-rust hover:text-rust"
          >
            Command Prompt
          </Link>
          <Link
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-soft text-[15px] font-medium transition-colors duration-150 ease-out hover:text-rust"
            style={{ borderBottom: "1px solid var(--ed-hair-2)", paddingBottom: 2 }}
          >
            Download Resume&nbsp;↗
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="fu3 flex flex-wrap"
          style={{ marginTop: 64, gap: 48, borderTop: "1px solid var(--ed-hair)", paddingTop: 28 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col" style={{ minWidth: 120 }}>
              <span
                className="font-serif text-ink"
                style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {s.value}
              </span>
              <span className="eyebrow" style={{ marginTop: 8 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
