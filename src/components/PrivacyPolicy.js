import React from "react";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>

    
    <div className="flex flex-col md:flex-row bg-gray-50 p-6 md:p-12">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0 mr-1 md:mr-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            <li className="bg-[#071C6D] text-white p-3 rounded-lg font-semibold cursor-pointer">
              Information We Glean
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Our Data Utilization Practices
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Disclosure of your data
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Data Protection
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Your Legal Rights
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Security
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Cookies Policy
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Reach Out to Us
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#071C6D] mb-4 lg:mb-12">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Styler has prioritized protecting your privacy. Our privacy policy outlines how we collect, use, and disclose information from our online presence [Styler Website URL]. Your use of our website indicates your agreement to the rules outlined here.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Information We Glean</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>For booking and communication, provide contact information, including name, phone number, email, and postal address.</li>
            <li>Location data can help tailors arrive on time for in-person appointments.</li>
            <li>Payment Information: Credit card and UPI information will be collected for transaction processing.</li>
            <li>Tailor-specific data, such as metrics, fitting priorities, and design choices, are preserved to ensure customized service.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Our Data Utilization Practices</h2>
          <p className="text-gray-700">
            Your data is utilized exclusively for making bookings and appointments with tailors, handling payments and creating invoices, ensuring that custom garments are delivered accurately according to your preferences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Disclosure Of Your Data</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Only when required, such as for safe payment processing and clothing delivery, does Styler disclose your information to dependable third parties.</li>
            <li>Without your express consent, your data won’t be distributed to outside parties for marketing purposes.</li>
            <li>Per legal requirements, Styler may share your information with affiliates providing related services, law enforcement, and third-party suppliers for business operations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Data Protection</h2>
          <p className="text-gray-700">
            To safeguard your personally identifiable information, we use cryptography and security protocols that are industry standard.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Your Legal Rights</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>You can obtain, alter, and remove your personal information from our directory at any time.</li>
            <li>Request information regarding third-party companies with whom your data has been shared.</li>
            <li>If you wish to assert these rights, kindly inform us at care@firststoreapp.in.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Security</h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>We hold necessary precautions to protect information from malicious use, full transparency, deformation, and deletion of data.</li>
          <li>However, neither Online transfer nor portable hard drives are secure.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Cookies Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>By analyzing user activity to improve the performance of the website and by highly personalized content according to user preferences.</li>
          <li>In your browser's settings, you can turn off cookies, but doing so might make some platform features less functional.</li>
            </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Reach Out To Us</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>For any questions concerning our information privacy policy, kindly inform us here at care@firststoreapp.in.</li>
            </ul>
        </section>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
