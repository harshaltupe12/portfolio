"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../_Components/SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const EXPERIENCE = [
  {
    company: "Miraki Labs",
    meta: "Full-time · Navi Mumbai, India",
    roles: [
      {
        title: "Senior Software Engineer",
        range: "Jun 2026 - Present",
        mode: "Hybrid",
        desc:
          "Leading a team of engineers while driving the architecture, development, and deployment of scalable software. Mentoring developers and shipping high-impact products in a fast-paced startup.",
        tags: ["Team Leadership", "Software Design", "Infrastructure"],
      },
      {
        title: "Software Engineer",
        range: "Nov 2025 - Jun 2026",
        mode: "On-site",
        desc:
          "Owned end-to-end software development, from research and architecture through to scalable production deployment.",
        tags: [
          "Software Engineering",
          "GenAI & ML",
          "System Architecture",
          "R&D",
          "Cloud Infrastructure",
          "CI/CD",
        ],
      },
    ],
  },
  {
    company: "Komodo Development",
    meta: "Internship · Navi Mumbai, India",
    roles: [
      {
        title: "Full Stack Intern",
        range: "Jul 2025 - Nov 2025",
        mode: "On-site",
        desc:
          "Contributed to the design and development of the company's flagship product, and independently built an internal HRMS platform using React and Laravel.",
        tags: ["React", "Laravel", "Full Stack", "HRMS"],
      },
    ],
  },
];

function Role({ role }) {
  return (
    <div>
      <p className="eyebrow" style={{ margin: 0 }}>
        {role.range} · {role.mode}
      </p>
      <h4 className="text-ink" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", margin: "10px 0 0" }}>
        {role.title}
      </h4>
      <p className="text-soft" style={{ fontSize: 16, lineHeight: 1.7, marginTop: 10, maxWidth: 620 }}>
        {role.desc}
      </p>
      {role.tags?.length ? (
        <div className="flex flex-wrap gap-2" style={{ marginTop: 16 }}>
          {role.tags.map((t) => (
            <span
              key={t}
              className="text-soft"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "6px 10px",
                border: "1px solid var(--ed-hair)",
                backgroundColor: "var(--ed-bg-2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Experience() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cream" id="experience">
      <div className="container-ed section-y">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <SectionHeading number="03" label="Experience" title="Where I've" accent="worked" />
        </motion.div>

        <div style={{ borderBottom: "1px solid var(--ed-hair)" }}>
          {EXPERIENCE.map((e, i) => {
            const multi = e.roles.length > 1;
            return (
              <motion.div
                key={e.company}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-12"
                style={{ borderTop: "1px solid var(--ed-hair)", padding: "44px 0" }}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              >
                {/* Company */}
                <div>
                  <h3
                    className="text-ink m-0"
                    style={{ fontSize: "clamp(21px, 2.2vw, 26px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    {e.company}
                  </h3>
                  <p className="eyebrow" style={{ marginTop: 10 }}>
                    {e.meta}
                  </p>
                </div>

                {/* Roles — continuous connector line when there's a progression */}
                <div
                  className="flex flex-col"
                  style={{
                    gap: 32,
                    ...(multi ? { paddingLeft: 22, borderLeft: "1px solid var(--ed-hair)" } : {}),
                  }}
                >
                  {e.roles.map((r) => (
                    <Role key={r.title} role={r} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
