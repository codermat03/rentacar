import React from "react";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-10 relative max-w-7xl mx-auto px-6">
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
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Legal Notice
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/allcars" className="hover:underline">
                Car Types
              </Link>
            </li>
            <li>
              <Link href="/allservices" className="hover:underline">
                Services
              </Link>
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

        {/* CoderMat Credit */}
        <p className="mt-4 sm:mt-0">
          Built with by{" "}
          <Link
            href="https://codermat.com"
            className="text-orange-500 hover:underline"
            target="_blank"
          >
            CoderMat
          </Link>
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {[
            { icon: <FaYoutube />, label: "YouTube", href: "#" },
            { icon: <FaFacebook />, label: "Facebook", href: "#" },
            { icon: <FaTwitter />, label: "Twitter", href: "#" },
            { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition"
              aria-label={social.label}
            >
              <div className="text-white text-lg">{social.icon}</div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
