import React from 'react'
import Hero from '../Components/Hero'
import FeatureSection from '../Components/FeatureSection'
import TopRatedDoctors from '../Components/TopRatedDoctors'
import Categories from '../Components/Categories'
import StatsSection from '../Components/StatsSection'
import Testimonials from '../Components/Testimonials'
import FAQs from '../Components/FAQs'
import CallToAction  from '../Components/CallToAction'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <FeatureSection/>
      <TopRatedDoctors />
      <Categories />
      <StatsSection />
      <Testimonials />
      <FAQs />
      <CallToAction />
      <Footer/> 
    </div>
  )
}

export default Home
