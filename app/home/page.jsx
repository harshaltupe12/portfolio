"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "../../components/ui/flip-words";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AuroraButton } from "@/components/magicui/aura-button";

function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [particleColor, setParticleColor] = useState("#fff"); // Default to white
  const words = ["Software-Developer", "Fullstack-Developer", "REST-API"];
  
  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Update particle color when theme changes
  useEffect(() => {
    if (mounted) {
      const currentTheme = resolvedTheme || theme;
      setParticleColor(currentTheme === "dark" ? "#fff" : "#000");
    }
  }, [theme, resolvedTheme, mounted]);

  return (
    <>
      <div className="h-screen md:h-screen relative w-full dark:bg-black bg-[#fff] flex flex-col items-center md:justify-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={particleColor}
          />
        </div>
        <div className="flex justify-center flex-col items-center z-10 mt-10 md:mt-0 md:mb-0 mb-[70px]">
          <Link href={"https://github.com/harshaltupe12"} target="_blank">
            <div className="bg-gradient-to-tl from-blue-400 via-blue-100 to-blue-400 w-[max-content] p-2 rounded-lg flex gap-1 font-bold text-gray-700 cursor-pointer hover:scale-105 transition-all">
              Do check GitHub <ArrowRight />
            </div>
          </Link>
          <h2 className=" my-2 text-[40px] md:text-[60px] lg:text-[70px] font-bold dark:text-slate-100 text-gray-900 flex flex-col lg:flex-row md:flex-col md:gap-2 gap-0 items-center">
            Hello, This is {""}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent md:text-[70px] text-[50px]">
              {" "}
              <AuroraText>Harshal Tupe</AuroraText>
            </span>
          </h2>
          <div className="flex justify-center items-center px-4">
            <div className="text-2xl my-0 md:text-4xl mx-auto font-normal text-black">
              <FlipWords
                words={words}
                className="dark:text-slate-200"
                style={{ color: "black" }}
              />{" "}
              <br />
            </div>
          </div>
          <div className="md:mt-8 my-4 flex gap-4">
            <Link href={"/terminal"}>
              <AuroraButton
                variant="primary"
                className="text-black font-bold"
              >
                Command Prompt
              </AuroraButton>
            </Link>

            <Link
              href={
                "https://drive.google.com/file/d/1619GUOv6KQ0syMXMfWNjCa256k0-fQab/view?usp=sharing"
              }
              target="_blank"
            >
              <AuroraButton
                variant="primary"
                className="text-black font-bold"
              >
                Download Resume
              </AuroraButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;