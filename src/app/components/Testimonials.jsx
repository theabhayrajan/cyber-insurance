import React from 'react';
import { UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'; // heroicons icons

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
    <section className=" py-16 mx-2 md:mx-6 lg:mx-7 xl:mx-5 2xl:mx-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-black dark:text-white mb-6 lg:text-[4rem]">
          Trusted by Small Businesses
        </h2>

        {/* One single row with all 3 items */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-black dark:text-white text-xl">★★★★★</span>
            <p className="text-lg text-black dark:text-white">4.9/5 average rating</p>
          </div>

          {/* Used by 1000+ */}
          <div className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5 text-black dark:text-white" />
            <p className="text-lg text-black dark:text-white">Used by 1000+ SMBs</p>
          </div>

          {/* Backed by cybersecurity */}
          <div className="flex items-center gap-2 max-w-xs sm:max-w-none text-center sm:text-left">
            <ShieldCheckIcon className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-black dark:text-white" />
            <p className="text-xs sm:text-sm md:text-lg text-black dark:text-white">
              Backed by cybersecurity and insurance experts
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
