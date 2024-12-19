import React from "react";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import shoppingcart1 from "../assets/shopping-cart1.png";
import shoppingcart2 from "../assets/shopping-cart2.png";
import entrep1 from "../assets/entrep1.png";
import entrep2 from "../assets/entrep2.png";

const WhatWeOffer = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#071C6D] mb-4">
          What We Offer!!
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the modern approach to procurement and payments with Order.co. Simplify every aspect of your
          business purchasing, from product sourcing to scaling across locations.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-32">
        {/* Card 1 */}
        <div className="border-2 border-blue-300 rounded-lg p-6 flex flex-col items-start text-start mr-4">
          <div className="text-blue-500 mb-4">
          <img src={offer3} alt="Description of your " className="h-32 w-32"/>
          </div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">Upload Your Product</h3>
          <p className="text-sm text-gray-600">
            Provide the product details along with comprehensive information, including photos, videos, variations,
            product descriptions, promotions, and more.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-yellow-300 rounded-lg p-6 flex flex-col items-start text-start mx-4">
          <div className="text-yellow-500 mb-4">
          <img src={offer2} alt="Description of your " className="h-32 w-32"/>
          </div>
          <h3 className="text-lg font-bold text-yellow-600 mb-2">Setup Your Store</h3>
          <p className="text-sm text-gray-600">
            Add your logo, upload a banner, and customize your store theme to align with your brand identity, all without
            needing to write any code.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-green-300 rounded-lg p-6 flex flex-col items-start text-start ml-4">
        <div className="text-green-500 mb-4">
          <img src={offer1} alt="Description of your " className="h-32 w-32"/>
        </div>
          <h3 className="text-lg font-bold text-green-600 mb-2">The Launch Continues</h3>
          <p className="text-sm text-gray-600">
            Effortlessly launch your online store, validate your business, and gain market share faster than your
            competitors.
          </p>
        </div>
      </div>
    </div>

    {/* you need to know section*/}

    <section className="bg-[#FAFAF8] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 lg:mr-6">
              Everything You Need to Start{" "}
              <span className="text-blue-600">Selling Online</span>
            </h2>
            <p className="mt-4 text-black text-base font-semibold md:text-lg">
              Easily add any vendor to your personalized catalog. 
              </p>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
              Easily add any vendor to your platform with just a few clicks. Whether it’s
              your regular office supplier or a new vendor, our platform
              accommodates them all.
            </p>
            <button className="mt-6 px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 flex items-center">
              Learn More
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
          {/* Right Image */}
          <div className="relative">
            <img
              src={shoppingcart2}
              alt="Dashboard"
              className="w-full max-w-md mx-auto lg:ml-auto"
            />
            
          </div>
        </div>

        {/* Second Row */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 items-center lg:mr-12">
          {/* Left Image */}
          <div className="relative">
            <img
              src={shoppingcart1}
              alt="Shopping Cart"
              className="w-full max-w-md mx-auto lg:mr-auto"
            />
            {/*
            <div className="absolute bottom-4 right-4 bg-white shadow-lg p-4 rounded-md">
              <h4 className="font-semibold text-lg">
                (5/7) Items Selected
              </h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Fresh Veggies</span>
                  <span>$2320</span>
                </li>
                <li className="flex justify-between">
                  <span>Fresh Cherries</span>
                  <span>$1500</span>
                </li>
              </ul>
              <div className="mt-4 font-semibold">
                <p>Total Price: $8,849</p>
                <p className="text-sm text-gray-500">
                  (+ $150 Shipping Charges)
                </p>
              </div>
              <button className="mt-4 px-4 py-2 bg-[#071C6D] text-white rounded-md hover:bg-blue-700">
                Checkout
              </button>
            </div>
            */}
            </div> 
          {/* Right Content */}
          <div className="lg:mx-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 lg:mr-6">
              Everything you need for{" "}
              <span className="text-blue-600">retail outlet</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Create one unified cart for all your purchases with a single
              checkout process. Simplify your purchasing process by building
              one centralized shopping cart. Add products from multiple vendors
              to a single order effortlessly.
            </p>
            <button className="mt-6 px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 flex items-center">
              Learn More
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/*entreprenuer section*/}
    <section className="bg-[#FAFAF8] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for <span className="text-blue-600">Entrepreneur and partners</span>
            </h2>
            <p className="mt-4 text-black font-semibold text-xl md:text-lg">
              Create one unified cart for all your purchases with a single checkout process.
              </p>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
              Simplify your purchasing process by building one centralized shopping cart. 
              Add products from multiple vendors to a single order effortlessly.
            </p>
            <button className="mt-6 px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 flex items-center">
              Learn More
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
          {/* Right Image */}
          <div className="relative">
            <img
              src={entrep2}
              alt="Dashboard"
              className="w-full max-w-md mx-auto lg:ml-auto"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 items-center lg:mr-12">
          {/* Left Image */}
          <div className="relative">
            <img
              src={entrep1}
              alt="Shopping Cart"
              className="w-full max-w-md mx-auto lg:mr-auto"
            />
          
          </div>
          {/* Right Content */}
          <div className="lg:mx-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 lg:mr-12">
              The ultimate <span className="text-[#071C6D]">e-commerce platform</span>
            </h2>
            <p className="mt-4 text-black text-xl font-semibold md:text-lg">
              Automate purchase order creation and order fulfillment. 
              </p>
              <p className="mt-4 text-[#071C6D] text-base md:text-lg">
              Streamline your procurement process by automating your ordering. Set up recurring orders, schedule future orders, and let our platform take care of the rest.
            </p>
            <button className="mt-6 px-6 py-3 text-[#071C6D] border border-[#071C6D] rounded-md hover:bg-blue-50 flex items-center">
              Learn More
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>


    </div>
  );
};

export default WhatWeOffer;
