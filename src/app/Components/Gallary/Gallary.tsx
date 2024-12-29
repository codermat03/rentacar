import React from "react";
import Image from "next/image";

const Gallery = () => {
  const cars = [
    {
      name: "Sports Car 1",
      imageUrl:
        "https://img.freepik.com/free-photo/modern-car-driving-city_23-2151674271.jpg",
    },
    {
      name: "Sports Car 2",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/034/327/516/small_2x/super-car-wallpaper-for-mobile-screen-ai-generative-photo.jpg",
    },
    {
      name: "Sports Car 3",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVGAg720GlrLURt7_-gRvYMvng9MEkXTDug&s",
    },
    {
      name: "Sports Car 4",
      imageUrl:
        "https://i.pinimg.com/originals/88/e0/c6/88e0c64bbd4e8646b80efdb68025a2c4.jpg",
    },
  ];

  return (
    <section className="p-3 lg:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {cars.map((car, index) => (
          <div key={index} className="relative">
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={500}
              height={300}
              className="w-full h-[200px] sm:h-[300px] lg:h-[500px] md:rounded-[50px] rounded-[15px] object-cover"
            />
            <span className="absolute top-4 left-6 text-white md:text-lg font-bold bg-black bg-opacity-50 p-2 rounded">
              {car.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
