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
        <img src="/public/hero.png" alt="" />
        <Navbar />
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