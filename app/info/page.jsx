"use client"
import React from "react";
import { HoverEffect } from "../../components/ui/card-hover-effect";

function WhatIDo() {
  const projects = [
    {
      title: "Front-end Developer",
      description:
        "I specialize in crafting engaging and responsive user interfaces using modern frontend technologies like React, JavaScript, and Tailwind CSS. My expertise lies in creating seamless user experiences and visually appealing web applications.",
      link: "/",
    },
    {
      title: "Back-end Developer",
      description:
        "I excel in developing robust and scalable backend systems using Node.js, Express, and MongoDB, PostgreSQL. My focus is on building efficient APIs and managing data storage to support seamless and performant web applications.",
      link: "/",
    },
    {
      title: "Responsive Design",
      description:
        "I am adept at creating responsive web designs that ensure optimal user experiences across all devices and screen sizes. Utilizing CSS frameworks and media queries, I build layouts that adapt fluidly and maintain visual integrity.",
      link: "/",
    },
    {
      title: "UI/UX Designer",
      description:
        "As a UI/UX designer, I specialize in crafting intuitive and visually appealing interfaces that enhance user satisfaction. I focus on user-centered design principles to create engaging and seamless experiences across digital products.",
      link: "/",
    },
    
  ];
  return (
    <div className="">
      <div className=" mx-auto px-2">
        <HoverEffect items={projects}/>
      </div>
    </div>
  );
}

export default WhatIDo;
