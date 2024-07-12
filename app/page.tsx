import About from "./about/page";
import Home from "./home/page";
import WhatIDo from "./info/page"
import Skills from "./skills/page";

export default function Main() {
  return (
    <div className="">
      <div className="">
      <Home/>
      </div>
      <WhatIDo/>
      <About/>
      <Skills/>
    </div>
  );
}
