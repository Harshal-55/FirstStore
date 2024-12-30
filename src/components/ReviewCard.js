import React from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const ReviewCard = () => {
  return (
    <div className="max-w-sm mx-auto p-4 sm:p-6 text-xs sm:text-sm bg-white shadow-lg rounded-lg border border-gray-200">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
      {/* Profile Section */}
      <div className="flex gap-2 items-center">
        <span className="bg-pink-700 p-2 sm:p-3 px-4 sm:px-6 text-lg sm:text-2xl rounded-full text-white font-bold">
          J
        </span>
        <p className="font-bold text-sm sm:text-base">"Better Than the Rest"</p>
      </div>
  
      {/* Rating */}
      <div className="flex items-center space-x-1 text-yellow-500">
        <FaStar className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaStar className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaStar className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaStar className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaRegStarHalfStroke className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </div>
  
    {/* Review Text */}
    <p className="mt-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      facilisis, sapien in vehicula luctus, velit nisl tristique nisi, a
      tincidunt tortor lacus nec erat."
    </p>
  
    {/* Reviewer Info */}
    <div className="flex justify-between items-center mt-4 text-xs sm:text-sm">
      <h4 className="font-semibold text-gray-800">John Doe</h4>
      <p className="text-gray-500">Head of Sales</p>
    </div>
  </div>
  
  );
};

export default ReviewCard;
