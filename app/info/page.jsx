"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../_Components/SectionHeading";

const EASE = [0.16, 1, 0.3, 1]; // strong ease-out (Emil)

const SERVICES = [
  {
    no: "01",
    title: "Problem Solving & Research",
    description:
      "I enjoy digging into complex problems, understanding the bigger picture, and finding practical solutions that actually work.",
  },
  {
    no: "02",
    title: "Architecture & System Design",
    description:
      "Designing scalable systems and making technical decisions that help products grow with confidence.",
  },
  {
    no: "03",
    title: "Building & Shipping Products",
    description:
      "Turning ideas into reliable software, from the first concept all the way to production.",
  },
  {
    no: "04",
    title: "Leadership & Execution",
    description:
      "Leading teams, driving execution, and helping great ideas become successful products.",
  },
];

function WhatIDo() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cream">
      <div className="container-ed section-y">
        {/* Heading reveals first */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <SectionHeading number="01" label="What I do" title="How I" accent="work" />
        </motion.div>

        {/* Cards cascade in, 70ms apart */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border md:gap-px md:bg-[var(--ed-hair)] border-[var(--ed-hair)]">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.no}
              className="bg-cream py-6 md:p-8 border-b last:border-b-0 md:border-b-0 border-[var(--ed-hair)]"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="eyebrow">{s.no}</span>
                <h3 className="text-ink m-0" style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
              </div>
              <p className="text-soft m-0" style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 460 }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
