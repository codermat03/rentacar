import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link";

const ReadyToHit = () => {
  return (
    <div className="text-white rounded-5xl py-16 px-8 max-w-7xl mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Ready to hit the road? <br />
            <span className="text-red-500">Book Your Car Today.</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Explore our premium car rental options and experience hassle-free
            booking today. With us, your journey starts with comfort and
            reliability.
          </p>
          <div className="flex items-center gap-2">
            <Link href={`/contact`}>
              {" "}
              <button className="flex items-center justify-center font-bold bg-orange-700 p-3 px-4 text-xl rounded-3xl transition-all duration-300 group">
                Contact Us
                <div className="text-white ml-2 flex items-center justify-center rounded-full transition-transform -rotate-[50deg] group-hover:rotate-[0deg] duration-300">
                  <span className="text-xl">
                    <FaArrowRight />
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="https://askaricars.com/wp-content/uploads/2023/11/Askari-rent-a-car-service-1024x788.jpg" // Replace with the image URL
            alt="Car"
            width={600} // Set the width
            height={400} // Set the height
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToHit;
