"use client";
import React from "react";
import Link from "next/link";

function Projects() {
  const data = [
    {
      projectName: "SaaS - Hyper Serve",
      projectDesc:
        "Is a Software as a Service platform, offers more than 18+ services",
      projectImg: "/hyper.png",
      projectUrl: "https://github.com/harshaltupe12/hyper-serve",
    },
    {
      projectName: "Mock Master",
      projectDesc:
        "Mock Master to deliver real-time feedback for mock interviews",
      projectImg: "/mock.png",
      projectUrl: "https://github.com/harshaltupe12/mock-master",
    },
    {
      projectName: "Imaginary-INK",
      projectDesc: "Imaginary-INK generates images from prompts.",
      projectImg: "/ink.png",
      projectUrl: "https://github.com/harshaltupe12/imaginary_ink",
    },
    {
      projectName: "AICTE-Portal",
      projectDesc: "Designed new curriculum for AICTE-affiliated universities.",
      projectImg: "/image.png",
      projectUrl: "https://github.com/Yash-Dabhade/AICTE_PORTAL_SIH22",
    },
  ];

  return (
    <div className="my-4">
      {/* Title with Horizontal Lines */}
      <div className="flex items-center justify-center md:mx-4 my-6">
        {/* Left Line - Only visible on md and larger */}
        <div className="hidden sm:block flex-1 h-[1px] bg-gray-300"></div>

        {/* Title */}
        <h2 className="mx-4 text-center">
          <span className="md:text-6xl text-4xl">Personal {" "}</span>
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent md:text-6xl text-4xl font-bold">
            Projects
          </span>
        </h2>

        {/* Right Line - Only visible on md and larger */}
        <div className="hidden sm:block flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:p-4 p-5 gap-6 md:gap-8 mt-4 md:mt-16">
        {data.map((info) => (
          <Link key={info.projectName} href={info.projectUrl} target="_blank">
            <div className="border-2 p-4 rounded-xl hover:scale-105 transition-all duration-700 cursor-pointer hover:border hover:border-purple-300">
              <div className="h-24">
                <h2 className="font-bold">{info.projectName}</h2>
                <p>{info.projectDesc}</p>
              </div>
              <div className="h-48 flex items-center justify-center border rounded-lg">
                <img
                  src={info.projectImg}
                  alt={info.projectName}
                  className="object-cover w-full h-full rounded-2xl p-2"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
