import React from "react";
import Image from "next/image"; // Import Image from next/image

const StayInFormed = () => {
  return (
    <div className="bg-white text-black max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Stay informed and inspired for <br className="hidden sm:block" /> your
          next journey
        </h1>
      </div>

      {/* Articles Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Main Article */}
        <div className="relative group">
          <Image
            src="https://ajaycarrental.com/images/blog/book-car-for-Roadtrip.jpg"
            alt="Main Article"
            width={600} // Set the width
            height={400} // Set the height
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">August 5, 2024</p>
            <h2 className="text-lg sm:text-xl font-bold">
              Top Tips For Booking Your Car Rental: <br /> What You Need To Know
            </h2>
          </div>
        </div>

        {/* Side Articles */}
        <div className="space-y-8">
          {[
            {
              title:
                "Exploring Your Rental Car Options: Sedan, SUV, Or Convertible?",
              image:
                "https://www.enterprise.com/en/exotic-car-rental/_jcr_content/root/container/container/container_1060086341/teaser.coreimg.jpeg/1708936909048/explore-our-vehicles-1920x1080-vehicles.jpeg",
            },
            {
              title:
                "The Pros And Cons Of Renting A Car Vs. Using Rideshare Services",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4JKvhv9iqZLTcxnX6xEbsAUK_giRbFUoMw&s",
            },
            {
              title:
                "Why You Should Consider Renting A Luxury Car For Your Next Trip",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAvsuk-uf2lSTjgF3GrUbs-istNd43WVYsg&s",
            },
          ].map((article, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 border-b pb-4"
            >
              <Image
                className="w-full sm:w-28 h-28 object-cover rounded-md"
                src={article.image}
                alt={`Article ${idx + 1}`}
                width={112} // Set the width
                height={112} // Set the height
              />
              <div>
                <p className="text-sm text-gray-500">August 5, 2024</p>
                <h3 className="text-lg sm:text-xl font-bold max-w-[400px] mx-auto py-2">
                  {article.title}
                </h3>
                <button className="hover:text-red-500 transition-colors text-orange-700 text-sm font-bold">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayInFormed;
