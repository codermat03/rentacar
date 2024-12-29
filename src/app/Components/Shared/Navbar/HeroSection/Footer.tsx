import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-10 relative max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Rent A Car</h2>
          <p className="mt-2 text-sm">
            Experience the ease and convenience of renting a car with Rent A
            Car.
          </p>
        </div>

        {/* Legal Policy */}
        <div>
          <h3 className="font-semibold text-lg">Legal Policy</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Car Types
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg">Subscribe to Our Newsletter</h3>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Copyright */}
        <p>© 2024 Rent A Car. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {[
            { icon: "fab fa-youtube", label: "YouTube" },
            { icon: "fab fa-facebook", label: "Facebook" },
            { icon: "fab fa-twitter", label: "Twitter" },
            { icon: "fab fa-linkedin", label: "LinkedIn" },
          ].map((social, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={social.label}
              className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <i className={`${social.icon} text-white`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
