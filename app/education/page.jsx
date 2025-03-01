import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

function Education() {
  const data = [
    {
      title: "B. E. Degree",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
            MGM College of Engineering & Technology, Kamothe, Navi Mumbai.
          </p>
          <p className="text-sm md:text-lg">University of Mumbai, Nov 2022 - May 2025</p>
          <p>BE in Computer Science</p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mgm.png"
              alt="MGM College"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg dark:border md:p-4"
            />
            <Image
              src="/MGM Certi.png"
              alt="MGM Certificate"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg dark:border"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Diploma",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
            Government Polytechnic Pen, Pen.
          </p>
          <p className="text-sm md:text-lg">MSBTE, Nov 2018 - May 2022</p>
          <p>Diploma in Computer Technology</p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/msbte.jpeg"
              alt="MSBTE"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-lg dark:border"
            />
            <Image
              src="/0.1.jpg"
              alt="Diploma Certificate"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg dark:border"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
<div className="w-full">
  {/* Title with lines */}
  <div className="flex items-center justify-center my-6 md:mb-10 w-full">
    <div className="hidden md:block flex-1 border-t border-gray-400"></div>
    <h2 className="mx-4 text-4xl md:text-6xl font-bold text-center whitespace-nowrap flex-shrink-0">
      <span className="ml-2 md:ml-4">Higher </span>
      <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent">
        Education
      </span>
    </h2>
    <div className="hidden md:block flex-1 border-t border-gray-400"></div>
  </div>

  {/* Timeline Section */}
  <div className="w-full">
    <Timeline data={data} />
  </div>
</div>

  );
}

export default Education;
