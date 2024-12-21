import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import LocalStoresSection from "./LocalStoresSection";
import SpendingEfficiencySection from "./SpendingEfficiencySection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <WhatWeOffer />
        <LocalStoresSection />
        <SpendingEfficiencySection />
        <Footer />
    </div>

  );
};

export default LandingPage;