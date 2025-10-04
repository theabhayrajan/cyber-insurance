import React from "react";
import Image from "next/image";

const Rating = () => {
    const cards = [
        {
            rating: "A+",
            title: "Exceptional",
            text: "You're extremely well-protected, with proactive controls and trained staff. Insurers see you as a top-tier candidate.",
            select: "Best pricing and broadest coverage ",
        },
        {
            rating: "A",
            title: "Excellent",
            text: "Strong cybersecurity controls and low overall risk. A solid position in the eyes of underwriters.",
            select: "Eligible for preferred premiums",
        },
        {
            rating: "A-",
            title: "Very Good",
            text: "You're above average and nearly insurer-ready. A few improvements could unlock better pricing or coverage terms.",
            select: "Likely approved with moderate terms",
        },
        {
            rating: "B+",
            title: "Insurable",
            text: "You're generally in good shape, but minor vulnerabilities may increase costs or limit coverage options.",
            select: "May qualify with standard rates",
        },
        {
            rating: "B",
            title: "Acceptable",
            text: "Coverage likely, but underwriters will have concerns. Your security foundation is sound but uneven.",
            select: "Higher premiums or exclusions possible",
        },
        {
            rating: "B-",
            title: "At Risk",
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
        <div className="bg-white dark:bg-black py-10 px-4 sm:px-8 md:px-12">
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
        bg-black dark:bg-white dark:text-black text-white rounded-xl w-full max-w-sm lg:h-70 xl:h-65
        ${index === cards.length - 1 ? "md:col-start-2" : ""}`}
                        >
                            <div className="flex flex-row gap-2">
                                <h1 className=" text-base lg:text-[1.5rem] xl:text-[2.7rem] mt-3">
                                    {card.rating}
                                </h1>
                                <h3 className=" text-base lg:text-[1.5rem] xl:text-[1.9rem] xl:mt-6 mt-3">
                                    {card.title}
                                </h3>
                            </div>

                            <p className=" text-sm md:text-[1rem] mt-2">{card.text}</p>

                            <label className="flex flex-row mt-7 gap-3 items-center cursor-pointer">
                                <input type="radio" name="option" className="hidden peer" />
                                <span className="w-4 h-4 rounded-full border-2 border-[#ffdba2] dark:border-black flex items-center justify-center peer-checked:bg-[#ffdba2] dark:peer-checked:bg-black"></span>
                                <span className="text-[#ffdba2] dark:text-black text-sm md:text-[1rem]">
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