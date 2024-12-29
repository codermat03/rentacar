"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Our Vision");
  const [isClient, setIsClient] = useState(false); // Flag to detect client-side

  useEffect(() => {
    // Ensure client-side rendering only
    setIsClient(true);
  }, []);

  const tabs = [
    {
      name: "Our Vision",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pioneering excellence in <br /> car rental services
            </h3>
            <p className="text-gray-700 mb-4">
              We aim to continually innovate and integrate the latest technology
              into our services. From easy online bookings to advanced vehicle
              tracking systems, our goal is to make the car rental process
              seamless and efficient for our customers. Quality is at the heart
              of everything we do.
            </p>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Our customers are our top priority
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Quality is at the heart of everything we do
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Every vehicle leaves care looking its absolute best
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            {isClient && (
              <Image
                src="https://t4.ftcdn.net/jpg/05/83/93/43/360_F_583934340_e5cCd7fHZDNyvhTyABV2XtsjbSPKAC9X.jpg"
                alt="Our Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      ),
    },
    {
      name: "Our Mission",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Redefining customer-centric <br /> car rental services
            </h3>
            <p className="text-gray-700 mb-4">
              Our mission is to provide unparalleled service and support to our
              customers. We focus on offering tailored rental solutions that
              meet diverse needs.
            </p>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Providing tailored rental solutions
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Ensuring a hassle-free experience
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Setting industry standards in service excellence
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            {isClient && (
              <Image
                src="https://car-images.bauersecure.com/wp-images/3695/chevrolet-corvette-z06.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      ),
    },
    {
      name: "Our Approach",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Innovative and <br /> customer-first approach
            </h3>
            <p className="text-gray-700 mb-4">
              We combine innovation, technology, and customer feedback to
              consistently enhance our services. From booking to returning the
              vehicle, we’re with you every step of the way.
            </p>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Embracing innovation to stay ahead
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Prioritizing customer satisfaction
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span>
                <span className="text-gray-700">
                  Delivering consistent and reliable service
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            {isClient && (
              <Image
                src="https://news.dupontregistry.com/wp-content/uploads/2024/11/Hennessey-Venom-Main-1080x570.jpg"
                alt="Our Approach"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-center text-2xl font-bold text-red-500 mb-4">
        Vision Mission
      </h1>
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
        Driving excellence and innovation in <br /> car rental services
      </h2>

      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 md:px-6 py-2 mx-1 md:mx-2 rounded-full font-semibold ${
              activeTab === tab.name
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-md">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="w-full">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tab;
