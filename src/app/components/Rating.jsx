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
        <div className="bg-white dark:bg-black py-10 mx-8 sm:mx-7.5 md:mx-14">
            {/* Heading */}
            <div className="text-center">
                <h1
                    className="flex items-center justify-center gap-1 text-[1.4rem] sm:text-[1.9rem] md:text-[2.5rem] pt-3 lg:text-[2.5rem] 2xl:text-[2.8rem]"
                >
                    What Does
                    <span className="">
                        <img
                            src="/cyber-insurance-white.svg"
                            alt="LEXI Logo"
                            className="h-5 mb-1 sm:h-6 md:h-7.5 md:mb-2 lg:h-7.8 xl:h-7.5 2xl:h-8.5 ml-1 w-auto inline-block brightness-0 dark:brightness-100"
                        />
                        EXI Rating Mean?
                    </span>
                </h1>
                <p className="text-[0.8rem] mt-4 leading-5 sm:text-[1rem] md:text-[1.1rem] lg:text-[1.1rem] font-medium sm:leading-5 md:leading-7 lg:leading-8 2xl:leading-10 lg:px-5 xl:px-35 2xl:px-67">
                    The
                    <span className="">
                        <img
                            src="/cyber-insurance-white.svg"
                            alt="LEXI Logo"
                            className="h-3 mt-1 sm:h-3.5 md:h-3.8 md:mt-1.7 lg:h-4 xl:h-4 xl:mt-1 ml-1 w-auto -translate-y-1 inline-block brightness-0 dark:brightness-100"
                        /><strong>exi Rating™</strong> is an independent, standardized measure of a company’s <strong>cyber insurability.</strong> Lexi Rating™ evaluates <strong>cyber risk posture</strong> and translates it into a score that insurers understand. It benchmarks SMEs against industry norms, using data on security practices, controls, incident history, and resilience. You can use your Rating & Insurability report to <strong>negotiate better premiums, and minimize the risk of denial of coverage.</strong>
                    </span> </p>
            </div>

            {/* Cards Grid */}
            <div className="flex justify-center mt-10 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] w-full place-items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col items-left text-left p-5 border
          bg-black dark:bg-white dark:text-black text-white rounded-lg w-full max-w-sm h-60 sm:h-72 md:h-72 lg:h-70 xl:h-60
          ${index === cards.length - 1 ? "lg:col-start-2" : ""}`}
                        >
                            <div className="flex flex-row gap-2">
                                <h1 className=" text-[1.9rem] mt-1.5 sm:text-[2.1rem] md:text-[2.2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.5rem]">
                                    {card.rating}
                                </h1>
                                <h3
                                    className={`
    text-[1.5rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[1.9rem] xl:text-[1.7rem] xl:mt-4.5 2xl:text-[1.8rem]
 mt-3
    ${index === cards.length - 1 ? "-translate-x-2" : ""}
  `}
                                >
                                    {card.title}
                                </h3>
                            </div>

                            <p className=" text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[0.95rem] xl:text-[1rem] mt-2 mb-4">{card.text}</p>

                            {/* Ye bottom me chipka rahega */}
                            <label className="flex flex-row mt-auto mb-3 gap-3 items-center cursor-pointer">
                                <input type="radio" name="option" className="hidden peer" />
                                <span className="w-4 h-4 rounded-full border-2 border-[#ffdba2] dark:border-black flex items-center justify-center peer-checked:bg-[#ffdba2] dark:peer-checked:bg-black"></span>
                                <span className="text-[#ffdba2] dark:text-black text-[0.9rem] sm:text-[0.74rem] md:text-[0.87rem] lg:text-[0.77rem] xl:text-[1rem]">
                                    {card.select}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
};

export default Rating;