import React from "react";
import CarsCover from "../Components/Cars/CarsPage/CarsCover";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Importing next/image for optimized images
import Link from "next/link";

const AllCars = () => {
  const cars = [
    {
      id: 1,
      type: "Coupe Car",
      name: "Eclipse Sedan",
      image:
        "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/12/mitsubishi-eclipse-rendering.jpg",
      doors: 4,
      passengers: 2,
      price: 139,
    },
    {
      id: 2,
      type: "Convertible Car",
      name: "Breeze Compact",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwXS7vb6__XSbCSSABt0IH7i6G441uCP4mVX3IVbGwgVDlG93ueMlmdi92WRl25Ux6GQ&usqp=CAU",
      doors: 4,
      passengers: 2,
      price: 139,
    },
    {
      id: 3,
      type: "Luxury Car",
      name: "Voyager GT",
      image:
        "https://ivee.rentals/wp-content/uploads/2024/08/fleets-slider-img-1-1.jpg",
      doors: 4,
      passengers: 1,
      price: 259,
    },
    {
      id: 4,
      type: "Coupe Car",
      name: "Viper SXT",
      image:
        "https://images.classic.com/vehicles/1378c683e2e68caa4ba9b4681ca8e5538c166065.jpg?auto=format&fit=crop&w=600&h=384",
      doors: 4,
      passengers: 2,
      price: 329,
    },
    {
      id: 5,
      type: "Electric Car",
      name: "Voyager Hybrid",
      image:
        "https://cdn.motor1.com/images/mgl/2gJgp/s3/2021-chrysler-pacifica-hybrid.jpg",
      doors: 4,
      passengers: 2,
      price: 248,
    },
    {
      id: 6,
      type: "Coupe Car",
      name: "Eclipse Sedan",
      image:
        "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/12/mitsubishi-eclipse-rendering.jpg",
      doors: 4,
      passengers: 2,
      price: 139,
    },
  ];

  return (
    <div className="bg-white">
      <CarsCover></CarsCover>
      <div className=" text-black max-w-7xl mx-auto px-4 py-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white border rounded-lg shadow-md">
              <Image
                src={car.image}
                alt={car.name}
                width={500} // Add width for better optimization
                height={500} // Add height for better optimization
                className="w-[400px] h-[250px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <span className="text-sm bg-gray-200 rounded-full px-3 py-1 inline-block mb-2">
                  {car.type}
                </span>
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-sm flex justify-between pb-2">
                  <span>Doors:</span> {car.doors}
                </p>
                <p className="text-sm flex justify-between pb-2">
                  <span>Passengers:</span> {car.passengers}
                </p>
                <div className="text-lg font-bold mt-4 border-t border-gray-400 pt-2">
                  ${car.price}
                  <span className="text-sm font-normal">/Per Day</span>
                </div>
                <div className="flex justify-center sm:justify-start mt-5">
                  <Link href="/contact">
                    <button className="flex items-center justify-center bg-orange-700 text-white font-bold text-sm sm:text-base px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:bg-orange-900 group">
                      Book Now
                      <div className="text-white ml-2 flex items-center justify-center rounded-full transition-transform -rotate-[50deg] group-hover:rotate-[0deg] duration-300">
                        <span className="text-lg sm:text-xl">
                          <FaArrowRight />
                        </span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCars;
