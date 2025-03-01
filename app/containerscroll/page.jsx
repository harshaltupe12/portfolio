"use client";
import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from "next/image";

function Containerscroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <a href="https://www.linkedin.com/in/harshal-tupe/" className='' target='_blank'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="md:text-4xl text-2xl font-semibold text-black dark:text-white cursor-pointer">
              Don't forgot to Connect on  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Linkedin
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Linkedin.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      </a>
    </div>
  )
}

export default Containerscroll