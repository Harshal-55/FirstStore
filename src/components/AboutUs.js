import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import OurMission from './OurMission'
import Mobile from './Mobile'
import Reviews from './Reviews'
import Team from './Team'
import FAQ from './FAQ'

const AboutUs = () => {
  return (
    <div>
        
        <Navbar />
        {/* Background Image */}
        <div className="relative w-full mb-10">
            <img
            src="/hero.png"
            alt="Background"
            className="w-full h-auto object-cover"
            />
        </div>
        <OurMission />
        <Mobile />
        <Reviews />
        <Team />
        <FAQ />
        <Footer />
    </div>
  )
}

export default AboutUs