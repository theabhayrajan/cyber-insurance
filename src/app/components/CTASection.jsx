"use client";
import React from "react";

export default function CtaSection() {
  return (
    <section className="relative bg-[#1f2932] dark:bg-[#d6dde4] h-100 flex items-center sm:h-110 py-24 overflow-hidden mx-5 sm:mx-7 md:mx-12 lg:mx-14 2xl:mx-32 rounded-3xl">
      {/* Circles background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Biggest circle */}
        <div className="absolute w-[150%] max-w-[1350px] aspect-square rounded-full bg-[#19222a] dark:bg-[#dde3e9]"></div>
        {/* Medium circle */}
        <div className="absolute w-[120%] max-w-[900px] aspect-square rounded-full bg-[#141c22] dark:bg-[#e3e8ed]"></div>
        {/* Smallest circle */}
        <div className="absolute w-[60%] max-w-[350px] aspect-square rounded-full bg-[#10161c] dark:bg-[#e9edf0]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heading */}
          <h1
            className="relative text-[2.1rem] sm:text-[2.5rem] md:text-[2.7rem] lg:text-[2.8rem] xl:text-[3rem] 
            2xl:text-[3.3rem] leading-[1] tracking-[-0.03em] text-white dark:text-black"
          >
            
                              Get Your Free 
          <span className="inline-flex items-center">
            <img
              src="/cyber-insurance-white.svg"
              alt="LEXI Logo"
              className="h-6.5 mt-1 sm:h-7.5 sm:mt-1.5 md:h-8 md:mt-2.5 lg:h-8.5 xl:h-10 xl:mt-2 ml-3 w-auto inline-block dark:brightness-0"
            />
             EXI Rating Today
          </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 mx-7 text-base sm:text-xl sm:mx-12 md:mx-25 md:text-2xl lg:text-lg lg:mx-35 xl:text-xl xl:mx-30 text-white dark:text-black">
            Join over 1,000 small businesses who have improved their cyber
            insurability with Lexi Ratings
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5 lg:mt-5 2xl:mt-7 whitespace-nowrap">
            <button className="bg-white text-black dark:bg-black dark:text-white rounded-full px-6 py-2 md:px-7 h-14 w-72 text-center md:h-16 self-center">
              Create My Cyber Insurability Report
            </button>
            <button className="bg-white text-black dark:bg-black dark:text-white rounded-full px-6 py-2 md:px-7  h-14 w-72 text-center md:h-16 self-center">
              Continue From Where I Left Off
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
