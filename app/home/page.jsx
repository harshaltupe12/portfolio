"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const STATS = [
  { value: "1+", label: "Years Building" },
  { value: "3", label: "Projects Shipped" },
  { value: "Problem Solving", label: "& Research" },
];

const RESUME =
  "https://drive.google.com/file/d/1619GUOv6KQ0syMXMfWNjCa256k0-fQab/view?usp=sharing";

function Home() {
  return (
    <section className="bg-cream" style={{ minHeight: "calc(100dvh - 64px)" }}>
      <div
        className="container-ed grid items-center lg:grid-cols-[1fr_1fr] gap-10 lg:gap-12"
        style={{ minHeight: "calc(100dvh - 64px)", paddingTop: 48, paddingBottom: 64 }}
      >
        {/* Left — copy (centered on tablet only) */}
        <div className="md:text-center lg:text-left">
          <p className="eyebrow fu" style={{ marginBottom: 24 }}>
            Pune, India · Available for work
          </p>

          {/* Name — primary identity, Geist Pixel (soft pixel, ties to hero art) */}
          <h1
            className="fu2 text-ink font-pixel hero-name"
            style={{
              lineHeight: 1.04,
              letterSpacing: "0",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Harshal Tupe<span className="text-rust">.</span>
          </h1>

          {/* Signature accent bar */}
          <div
            className="fu2 md:mx-auto lg:mx-0"
            style={{ width: 40, height: 3, backgroundColor: "var(--ed-accent)", borderRadius: 2, marginTop: 20 }}
          />

          {/* Positioning line — second tier, lighter so it doesn't fight the name */}
          <p
            className="fu3 text-ink font-sans md:mx-auto lg:mx-0"
            style={{
              fontSize: "clamp(20px, 2.3vw, 30px)",
              lineHeight: 1.28,
              letterSpacing: "-0.015em",
              fontWeight: 500,
              marginTop: 28,
              paddingBottom: 4,
              maxWidth: 600,
            }}
          >
            Building{" "}
            <span className="font-serif italic text-rust" style={{ fontWeight: 400 }}>
              products
            </span>{" "}
            that solve real-world problems.
          </p>

          {/* Supporting detail — quiet third tier */}
          <p
            className="fu3 text-soft md:mx-auto lg:mx-0"
            style={{
              marginTop: 18,
              maxWidth: 500,
              fontSize: "clamp(15px, 1.5vw, 17px)",
              lineHeight: 1.65,
            }}
          >
            I build software that people rely on, combining modern technologies,
            intelligent systems, and practical problem-solving to create products
            that make a difference.
          </p>

          <div className="fu4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center md:justify-center lg:justify-start gap-3 sm:gap-4" style={{ marginTop: 36 }}>
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
              className="inline-flex self-start sm:self-center items-center text-soft text-[15px] font-medium transition-colors duration-150 ease-out hover:text-rust sm:mt-0 mt-1"
              style={{ borderBottom: "1px solid var(--ed-hair-2)", paddingBottom: 2 }}
            >
              Download Resume&nbsp;↗
            </Link>
          </div>

          <div
            className="fu5 flex flex-wrap md:justify-center lg:justify-start"
            style={{ marginTop: 56, gap: 40, borderTop: "1px solid var(--ed-hair)", paddingTop: 28 }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col" style={{ minWidth: 110 }}>
                <span
                  className="font-serif text-ink"
                  style={{ fontSize: "clamp(30px, 4vw, 34px)", lineHeight: 1, letterSpacing: "-0.02em" }}
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
        <div className="fu3 w-full flex items-start justify-center self-start lg:mt-2">
          <div className="ed-float w-full" style={{ maxWidth: 640 }}>
            <Image
              src="/Hero%20section1.png"
              alt="Harshal Tupe illustration"
              width={2048}
              height={2048}
              priority
              sizes="(max-width: 1024px) 88vw, 640px"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
