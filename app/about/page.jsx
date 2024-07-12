import Image from "next/image";
import React from "react";
import { Meteors } from "../../components/ui/meteors";

function About() {
  return (
    <div className="md:mx-6 mx-4 mb-6">
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="">
            <h1 className="text-4xl text-white mb-4 relative z-50">
              About{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent font-bold">
                Me
              </span>
            </h1>
            <div className="p-2 flex flex-col md:flex-row  rounded-lg my-4 gap-2 md:gap-0">
              <div className="info flex-[4] p-2 text-white">
                As an ambitious undergraduate Computer Engineer, I am deeply
                passionate about software development and thrive on creating
                cutting-edge web applications that push technological
                boundaries. With a strong foundation in computer engineering
                principles and coursework in Data Structures, Algorithms,
                Database Management Systems, and Web Development
                <br />
                <br />I am adept at designing and implementing innovative
                solutions to complex problems. Proficient in HTML, CSS,
                JavaScript, React, Node.js, Express, MongoDB, and UI/UX design,
                I bring strong analytical skills, adaptability to new
                technologies, and a dedicated work ethic to every project. I am
                committed to staying updated with industry trends and delivering
                impactful solutions that drive project success.
              </div>
              <div className="image flex-[1] p-2 flex items-center justify-center">
                <Image
                  src={"/main.jpg"}
                  width={200}
                  height={200}
                  alt=""
                  className="rounded-full hover:scale-125 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}

export default About;
