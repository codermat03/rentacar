import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const OurTeam = () => {
  // Array of team members
  const teamMembers = [
    {
      name: "John Smith",
      role: "Senior Chauffeur",
      image:
        "https://img.freepik.com/premium-photo/labor-day-man-worker-builder-safety-helmet-safety-uniform_148391-12901.jpg",
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      name: "Taylor Smith",
      role: "City Tour Guide",
      image:
        "https://img.freepik.com/premium-photo/labor-day-man-worker-builder-safety-helmet-safety-uniform_148391-12903.jpg",
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      name: "Jordan Brown",
      role: "Distance Driver",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANFHxFLUyDLwd_yOFfSLFH2FiqfDSfDHBn-_365BI_8EZAL6-QpRjZVfcjRlWng42M8o&usqp=CAU",
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      name: "Davis Casey",
      role: "Travel Specialist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyV09OpEejiiB0HLpiMMiCunjKAU62f1dbzjoR-Ipk4_zFMOts3KNATU9jqUVgOyZNedU&usqp=CAU",
      social: [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
      ],
    },
  ];

  return (
    <div className="md:py-10 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-orange-600 uppercase mb-4">
          Our Experienced Drivers
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Ensuring your safety <br /> on every journey
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="h-[300px] w-full object-cover rounded-lg"
              />

              {/* Social Media Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  {member.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-orange-400 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
