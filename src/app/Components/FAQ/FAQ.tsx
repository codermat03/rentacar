"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Do I Need To Rent A Car?",
      answer:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.",
    },
    {
      question: "How Old Do I Need To Be To Rent A Car?",
      answer:
        "Confirm your booking with our secure payment options and receive instant confirmation.",
    },
    {
      question: "Can I Rent A Car With A Debit Card?",
      answer:
        "Pick up your vehicle and enjoy a seamless driving experience with no hassle.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative text-center">
          <div className="relative">
            <img
              src="https://www.rentcar360.com/wp-content/uploads/2015/10/online-rental-cars-600.png"
              alt="Car Rental Illustration"
              className="rounded-[150px] sm:rounded-[200px] md:rounded-[300px] border-[10px] sm:border-[15px] md:border-[20px] border-white shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl  lg:text-5xl font-bold text-gray-800 mb-5">
            Everything you need to know about our services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-10">
            Our streamlined process ensures a seamless car rental experience
            from start to finish. With easy online booking, flexible pick-up and
            drop-off options.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-6 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`text-gray-600 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-600 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
