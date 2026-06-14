"use client";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../_Components/SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const FOCUS = [
  "Software Engineering",
  "AI-driven Applications",
  "Cloud Infrastructure",
  "System Design",
];

function About() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.55, delay, ease: EASE },
  });

  return (
    <section className="bg-cream">
      <div className="container-ed section-y">
        <motion.div {...rise(0)}>
          <SectionHeading number="02" label="About" title="A bit about" accent="me" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-start">
          {/* Left — narrative */}
          <div>
            {/* Lead statement */}
            <motion.p
              {...rise(0.06)}
              className="text-ink"
              style={{
                fontSize: "clamp(20px, 2.4vw, 28px)",
                lineHeight: 1.35,
                letterSpacing: "-0.015em",
                fontWeight: 500,
                margin: 0,
                maxWidth: 680,
              }}
            >
              I'm a Senior Software Engineer who runs on caffeine and curiosity,
              building scalable products,{" "}
              <span className="font-serif italic text-rust" style={{ fontWeight: 400 }}>
                intelligent systems
              </span>
              , and tech that makes a real-world dent, not just one that works on my machine.
            </motion.p>

            {/* Supporting paragraphs */}
            <motion.p
              {...rise(0.12)}
              className="text-soft"
              style={{ fontSize: "clamp(16px, 1.7vw, 18px)", lineHeight: 1.7, maxWidth: 660, marginTop: 24 }}
            >
              My work covers the whole product lifecycle: untangling messy problems
              on a whiteboard, designing architectures that won't page me at 3am, and
              shipping production-ready code that survives first contact with actual
              users.
            </motion.p>
            <motion.p
              {...rise(0.16)}
              className="text-soft"
              style={{ fontSize: "clamp(16px, 1.7vw, 18px)", lineHeight: 1.7, maxWidth: 660, marginTop: 18 }}
            >
              I love turning "wait, is this even possible?" ideas into things that
              actually ship, debugging the gnarly edge cases everyone else quietly
              ignores, and building systems that scale on solid engineering instead
              of duct tape and prayers.
            </motion.p>

            {/* Focus areas */}
            <motion.div {...rise(0.22)} style={{ marginTop: 44, maxWidth: 660 }}>
              <p className="eyebrow" style={{ marginBottom: 4 }}>
                Focus areas
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {FOCUS.map((f, i) => (
                  <motion.div
                    key={f}
                    className="flex items-center gap-3"
                    style={{ padding: "16px 0", borderTop: "1px solid var(--ed-hair)" }}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.26 + i * 0.07, ease: EASE }}
                  >
                    <span className="eyebrow text-faint" style={{ fontSize: 11 }}>
                      0{i + 1}
                    </span>
                    <span className="text-ink" style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>
                      {f}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div {...rise(0.1)} className="md:justify-self-end w-full" style={{ maxWidth: 340 }}>
            {/* Static frame + offset shadow; image eases from a slight zoom */}
            <div
              className="relative overflow-hidden w-full"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid var(--ed-hair)",
                boxShadow: "8px 10px 0 var(--ed-hair-2)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <Image
                  src="/main.jpg"
                  fill
                  sizes="(max-width: 768px) 90vw, 340px"
                  alt="Harshal Tupe"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="flex items-center justify-between" style={{ marginTop: 18 }}>
              <span className="text-ink" style={{ fontSize: 15, fontWeight: 500 }}>
                Harshal Tupe
              </span>
              <span className="eyebrow">Pune, India</span>
            </div>
            <p className="text-soft" style={{ fontSize: 14, lineHeight: 1.5, marginTop: 4 }}>
              Senior Software Engineer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
