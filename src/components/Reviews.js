import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <div className='flex flex-col justify-center items-center p-12'>
        <h1 className='text-3xl font-bold text-[#081d6e]'>Let us hear from our promising customers</h1>
        <p className='text-center w-[80%] mt-6'>The customer testimonials reflect how committed we are to keeping our customers happy. Below are some reviews of how clients value our craftsmanship and services</p>
        <div className='grid grid-cols-3 grid-rows-2 gap-2 p-4 my-12'>
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