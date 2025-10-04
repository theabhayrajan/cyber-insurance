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
    <div className="bg-white dark:bg-black py-10 px-4 sm:px-8 md:px-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-[1.2rem] pt-3 lg:text-[2.7rem]">
          Meet LEXI Rating
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl mt-2 lg:text-[2.1rem] mb-5">
          The Cyber Insurability Rating designed for Small Businesses
        </h2>
        <p className="mt-4 sm:text-base md:text-lg lg:text-[1.2rem] font-medium leading-10">
          LEXI Rating is the world's first cyber insurability rating built
          specifically for micro and small businesses <br />
          It's like a credit rating - but for cyber insurability.
        </p>
        <p className="mt-7 sm:text-base md:text-lg lg:text-[1.2rem] font-medium">
       Your LEXI Rating provides you with:
        </p>
      </div>
 
      {/* Cards Grid */}
    <div className="flex justify-center mt-10 items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[1200px] w-full place-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`group flex flex-col items-center text-center p-5 border
            bg-black dark:bg-white dark:text-black text-white rounded-xl w-full max-w-sm lg:h-80  xl:h-77`}
        >
          {/* Icon */}
          <div className="h-20 flex items-center justify-center">
            <Image
              src={card.img}
              alt={card.title}
              width={60}
              height={60}
              // className="transition group-hover:brightness-0 group-hover:invert"
            />
          </div>
 
          {/* Title */}
          <h3 className=" text-base lg:text-[1.5rem] xl:text-[1.9rem] mt-3">{card.title}</h3>
 
          {/* Text */}
          <p className=" text-sm md:text-base mt-2">{card.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};
 
export default Thirdpage;