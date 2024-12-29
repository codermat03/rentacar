"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    rating: 5,
    comment:
      "The service was excellent! The car was in perfect condition, and the team was very professional.",
    photo: "https://i.postimg.cc/6qv5TDS6/1.jpg",
    name: "John Doe",
    designation: "Business Analyst",
  },
  {
    rating: 4,
    comment:
      "Great experience! The booking process was smooth, and the car exceeded my expectations.",
    photo: "https://i.postimg.cc/YSr98D48/7.jpg",
    name: "Jane Smith",
    designation: "Marketing Manager",
  },
  {
    rating: 5,
    comment:
      "Highly recommend! The staff was friendly, and the car rental process was hassle-free.",
    photo: "https://i.postimg.cc/0ydjY1Nb/5.jpg",
    name: "Michael Brown",
    designation: "Software Engineer",
  },
  {
    rating: 4,
    comment:
      "The service was reliable and convenient. I'll definitely use it again!",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthk4gAFBixabe3e4rVtF9dwW5-ktC6Z_3Ih2yaJOA2-uGlLm2eSVrMvOQjZPN9UXMiug&usqp=CAU",
    name: "Emily Johnson",
    designation: "HR Specialist",
  },
  {
    rating: 5,
    comment:
      "Fantastic service! The car was clean and well-maintained. Great value for money.",
    photo:
      "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
    name: "Chris Wilson",
    designation: "Entrepreneur",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-loop every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center md:mb-10">
        What Our Clients Say
      </h2>
      <div className="relative">
        {/* Slider Container */}
        <div className="flex gap-6 overflow-hidden justify-center">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-2/3 md:w-1/3 bg-white rounded-lg shadow-lg p-6"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                  <span key={i} className="text-gray-300 text-xl">
                    ★
                  </span>
                ))}
              </div>
              {/* Comment */}
              <p className="text-gray-600 mb-6">{testimonial.comment}</p>
              {/* Photo, Name, and Designation */}
              <div className="flex items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300"
                />
                <div className="ml-4">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-orange-700 text-white p-3 rounded-full shadow-md hover:bg-orange-800"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-orange-700 text-white p-3 rounded-full shadow-md hover:bg-orange-800"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
