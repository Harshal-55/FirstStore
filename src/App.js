import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage"; 
import { AnimatePresence, motion } from "framer-motion"; 
import PricingSection from "./components/PricingSection";
import TermsOfUse from "./components/TermsOfUse";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";

const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <LandingPage />
            </motion.div>
          }
        />
        <Route
          path="/about-us"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AboutUs />
            </motion.div>
          }
        />
        <Route
          path="/pricing-section"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <PricingSection />
            </motion.div>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TermsOfUse />
            </motion.div>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <PrivacyPolicy />
            </motion.div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactUs />
            </motion.div>
          }
        />
        
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
