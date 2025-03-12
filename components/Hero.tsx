"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/button";

const words = [
  {
    text: "Build",
  },
  {
    text: "Awesome",
  },
  {
    text: "Websites",
  },
  {
    text: "with",
  },
  {
    text: "Tanay",
    className: "text-purple dark:text-purple",
  },
  {
    text: "Hingane.",
    className: "text-purple dark:text-purple",
  },
];

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="purple" />
      </div>

      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <TypewriterEffect
          words={words}
          className="text-4xl sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl"
        />
        <p className="text-neutral-400 dark:text-neutral-200 pt-20 text-center text-base lg:text-lg sm:text-sm  xl:text-xl">
          I specialize in transforming designs into functional and
          high-performing web applications.
          <br />
          Let&apos;s discuss your next project.
        </p>
        <div className="flex flex-col md:flex-row pt-20 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center z-10 gap-2 text-white border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Check Resume</span>
            {/* <ArrowUpRight className="size-4" /> */}
          </a>
          <a
            href="mailto:victus0307@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days."
            className="inline-flex items-center z-10 gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">

        </div> */
}

export default Hero;
