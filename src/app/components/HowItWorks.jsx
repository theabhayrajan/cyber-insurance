"use client";
import { useEffect, useRef } from "react";
import { Gift } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Answer Few Questions",
    desc: "Complete a short questionnaire about your business and current security practices",
    bg: "/Rectangle 147.png",
  },
  {
    id: "02",
    title: "(Optional) Upload existing security assessment",
    desc: "Upload either a Pen Test, CIS Assessment or a Sig Lite Assessment",
    bg: "/Rectangle 147.png",
  },
  {
    id: "03",
    title: "See Your Report",
    desc: "Receive your LEXI Rating, Coverage gap analysis & a comprehensive cyber Insurability Report",
    bg: "/Rectangle 147.png",
  },
  {
    id: "04",
    title: "Review & Take Action",
    desc: "Follow clear next steps to strengthen your posture - and see your LEXI Rating update as you improve.",
    bg: "/Rectangle 147.png",
  },
];

export default function HowItWorks() {
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);
  const headingRef = useRef(null); // Heading ref

  useEffect(() => {
    // Animate heading from top on scroll
    gsap.to(
      headingRef.current,
      { opacity: 1, y: -50 },

    );

    // Scroll-triggered animation for cards
    cardsRef.current.forEach((card) => {
      gsap.to(
        card,
        { opacity: 1, scale: 1 },
      );
    });

  }, []);

  return (
    <div className="bg-white dark:bg-[black] w-full flex flex-col items-center py-12">
      <h2
        ref={headingRef}
         className="flex items-center justify-center gap-1 text-[2.2rem] sm:text-[2.4rem] md:text-[2.6rem] pt-3 lg:text-[2.8rem] 2xl:text-[2.8rem]"
      >
        How It Works
      </h2>

      <div className="flex flex-wrap w-[280px] justify-center gap-15 sm:w-[780px] xl:w-[1500px] xl:max-w-8xl">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative group w-full sm:w-[250px] md:w-[260px] lg:w-[280px] xl:w-[250px] 2xl:w-[280px] flex-shrink-0"
          >
            <img
              src={step.bg}
              alt="background shape"
              className="absolute inset-0 w-full h-97  object-cover rounded-4xl -translate-y-3 translate-x-6 xl:translate-x-12 2xl:translate-x-6 -z-10 img-bottom filter brightness-28 dark:brightness-100"
            />


            <div className="relative overflow-hidden rounded-3xl shadow-md clip-bottom xl:w-70 2xl:w-full">
              <div className="bg-white dark:bg-[#434343] border border-[#f4f4f4] dark:border-[#434343] rounded-2xl p-3 flex flex-col items-center text-center h-[400px] clip-bottom relative xl:w-68 2xl:w-full">
                <div className="bg-[#434343] dark:bg-white border border-[#e6e6e6] rounded-2xl shadow-inner px-3 py-6 flex flex-col items-center text-center h-full clip-bottom relative xl:w-62 2xl:w-full">

                  <h3 className={`text-[1.75rem] lg:text-[1.8rem] 2xl:text-[2rem] leading-8 mb-1 mt-2 text-white dark:text-black  ${[2].includes(index) ? "px-3 text-[1.95rem]" : "mt-0"}`}>
                    {step.title}
                  </h3>
                  <p className={` text-[1.05rem] 2xl:text-[1.1rem] text-white dark:text-black mb-6  ${[0, 2, 3].includes(index) ? "mt-8 sm:mt-6  lg:px-2" : "mt-5"} `}>
                    {step.desc}
                  </p>

                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-[#434343] text-black dark:text-white text-2xl font-bold absolute bottom-11 "
                  >
                    {step.id}
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <button
        ref={buttonRef}
       className="bg-[#cc621c] text-white hover:bg-[#ff7b25] hover:cursor-pointer text-sm sm:text-base whitespace-nowrap rounded-full px-6 py-2 md:px-7 h-12 w-65 sm:h-13 sm:w-70 md:h-16 md:w-72 lg:px-0 2xl:h-15 2xl:text-[1.2rem] 2xl:w-82 mt-10 text-center"
      >
        Create My Cyber Insurability Report
      </button>

      <style jsx>{`
        .clip-bottom {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
        }
        .img-bottom {
          clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
