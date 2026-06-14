"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../_Components/SectionHeading";

function About() {
  return (
    <section className="bg-cream">
      <div className="container-ed section-y">
        <SectionHeading number="02" label="About" title="A bit about" accent="me" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start">
          <div>
            <p
              className="text-soft m-0"
              style={{ fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: 1.6, maxWidth: 680 }}
            >
              I'm a Senior Software Engineer passionate about building scalable
              products, intelligent systems, and technology that creates real-world
              impact. My work spans the entire product lifecycle, from researching
              complex problems and designing robust architectures to leading
              development teams and delivering production-ready solutions.
            </p>
            <p
              className="text-soft"
              style={{ fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: 1.6, maxWidth: 680, marginTop: 20 }}
            >
              With experience across software engineering, AI-driven applications,
              cloud infrastructure, and system design, I focus on creating reliable,
              maintainable, and high-performing products. I enjoy turning ambitious
              ideas into practical solutions, solving challenging technical problems,
              and building systems that can scale with business growth.
            </p>
          </div>

          <div className="md:justify-self-end w-full" style={{ maxWidth: 320 }}>
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
