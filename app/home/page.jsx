"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "../../components/ui/flip-words";
import { color } from "framer-motion";
import { FileDown } from 'lucide-react';
import WhatIDo from "../info/page";

function Home() {
  const words = ["Software-Developer", "Fullstack-Developer", "REST-API"];
  return (
    <div className="max-h-min md:h-screen relative w-full bg-[#fff] flex flex-col items-center md:justify-center justify-start overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000"
        />
      </div>
      <div className="flex justify-center flex-col items-center z-10 mt-10 md:mt-0">
        <div className="bg-gradient-to-tl from-blue-400 via-blue-100 to-blue-400 w-[max-content] p-2 rounded-lg flex gap-1 font-bold text-gray-700 cursor-pointer hover:scale-105 transition-all">
          Do check GitHub <ArrowRight />
        </div>
        <h2 className=" my-2 text-[40px] md:text-[70px] font-bold text-gray-900 flex flex-col md:flex-row md:gap-2 gap-0 items-center">
          Hello, This is
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent md:text-[70px] text-[50px]">
            {" "}
            Harshal Tupe
          </span>
        </h2>
        <div className="flex justify-center items-center px-4">
          <div className="text-2xl my-0 md:text-4xl mx-auto font-normal text-black">
            <FlipWords
              words={words}
              className="text-black"
              style={{ color: "black" }}
            />{" "}
            <br />
          </div>
        </div>
        <div className="md:mt-8 my-4 bg-slate-200 cursor-pointer hover:scale-105 transition-all ">
          <span className="bg-gradient-to-tl from-violet-400 via-pink-300 to-violet-400 text-gray-900 md:text-[15px] text-[15px] p-2 rounded-lg font-bold">
            {" "}
            Download Resume
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
