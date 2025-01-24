import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PricingSection from "./components/PricingSection";
import TermsOfUse from "./components/TermsOfUse";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
import VendorOnboarding from "./components/VendorOnboarding/VendorOnboarding";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing-section" element={<PricingSection />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/vendor-on-boarding" element={<VendorOnboarding />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
