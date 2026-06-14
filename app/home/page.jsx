"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div
        className="container-ed grid items-center md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-16"
        style={{ minHeight: "calc(100dvh - 64px)", paddingTop: 48, paddingBottom: 64 }}
      >
        {/* Left — copy */}
        <div>
          <p className="eyebrow fu" style={{ marginBottom: 24 }}>
            Pune, India · Available for work
          </p>

          <h1
            className="fu text-ink font-sans"
            style={{
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Harshal Tupe.
            <br />
            <span className="font-serif italic text-rust" style={{ fontWeight: 400, letterSpacing: "-0.02em" }}>
              Builder
            </span>{" "}
            of the web.
          </h1>

          <p
            className="fu2 text-soft"
            style={{
              marginTop: 28,
              maxWidth: 560,
              fontSize: "clamp(16px, 1.7vw, 19px)",
              lineHeight: 1.6,
            }}
          >
            Web developer and software engineer crafting fast, accessible
            interfaces with React, Next.js, and modern tooling, from REST APIs to
            pixel-clean front ends.
          </p>

          <div className="fu2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4" style={{ marginTop: 36 }}>
            <Link
              href="/contact"
              className="press inline-flex w-full sm:w-auto items-center justify-center bg-rust text-[15px] font-medium px-5 py-3 hover:scale-[1.02]"
              style={{ color: "var(--ed-bg)" }}
            >
              Get in touch&nbsp;→
            </Link>
            <Link
              href="/terminal"
              className="press inline-flex w-full sm:w-auto items-center justify-center text-ink text-[15px] font-medium border border-hair-2 px-5 py-3 hover:border-rust hover:text-rust"
            >
              Command Prompt
            </Link>
            <Link
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start items-center text-soft text-[15px] font-medium transition-colors duration-150 ease-out hover:text-rust sm:mt-0 mt-1"
              style={{ borderBottom: "1px solid var(--ed-hair-2)", paddingBottom: 2 }}
            >
              Download Resume&nbsp;↗
            </Link>
          </div>

          <div
            className="fu3 flex flex-wrap"
            style={{ marginTop: 56, gap: 40, borderTop: "1px solid var(--ed-hair)", paddingTop: 28 }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col" style={{ minWidth: 110 }}>
                <span
                  className="font-serif text-ink"
                  style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1, letterSpacing: "-0.02em" }}
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

        {/* Right — illustration */}
        <div className="fu2 w-full flex items-start justify-center self-start md:mt-2">
          <div className="ed-float w-full" style={{ maxWidth: 560 }}>
            <Image
              src="/Hero%20section1.png"
              alt="Harshal Tupe illustration"
              width={2048}
              height={2048}
              priority
              sizes="(max-width: 768px) 82vw, 560px"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
