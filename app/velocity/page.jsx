import React from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Cover } from "@/components/ui/cover";

function Velocity() {
  return (
    <div className="h-screen w-full flex justify-center items-center md:p-0 p-2">
      {/* <VelocityScroll
        text="Algorithms Optimization Deploy Responsive UI/UX"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      /> */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Let's <span className="text-yellow-400">Get</span> in{" "}
        <span className="text-green-600">Touch</span> to <br />{" "}
        <Cover>
          {" "}
          <span className="text-red-600">Create Extraordinary</span>
        </Cover>
      </h1>
    </div>
  );
}

export default Velocity;
