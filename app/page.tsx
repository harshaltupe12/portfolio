"use client";
import About from "./about/page";
import Contact from "./contact/page";
import Education from "./education/page";
import Home from "./home/page";
import WhatIDo from "./info/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import FunFacts from "./funfacts/page";
import Footer from "../app/_Components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-cream">
      <Home />

      <hr className="hair-rule" />
      <WhatIDo />

      <hr className="hair-rule" />
      <About />

      <hr className="hair-rule" />
      <Skills />

      <hr className="hair-rule" />
      <FunFacts />

      <hr className="hair-rule" />
      <div data-aos="fade-up"><Projects /></div>

      <hr className="hair-rule" />
      <Education />

      <hr className="hair-rule" />
      <Contact />

      <Footer />
    </div>
  );
}
