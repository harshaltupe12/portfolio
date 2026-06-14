"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const FACTS = [
  {
    no: "01",
    text: "I spend more time ",
    accent: "designing the solution",
    tail: " than writing the code.",
  },
  {
    no: "02",
    text: "I turn whiteboard diagrams into production systems, and production issues back into ",
    accent: "whiteboard diagrams",
    tail: ".",
  },
  {
    no: "03",
    text: "I've learned that 'just a small feature' is usually the beginning of a ",
    accent: "new system",
    tail: ".",
  },
  {
    no: "04",
    text: "My favorite moment is when a product goes from idea to ",
    accent: "something people actually use",
    tail: ".",
  },
  {
    no: "05",
    text: "Leading a team taught me that ",
    accent: "communication",
    tail: " scales systems faster than code.",
  },
];

function FunFacts() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.55, delay, ease: EASE },
  });

  return (
    <section className="bg-cream">
      <div className="container-ed section-y">
        {/* Un-numbered, playful heading */}
        <motion.div {...rise(0)} className="mb-10 md:mb-14">
          <p className="eyebrow mb-3">Off the clock</p>
          <h2
            className="text-ink font-sans m-0"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 600 }}
          >
            Confessions of a{" "}
            <span className="font-serif italic text-rust" style={{ fontWeight: 400 }}>
              developer
            </span>
            .
          </h2>
        </motion.div>

        {/* Witty rows */}
        <div style={{ borderBottom: "1px solid var(--ed-hair)" }}>
          {FACTS.map((f, i) => (
            <motion.div
              key={f.no}
              className="grid grid-cols-[44px_1fr] md:grid-cols-[80px_1fr] gap-4 items-baseline"
              style={{ borderTop: "1px solid var(--ed-hair)", padding: "26px 0" }}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <span className="eyebrow text-faint">{f.no}</span>
              <p
                className="text-ink m-0"
                style={{ fontSize: "clamp(18px, 2.2vw, 26px)", lineHeight: 1.35, letterSpacing: "-0.015em", fontWeight: 500, maxWidth: 760 }}
              >
                {f.text}
                <span className="text-rust">{f.accent}</span>
                {f.tail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
