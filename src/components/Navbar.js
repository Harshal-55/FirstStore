import { useEffect } from "react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FSLogo from "../assets/FS_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isActive = (path) => location.pathname === path; 

  return (
    <nav className="w-full container mx-auto flex justify-between items-center px-6 py-2 md:px-10 lg:px-20 xl:px-32 overflow-hidden">
      {/* Logo */}
      <div className="flex items-center">
        <img src={FSLogo} alt="FS Logo" className="w-10 h-10" />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`text-black p-2 rounded-full ${isMenuOpen ? "bg-white shadow-md" : ""} md:hidden`}
        style={{ zIndex: 60 }} // Inline style for higher priority
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6 absolute right-2 top-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

    

      {/* Links and Buttons */}
      <ul
        className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-0 md:top-0 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 inset-x-0 p-6 md:p-0 overflow-hidden z-50 h-screen md:h-auto`}>
        <li>
          <a
            href="/"
            className={`block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0 ${
              isActive("/") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="/about-us"
            className={`block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0 ${
              isActive("/about-us") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="/pricing-section"
            className={`block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0 ${
              isActive("/pricing-section") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            PRICING
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={`block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0 ${
              isActive("/blog") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="/contact-us"
            className={`block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0 ${
              isActive("/contact-us") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            CONTACT US
          </a>
        </li>
      </ul>

      {/* Login and Sign Up Buttons */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-3 lg:mb-4">
        <button className="border border-[#071C6D] text-[#071C6D] px-4 py-3 text-sm sm:text-base md:text-lg rounded-full font-bold">
          LOGIN
        </button>
        <button className="bg-[#071C6D] text-white px-4 py-3 text-sm sm:text-base md:text-lg rounded-full font-bold">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
