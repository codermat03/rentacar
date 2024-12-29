import Link from "next/link";
import React from "react";

const AboutUsCover = () => {
  return (
    <div className="flex justify-center items-center">
      <section
        className="relative w-[1280px] h-[20vh] md:h-[25vh] lg:h-[55vh] bg-cover bg-center bg-no-repeat rounded-[30px]"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/62/51/76/360_F_562517637_cRcbpMBacqnl89fjdvlGgc77PixfpfOF.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-[30px]"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">About Us</h1>
          <p className="text-lg md:text-xl">
            <span>
              <Link href="/">Home</Link>
            </span>{" "}
            <span></span> <span className="text-orange-500">/ About us</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsCover;
