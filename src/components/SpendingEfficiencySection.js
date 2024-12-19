import React from "react";
import spendingeff1 from "../assets/spendingeff1.png";
import spendingeff2 from "../assets/spendingeff2.png";
import spendingeff3 from "../assets/spendingeff3.png";
import spendingeff4 from "../assets/spendingeff4.png";

const SpendingEfficiencySection = () => {
  const resources = [
    {
      title: "Top Strategies to Boost Your Online Store Sales",
      category: "E-COMMERCE TIPS",
      description:
        "Learn actionable tips and strategies to increase conversions, improve customer retention, and maximize revenue for your online store.",
      image: spendingeff1,
    },
    {
      title: "How FirstStore Simplifies E-Commerce for Small Businesses",
      category: "PLATFORM FEATURES",
      description:
        "Explore the powerful features of FirstStore that make setting up and running an online business effortless and efficient.",
      image: spendingeff2,
    },
    {
      title: "The Ultimate Guide to Marketing Your E-Commerce Store",
      category: "DIGITAL MARKETING",
      description:
        "Discover effective marketing tactics, from email campaigns to social media strategies, to attract and retain customers.",
      image: spendingeff3,
    },
    {
      title:
        "Why Mobile Optimization is a Game-Changer for Online Stores",
      category: "TECH INTEGRATION",
      description:
        "Learn why mobile-friendly designs are crucial for e-commerce success and how FirstStore ensures a seamless mobile shopping experience.",
      image: spendingeff4,
    },
  ];

  return (
    <section className="bg-[#FAFAF8] py-16 px-4 md:px-8 lg:px-20 lg:mx-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#071C6D] lg:mx-64">
          Boost your business growth with spending efficiency
        </h2>
        <p className="mt-4 text-[#071C6D] text-base md:text-lg lg:mx-56 lg:mt-6">
          Enhance your business growth through spending efficiency. Explore how
          to manage spending effectively, streamline purchasing workflows, and
          make strategic decisions to drive your business forward.
        </p>
        <button className="mt-6 px-6 py-3 text-[#071C6D] border border-[#071C6D] rounded-md hover:bg-blue-50">
          Discover Resources
        </button>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xs font-semibold text-blue-600 uppercase">
                {resource.category}
              </h3>
              <h4 className="mt-2 text-lg font-semibold text-gray-800">
                {resource.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                {resource.description}
              </p>
            </div>
            <div className="p-4 pt-0">
              <a
                href="/"
                className="text-blue-600 text-sm font-semibold flex items-center hover:underline"
              >
                Learn More
                <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center space-x-4">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
          aria-label="Previous"
        >
          &larr;
        </button>
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
          aria-label="Next"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default SpendingEfficiencySection;
