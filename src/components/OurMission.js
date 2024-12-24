import React from 'react'

const OurMission = () => {
  return (
    <div className='mt-24 flex flex-col justify-center items-center'>
        <div className='w-[90%]'>
            <div className='flex gap-12'>
                <img src="/Our Mission 1.png" alt="" className='w-[45%]' />
                <div>
                    <h1 className='text-3xl font-bold text-[#081d6e] uppercase text-center mb-12'>Our Mission</h1>
                    <div>
                        <p className='mb-4'>At <span className='font-bold'>FirstStore</span>, our mission is to empower small and medium businesses by providing them with an easy-to-use, scalable e-commerce platform that helps them succeed in the digital landscape.</p>
                        <p>We aim to simplify the complexities of setting up and managing an online store, offering businesses the tools they need to grow, engage customers, and thrive in an increasingly competitive market.</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-12 mt-16'>
                <div className='w-[50%]'>
                    <h1 className='text-3xl font-bold text-[#081d6e] uppercase text-center mb-12'>Our Vision</h1>
                    <div>
                        <p>We envision <span className='font-bold'>FirstStore</span> as the leading platform that transforms the way entrepreneurs and businesses connect with their customers.</p>
                        <p className='my-4'>By focusing on user-friendly solutions, robust features, and seamless integration, we strive to help businesses of all sizes expand their reach, improve customer experiences, and drive sustainable growth globally.</p>
                        <p>Through innovation, dedication, and simplicity, we aim to be the trusted partner in every entrepreneur's digital journey.</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-center'>
                    <div className='flex flex-col gap-4'>
                        <img src="/Our Mission 5.png" alt="" />
                        <img src="/Our Mission 2.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-4 mt-4'>
                        <img src="/Our Mission 3.png" alt="" />
                        <img src="/Our Mission 4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[100%] relative'>
            <img src="/Frame 1000010262.png" alt="" className='p-24 z-20' />
            <img src="/Vector 6.png" alt="" className='absolute top-0 right-0 h-72' />
            <img src="/Vector 7.png" alt="" className='absolute top-[27%] h-96' />
            <img src="/Ellipse 1.png" alt="" />
        </div>
    </div>
  )
}

export default OurMission