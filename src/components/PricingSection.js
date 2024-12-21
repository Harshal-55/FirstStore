import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Gift1 from "../assets/gift1.png"; 

const PricingSection = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>

      <section className="bg-gradient-to-r from-[#071C6D] to-blue-800 text-white overflow-hidden">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-center justify-between relative">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:ml-16 w-full lg:w-5/6">
            <div className="bg-white text-[#071C6D] rounded-full inline-block px-3 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm font-bold mb-4">
              Discount up to 50% off
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold mb-4 lg:mb-6 lg:mt-10 leading-tight">
              Celebrate 2024 with Exclusive Year-End Deals!
            </h1>
            <p className="text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 lg:mt-28">
              Save up to 50% as we honor 150,000+ stores using Take App! 🎉<br />
              Enjoy <span className="text-yellow-400 font-bold">SPECIAL OFFERS</span> designed to support every plan and make your business shine.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0 w-full lg:w-auto flex justify-end lg:justify-end">
            {/* Gift Images (Hidden on Mobile) */}
            <img
              src={Gift1}
              alt="Gift"
              className="hidden sm:block relative w-28 sm:w-36 lg:w-48 lg:h-auto pointer-events-none top-8 sm:top-8 right-6 lg:top-0 lg:-right-6"
            />
          </div>
        </div>
      </section>

      
      
      {/* Pricing Cards */}
      <section className="text-center py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-900">Pricing Card</h1>
        <div className="mt-4 sm:mt-6 flex justify-center items-center gap-2 sm:gap-4">
          <button className="px-4 sm:px-6 py-2 bg-blue-900 text-white rounded-full shadow-md focus:outline-none text-sm sm:text-base">
            Monthly
          </button>
          <button className="px-4 sm:px-6 py-2 bg-white text-blue-900 border border-blue-900 rounded-full shadow-md focus:outline-none text-sm sm:text-base">
            Yearly
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basic Plan */}
        <div className="border border-[#071C6D] rounded-lg shadow-lg p-4 sm:p-6 flex flex-col text-left bg-white lg:ml-10">
          <h2 className="text-blue-900 font-bold text-base sm:text-lg mb-2">Basic Plan</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            For all individuals and starters who want to start with domaining.
          </p>
          {/* Horizontal Separator */}
          <hr className="border-gray-300 mb-4" />
          <h3 className="text-black text-3xl sm:text-4xl font-bold mb-2">₹500
            <p className="text-xs sm:text-sm font-normal"> per Month</p>
          </h3>
          {/* Horizontal Separator */}
          <hr className="border-gray-300 mb-4" />
          <ul className="text-xs sm:text-sm text-gray-700 space-y-2 mb-6">
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Domain Mapping</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">FirstStore Branding Removed</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Bulk Product Import</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Rating and Review</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Advanced Shipping</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Wishlist</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Desktop Access</li>
            <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Products Limit: Up to 200 products</li>
          </ul>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[black] text-white font-bold rounded-lg shadow-md focus:outline-none text-sm sm:text-base">
            Start free 14-day Trial
          </button>
          <p className="mt-4 text-gray-500 text-xs">No credit card required</p>
        </div>


        {/* Business Plan */}
      <div className="border border-blue-300 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col text-left bg-yellow-50 relative lg:mx-5">
        <p className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-yellow-500 text-white px-2 sm:px-3 py-1 text-xs font-bold rounded-full z-10">
          Popular
        </p>
        <h2 className="text-blue-900 font-bold text-base sm:text-lg mb-2 pt-6 sm:pt-8">
          Business Plan
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          For professional domain name investors with a big portfolio.
        </p>
        <hr className="border-gray-300 mb-4" />
        <h3 className="text-black text-3xl sm:text-4xl font-bold mb-2">₹1299
          <p className="text-xs sm:text-sm font-normal"> per Month</p>
        </h3>
        <hr className="border-gray-300 mb-4" />
        <ul className="text-xs sm:text-sm text-gray-700 space-y-2 mb-6">
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Domain Mapping</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">FirstStore Branding Removed</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Bulk Product Import</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Rating and Review</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Advanced Shipping</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Wishlist</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Desktop Access</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Products Limit: Up to 200 products</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Staff Account: 1 member</li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Official WhatsApp Integration
            <span className="bg-red-200 text-red-500 px-1 sm:px-2 py-1 rounded text-xxs sm:text-xs">
              Additional Cost
            </span>
          </li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Store Setup by Professionals
            <span className="bg-red-200 text-red-500 px-1 sm:px-2 py-1 rounded text-xxs sm:text-xs">
              Additional Cost
            </span>
          </li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Premium Support
            <span className="bg-red-200 text-red-500 px-1 sm:px-2 py-1 rounded text-xxs sm:text-xs">
              Additional Cost
            </span>
          </li>
          <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Setup Assistance
            <span className="bg-red-200 text-red-500 px-1 sm:px-2 py-1 rounded text-xxs sm:text-xs">
              Additional Cost
            </span>
          </li>
        </ul>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-bold rounded-lg shadow-md focus:outline-none text-sm sm:text-base">
          Start free 14-day Trial
        </button>
        <p className="mt-4 text-gray-500 text-xxs sm:text-xs">No credit card required</p>
      </div>

  {/* Professional Plan */}
  <div className="border border-[#071C6D] rounded-lg shadow-lg p-4 sm:p-6 flex flex-col text-left bg-white lg:mr-10">
    <h2 className="text-blue-900 font-bold text-base sm:text-lg mb-2">Professional Plan</h2>
    <p className="text-xs sm:text-sm text-gray-600 mb-4">
      For all individuals and starters who want to start with domaining.
    </p>
    <hr className="border-gray-300 mb-4" />
    <h3 className="text-black text-3xl sm:text-4xl font-bold mb-2">₹999
      <p className="text-xs sm:text-sm font-normal"> per Month</p>
    </h3>
    <hr className="border-gray-300 mb-4" />
    <ul className="text-xs sm:text-sm text-gray-700 space-y-2 mb-6">
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Domain Mapping</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">FirstStore Branding Removed</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Bulk Product Import</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Rating and Review</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Advanced Shipping</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Wishlist</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Desktop Access</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Products Limit: Up to 200 products</li>
      <li className="flex items-start before:content-['✔️'] before:text-green-500 before:mr-2">Premium Support
        <span className="bg-blue-200 text-blue-500 px-1 sm:px-2 py-1 rounded text-xxs sm:text-xs">
          Included
        </span>
      </li>
    </ul>
      <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-bold rounded-lg shadow-md focus:outline-none text-sm sm:text-base">
        Start free 14-day Trial
      </button>
      <p className="mt-4 text-gray-500 text-xxs sm:text-xs">No credit card required</p>
    </div>
  </section>

      {/* Right Package Section */}
