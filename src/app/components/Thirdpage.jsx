import React from "react";
import Image from "next/image";

const Thirdpage = () => {
  const cards = [
    // {
    //   img: "/Union (1).svg",
    //   title: "LEXI Rating",
    //   text: "This is our personalized cyber insurability rating. A typical report assigns this rating to you, and typically includes:",
    //   bg: "bg-yellow-50",
    // },
    {
      img: "/Layerx(2).svg",
      title: "Industry Benchmarking",
      text: "Find out how your insurability compares to others in your sector.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Union (2).svg",
      title: "Confidence Levels",
      text: "See how confident we are in your results, based on data quality and assessment depth.",
      bg: "bg-pink-50",
    },
    {
      img: "/Vector.svg",
      title: "Breach Likelihood",
      text: "Statistical probability of a material cyber attack based on your current posture.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Group.svg",
      title: "Financial Loss Estimate",
      text: "Projected costs if a breach occurs, including downtime and recovery.",
      bg: "bg-pink-50",
    },
    {
      img: "/Vector (1).svg",
      title: "Historical Trend Tracking",
      text: "As you participate over time, monitor how your insurability posture improves.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Outline.svg",
      title: "Insurance Coverage Gap",
      text: "Specific vulnerabilities and missing protections in your current setup.",
      bg: "bg-pink-50",
    },
    {
      img: "/Vector (2).svg",
      title: "Real Time Results",
      text: "Instant results all in a fast, frictionless process.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Shield.svg",
      title: "Tailored Cyber Security Recommendations",
      text: "Actionable steps to improve your security posture and rating.",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="bg-white dark:bg-black mx-8 sm:mx-7.5 md:mx-14">
      {/* Heading */}
      <div className="text-center">
        <h1
          className="flex items-center justify-center gap-1 text-[1.9rem] sm:text-[1.9rem] md:text-[2.4rem] pt-3 lg:text-[2.5rem] 2xl:text-[2.7rem]"
        >
          Meet
          <span className="inline-flex items-center">
            <img
              src="/cyber-insurance-white.svg"
              alt="LEXI Logo"
              className="h-5.5 mt-1 sm:h-5.5 md:h-7 lg:h-7.5 lg:mt-1.5 xl:h-7.5 2xl:h-8 2xl:mt-1.5 xl:mt-2 ml-1 w-auto inline-block brightness-0 dark:brightness-100"
            />
            EXI Rating
          </span>
        </h1>

        <h1 className="text-[1.4rem] sm:[1.9rem] md:text-[2rem] mt-2 lg:text-[2.1rem] 2xl:text-[2.5 rem] mb-5 leading-7 md:leading-9">
          The Cyber Insurability Rating designed for Small Businesses
        </h1>
        <p className="text-[0.8rem] leading-5 sm:text-[1rem] md:text-lg lg:text-[1.2rem] 2xl:text-[1.19rem] font-medium sm:leading-5 md:leading-7 lg:leading-8 2xl:leading-10 lg:px-5 xl:px-35 2xl:px-67">
      
          <span className="">
            <img
              src="/cyber-insurance-white.svg"
              alt="LEXI Logo"
              className="h-2.5 mb-0.5 sm:h-3 sm:mb-1 md:h-3.5 lg:h-3.5 xl:h-4 xl:mb-1 ml-1 w-auto inline-block brightness-0 dark:brightness-100"
            />
            EXI Rating is the world's first cyber insurability rating built
          specifically for micro and small businesses.
          It's like a credit rating - but for cyber insurability.
          </span>
        </p>
        <p className="text-[0.9rem] sm:text-[1rem] mt-5 sm:text-base md:text-lg lg:text-[1.2rem] font-medium">
          Your <span className="">
            <img
              src="/cyber-insurance-white.svg"
              alt="LEXI Logo"
              className="h-3 mb-0.5 sm:h-3 md:h-3.5 md:mb-1 lg:h-3.5 xl:h-4 xl:mb-1 ml-1 w-auto inline-block brightness-0 dark:brightness-100"
            />EXI Rating provides you with:
             </span>
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex justify-center mt-10 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 max-w-[1200px] w-full place-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center p-5 border
            bg-black dark:bg-white dark:text-black text-white rounded-xl w-full max-w-sm sm:h-75 lg:h-80  xl:h-77`}
            >
              {/* Icon */}
              <div className="h-20 flex items-center justify-center">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={60}
                  height={60}
                // className="w-15 h-15"
                />
              </div>

              {/* Title */}
              <h3 className=" text-[1.5rem] sm:text-[1.86rem] md:text-[1.8rem] md:leading-8 lg:text-[1.5rem] lg:leading-7 xl:text-[2rem] xl:leading-10 leading-9 sm:mt-3">{card.title}</h3>

              {/* Text */}
              <p className=" text-[0.9rem] sm:text-[1rem] md:text-base my-2 sm:mt-3">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;