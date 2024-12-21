import React from "react";
import Hero_img from "../assets/hero_image.png";
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.jpg";
import EmpBusiness from "../assets/Rectangle 72.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import businessimg1 from "../assets/skechers_usa_logo.svg.png";
import businessimg2 from "../assets/wework_logo.svg.png";
import businessimg3 from "../assets/soulcycle_logo.png.png";
import businessimg4 from "../assets/figma_logo.svg.png";
import businessimg5 from "../assets/google_logo.svg.png";
import businessimg6 from "../assets/verano_logo.svg.png";
import businessimg7 from "../assets/hugo_boss_icon.jpeg.png"
import businessimg8 from "../assets/slack_logo.svg.png"
import businessimg9 from "../assets/stripe_logo.svg.png";
import businessimg10 from "../assets/microsoft_logo.svg.png";
import solution1 from "../assets/solution1.png";
import solution2 from "../assets/solution2.png";
import solution3 from "../assets/solution3.png";
import solution4 from "../assets/solution4.png";
import solution5 from "../assets/solution5.png";


const HeroSection = () => {
  return (
    <div className="container mx-auto lg:px-4 bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-2 py-3 lg:px-6 lg:py-10 mx-1 lg:mx-2">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6 mx-1 lg:mx-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-snug text-gray-800">
            Launch Your Online Store with FirstStore
          </h1>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600">
            Unleash Your Business Potential with FirstStore: Your All-in-One Solution for Seamless Online and Offline Business Management.
          </p>
          <button className="bg-[#071C6D] text-white px-4 py-2 rounded-full text-sm sm:text-base lg:text-lg">
            Get Started
          </button>
          {/* Customer Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <img
                src={customer1}
                className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 rounded-full border-2 border-white"
                alt="Customer"
              />
              <img
                src={customer2}
                className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 rounded-full border-2 border-white"
                alt="Customer"
              />
              <img
                src={customer3}
                className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 rounded-full border-2 border-white"
                alt="Customer"
              />
            </div>
            <p className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">
              Our Happy Customer ⭐ 4.8 (12.5k Reviews)
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 space-y-4 mx-1 lg:mx-8">
          {/* Image only */}
          <img src={Hero_img} className="w-full lg:w-auto" alt="Groceries" />
        </div>
      </div>

      {/* Next Section 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-2 py-3 lg:px-10 lg:py-12 mx-1 lg:mx-2">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-4 mx-1 lg:mx-10 mb-2">
          {/* Image only */}
          <img src={EmpBusiness} className="rounded-lg w-full lg:w-[100%]" alt="Groceries" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 space-y-4 mx-1 lg:mx-10">
          <p className="font-sans text-xs sm:text-sm lg:text-xl font-bold leading-snug text-[#071C6D]">
            Empowering Businesses with Comprehensive E-Commerce Solutions
          </p>
          <p className="text-xs sm:text-sm lg:text-lg text-gray-600">
            FirstStore is an all-in-one e-commerce platform crafted to meet the diverse needs of small and medium businesses (SMBs). It provides the tools necessary to create and manage online stores effortlessly. With features like customizable themes, responsive designs, inventory management, and seamless payment integration, FirstStore simplifies the journey from traditional to digital commerce.
          </p>
        </div>
      </div>

      {/* Next Section 2 */}
      <div className="flex flex-col items-center justify-center px-4 py-8 space-y-4 lg:space-y-0 lg:space-x-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-black mb-4 lg:mb-16">
            Popular Categories
        </h1>
        <div className="flex flex-wrap justify-center space-x-8">

        <img src={category2} className="w-1/5 sm:w-1/6 border-2 border-white" alt="Category 2" />
        <img src={category3} className="w-1/5 sm:w-1/6 border-2 border-white" alt="Category 3" />
        <img src={category4} className="w-1/5 sm:w-1/6 border-2 border-white" alt="Category 4" />
        <img src={category5} className="w-1/5 sm:w-1/6 border-2 border-white" alt="Category 5" />
        <img src={category6} className="w-1/5 sm:w-1/6 border-2 border-white" alt="Category 6" />
        </div>
        <div className="flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-sans text-xl sm:text-xl lg:text-4xl font-bold leading-snug text-[#071C6D] mt-2 lg:mt-32 text-center mb-2 lg:mb-28">
          A Reliable Growth Partner For Businesses Of All Sizes
        </h2>
        
        {/* Images Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16 mt-6">
          <img
            src={businessimg1}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 1"
          />
          <img
            src={businessimg2}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 2"
          />
          <img
            src={businessimg3}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 3"
          />
          <img
            src={businessimg4}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 4"
          />
          <img
            src={businessimg5}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 5"
          />
          <img
            src={businessimg6}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 6"
          />
          <img
            src={businessimg7}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 7"
          />
          <img
            src={businessimg8}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 8"
          />
          <img
            src={businessimg9}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 9"
          />
          <img
            src={businessimg10}
            className="w-full h-auto rounded-lg border-2 border-white"
            alt="Category 10"
          />
        </div>
      </div>
      <div className="container mx-auto px-2 lg:px-4">
        <h2 className="text-5xl font-bold text-start mb-10 mt-10 lg:mx-10 mx-4">Solutions</h2>
        <div className="flex flex-wrap justify-center space-x-3 lg:space-x-6">
          <img src={solution1} className="w-1/4 sm:w-1/5 md:w-auto rounded-lg border-2 border-white mb-2 md:mb-4 mx-1 md:mx-2 transform transition-transform duration-300 hover:translate-y-1" alt="solution 1" />
          <img src={solution2} className="w-1/4 sm:w-1/5 md:w-auto rounded-lg border-2 border-white mb-2 md:mb-4 mx-1 md:mx-2 transform transition-transform duration-300 hover:-translate-y-1" alt="solution 2" />
          <img src={solution3} className="w-1/4 sm:w-1/5 md:w-auto rounded-lg border-2 border-white mb-2 md:mb-4 mx-1 md:mx-2 transform transition-transform duration-300 hover:translate-y-1" alt="solution 3" />
          <img src={solution4} className="w-1/4 sm:w-1/5 md:w-auto rounded-lg border-2 border-white mb-2 md:mb-4 mx-1 md:mx-2 transform transition-transform duration-300 hover:-translate-y-1" alt="solution 4" />
          <img src={solution5} className="w-1/4 sm:w-1/5 md:w-auto rounded-lg border-2 border-white mb-2 md:mb-4 mx-1 md:mx-2 transform transition-transform duration-300 hover:translate-y-1" alt="solution 5" />
      </div>

      
      </div>
      

      </div>

    </div>
  );
};

export default HeroSection;
