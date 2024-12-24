import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Mobile = () => {
  return (
    <div className='bg-[#f5f5dc] text-black flex flex-col items-center justify-center pb-24'>
        <h1 className='text-3xl font-bold capitalize w-[80%] text-center p-9'>Watch how our local stores bring fresh produce and quality essentials straight to your table</h1>
        <button className='border-2 border-black flex items-center gap-3 py-3 px-16 rounded-full'>Read More <FaArrowRight /></button>
        <div className='flex gap-6 mt-24'>
            <img src="/Home Screen.png" alt="" className='h-128' />
            <img src="/Explore.png" alt="" className='h-128 -mt-12' />
            <img src="/Product Detail (2).png" alt="" className='h-128' />
        </div>
    </div>
  )
}

export default Mobile