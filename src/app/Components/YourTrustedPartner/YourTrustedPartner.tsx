import React from "react";
import Image from "next/image"; // Importing the Image component from Next.js
import { FaArrowRight } from "react-icons/fa";

const TrustedPartnerSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center items-start">
            {/* Top Image */}
            <Image
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg"
              alt="Car rental service 1"
              className="w-full sm:w-3/4 lg:w-2/3 rounded-lg shadow-lg"
              width={800} // You can adjust the width
              height={600} // You can adjust the height
            />
            {/* Bottom Image */}
            <Image
              src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_3.0,f_auto,fl_progressive,g_center,h_409,q_auto:good,w_623/v1714550815/lnwdyfmtdijlo4btlqo2.webp"
              alt="Car rental service 2"
              className="absolute w-1/2 sm:w-1/3 lg:w-1/3 rounded-lg shadow-lg bottom-[-20px] right-[-20px] sm:bottom-[-20px] sm:right-[-40px] border-4 border-white"
              width={400} // You can adjust the width
              height={300} // You can adjust the height
            />
          </div>

          {/* Text Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center sm:text-left">
              Your trusted partner in <br /> reliable car rental
            </h2>
            <p className="text-gray-600 text-base sm:text-lg text-center sm:text-left">
              We provide top-tier car rental services designed to meet all your
              travel needs. With a fleet of reliable vehicles, you can trust us
              to ensure your comfort, safety, and convenience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full mt-[6px] sm:mt-2"></span>
                <p className="text-gray-600 text-sm sm:text-base">
                  Choose from a wide range of cars, including sedans, SUVs, and
                  luxury vehicles.
                </p>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full mt-[6px] sm:mt-2"></span>
                <p className="text-gray-600 text-sm sm:text-base">
                  Affordable pricing options with no hidden fees.
                </p>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full mt-[6px] sm:mt-2"></span>
                <p className="text-gray-600 text-sm sm:text-base">
                  Dedicated customer support available 24/7.
                </p>
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start mt-5">
              <button className="flex items-center justify-center bg-orange-700 text-white font-bold text-sm sm:text-base px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:bg-orange-900 group">
                Contact Us
                <div className="text-white ml-2 flex items-center justify-center rounded-full transition-transform -rotate-[50deg] group-hover:rotate-[0deg] duration-300">
                  <span className="text-lg sm:text-xl">
                    <FaArrowRight />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;