<section className="bg-[#d2cfc3] py-8 lg:py-16">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center mb-6 lg:mb-10 lg:mx-48">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black leading-tight">
        Pricing That Fits: Discovering the Right Package for You
      </h1>
    </div>
    {/* Table */}
    <div className="overflow-x-auto lg:mx-24">
      <table className="table-auto w-full border-collapse border border-gray-300 text-left text-sm sm:text-base">
        {/* Table Head */}
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 bg-white">
              <div className="mb-6 sm:mb-8 text-start">
                <div className="flex items-start justify-start space-x-2">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                    Compare plans
                  </h2>
                  <div className="bg-yellow-300 text-gray-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                    40% Off
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-xs sm:text-sm">
                  Choose your workspace plan according to your organizational plan
                </p>
              </div>
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 bg-white text-center font-semibold text-gray-800">
              <p>Basic <span className="text-gray-500 text-xs sm:text-sm">/Lifetime</span></p>
              <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-[#071C6D] text-white text-xs sm:text-sm font-medium rounded hover:bg-blue-600">
                Choose This Plan
              </button>
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 bg-white text-center font-semibold text-gray-800">
              <p>Professional <span className="text-gray-500 text-xs sm:text-sm">/Month</span></p>
              <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-[#071C6D] text-white text-xs sm:text-sm font-medium rounded hover:bg-blue-600">
                Choose This Plan
              </button>
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 bg-white text-center font-semibold text-gray-800">
              <p>Business <span className="text-gray-500 text-xs sm:text-sm">/Month</span></p>
              <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-[#071C6D] text-white text-xs sm:text-sm font-medium rounded hover:bg-blue-600">
                Choose This Plan
              </button>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white">
          {[
            { feature: 'Domain Mapping', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'FirstStore Branding Removed', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'Bulk Product Import', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'Rating and Review', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'Advanced Shipping', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'Wishlist', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'Desktop Access', basic: '✓', pro: '✓', business: '✓' },
            { feature: 'Products Limit', basic: 'Up to 200 products', pro: 'Up to 200 products', business: 'Up to 200 products' },
            { feature: 'Staff Account', basic: '1 member', pro: '1 member', business: '1 member' },
            { feature: 'Official WhatsApp Integration', basic: '✓', pro: 'Additional Cost', business: '✓' },
            { feature: 'Store Setup By Professionals*', basic: 'At Additional Cost', pro: '✓', business: '✓' },
            { feature: 'Premium Support', basic: 'At Additional Cost', pro: '✓', business: '✓' },
            { feature: 'Setup Assistance', basic: 'WhatsApp only', pro: 'WhatsApp + call', business: 'Dedicated WhatsApp group + Call' },
          ].map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-2 sm:px-4 py-2 text-gray-700 text-xs sm:text-sm">
                {row.feature}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">
                {row.basic}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">
                {row.pro}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">
                {row.business}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>




    <Footer />
    </div>
  );
};

export default PricingSection;
