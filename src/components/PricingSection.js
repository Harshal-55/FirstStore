import React from 'react';
import Navbar from './Navbar';
import Gift1 from "../assets/gift1.png"; // Ensure the path is correct

const PricingSection = () => {
  return (
    <div>
      <header>
        {/* Navbar */}
        <Navbar />
      </header>

      <section className="bg-gradient-to-r from-[#071C6D] to-blue-800 text-white overflow-hidden">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between relative">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:ml-16 w-5/6">
            <div className="bg-white text-[#071C6D] rounded-full inline-block px-4 py-4 text-sm font-bold mb-4">
              Discount up to 50% off
            </div>
            <h1 className="text-4xl lg:text-8xl font-bold mb-4 lg:mb-6 lg:mt-10 leading-tight">
              Celebrate 2024 with Exclusive Year-End Deals!
            </h1>
            <p className="text-sm lg:text-base mb-8 lg:mt-28">
              Save up to 50% as we honor 150,000+ stores using Take App! 🎉<br />
              Enjoy <span className="text-yellow-400 font-bold">SPECIAL OFFERS</span> designed to support every plan and make your business shine.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0 w-1/6 lg:w-auto flex justify-end lg:justify-end">
            {/* Gift Images */}
            <img
              src={Gift1}
              alt="Gift"
              className="relative w-36 h-36 lg:w-48 lg:h-auto pointer-events-none top-8 right-8 lg:top-0 lg:-right-6"
            />
          </div>
        </div>
      </section>
      
      
      {/*Pricing cards*/}
      <section className="text-center py-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-blue-900">Pricing Card</h1>
        <div className="mt-6 flex justify-center items-center gap-4">
          <button className="px-6 py-2 bg-blue-900 text-white rounded-full shadow-md focus:outline-none">
            Monthly
          </button>
          <button className="px-6 py-2 bg-white text-blue-900 border border-blue-900 rounded-full shadow-md focus:outline-none">
            Yearly
          </button>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border border-blue-300 rounded-lg shadow-lg p-6 flex flex-col text-left bg-white">
          <h2 className="text-blue-900 font-bold text-lg mb-2">Basic Plan</h2>
          <p className="text-sm text-gray-600 mb-4">
            For all individuals and starters who want to start with domaining.
          </p>
          <h3 className="text-blue-900 text-4xl font-bold mb-2">₹500
            <span className="text-sm font-normal"> per Month</span>
          </h3>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>🔗 Domain Mapping</li>
            <li>🌟 FirstStore Branding Removed</li>
            <li>⚡️ Bulk Product Import</li>
            <li>👍 Rating and Review</li>
            <li>🌐 Advanced Shipping</li>
            <li>📚 Wishlist</li>
            <li>🔧 Desktop Access</li>
            <li>Products Limit: Up to 200 products</li>
          </ul>
          <button className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg shadow-md focus:outline-none">
            Start free 14-day Trial
          </button>
          <p className="mt-4 text-gray-500 text-xs">No credit card required</p>
        </div>

        {/* Business Plan */}
        <div className="border border-blue-300 rounded-lg shadow-lg p-6 flex flex-col text-left bg-yellow-50 relative">
          <span className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 text-xs font-bold rounded-full">
            Popular
          </span>
          <h2 className="text-blue-900 font-bold text-lg mb-2">Business Plan</h2>
          <p className="text-sm text-gray-600 mb-4">
            For professional domain name investors with a big portfolio.
          </p>
          <h3 className="text-blue-900 text-4xl font-bold mb-2">₹1299
            <span className="text-sm font-normal"> per Month</span>
          </h3>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>🔗 Domain Mapping</li>
            <li>🌟 FirstStore Branding Removed</li>
            <li>⚡️ Bulk Product Import</li>
            <li>👍 Rating and Review</li>
            <li>🌐 Advanced Shipping</li>
            <li>📚 Wishlist</li>
            <li>🔧 Desktop Access</li>
            <li>Products Limit: Up to 200 products</li>
            <li>Staff Account: 1 member</li>
            <li className="text-yellow-500">Official WhatsApp Integration (Additional Cost)</li>
            <li className="text-yellow-500">Store Setup by Professionals (Additional Cost)</li>
            <li className="text-yellow-500">Premium Support (Additional Cost)</li>
            <li className="text-yellow-500">Setup Assistance (Additional Cost)</li>
          </ul>
          <button className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg shadow-md focus:outline-none">
            Start free 14-day Trial
          </button>
          <p className="mt-4 text-gray-500 text-xs">No credit card required</p>
        </div>

        {/* Professional Plan */}
        <div className="border border-blue-300 rounded-lg shadow-lg p-6 flex flex-col text-left bg-white">
          <h2 className="text-blue-900 font-bold text-lg mb-2">Professional Plan</h2>
          <p className="text-sm text-gray-600 mb-4">
            For all individuals and starters who want to start with domaining.
          </p>
          <h3 className="text-blue-900 text-4xl font-bold mb-2">₹999
            <span className="text-sm font-normal"> per Month</span>
          </h3>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>🔗 Domain Mapping</li>
            <li>🌟 FirstStore Branding Removed</li>
            <li>⚡️ Bulk Product Import</li>
            <li>👍 Rating and Review</li>
            <li>🌐 Advanced Shipping</li>
            <li>📚 Wishlist</li>
            <li>🔧 Desktop Access</li>
            <li>Products Limit: Up to 200 products</li>
            <li>Premium Support <span className="text-green-500">(Included)</span></li>
          </ul>
          <button className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg shadow-md focus:outline-none">
            Start free 14-day Trial
          </button>
          <p className="mt-4 text-gray-500 text-xs">No credit card required</p>
        </div>
      </section>



    </div>
  );
};

export default PricingSection;
