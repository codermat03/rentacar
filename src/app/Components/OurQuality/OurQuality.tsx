import { IoMdOptions } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";

import React from "react";
import Image from "next/image";

const OurQuality = () => {
  return (
    <section className="py-16 text-black max-w-7xl mx-auto p-5">
      <div>
        <h1 className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Unmatched quality and service <br /> for your needs
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-8">
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <IoMdOptions className="text-5xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Extensive Fleet Options</h3>
            <p className="text-gray-500 mt-2">
              Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
              Phasellus Hendrerit, Massa
            </p>
          </div>
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <RiCustomerService2Fill className="text-5xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">
              Exceptional Customer Service
            </h3>
            <p className="text-gray-500 mt-2">
              Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
              Phasellus Hendrerit, Massa
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="https://askaricars.com/wp-content/uploads/2023/11/Askari-rent-a-car-service-1024x788.jpg"
            alt="Askari Rent a Car"
            width={1024}
            height={788}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left space-y-8">
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <IoLocationSharp className="text-5xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Convenient Locations</h3>
            <p className="text-gray-500 mt-2">
              Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
              Phasellus Hendrerit, Massa
            </p>
          </div>
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MdHealthAndSafety className="text-5xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Reliability And Safety</h3>
            <p className="text-gray-500 mt-2">
              Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
              Phasellus Hendrerit, Massa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurQuality;
