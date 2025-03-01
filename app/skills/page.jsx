"use client";
import React from "react";
import { skillsData } from "@/utils/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div className="md:mx-8 mx-4">
      <div id="skills" className="relative z-50 my-2">
        {/* Background Blur Effect */}
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

        {/* Heading with Lines */}
        <div className="flex items-center justify-center my-6">
          {/* Left Line - Only visible on md and larger */}
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-300"></div>

          {/* Title */}
          <h2 className="mx-4 text-center">
            <span className="md:text-6xl text-4xl">Technical {" "}</span>
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent md:text-6xl text-4xl font-bold">
              Skills
            </span>
          </h2>

          {/* Right Line - Only visible on md and larger */}
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Skills Marquee */}
        <div className="w-full my-1 md:mt-16">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsData.map((skill, id) => (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#ffffff] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-black text-sm sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
