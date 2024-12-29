import Link from "next/link";
import React from "react";

const ServicesCover = () => {
  return (
    <div className="flex justify-center items-center">
      <section
        className="relative w-[1280px] h-[20vh] md:h-[25vh] lg:h-[55vh] bg-cover bg-center bg-no-repeat rounded-[30px]"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/026/992/343/small_2x/classic-modified-car-with-dark-smokie-background-ai-generative-free-photo.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[30px]"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Services</h1>
          <p className="text-lg md:text-xl">
            <span>
              <Link href="/">Home</Link>
            </span>{" "}
            <span className="text-orange-500">/ Services</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesCover;