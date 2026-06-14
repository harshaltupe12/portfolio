"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../_Components/SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const EDU = [
  {
    range: "2022 - 2025",
    degree: "B.E. in Computer Science",
    school: "MGM College of Engineering & Technology",
    meta: "University of Mumbai · Navi Mumbai",
    tags: ["GDSC MGMCET · Core Team", "Hackathon 2023 · React Rangers"],
  },
  {
    range: "2018 - 2022",
    degree: "Diploma in Computer Technology",
    school: "Government Polytechnic, Pen",
    meta: "MSBTE · Raigad",
    tags: [],
  },
];

function Education() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cream">
      <div className="container-ed section-y">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <SectionHeading number="05" label="Education" title="Where I" accent="studied" />
        </motion.div>

        <div style={{ borderBottom: "1px solid var(--ed-hair)" }}>
          {EDU.map((e, i) => (
            <motion.div
              key={e.range}
              className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-3 md:gap-12 items-baseline"
              style={{ borderTop: "1px solid var(--ed-hair)", padding: "40px 0" }}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              {/* Year range */}
              <span
                className="text-soft"
                style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.02em", fontVariantNumeric: "tabular-nums" }}
              >
                {e.range}
              </span>

              {/* Details */}
              <div>
                <h3
                  className="text-ink m-0"
                  style={{ fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}
                >
                  {e.degree}
                </h3>
                <p className="text-soft m-0" style={{ fontSize: 17, marginTop: 8 }}>
                  {e.school}
                </p>
                <p className="eyebrow" style={{ marginTop: 12 }}>
                  {e.meta}
                </p>

                {e.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2" style={{ marginTop: 20 }}>
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="text-soft transition-colors duration-150 ease-out hover:text-rust hover:border-rust"
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 12,
                          letterSpacing: "0.02em",
                          padding: "7px 12px",
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
