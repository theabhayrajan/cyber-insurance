"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSection from "./wrapping/AnimateButton";
import HeroRightImages from "./RightAnimate";

const Hero = () => {
  const texts = [
    "Understand your Cyber Insurability in Minutes",
    "Unlock Lower Premiums",
    "Reduce Insurance denial chances",
    "Benchmark your Cyber risk with peers",
    "Strengthen your Application ",
  ];
  const transactionCards = [
    { title: "Instant Report" },
    { title: "No Credit Card Info Required" },
    { title: "Get Actionable Steps to Improve Your Security" },
    { title: "Discover How Much Cyber Coverage You May Need" },
    { title: "Qualify For Cheaper Insurance" },
  ];

  const cardColors = [
    "bg-pink-100",   // light pink
    "bg-blue-100",   // light blue
    "bg-orange-100", // light orange
    "bg-green-100",  // light green
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="bg-white dark:bg-black block 2xl:px-[7em] px-[1em]">

      {/* Hero Section */}
      <section className="w-full py-[7rem] md:py-[12rem] flex items-center justify-center overflow-x-hidden">
        <div className="max-w-12xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">

          {/* LEFT TEXT */}
          <div className="flex-1 lg:flex-[0_0_50%] space-y-4 sm:space-y-5 md:space-y-8
                          pr-2 sm:pr-4 md:pr-4 lg:pr-10 max-w-full">



            {/* Highlight heading */}
            <h1
              className="hero-heading relative
              text-[2.8rem] md:text-[3.5rem] lg:text-[3.3rem] 2xl:text-[55px]
                        leading-[1] tracking-[-0.03em] text-black dark:text-white whitespace-nowrap max-[480px]:whitespace-normal break-words"
            >

              With your Lexi Rating
            </h1>

            {/* Animated Headline */}
            <div className="relative max-w-[1380px] mb-0">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="
                    hero-heading  
                    w-full
                    text-[3rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[3rem] 2xl:text-[3rem]
                    leading-[1.1] md:leading-[1.1] lg:leading-[1.03]
                    tracking-[-0.02em]
                    text-[#b01e1e]
                    2xl:whitespace-normal 2xl:break-words mb-5
                  "
                >
                  {texts[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
            {/* Description */}

            <p className="text-[#52606d] dark:text-white text-[1em] lg:text-[1em] 2xl:text-[1.15em]
                            leading-[1.5] w-full sm:w-[95%] lg:w-[100%] 2xl:w-[100%] md:w-[100%]" >
              SMEs without a Lexi Rating™ may face higher premiums or outright denials.
              Before you apply for cyber insurance, know exactly how you’ll be judged.
              Get your Lexi Rating now<br/> See what insurers see, before they do!
            </p>


            {/* Button */}
            <div className="flex flex-row whitespace-nowrap sm:-space-x-60 md:-space-x-80 lg:-space-x-10 xl:-space-x-30 2xl:-space-x-95 [@media(min-width:1536px)_and_(max-width:1850px)]:-space-x-45 [@media(min-width:400px)_and_(max-width:475px)]:-space-x-15 [@media(min-width:480px)_and_(max-width:635px)]:-space-x-35">
              <ButtonSection />
              <ButtonSection text="Continue" />

            </div>
          </div>

          {/* RIGHT VISUALS */}
          <div className="w-full lg:w-[60%] relative mb-110 sm:mt-30 sm:mb-120 md:mt-30 md:mb-100 lg:mt-20 lg:mb-0 2xl:mb-20 flex-grow">
            <HeroRightImages />
          </div>

        </div>
      </section>


    </div>
  );
};

export default Hero;