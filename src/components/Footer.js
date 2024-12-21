import React from "react";
import footer_Logo from "../assets/footer_logo.png";
import app_store from "../assets/app-store.png";
import google_store from "../assets/google-play.png";
import frame1 from "../assets/Frame 93.png";
import frame2 from "../assets/Frame 94.png";
import frame3 from "../assets/Frame 95.png";
import frame4 from "../assets/Frame 96.png";
import frame5 from "../assets/Frame 97.png";

const Footer = () => {
  return (
    <footer className="bg-[#010B35] text-white py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-4 lg:space-y-0">
          <h2 className="text-base sm:text-lg lg:text-xl font-medium">
            Join our community to build your online store with ease and take your business to the next level.
          </h2>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="py-2 px-3 text-sm sm:text-base rounded-l-full focus:outline-none w-48 sm:w-64 md:w-80 text-black"
            />
            <button className="bg-blue-600 text-white py-2 px-4 sm:px-6 text-sm sm:text-base rounded-r-full hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {/* Logo Section */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center md:items-start">
            <img src={footer_Logo} alt="FS Logo" className="w-12 sm:w-16 h-12 sm:h-16" />
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-lg font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:underline">
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a href="/subscription" className="hover:underline">
                  Subscription Plans
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-lg font-semibold mb-3">Explore Features</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/pdt-selling" className="hover:underline">
                  Product Selling
                </a>
              </li>
              <li>
                <a href="/shop-setup" className="hover:underline">
                  Shop Setup
                </a>
              </li>
              <li>
                <a href="/seo-opt" className="hover:underline">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/pay-getway" className="hover:underline">
                  Payment Gateways
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/help-center" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/sucess-stories" className="hover:underline">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/customer-reviews" className="hover:underline">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="/free-tools" className="hover:underline">
                  Free Tools
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/sign-in" className="hover:underline">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/get-started" className="hover:underline">
                  Get Started
                </a>
              </li>
              <li>
                <a href="/controls" className="hover:underline">
                  Controls & Visibility
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 border-t border-gray-700 pt-6 flex flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:justify-between text-center sm:text-left">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-400">
              <img src={frame1} alt="Facebook" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <img src={frame2} alt="LinkedIn" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <img src={frame3} alt="Instagram" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <img src={frame4} alt="Twitter" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <img src={frame5} alt="YouTube" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm">© 2024 PurchaseSync — All rights reserved</p>

          {/* App Store and Google Play */}
          <div className="flex items-center space-x-3">
            <a href="#">
              <img src={app_store} alt="App Store" className="h-6 sm:h-8" />
            </a>
            <a href="#">
              <img src={google_store} alt="Google Play" className="h-6 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
