"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
];

const CarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < cars.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" text-black max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-lg text-red-500 font-bold mb-4">Our Fleets</h2>
      <h1 className="text-2xl md:text-5xl font-bold mb-8">
        Explore our perfect and <br /> extensive fleet
      </h1>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
        >
          {cars.map((car) => (
            <div
              key={car.id}
              className="flex-shrink-0 w-80 bg-white border rounded-lg shadow-md mx-2"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-[340px] h-[220px] rounded-t-lg"
              />
              <div className="p-4 group">
                <span className="text-sm bg-gray-200 rounded-full px-3 py-1 inline-block mb-2">
                  {car.type}
                </span>
                <h3 className="text-xl font-bold mb-2 ">{car.name}</h3>
                <p className="text-sm flex justify-between pb-2">
                  <span>Doors:</span> {car.doors}
                </p>
                <p className="text-sm flex justify-between">
                  <span>Passengers:</span> {car.passengers}
                </p>
                <div className="text-lg font-bold  mt-4 border-t border-gray-400 ">
                  ${car.price}
                  <span className="text-sm font-normal">/Per Day</span>
                </div>
                <button className="bg-orange-700 rounded-full p-2 mt-5 relative z-10 -rotate-[50deg] group-hover:rotate-0 group-hover:bg-black duration-300">
                  <FaArrowRight className="text-3xl text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={prevSlide}
          className="bg-red-500 text-white p-3 rounded-full mx-2 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          onClick={nextSlide}
          className="bg-red-500 text-white p-3 rounded-full mx-2 disabled:opacity-50"
          disabled={currentIndex === cars.length - 3}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default CarSlider;
