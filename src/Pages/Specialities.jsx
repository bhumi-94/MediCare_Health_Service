import React from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Specialities = () => {
  const navigate = useNavigate()
  return (
    <>
    <Navbar/>
        {/* header  */}
      <div className="bg-blue-500 text-white text-center py-9 h-60 shadow-md">
        <p className="mt-3 md:text-base text-2xl font-semibold lg:text-3xl">Medical Specialties
        </p>
        <h2 className="mt-6 lg:text-xl md:text-base text-sm text-blue-200">Choose the right specialist for your healthcare needs and book appointments with confidence.</h2>
        
        <p className="lg:text-xl md:text-base text-sm text-blue-200">Explore our network of qualified healthcare professionals dedicated to providing expert care across multiple medical fields.</p>
      </div>
    <Categories />
    

    <Footer /> 
    </>
  )
}

export default Specialities
