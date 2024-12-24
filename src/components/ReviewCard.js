import React from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const ReviewCard = () => {
  return (
    <div className="max-w-md mx-auto p-6 text-sm bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex items-center justify-between space-x-4">
        {/* Profile Image */}
        <div className="flex gap-2 items-center">
            <span className="bg-pink-700 p-3 px-6 text-2xl rounded-full text-white font-bold">J</span>
            <p className="font-bold">"Better Than the rest"</p>
        </div>
        {/* Rating */}
      <div className="mt-4 flex items-center space-x-1 text-yellow-500">
        <FaStar className="w-5 h-5" />
        <FaStar className="w-5 h-5" />
        <FaStar className="w-5 h-5" />
        <FaStar className="w-5 h-5" />
        <FaRegStarHalfStroke className="w-5 h-5" />
      </div>
      </div>
      

      {/* Review Text */}
      <p className="mt-4 text-gray-700">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        facilisis, sapien in vehicula luctus, velit nisl tristique nisi, a
        tincidunt tortor lacus nec erat."
      </p>

        <div className="flex justify-between">
          {/* Reviewer Name */}
          <h4 className="font-semibold text-gray-800">John Doe</h4>
          <p className="text-gray-500">Head of Sales</p>
        </div>
    </div>
  );
};

export default ReviewCard;
