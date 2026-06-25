
import React from 'react'
import Logo from '../assets/logo'
import { Link, useNavigate } from 'react-router-dom'
import Hero_image from '../assets/Hero_image.jpg'
import { Navigate } from 'react-router-dom'
import doctors from '../assets/data'

const Hero = () => {

        const [mobileOpen, setMobileOpen] = React.useState(false);
        const navigate = useNavigate();

  return (
    <>
    <section className="flex flex-col items-center">
      
      <a href="" className="flex items-center gap-2 bg-indigo-100 rounded-full p-1 pr-3 text-sm mt-23">
        <span className="bg-[var(--primary-color)] bg-green-400 text-white text-xs ml-1 px-1 py-1 rounded-full">
          
        </span>
        <p className="flex items-center gap-2 text-[var(--primary-color)]">
            <span className='text-sm'>500+ Verified Doctors Online</span>
            <svg className="mt-px" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </p>
      </a>

      <h1 className="text-center text-slate-800 text-4xl md:text-5xl/16 font-semibold max-w-3xl leading-tight bg-clip-text my-2.5 px-4">
        Book Your <span className='bg-linear-to-r from-[var(--primary-color)] to-blue-200 bg-clip-text text-transparent'> Appointment</span> With Trusted  Doctors
      </h1>
      <p className="text-center text-base text-gray-600 max-w-md px-4">
        Connect with certified doctors instantly. Book in-person visits, video consultations, and get digital prescriptions — all from the comfort of your home.
      </p>
      
      <div className="flex items-center gap-4 mt-5 justify-center z-1">
        <button onClick={()=>navigate(`/specialities`)} className="bg-[var(--primary-color)] hover:bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer">Book Appointment</button>
        <button onClick={()=>navigate("/findDoctors")} className="flex items-center gap-2 text-[var(--primary-color)] border border-blue-600 hover:bg-indigo-50/50 px-6 py-3 rounded-full active:scale-95 transition cursor-pointer">
        
          Find Doctors
        </button>
      </div>
      <div className="flex items-center gap-6 mt-8">
  <div className="flex items-center gap-2 ">
    <span className="text-base">👨‍⚕️</span>
    <span
      className="text-sm text-muted-foreground"
      style={{fontFamily: "DM Sans, sans-serif",fontWeight: 500 }}
    >
      500+ Doctors
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-base">😊</span>
    <span
      className="text-sm text-muted-foreground"
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}
    >
      50K+ Patients
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-base">⭐</span>
    <span
      className="text-sm text-muted-foreground"
      style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}
    >
      4.9 Rating
    </span>
  </div>
</div>

      <div className="relative mt-12 w-full max-w-4xl px-4">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-full h-full bg-[#70aaf5] blur-[100px] opacity-70 z-0"></div>
        <img className="relative z-1 w-full overflow-hidden rounded-md object-cover object-top" src={Hero_image} alt="" />
      </div>
      
    </section>

    
    
    </>
  )
}

export default Hero
