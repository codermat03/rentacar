"use client";
import { useEffect, useState } from "react";

// Define the Service type
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

// Define the props type for the component
interface SingleServiceProps {
  params: {
    id: string; // The dynamic route parameter will be a string
  };
}

const SingleService = ({ params }: SingleServiceProps) => {
  const [service, setService] = useState<Service | undefined>(undefined);

  const services: Service[] = [
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
      description:
        "This service provides a convenient rental option with an experienced driver to assist you on your journey. Whether you're planning a business trip or a leisurely vacation, having a driver allows you to relax, avoid the stress of navigating unfamiliar roads, and focus on your work or leisure activities. With a variety of vehicles to choose from, you can select the perfect car to suit your needs. Our drivers are professional, punctual, and knowledgeable about local areas, ensuring that your trip is smooth and efficient. From airport transfers to city tours, this service guarantees comfort and reliability, making your travel experience truly enjoyable. Additionally, we offer flexible rental durations and pricing options to fit your schedule and budget. The convenience of a rental car with a driver provides an unmatched level of flexibility, allowing you to adjust your travel plans on the go, without worrying about directions, parking, or fuel. Our drivers are also trained to ensure the safety of all passengers, following strict safety protocols to maintain a secure and comfortable journey at all times. If you're looking for a hassle-free travel experience with the convenience of a dedicated driver, our rental service is the perfect solution. Whether for a day, a week, or longer, we have the right vehicle and driver ready to make your trip unforgettable.",
      image: "https://cdn-icons-png.flaticon.com/512/3159/3159496.png",
      bgColor: "bg-red-500",
    },
  ];

  useEffect(() => {
    // Find the service based on the dynamic id
    const foundService = services.find((data) => data.id === Number(params.id));
    setService(foundService);
  }, [params.id]);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading service details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-20 p-8 bg-white rounded-lg shadow-lg">
      <div
        className={`p-6 rounded-lg text-white flex flex-col items-center ${service.bgColor}`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-32 h-32 mb-6 rounded-full"
        />
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg mb-6">{service.description}</p>
      </div>
    </div>
  );
};

export default SingleService;
