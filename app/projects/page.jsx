"use client";
import React from "react";
import Link from "next/link";
import SectionHeading from "../_Components/SectionHeading";

function Projects() {
  const data = [
    {
      projectName: "Hyper Serve",
      projectDesc: "A Software-as-a-Service platform offering 18+ services.",
      projectImg: "/hyper.png",
      projectUrl: "https://github.com/harshaltupe12/hyper-serve",
      tag: "SaaS",
    },
    {
      projectName: "Mock Master",
      projectDesc: "Real-time feedback engine for mock interviews.",
      projectImg: "/mock.png",
      projectUrl: "https://github.com/harshaltupe12/mock-master",
      tag: "AI",
    },
    {
      projectName: "Imaginary-INK",
      projectDesc: "Generates images from text prompts.",
      projectImg: "/ink.png",
      projectUrl: "https://github.com/harshaltupe12/imaginary_ink",
      tag: "GenAI",
    },
    {
      projectName: "AICTE-Portal",
      projectDesc: "New curriculum portal for AICTE-affiliated universities.",
      projectImg: "/image.png",
      projectUrl: "https://github.com/Yash-Dabhade/AICTE_PORTAL_SIH22",
      tag: "Web",
    },
  ];

  return (
    <section className="bg-cream">
      <div className="container-ed" style={{ paddingTop: 80, paddingBottom: 48 }}>
        <SectionHeading
          number="04"
          label="Work"
          title="Selected"
          accent="projects"
          href="https://github.com/harshaltupe12"
          hrefLabel="All on GitHub"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--ed-hair)", border: "1px solid var(--ed-hair)" }}>
          {data.map((info) => (
            <Link
              key={info.projectName}
              href={info.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream block no-underline transition-colors duration-200 ease-out"
              style={{ padding: 24 }}
            >
              {/* Image */}
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "16 / 9", border: "1px solid var(--ed-hair)", backgroundColor: "var(--ed-bg-2)" }}
              >
                <img
                  src={info.projectImg}
                  alt={info.projectName}
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Meta */}
              <div className="flex items-baseline justify-between mt-5">
                <h3 className="text-ink m-0" style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em" }}>
                  {info.projectName}
                </h3>
                <span className="eyebrow">{info.tag}</span>
              </div>
              <p className="text-soft m-0" style={{ fontSize: 15, lineHeight: 1.6, marginTop: 8, maxWidth: 460 }}>
                {info.projectDesc}
              </p>
              <span className="eyebrow text-soft transition-colors duration-150 ease-out group-hover:text-rust" style={{ display: "inline-block", marginTop: 14 }}>
                View repo ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
