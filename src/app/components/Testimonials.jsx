import React from 'react';
import { UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'; // heroicons icons
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Dental Practice Owner",
      quote:
        'LEXI helped me understand our vulnerabilities and get better insurance rates. The report was clear and actionable.',
      image: "/assets/sarah.png",
    },
    {
      name: "Mike Rodriguez",
      role: "Retail Store Manager",
      quote:
        'Finally, a cyber insurability assessment that speaks our language. No tech jargon, just practical advice.',
      image: "/assets/mike.png",
    },
    {
      name: "Lisa Thompson",
      role: "Accounting Firm Owner",
      quote:
        'The industry comparison was eye-opening. We improved our rating from B- to A in just 3 months.',
      image: "/assets/lisa.png",
    },
  ];

  return (
    <section className="py-16 mx-5 md:mx-10 lg:mx-10 xl:mx-0 2xl:mx-0">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-[2rem] md:text-[2.5rem] text-black dark:text-white mb-6 lg:text-[3rem]">
          Trusted by Small Businesses
        </h2>

        {/* One single row with all 3 items */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-10">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-black dark:text-white text-[1rem] sm:text-xl lg:text-[1.1rem]">★★★★★</span>
            <p className="text-[1rem] text-black dark:text-white md:text-[1.1rem]">4.9/5 average rating</p>
          </div>

          {/* Used by 1000+ */}
          <div className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5 text-black dark:text-white lg:text-[1.1rem]" />
            <p className="text-[1rem] text-black dark:text-white lg:text-[1.1rem]">Used by 1000+ SMBs</p>
          </div>

          {/* Backed by cybersecurity */}
          <div className="flex items-center gap-1 max-w-xs sm:max-w-none text-center sm:text-left">
            <ShieldCheckIcon className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-8 lg:h-7 text-black dark:text-white" />
            <p className="text-[0.85rem] sm:text-sm md:text-lg text-black dark:text-white lg:text-[1.1rem]">
              Backed by cybersecurity and insurance experts
            </p>
          </div>
        </div>

        {/* Testimonials Marquee */}
        <div className="overflow-hidden">
          <Marquee pauseOnHover={false} gradient={false} speed={50} className="h-[270px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 mx-5 w-90 h-60 max-w-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-[1.7rem] md:text-[1.8rem] xl:text-[1.9rem] text-gray-800">{testimonial.name}</h3>
                    <p className="text-[1rem] md:text-[1.1rem] ml-1 text-gray-500 self-start flex">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#364152] md:text-[1.1rem] text-left ">"{testimonial.quote}"</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
