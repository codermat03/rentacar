"use client";
import React, { useState } from "react";

const CarCompanies = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Video Section */}
        <div className="relative rounded-xl overflow-hidden max-w-7xl mx-auto h-[400px] lg:h-[600px]">
          {!isVideoPlaying ? (
            // Cover Image with Play Button
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-psd/car-rental-automotive-web-banner-template_106176-2540.jpg?semt=ais_hybrid')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={handlePlayClick}
                  className="bg-red-500 w-28 h-28 flex justify-center items-center rounded-full hover:bg-red-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 5.75v12.5l10.5-6.25-10.5-6.25z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            // YouTube Video
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1"
              title="Car Rental Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          )}
        </div>

        {/* Companies Logos */}
        <div className="flex justify-center items-center gap-8 flex-wrap mt-10">
          <img
            src="https://via.placeholder.com/120x40?text=Honda"
            alt="Honda"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/120x40?text=Mercedes-Benz"
            alt="Mercedes-Benz"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/120x40?text=Audi"
            alt="Audi"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/120x40?text=Jaguar"
            alt="Jaguar"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/120x40?text=Volkswagen"
            alt="Volkswagen"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/120x40?text=Acura"
            alt="Acura"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default CarCompanies;
