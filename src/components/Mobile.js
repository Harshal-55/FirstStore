import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Mobile = () => {
  return (
    <div className="bg-[#f5f5dc] text-black flex flex-col items-center justify-center pb-16 px-4 sm:pb-24">
    {/* Heading */}
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold capitalize w-[95%] sm:w-[90%] md:w-[80%] text-center p-4 sm:p-6 md:p-9">
      Watch how our local stores bring fresh produce and quality essentials straight to your table
    </h1>
  
    {/* Button */}
    <button className="border-2 border-black flex items-center gap-2 py-2 px-8 sm:gap-3 sm:py-3 sm:px-10 md:px-16 rounded-full text-sm sm:text-base">
      Read More <FaArrowRight />
    </button>
  
    {/* Image Section */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-24 items-center">
      <img
        src="/Home Screen.png"
        alt="Home Screen"
        className="h-48 sm:h-64 md:h-128 w-auto object-contain"
      />
      <img
        src="/Explore.png"
        alt="Explore"
        className="h-48 sm:h-64 md:h-128 w-auto object-contain sm:-mt-6 md:-mt-12"
      />
      <img
        src="/Product Detail (2).png"
        alt="Product Detail"
        className="h-48 sm:h-64 md:h-128 w-auto object-contain"
      />
    </div>
  </div>
  

  )
}

export default Mobile