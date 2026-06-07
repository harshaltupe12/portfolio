"use client";
import React from "react";
import { skillsData } from "@/utils/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionHeading from "../_Components/SectionHeading";

function Skills() {
  return (
    <section className="bg-cream" id="skills">
      <div className="container-ed section-y" style={{ paddingBottom: 32 }}>
        <SectionHeading number="03" label="Skills" title="Tools I" accent="work with" />
      </div>

      {/* Full-bleed marquee, hairlines top & bottom */}
      <div style={{ borderTop: "1px solid var(--ed-hair)", borderBottom: "1px solid var(--ed-hair)", paddingTop: 28, paddingBottom: 28 }}>
        <Marquee gradient={false} speed={50} pauseOnHover delay={0} direction="right">
          {skillsData.map((skill, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center transition-colors duration-200 ease-out"
              style={{
                width: 130,
                margin: "0 8px",
                padding: "20px 12px",
                border: "1px solid var(--ed-hair)",
                backgroundColor: "var(--ed-bg-2)",
              }}
            >
              <div style={{ height: 36 }}>
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={36}
                  height={36}
                  className="h-full w-auto"
                />
              </div>
              <p className="text-soft" style={{ marginTop: 12, fontSize: 13, fontFamily: "var(--mono)", letterSpacing: "0.02em" }}>
                {skill}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;
