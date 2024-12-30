/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface SingleServiceProps {
  params: Promise<{ id: string }>;
}

const SingleService: React.FC<SingleServiceProps> = ({
  params: paramsPromise,
}) => {
  const [params, setParams] = useState<{ id: string } | null>(null);
  const [service, setService] = useState<Service | undefined>(undefined);

  const router = useRouter(); // Use the router instance

  const services: Service[] = [
    {
      id: 1,
      title: "Rental With Driver",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image:
        "https://www.shutterstock.com/image-vector/car-driver-icon-vector-graphics-600nw-2283342193.jpg",
      bgColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Business Car Rental",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB35Jckb9n7NmrZMQDJclVJLrKQBlfHE1mVg&s",
      bgColor: "bg-red-500",
    },
    {
      id: 3,
      title: "Airport Transfer",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image:
        "https://cdn3.iconfinder.com/data/icons/carbon-travel-and-ticket/64/airport-transfer-512.png",
      bgColor: "bg-red-500",
    },
    {
      id: 4,
      title: "Chauffeur Services",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqyVF1Xz_YQZLWVCq2lI-amw0vHVv0uRl-g&s",
      bgColor: "bg-red-500",
    },
    {
      id: 5,
      title: "Luxury Cars",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image: "https://cdn-icons-png.flaticon.com/128/18042/18042031.png",
      bgColor: "bg-red-500",
    },
    {
      id: 6,
      title: "SUV Rentals",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png",
      bgColor: "bg-red-500",
    },
    {
      id: 7,
      title: "Wedding Car Rental",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image: "https://cdn-icons-png.flaticon.com/512/3190/3190168.png",
      bgColor: "bg-red-500",
    },
    {
      id: 8,
      title: "Long-Term Leasing",
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image: "https://cdn-icons-png.flaticon.com/512/3159/3159496.png",
      bgColor: "bg-red-500",
    },
  ];

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await paramsPromise;
        setParams(resolvedParams);
      } catch (error) {
        console.error("Failed to resolve params:", error);
      }
    };
    fetchParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (params) {
      const serviceId = Number(params.id);
      const foundService = services.find((service) => service.id === serviceId);
      setService(foundService);
    }
  }, [params]);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading service details...</p>
      </div>
    );
  }

  return (
    <main>
      <section className="bg-white pb-5">
        <section
          className="relative lg:w-[1280px] h-[20vh] md:h-[25vh] lg:h-[55vh] bg-cover bg-center bg-no-repeat rounded-[30px] mx-auto"
          style={{
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp12422886.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[30px]"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold mb-2">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl">
              <span>
                <Link href="/">Home</Link>
              </span>{" "}
              <span>
                <Link href="/allservices">/ Services</Link>
              </span>{" "}
              <span className="text-orange-500">/ Service</span>
            </p>
          </div>
        </section>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-1/3 lg:w-[500px] md:sticky top-28 h-full hidden md:block">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
              <h1 className="md:text-2xl lg:text-3xl font-bold text-black mb-6">
                Our Services
              </h1>
              <div className="flex flex-col space-y-4 text-black">
                {services.map((service) => (
                  <Link key={service.id} href={`/allservices/${service.id}`}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-20">
              <MdMessage className="text-7xl text-black" />
              <h1 className="text-5xl text-black font-bold">Need Help?</h1>
              <p className="text-black">
                We strive to provide exceptional customer service and support.
              </p>
              <div className="flex items-center gap-2">
                <Link href={`/contact`}>
                  {" "}
                  <button className="mt-5 flex items-center justify-center font-bold bg-orange-700 p-3 px-4 text-xl rounded-3xl transition-all duration-300 group">
                    Contact Us
                    <div className="text-white ml-2 flex items-center justify-center rounded-full transition-transform -rotate-[50deg] group-hover:rotate-[0deg] duration-300">
                      <span className="text-xl">
                        <FaArrowRight />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </aside>

          <div className="w-full md:w-2/3 lg:ml-8">
            <div className="md:grid grid-cols-2 gap-3 text-black">
              <div className="hidden md:block">
                <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
                <p className="text-lg leading-relaxed">
                  Experience unparalleled convenience and style with our
                  exceptional service.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8">
                <div className="flex justify-center items-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={192}
                    height={192}
                    className="w-full md:w-48 h-48 rounded-full border-4 border-gray-200 shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleService;
