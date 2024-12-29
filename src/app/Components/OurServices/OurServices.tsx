import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Rental With Driver",
      description: "Enhance your rental experience with additional options.",
      image:
        "https://www.shutterstock.com/image-vector/car-driver-icon-vector-graphics-600nw-2283342193.jpg",
      bgColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Business Car Rental",
      description: "Enhance your rental experience with additional options.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB35Jckb9n7NmrZMQDJclVJLrKQBlfHE1mVg&s",
      bgColor: "bg-red-500",
    },
    {
      id: 3,
      title: "Airport Transfer",
      description: "Enhance your rental experience with additional options.",
      image:
        "https://cdn3.iconfinder.com/data/icons/carbon-travel-and-ticket/64/airport-transfer-512.png",
      bgColor: "bg-red-500",
    },
    {
      id: 4,
      title: "Chauffeur Services",
      description: "Enhance your rental experience with additional options.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqyVF1Xz_YQZLWVCq2lI-amw0vHVv0uRl-g&s",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 bg-[#FFF8F6] rounded-3xl max-w-7xl mx-auto">
      <div className="container px-6 lg:px-20">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800">
            Explore our wide range of <br /> rental services
          </h2>
          <p className="text-gray-600 mt-4">
            Choose the perfect car for every occasion. We offer a variety of
            vehicles to meet all your travel needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 group relative overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={130} // Set width for the image
                height={130} // Set height for the image
                className="mb-6 w-[130px] rounded-full relative z-10"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-white relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white relative z-10">
                {service.description}
              </p>
              <button className="bg-orange-700 rounded-full p-2 mt-5 relative z-10 -rotate-[50deg] group-hover:rotate-0 group-hover:bg-black duration-300">
                <FaArrowRight className="text-3xl text-white" />
              </button>
              <span
                className={`absolute bottom-0 left-0 w-full h-full ${service.bgColor} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}
              ></span>
            </div>
          ))}
        </div>

        <div className="pt-14 text-black text-center">
          <p>
            Discover our range of car rental services designed to meet all your
            travel needs. <br /> From a diverse fleet of vehicles to flexible
            rental plans.
          </p>
          <div className="flex justify-center mt-5">
            <Link
              href="/allservices"
              className="bg-orange-700 text-white w-[180px] md:w-[250px] md:text-2xl px-4 py-3 rounded-3xl hover:bg-orange-800 flex items-center gap-2 group"
            >
              View All Services
              <span className="transition-transform group-hover:duration-300 -rotate-[50deg] group-hover:rotate-0">
                <FaArrowRight className="md:text-2xl" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
