import React from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (

    <div className="min-h-screen overflow-x-hidden">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>
      
        {/* Background Image */}
        <div className="relative w-full mb-10">
            <img
            src="/Contact_us.png"
            alt="Background"
            className="w-full h-auto object-cover"
            />
        </div>
    <div className="container mx-auto px-6 md:px-10 lg:px-20 xl:px-32 py-16">
        

      {/* Main Wrapper */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Your Information Is Secure With Us
          </h1>
          <p className="text-gray-700 mb-6">
            We value your privacy—your details are completely safe and
            confidential. Submit your contact information, and our team will
            reach out to you shortly. If you'd like to connect directly, feel
            free to email us at{" "}
            <a
              href="mailto:care@firststoreapp.in"
              className="text-blue-600 underline"
            >
              care@firststoreapp.in
            </a>
            .
          </p>
          <p className="text-black font-bold mb-2">Address:</p>
          <p className="text-gray-700">
            123 Innovation Park, Suite 456, <br />
            Tech Hub Road, Silicon Valley, <br />
            California, USA - 98765.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg">
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Enter Your Company Name"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex mt-2">
                <select
                  className="border border-gray-300 rounded-l-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="IN">🇮🇳 +91</option>
                  <option value="US">🇺🇸 +1</option>
                  <option value="UK">🇬🇧 +44</option>
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full border-t border-b border-r border-gray-300 rounded-r-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Custom Requirements"
                rows="4"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#071C6D] text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
