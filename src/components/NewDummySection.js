import React, { useState } from "react";
import FSLogo from "../assets/FS_logo.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto flex justify-between items-center px-6 py-2 md:px-10 lg:px-20 xl:px-32">
      {/* Logo */}
      <div className="flex items-center">
        <img src={FSLogo} alt="FS Logo" className="w-10 h-10" />
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Links and Buttons */}
      <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-16 md:top-0 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 p-6 md:p-0 overflow-hidden`}>
        <li>
          <a href="/" className="block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0">HOME</a>
        </li>
        <li>
          <a href="/about-us" className="block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0">ABOUT</a>
        </li>
        <li>
          <a href="/pricing" className="block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0">PRICING</a>
        </li>
        <li>
          <a href="/blog" className="block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0">BLOG</a>
        </li>
        <li>
          <a href="/contact-us" className="block text-black font-medium text-base md:text-lg lg:text-xl hover:text-blue-600 py-2 md:py-0">CONTACT US</a>
        </li>
      </ul>

      {/* Login and Sign Up Buttons */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-3">
        <button className="border border-[#071C6D] text-[#071C6D] px-2 py-1 text-sm sm:text-base md:text-lg rounded-full">LOGIN</button>
        <button className="bg-[#071C6D] text-white px-2 py-1 text-sm sm:text-base md:text-lg rounded-full">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
