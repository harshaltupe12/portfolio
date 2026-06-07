"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../_Components/SectionHeading";

function About() {
  return (
    <section className="bg-cream">
      <div className="container-ed" style={{ paddingTop: 80, paddingBottom: 48 }}>
        <SectionHeading number="02" label="About" title="A bit about" accent="me" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start">
          <div>
            <p
              className="text-soft m-0"
              style={{ fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: 1.6, maxWidth: 680 }}
            >
              An ambitious Computer Engineer, deeply passionate about software
              development and building web applications that push technological
              boundaries. With a strong foundation in Data Structures, Algorithms,
              Database Management and Web Development, I design and implement
              solutions to complex problems.
            </p>
            <p
              className="text-soft"
              style={{ fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: 1.6, maxWidth: 680, marginTop: 20 }}
            >
              Proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
              and UI/UX design — I bring analytical thinking, adaptability to new
              tech, and a dedicated work ethic to every project.
            </p>
          </div>

          <div className="md:justify-self-end">
            <Image
              src="/main.jpg"
              width={320}
              height={400}
              alt="Harshal Tupe"
              className="object-cover w-full"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid var(--ed-hair)",
                boxShadow: "8px 10px 0 var(--ed-hair-2)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
