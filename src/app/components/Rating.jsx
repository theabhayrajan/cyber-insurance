import React from "react";
import Image from "next/image";

const Rating = () => {
    const cards = [
        {

            title: "A+ Exceptional",
            text: "You're extremely well-protected, with proactive controls and trained staff. Insurers see you as a top-tier candidate.",
            select: "Best pricing and broadest coverage ",
        },
        {

            title: "A Excellent",
            text: "Strong cybersecurity controls and low overall risk. A solid position in the eyes of underwriters.",
            select: "Eligible for preferred premiums",
        },
        {

            title: "A- Very Good",
            text: "You're above average and nearly insurer-ready. A few improvements could unlock better pricing or coverage terms.",
            select: "Likely approved with moderate terms",
        },
        {

            title: "B+ Insurable",
            text: "You're generally in good shape, but minor vulnerabilities may increase costs or limit coverage options.",
            select: "May qualify with standard rates",
        },
        {

            title: "B Acceptable",
            text: "Coverage likely, but underwriters will have concerns. Your security foundation is sound but uneven.",
            select: "Higher premiums or exclusions possible",
        },
        {

            title: "B- At Risk",
            text: "such as You lack key controls insurers require -MFA, secure backups, or endpoint protection.",
            select: "Coverage possible but limited",
        },
        {
            title: "Uninsurable. Critical Gaps",
            text: "You don't currently meet minimum standards for coverage but improvement is absolutely possible.",
            select: "Likely denied or priced out of market",
        },
    ];

    return (
        <div className="py-10 px-4 sm:px-8 md:px-12">
            {/* Heading */}
            <div className="text-center">
                <h1 className="text-xl sm:text-2xl md:text-[1.2rem] pt-3 lg:text-[2.7rem]">
                    What Does LEXI Rating Mean?
                </h1>
                <p className="mt-4 sm:text-base md:text-lg lg:text-[1rem] font-medium leading-10">
                    The <strong>Lexi Rating™</strong> is an independent, standardized measure of a company’s <strong>cyber insurability.</strong> Lexi Rating™ evaluates <strong>cyber risk posture</strong> and translates it into a<br />score that insurers understand. It benchmarks SMEs against industry norms, using data on security practices, controls, incident history, and resilience. You can use <br /> your Rating & Insurability report to <strong>negotiate better premiums, and minimize the risk of denial of coverage.</strong>
                </p>
            </div>

            {/* Cards Grid */}
            <div className="flex justify-center mt-10 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[1200px] w-full place-items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col items-left text-left p-5 border
            bg-black text-white rounded-xl w-full max-w-sm lg:h-70  xl:h-65`}
                        >

                            {/* Title */}
                            <h3 className=" text-base lg:text-[1.5rem] xl:text-[1.9rem] mt-3">{card.title}</h3>

                            {/* Text */}
                            <p className=" text-sm md:text-[1rem] mt-2">{card.text}</p>
                            <label className="flex flex-row mt-7 gap-3 items-center cursor-pointer">
                                {/* Hide the real radio */}
                                <input type="radio" name="option" className="hidden peer" />

                                {/* Custom circle */}
                                <span className="w-4 h-4 rounded-full border-2 border-[#ffdba2] flex items-center justify-center peer-checked:bg-[#ffdba2]"></span>

                                {/* Label text */}
                                <span className="text-[#ffdba2] text-sm md:text-[1rem]">
                                    {card.select}
                                </span>
                            </label>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rating;