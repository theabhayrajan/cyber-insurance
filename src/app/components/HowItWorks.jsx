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
    title: "(Optional) Upload an existing security assessment",
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
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Scroll-triggered animation for cards
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover scale effect
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power3.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power3.out" });
      });
    });

    // Scroll animation for button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="bg-white dark:bg-black w-full flex flex-col items-center py-12">
      <h2
        ref={headingRef}
        className="text-4xl font-bold mb-10"
      >
        How it works
      </h2>

      <div className="flex flex-wrap w-[280px] justify-center gap-15 md:w-[780px] xl:max-w-8xl xl:w-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative group w-full sm:w-[300px] md:w-[260px] lg:w-[280px] flex-shrink-0"
          >
            <img
              src={step.bg}
              alt="background shape"
              className="absolute inset-0 w-full h-97 object-cover rounded-4xl -translate-y-3 translate-x-6 -z-10 img-bottom filter brightness-0 dark:brightness-100"
            />
          

            <div className="relative overflow-hidden rounded-3xl shadow-md clip-bottom">
              <div className="bg-white dark:bg-black border border-[#f4f4f4] dark:border-black rounded-2xl p-3 flex flex-col items-center text-center h-[400px] clip-bottom">
                <div className="bg-black dark:bg-white border border-[#e6e6e6] rounded-2xl shadow-inner p-6 flex flex-col items-center text-center h-full clip-bottom">

                  <h3 className="lg:text-[1.5rem] leading-7 mb-1 mt-6 text-white dark:text-black">{step.title}</h3>
                  <p className="text-sm text-white dark:text-black mb-6 mt-5">{step.desc}</p>
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white text-2xl font-bold mt-3`}
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
        className="mt-12 text-xs md:text-base px-8 py-4 rounded-full bg-black dark:bg-white dark:text-black text-white flex items-center gap-2 shadow-lg text-center"
      >
        Create my Cyber Insurability Report
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
