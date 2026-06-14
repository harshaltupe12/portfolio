import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import SectionHeading from "../_Components/SectionHeading";

function Education() {
  const data = [
    {
      title: "B.E. Degree",
      content: (
        <div>
          <p className="text-ink" style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>
            MGM College of Engineering & Technology, Kamothe, Navi Mumbai.
          </p>
          <p className="text-soft" style={{ fontSize: 14, marginTop: 4, fontFamily: "var(--mono)" }}>
            University of Mumbai · Nov 2022 - May 2025
          </p>
          <p className="text-soft" style={{ marginTop: 4 }}>BE in Computer Science</p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <Image
              src="/mgm.png"
              alt="MGM College"
              width={500}
              height={500}
              className="object-contain h-20 md:h-44 lg:h-60 w-full md:p-4"
              style={{ border: "1px solid var(--ed-hair)" }}
            />
            <Image
              src="/MGM Certi.png"
              alt="MGM Certificate"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full"
              style={{ border: "1px solid var(--ed-hair)" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Diploma",
      content: (
        <div>
          <p className="text-ink" style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>
            Government Polytechnic Pen, Pen.
          </p>
          <p className="text-soft" style={{ fontSize: 14, marginTop: 4, fontFamily: "var(--mono)" }}>
            MSBTE · Nov 2018 - May 2022
          </p>
          <p className="text-soft" style={{ marginTop: 4 }}>Diploma in Computer Technology</p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <Image
              src="/msbte.jpeg"
              alt="MSBTE"
              width={500}
              height={500}
              className="object-contain h-20 md:h-44 lg:h-60 w-full"
              style={{ border: "1px solid var(--ed-hair)" }}
            />
            <Image
              src="/0.1.jpg"
              alt="Diploma Certificate"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full"
              style={{ border: "1px solid var(--ed-hair)" }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-cream">
      <div className="container-ed section-y" style={{ paddingBottom: 0 }}>
        <SectionHeading number="05" label="Education" title="Where I" accent="studied" />
      </div>
      <Timeline data={data} />
    </section>
  );
}

export default Education;
