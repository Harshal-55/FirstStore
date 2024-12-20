import React from "react";
import homescreen from "../assets/Home Screen.png";
import storesection1 from "../assets/storesection1.png";
import storesection2 from "../assets/storesection2.png";
import storesection3 from "../assets/storesection3.png";
import communityImage1 from "../assets/communityImage1.png";
import communityImage2 from "../assets/communityImage2.png";

const LocalStoresSection = () => {
  return (
    <section className="bg-[#FAFAF8]">
      {/* Top Section */}
      <div className="bg-blue-700 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-start">
            {/* Left Image */}
            <div className="lg:w-1/2 -ml-4 lg:-ml-32">
            <img
                src={homescreen}
                alt="Local Stores"
                className="rounded-lg w-full"
            />
            </div>
            {/* Right Content */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                Watch How Our Local Stores Bring Fresh Produce And Quality
                Essentials Straight To Your Table.
            </h2>
            <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50">
                Read More &rarr;
            </button>
            </div>
        </div>
        </div>


      {/* Bottom Section */}
<div className="py-16 px-4 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {/* Free Support */}
    <div className="bg-white max-w-[320px] mx-auto rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-black">
      <div className="flex justify-center items-center h-20 w-20 bg-blue-100 rounded-full mx-auto mb-6">
        <img
          src={storesection2}
          alt="Free Support"
          className="h-10 w-10"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">FREE SUPPORT</h3>
      <p className="mt-4 text-gray-600">
        Reliable expert support, ready when you are!
      </p>
      <button className="mt-6 px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
        GET STARTED FOR FREE
      </button>
    </div>

    {/* FirstStore App Store */}
    <div className="bg-white max-w-[320px] mx-auto rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-black">
      <div className="flex justify-center items-center h-20 w-20 bg-blue-100 rounded-full mx-auto mb-6">
        <img
          src={storesection1}
          alt="FirstStore App Store"
          className="h-10 w-10"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">
        FIRSTSTORE APP STORE
      </h3>
      <p className="mt-4 text-gray-600">
        Elevate your store with innovative tools and apps from our trusted
        FirstStore partners.
      </p>
      <button className="mt-6 px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
        GET STARTED FOR FREE
      </button>
    </div>

    {/* Manage on Mobile */}
    <div className="bg-white max-w-[320px] mx-auto rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-black">
      <div className="flex justify-center items-center h-20 w-20 bg-blue-100 rounded-full mx-auto mb-6">
        <img
          src={storesection3}
          alt="Manage on Mobile"
          className="h-10 w-10"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">MANAGE ON MOBILE</h3>
      <p className="mt-4 text-gray-600">
        Run your business anytime, anywhere with the Peclick Mobile App.
      </p>
      <button className="mt-6 px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
        GET STARTED FOR FREE
      </button>
    </div>
  </div>

      </div>

      <div className="bg-[#fdf8e4] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-800 mb-6">
            Join our FirstStore <br /> community today!
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full max-w-md px-4 py-3 border border-gray-800 rounded-full bg-[#fdf8e4] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full max-w-md px-4 py-3 border border-gray-800 rounded-full bg-[#fdf8e4] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full max-w-md px-4 py-3 border border-gray-900 rounded-full bg-[#fdf8e4] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full max-w-md px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
            >
              CONTACT US
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative">
            
            <img
              src={communityImage2}
              alt="Community 2"
              className="rounded-lg shadow-lg w-[250px] md:w-[350px] absolute top-6 -right-6 transform -rotate-2"
            />
            <img
              src={communityImage1}
              alt="Community 1"
              className="rounded-lg shadow-lg w-[300px] md:w-[400px] transform rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default LocalStoresSection;
