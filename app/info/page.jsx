"use client";
import React from "react";
import SectionHeading from "../_Components/SectionHeading";

const SERVICES = [
  {
    no: "01",
    title: "Front-end Development",
    description:
      "Engaging, responsive interfaces with React, Next.js, JavaScript and Tailwind CSS — seamless experiences and clean, accessible markup.",
  },
  {
    no: "02",
    title: "Back-end Development",
    description:
      "Robust, scalable systems with Node.js, Express, MongoDB and PostgreSQL — efficient REST APIs and reliable data layers.",
  },
  {
    no: "03",
    title: "Responsive Design",
    description:
      "Layouts that adapt fluidly across every device and screen size using modern CSS, fluid type and considered breakpoints.",
  },
  {
    no: "04",
    title: "UI / UX Design",
    description:
      "User-centered, visually considered interfaces — intuitive flows that raise satisfaction across digital products.",
  },
];

function WhatIDo() {
  return (
    <section className="bg-cream">
      <div className="container-ed" style={{ paddingTop: 80, paddingBottom: 48 }}>
        <SectionHeading number="01" label="What I do" title="Things I" accent="build" />

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 1, backgroundColor: "var(--ed-hair)", border: "1px solid var(--ed-hair)" }}>
          {SERVICES.map((s) => (
            <div
              key={s.no}
              className="bg-cream transition-colors duration-200 ease-out"
              style={{ padding: 32 }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
