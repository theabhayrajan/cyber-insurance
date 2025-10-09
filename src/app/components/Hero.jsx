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
    <div className="bg-white dark:bg-black block mx-8 sm:mx-0 lg:mx-5 2xl:mx-33">

      {/* Hero Section */}
      <section className="w-full py-[3rem] mt-10 lg:py-[5rem] flex items-center justify-center overflow-x-hidden">
        <div className="max-w-12xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">

          {/* LEFT TEXT */}
          <div className="flex-1 lg:flex-[0_0_60%] space-y-4 sm:space-y-5 md:space-y-8
                          pr-2 sm:pr-4 md:pr-4 lg:pr-10 max-w-full sm:mx-8.5 md:mx-14 lg:mx-8 2xl:mx-0">



            {/* Highlight heading */}
            <h1
              className="hero-heading relative
              text-[1.9rem] md:text-[2.4rem] lg:text-[2.5rem] 2xl:text-[44px]
                        leading-[1] tracking-[-0.03em] text-black dark:text-white whitespace-nowrap max-[480px]:whitespace-normal break-words"
            >

              With your
              <span className="inline-flex items-center">
                <img
                  src="/cyber-insurance-white.svg"
                  alt="LEXI Logo"
                  className="h-6 mt-1 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8.5 ml-3 w-auto inline-block brightness-0 dark:brightness-100"
                />
                exi Rating
              </span>
            </h1>

            {/* Animated Headline */}
            <div className="relative max-w-[1380px] sm:h-full h-[9vh] ">
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
                    text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[1.7rem] xl:text-[2.2rem] 2xl:text-[2.2rem]
                    leading-[1.1] md:leading-[1.1] lg:leading-[1.03]
                    tracking-[-0.02em]
                    text-black dark:text-white
                    2xl:whitespace-normal 2xl:break-words mb-5
                  "
                >
                  {texts[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
            {/* Description */}

            <p className="text-[#52606d] dark:text-white text-[0.8em] md:text-[1rem] lg:text-[0.9rem] 2xl:text-[1.1rem]
                            leading-[1.5] w-full sm:w-[95%] lg:w-[100%] 2xl:w-[75%] md:w-[100%]" >
              SMEs without a Lexi Rating™ may face higher premiums or outright denials.
              Before you apply for cyber insurance, know exactly how you’ll be judged.
              Get your Lexi Rating now<br /> See what insurers see, before they do!
            </p>


            {/* Button */}
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-2 xl:flex-row  whitespace-nowrap xl:gap-5">
              {/* <ButtonSection />
              <ButtonSection text="Continue" /> */}
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm rounded-full px-6 py-2 md:px-7 h-10 w-65 md:h-15 lg:h-12 lg:px-0 lg:w-65 lg:text-sm 2xl:h-16 2xl:text-base 2xl:w-75">
                Create my Cyber Insurability Report
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm rounded-full px-6 py-2 md:px-7 h-10 w-65 md:h-15 lg:h-12 lg:px-0 lg:w-65 lg:text-sm 2xl:h-16 2xl:text-base 2xl:w-75">
                Continue from where i left off
              </button>

            </div>
          </div>

          {/* RIGHT VISUALS */}
          <div className="w-full lg:w-[40%] relative mt-7 lg:mr-5 2xl:mr-0 lg:mb-10 2xl:mb-0 flex-grow">
            <HeroRightImages />
          </div>

        </div>
      </section>
      <section className="pb-10">
        <div className="max-w-9xl sm:max-w-lg md:max-w-170 lg:max-w-235 xl:max-w-300 2xl:max-w-600 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 2xl:gap-10">

            {/* Card 1 */}
            <div className="bg-[#434343] dark:bg-white text-white  rounded-lg flex flex-row items-center justify-center px-10  py-2 h-12 sm:h-14 gap-3 text-center shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/hero-img/Group.svg"
                alt="Instant Report"
                 className="h-5 w-5 md:w-6 md:h-6 2xl:w-7 2xl:h-7 dark:brightness-0"
              />
              <p className="text-xs text-[#d0d0d0] dark:text-black">Instant Report</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#434343] dark:bg-white text-white  rounded-lg flex flex-row items-center justify-center px-10  py-2 h-12 sm:h-14 gap-3 text-center shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/hero-img/Group 176.svg"
                alt="No Credit Card Needed"
                className="h-5 w-5 md:w-6 md:h-6 2xl:w-7 2xl:h-7 dark:brightness-0"
              />
              <p className="text-xs text-[#d0d0d0] dark:text-black">No Credit Card Needed</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#434343] dark:bg-white text-white  rounded-lg flex flex-row items-center justify-center px-10  py-2 h-13 sm:h-14 text-center shadow-md hover:shadow-lg transition-shadow gap-1 lg:gap-1.5">
              <img
                src="/hero-img/Group 177.svg"
                alt="Get Actionable Steps"
                 className="h-6 w-6 2xl:w-7 2xl:h-7 dark:brightness-0"
              />
              <p className="text-xs text-[#d0d0d0] dark:text-black">
                Get Actionable Steps To Improve Your Security
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#434343] dark:bg-white text-white  rounded-lg flex flex-row items-center justify-center px-10  py-2 h-13 sm:h-14 text-center shadow-md hover:shadow-lg gap-1 transition-shadow lg:gap-2">
              <img
              src="/hero-img/Group (1).svg"
               
                alt="Discover Coverage"
                 className="h-6 w-6 2xl:w-7 2xl:h-7 dark:brightness-0"
              />
              <p className="text-xs text-[#d0d0d0] dark:text-black">
                Discover How Much Cyber Coverage You May Need
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#434343] dark:bg-white text-white  rounded-lg flex flex-row items-center justify-center gap-2 py-2 h-12 sm:h-14 text-center shadow-md hover:shadow-lg transition-shadow">
              <img
                 src="/hero-img/Group 178.svg"
                alt="Qualify For Cheaper Insurance"
                 className="h-5 w-5 2xl:w-7 2xl:h-7 dark:brightness-0"
              />
              <p className="text-xs text-[#d0d0d0] dark:text-black">
                Qualify For Cheaper Insurance
              </p>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default Hero;