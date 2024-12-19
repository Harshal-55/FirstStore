import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import SpendingEfficiencySection from "./SpendingEfficiencySection";

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <WhatWeOffer />
        <SpendingEfficiencySection />
    </div>

  );
};

export default LandingPage;