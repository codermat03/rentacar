import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AllServices = () => {
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
    {
      id: 5,
      title: "Luxury Cars",
      description: "Travel in style and luxury with our premium cars.",
      image: "https://cdn-icons-png.flaticon.com/128/18042/18042031.png",
      bgColor: "bg-red-500",
    },
    {
      id: 6,
      title: "SUV Rentals",
      description: "Perfect for group travel or off-road adventures.",
      image: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png",
      bgColor: "bg-red-500",
    },
    {
      id: 7,
      title: "Wedding Car Rental",
      description: "Make your special day even more memorable with our cars.",
      image: "https://cdn-icons-png.flaticon.com/512/3190/3190168.png",
      bgColor: "bg-red-500",
    },
    {
      id: 8,
      title: "Long-Term Leasing",
      description: "Ideal for corporate or personal extended use.",
      image: "https://cdn-icons-png.flaticon.com/512/3159/3159496.png",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-xl border-2 p-6 group relative overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mb-6 w-[130px] rounded-full relative z-10"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-white relative z-10">
              {service.title}
            </h3>
            <p className="text-gray-600 group-hover:text-white relative z-10">
              {service.description}
            </p>
            <Link href={`/allservices/${service.id}`}>
              <button className="bg-orange-700 rounded-full p-2 mt-5 relative z-10 -rotate-[50deg] group-hover:rotate-0 group-hover:bg-black duration-300">
                <FaArrowRight className="text-3xl text-white" />
              </button>
            </Link>
            <span
              className={`absolute bottom-0 left-0 w-full h-full ${service.bgColor} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
