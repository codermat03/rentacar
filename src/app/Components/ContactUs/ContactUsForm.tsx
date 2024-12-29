import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactUsForm = () => {
  return (
    <section className="md:py-16 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information Section */}
        <div className="bg-black text-white rounded-lg p-10 relative order-2 lg:order-1">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-sm mb-6">Say something to start a live chat!</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl text-orange-500" />
              <p>(+01) 789 854 856</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-orange-500" />
              <p>info@domain.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl text-orange-500" />
              <p>
                1234 Elm Street, Suite 567
                <br />
                Springfield, United States
              </p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <Link
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <FaInstagram />
            </Link>
          </div>
          {/* Background Decoration */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <div className="bg-gray-100 h-40 w-40 rounded-full"></div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-10 rounded-lg shadow-lg order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Your Number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Write Your Message"
              className="mt-1 block w-full h-[150px] border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
            ></textarea>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
