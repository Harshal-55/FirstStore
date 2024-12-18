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

const HeroSection = () => {
  return (
    <div className="container mx-auto lg:px-4 bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-2 py-3 lg:px-6 lg:py-10 mx-1 lg:mx-2">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-4 mx-1 lg:mx-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-800">
            Launch Your <br /> Online Store with <br /> FirstStore
          </h1>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600">
            Unleash Your Business Potential with FirstStore: Your All-in-One Solution for Seamless Online and Offline Business Management.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm sm:text-base lg:text-lg">
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

      </div>
    </div>
  );
};

export default HeroSection;
