"use client"
import About from "./about/page";
import Contact from "./contact/page";
import Education from "./education/page";
import Home from "./home/page";
import WhatIDo from "./info/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Footer from "../app/_Components/Footer.jsx";
import Cmd from "./terminal/page"
import Velocity from "./velocity/page"
import Flip from "./flip/page"
import Containerscroll from "./containerscroll/page";
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Main() {
  useEffect(()=>{
    AOS.init();
  }, [1000])
  return (
    <div className="">

      <div className="">
        <Home />
      </div>

      <div className="md:my-10 my-0" data-aos="fade-up">
      <WhatIDo />
      </div>

      <div className="md:my-24 my-4" data-aos="fade-up">
      <Cmd />
      </div>

      <div className="md:my-32 my-4" data-aos="fade-up">
      <About />
      </div>

      <div className="md:my-28 my-24" data-aos="fade-up">
      <Skills />
      </div>

      <div className="md:my-28 my-24" data-aos="fade-up">
      <Projects />
      </div>

      <div className="md:my-28 my-8" data-aos="fade-up">
      <Education />
      </div>

      <div className="md:my-28 my-8" data-aos="fade-up">
      <Containerscroll/>
      </div>

      <div className="md:mx-6 mx-0 my-4" data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
