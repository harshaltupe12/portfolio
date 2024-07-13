"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
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
    <div className="my-4 ">
      <h2 className="md:ml-8 ml-4 md:mb-8 mb-6">
          <span className="md:text-4xl text-3xl ml-2 md:ml-4 ">Personal {" "}</span> 
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent md:text-4xl text-3xl font-bold">
            Projects
          </span>
        </h2>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-5 md:gap-0 mt-4">
        {data.map((info) => (
          <Link href={info.projectUrl} target="_blank">
            <div
              key={info.projectName}
              className="card border-2  p-4 w-80 rounded-xl hover:scale-105 transition-all duration-700 cursor-pointer hover:border hover:border-purple-300"
            >
              <div className="header h-24">
                <h2 className="font-bold">{info.projectName}</h2>
                <p>{info.projectDesc}</p>
              </div>
              <div className="bottom h-48 flex items-center justify-center border rounded-lg">
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
