import React from 'react'

const OurMission = () => {
  return (
    <div className="mt-16 sm:mt-24 flex flex-col justify-center items-center">
  <div className="w-[95%] sm:w-[90%]">
    {/* Our Mission Section */}
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
      <img src="/Our Mission 1.png" alt="" className="w-full sm:w-[45%]" />
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#081d6e] uppercase text-center sm:text-left mb-6 sm:mb-12">
          Our Mission
        </h1>
        <div>
          <p className="mb-4 text-sm sm:text-base">
            At <span className="font-bold">FirstStore</span>, our mission is to empower small and medium businesses by providing them with an easy-to-use, scalable e-commerce platform that helps them succeed in the digital landscape.
          </p>
          <p className="text-sm sm:text-base">
            We aim to simplify the complexities of setting up and managing an online store, offering businesses the tools they need to grow, engage customers, and thrive in an increasingly competitive market.
          </p>
        </div>
      </div>
    </div>

    {/* Our Vision Section */}
    <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-12 mt-12 sm:mt-16">
      <div className="w-full sm:w-[50%]">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#081d6e] uppercase text-center sm:text-left mb-6 sm:mb-12">
          Our Vision
        </h1>
        <div>
          <p className="text-sm sm:text-base">
            We envision <span className="font-bold">FirstStore</span> as the leading platform that transforms the way entrepreneurs and businesses connect with their customers.
          </p>
          <p className="my-4 text-sm sm:text-base">
            By focusing on user-friendly solutions, robust features, and seamless integration, we strive to help businesses of all sizes expand their reach, improve customer experiences, and drive sustainable growth globally.
          </p>
          <p className="text-sm sm:text-base">
            Through innovation, dedication, and simplicity, we aim to be the trusted partner in every entrepreneur's digital journey.
          </p>
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 justify-center">
        <div className="flex flex-col gap-2 sm:gap-4">
          <img src="/Our Mission 5.png" alt="" className="w-24 h-24 sm:w-auto sm:h-auto" />
          <img src="/Our Mission 2.png" alt="" className="w-24 h-24 sm:w-auto sm:h-auto" />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mt-2 sm:mt-4">
          <img src="/Our Mission 3.png" alt="" className="w-24 h-24 sm:w-auto sm:h-auto" />
          <img src="/Our Mission 4.png" alt="" className="w-24 h-24 sm:w-auto sm:h-auto" />
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Section */}
  <div className="w-full relative mt-16">
    <img src="/Frame 1000010262.png" alt="" className="p-12 sm:p-24 z-20" />
    <img src="/Vector 6.png" alt="" className="absolute top-0 right-0 h-40 sm:h-72" />
    <img src="/Vector 7.png" alt="" className="absolute top-[15%] sm:top-[27%] h-64 sm:h-96" />
    <img src="/Ellipse 1.png" alt="" className="w-16 sm:w-auto" />
  </div>
</div>

  )
}

export default OurMission