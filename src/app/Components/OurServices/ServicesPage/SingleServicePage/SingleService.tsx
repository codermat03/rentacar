import { useEffect, useState } from "react";
import Image from "next/image"; // Importing Next.js Image component

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface SingleServiceProps {
  params: {
    id: string;
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
    // ... other services
  ];

  useEffect(() => {
    // Find the service based on the dynamic id
    const foundService = services.find((data) => data.id === Number(params.id));
    setService(foundService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Image
          src={service.image}
          alt={service.title}
          width={128}
          height={128}
          className="mb-6 rounded-full"
        />
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg mb-6">{service.description}</p>
      </div>
    </div>
  );
};

export default SingleService;
