import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat md:min-h-[70vh] lg:h-[80vh]  pb-10 md:pb-0"
      style={{
        backgroundImage:
          "url('https://westcoastluxuryrentals.com/wp-content/uploads/2020/12/X_Fleet_EDT-1110x577.jpg')",
        borderRadius: "50px",
      }}
    >
      {/* Overlay */}
      <div className="absolute rounded-[50px] inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="pt-20 md:pt-0 relative z-10 container mx-auto px-6 lg:px-20 flex flex-col items-center justify-center h-full">
        <div className="md:pt-10 text-center text-white">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Looking to save more on <br /> your rental car?
          </h1>
          <p className="text-sm md:text-xl mt-4 max-w-[700px]">
            Whether you’re planning a weekend getaway, a business trip, or just
            need a reliable ride for the day, we offers a wide range of vehicles
            to suit your needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 py-10 sm:py-16 w-full justify-center">
          <button className="bg-orange-700 font-bold p-3 sm:p-5 px-4 sm:px-5 text-lg sm:text-2xl rounded-3xl w-full sm:w-auto">
            Book A Rental
          </button>
          <button className="flex items-center justify-center font-bold bg-white text-black p-3 sm:p-5 px-4 sm:px-5 text-lg sm:text-2xl rounded-3xl transition-all duration-300 group w-full sm:w-auto">
            Learn More
            <div className="text-white ml-2 flex items-center justify-center rounded-full transition-transform -rotate-[50deg] group-hover:rotate-[0deg] duration-300">
              <span className="text-sm sm:text-xl text-black">
                <FaArrowRight />
              </span>
            </div>
          </button>
        </div>

        {/* Form Section */}
        <div className="mt-10 md:mt-0 bg-white shadow-lg rounded-3xl px-4 sm:px-8 py-4 sm:py-6 w-full md:w-[831px]  lg:w-[1000px] md:max-w-6xl lg:flex">
          <h1 className="text-black font-bold text-lg sm:text-xl min-w-[150px] pr-4 sm:pr-6 md:mb-5 lg:mb-0">
            Need to Rent <br />
            Luxury Car?
          </h1>
          <form className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start gap-4 sm:gap-6 px-2 mt-4 sm:mt-0">
            {/* Full Name */}
            <div className="w-full sm:flex-1 border-r pr-4 sm:pr-6">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="text-gray-500 py-3 rounded-lg w-full focus:outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div className="w-full sm:flex-1 border-r pr-4 sm:pr-6">
              <label
                htmlFor="mobileNumber"
                className="block text-gray-700 font-medium mb-2"
              >
                Mobile Number
              </label>
              <input
                id="mobileNumber"
                type="tel"
                placeholder="Enter your mobile no:"
                className="text-gray-500 py-3 rounded-lg w-full focus:outline-none"
              />
            </div>

            {/* Pickup Location */}
            <div className="w-full sm:flex-1 border-r pr-4 sm:pr-6">
              <label
                htmlFor="pickupLocation"
                className="block text-gray-700 font-medium mb-2"
              >
                Pickup Location
              </label>
              <input
                id="pickupLocation"
                type="text"
                placeholder="Enter pickup location"
                className="text-gray-500 py-3 rounded-lg w-full focus:outline-none"
              />
            </div>

            {/* Pickup Date */}
            <div className="w-full sm:flex-1 border-r pr-4 sm:pr-6">
              <label
                htmlFor="pickupDate"
                className="block text-gray-700 font-medium mb-2"
              >
                Pickup Date
              </label>
              <input
                id="pickupDate"
                type="date"
                className="text-gray-500 py-3 rounded-lg w-full focus:outline-none"
              />
            </div>

            {/* Button */}
            <div className="w-full sm:w-auto lg:mt-7">
              <button
                type="submit"
                className="bg-orange-700 hover:bg-orange-900 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
