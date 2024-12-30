"use client";
import { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State to toggle mobile menu

  // Function to handle closing the mobile menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white md:py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-orange-600">
              Rent A Car
            </Link>
          </div>

          {/* Main Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-800 hover:text-orange-600 font-bold flex items-center gap-1"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("Services")}
              onMouseLeave={() => setDropdown("")}
            >
              <Link
                href="/allservices"
                className="text-gray-800 hover:text-orange-600 font-bold flex items-center gap-1"
              >
                Services <FaChevronDown />
              </Link>
              {dropdown === "Services" && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-64">
                  <Link
                    href="/allservices/1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Rental With Driver
                  </Link>
                  <Link
                    href="/allservices/2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Business Car Rental
                  </Link>
                  <Link
                    href="/allservices/3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Airport Transfer
                  </Link>
                  <Link
                    href="/allservices/4"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Chauffeur Services
                  </Link>
                  <Link
                    href="/allservices/5"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Luxury Cars
                  </Link>
                  <Link
                    href="/allservices/6"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    SUV Rentals
                  </Link>
                  <Link
                    href="/allservices/7"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Wedding Car Rental
                  </Link>
                  <Link
                    href="/allservices/8"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Long-Term Leasing
                  </Link>
                </div>
              )}
            </div>

            {/* Cars Dropdown */}
            <Link
              href="allcars"
              className="text-gray-800 hover:text-orange-600 font-bold flex items-center gap-1"
            >
              Cars
            </Link>

            <Link
              href="/aboutus"
              className="text-gray-800 hover:text-orange-600 font-bold"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-800 hover:text-orange-600 font-bold"
            >
              Contact
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="flex items-center justify-center font-bold bg-orange-700 p-3 px-4 rounded-3xl transition-all duration-300 group">
                Book A Rent
                <div className="text-white ml-2 flex items-center justify-center rounded-full transition-transform duration-300 -rotate-[50deg] group-hover:rotate-0">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-orange-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-white absolute top-16 left-0 w-full z-50 transition-all duration-500 transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link
          href="/"
          className="block px-6 py-3 text-gray-800 hover:text-orange-600 font-bold"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Home
        </Link>
        <Link
          href="/allservices"
          className="block px-6 py-3 text-gray-800 hover:text-orange-600 font-bold"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Services
        </Link>
        <Link
          href="#cars"
          className="block px-6 py-3 text-gray-800 hover:text-orange-600 font-bold"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Cars
        </Link>
        <Link
          href="#about"
          className="block px-6 py-3 text-gray-800 hover:text-orange-600 font-bold"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          About
        </Link>
        <Link
          href="#contact"
          className="block px-6 py-3 text-gray-800 hover:text-orange-600 font-bold"
          onClick={closeMenu} // Close the menu when link is clicked
        >
          Contact
        </Link>
        <button className="block w-full px-6 py-3 text-white bg-orange-700 hover:bg-orange-600 font-bold rounded-3xl">
          Book A Rent
        </button>
      </div>
    </nav>
  );
}
