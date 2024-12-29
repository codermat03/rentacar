import React from "react";
import {
  SiAudi,
  SiBmw,
  SiFord,
  SiHonda,
  SiMercedes,
  SiTesla,
  SiToyota,
  SiVolkswagen,
} from "react-icons/si";

const OurBrands = () => {
  const carBrands = [
    { id: 1, icon: <SiToyota />, name: "Toyota" },
    { id: 2, icon: <SiMercedes />, name: "Mercedes-Benz" },
    { id: 3, icon: <SiBmw></SiBmw>, name: "BMW" },
    { id: 4, icon: <SiAudi />, name: "Audi" },
    { id: 5, icon: <SiFord />, name: "Ford" },
    { id: 6, icon: <SiTesla />, name: "Tesla" },
    { id: 7, icon: <SiHonda />, name: "Honda" },
    { id: 8, icon: <SiVolkswagen />, name: "Volkswagen" }, // FaCarAlt is used as a generic car icon
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto text-center bg-pink-50 p-10">
        <p className="text-orange-500 text-sm font-semibold uppercase mb-2">
          Our Partners
        </p>
        <h2 className="text-2xl text-black md:text-4xl font-bold mb-8">
          Trusted by Leading Car Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-10">
          {carBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-5xl text-gray-700 mb-2">{brand.icon}</div>
                <p className="text-sm font-bold text-gray-700">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
