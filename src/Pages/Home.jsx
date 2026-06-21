import React from 'react'
import Hero from '../Components/Hero'
import FeatureSection from '../Components/FeatureSection'
import TopRatedDoctors from '../Components/TopRatedDoctors'
import Categories from '../Components/Categories'
import StatsSection from '../Components/StatsSection'
import Testimonials from '../Components/Testimonials'
import FAQs from '../Components/FAQs'
import Footer from '../Components/Footer'
import CallToAction  from '../Components/CallToAction'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureSection/>
      <TopRatedDoctors />
      <Categories />
      <StatsSection />
      <Testimonials />
      <FAQs />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
