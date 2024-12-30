import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-12">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#081d6e] text-center">
        Let us hear from our promising customers
      </h1>
      
      {/* Description */}
      <p className="text-center w-[90%] sm:w-[80%] mt-4 sm:mt-6 text-sm sm:text-base">
        The customer testimonials reflect how committed we are to keeping our customers happy. Below are some reviews of how clients value our craftsmanship and services.
      </p>
      
      {/* Grid for Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 my-8 sm:my-12 w-full max-w-5xl">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>

  )
}

export default Reviews