import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { ModeToggle } from "../_Components/DarkMode";

function Footer() {
  // #111827
  return (
    <>
      <div>
        <div className="flex flex-col gap-2 justify-center items-center p-4 bg-[#111827]">
          <Link href={"https://www.linkedin.com/in/harshal-tupe/"}>
            <h2 className="text-white hover:scale-105 transition-all duration-700">
              Created with ❤️ By
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-blue-300 to-blue-600 text-transparent font-bold ">
                {" "}
                Harshal Tupe
              </span>
            </h2>
          </Link>
          <Link href="https://www.hitwebcounter.com" target="_blank">
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=17109546&style=0006&nbdigits=8&type=page&initCount=980"
              title="Counter Widget"
              alt="Visit counter For Websites"
              border="0"
            />
          </Link>
          <ModeToggle />
          <p className="text-white text-sm">Deem the light boost the vibe</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
