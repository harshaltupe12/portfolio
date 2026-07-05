"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../_Components/SectionHeading";

const EASE = [0.16, 1, 0.3, 1];

const GROUPS = [
  {
    no: "01",
    label: "Languages",
    desc: "The core languages I build and think in.",
    items: ["JavaScript", "TypeScript", "Python", "Go", "HTML", "CSS", "C#"],
  },
  {
    no: "02",
    label: "Frontend",
    desc: "Crafting fast, accessible, pixel-clean interfaces.",
    items: ["React", "Next.js", "Tailwind", "Wails"],
  },
  {
    no: "03",
    label: "Backend & Data",
    desc: "APIs, services, and the data that powers them.",
    items: [
      "Node.js",
      "FastAPI",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "Neon DB",
      "Orthanc",
    ],
  },
  {
    no: "04",
    label: "Cloud & Tools",
    desc: "Shipping, scaling, and everything in between.",
    items: ["OVHcloud", "Vercel", "AWS", "Docker", "Jenkins", "Git", "GitHub", "Postman", "OHIF Viewer", "MinIO"],
  },
  {
    no: "05",
    label: "Protocols & Standards",
    desc: "How my systems talk, from the web to the operating room.",
    wide: true,
    items: [
      "REST",
      "GraphQL",
      "WebSocket",
      "HTTP / HTTPS",
      "MQTT",
      "TCP / IP",
      "DICOM",
      "DICOMweb",
      "OPC UA",
      "OPC DA",
      "Modbus RTU",
      "Modbus TCP",
    ],
  },
];

function Skills() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cream" id="skills">
      <div className="container-ed section-y">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <SectionHeading number="04" label="Skills" title="Tools I" accent="work with" />
        </motion.div>

        {/* Hairline grid — same structure as "How I work" for cohesion */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border md:gap-px md:bg-[var(--ed-hair)] border-[var(--ed-hair)]">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.no}
              className={`bg-cream py-8 md:p-10 border-b last:border-b-0 md:border-b-0 border-[var(--ed-hair)]${
                g.wide ? " md:col-span-2" : ""
              }`}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            >
              {/* Header */}
              <div className="flex items-baseline gap-3">
                <span className="eyebrow">{g.no}</span>
                <h3 className="text-ink m-0" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>
                  {g.label}
                </h3>
              </div>
              <p className="text-soft" style={{ fontSize: 14.5, lineHeight: 1.55, marginTop: 8, maxWidth: 340 }}>
                {g.desc}
              </p>

              {/* Technologies — tidy list; wider card flows into more columns */}
              <div
                className={`grid gap-x-8 gap-y-3 ${g.wide ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "grid-cols-2"}`}
                style={{ marginTop: 26, paddingTop: 24, borderTop: "1px solid var(--ed-hair)" }}
              >
                {g.items.map((name) => (
                  <span
                    key={name}
                    className="text-ink transition-colors duration-150 ease-out hover:text-rust"
                    style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
