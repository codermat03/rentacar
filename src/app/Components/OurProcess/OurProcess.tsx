"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image"; // Import Next.js Image component

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardPosition, setCardPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const faqs = [
    {
      question: "Browse And Select",
      answer:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.",
    },
    {
      question: "Book And Confirm",
      answer:
        "Confirm your booking with our secure payment options and receive instant confirmation.",
    },
    {
      question: "Book And Enjoy",
      answer:
        "Pick up your vehicle and enjoy a seamless driving experience with no hassle.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation logic for the bouncing red card
  useEffect(() => {
    const interval = setInterval(() => {
      setCardPosition((prev) => {
        if (prev >= 100) setDirection(-1); // Reverse direction when hitting the right end
        if (prev <= -100) setDirection(1); // Reverse direction when hitting the left end
        return prev + 2 * direction;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="py-16 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl lg:text-5xl  font-bold text-gray-800 mb-5">
              Streamlined processes for a hassle-free experience
            </h2>
            <p className="text-black mb-5 md:mb-20">
              Our streamlined process ensures a seamless car rental experience
              from start to finish. With easy online booking, flexible pick-up
              and drop-off options.
            </p>
            <div className="space-y-4 mt-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-10 cursor-pointer"
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <FaChevronDown
                      className={`text-gray-600 transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <p className="mt-3 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative text-center">
            <div className="relative">
              {/* Replacing img tag with Next.js Image component */}
              <Image
                src="https://media.istockphoto.com/id/1475470414/vector/car-rental-design-concept.jpg?s=612x612&w=0&k=20&c=vtdY3Y2pU2a1PsDu-SczgzlcUjPM-JwypfWyoqNwBZE="
                alt="Car Rental Illustration"
                className="rounded-[300px] border-[20px] border-white shadow-2xl"
                width={600} // Add width and height attributes
                height={600}
              />
              <div
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded-lg shadow-md transition-transform hidden lg:block"
                style={{
                  transform: `translateX(${cardPosition}px)`,
                }}
              >
                <h3 className="text-lg font-bold">
                  5 m+ Trusted worldwide clients
                </h3>
                <div className="flex items-center mt-2 space-x-2 relative">
                  <Image
                    src="https://i.postimg.cc/6qv5TDS6/1.jpg"
                    alt="User 1"
                    className="rounded-full w-14"
                    width={56}
                    height={56}
                  />
                  <Image
                    src="https://i.postimg.cc/YSr98D48/7.jpg"
                    alt="User 2"
                    className="rounded-full w-14"
                    width={56}
                    height={56}
                  />
                  <Image
                    src="https://i.postimg.cc/0ydjY1Nb/5.jpg"
                    alt="User 3"
                    className="rounded-full w-14"
                    width={56}
                    height={56}
                  />
                  <div className="flex gap-2 absolute right-5 bottom-2">
                    <h1 className="bg-white rounded-full w-3 h-3"></h1>
                    <h1 className="bg-white rounded-full w-3 h-3"></h1>
                    <h1 className="bg-white rounded-full w-3 h-3"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
