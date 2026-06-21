
import React from 'react'
import Logo from '../assets/logo'
import { Link, useNavigate } from 'react-router-dom'
import Hero_image from '../assets/Hero_image.jpg'
import { Navigate } from 'react-router-dom'

const Hero = () => {

        const [mobileOpen, setMobileOpen] = React.useState(false);
        const navigate = useNavigate();

  return (
    <>
    <section className="flex flex-col items-center">
      <nav className="flex flex-col items-center w-full" >
        <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
            <Logo />
            <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:fixed max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/25 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}>


                <Link to="/" 
                onClick={() => setMobileOpen(false)} 
                className="text-[#050040] hover:text-[#050040]/70">
                Home
                </Link>

                <Link to="/findDoctors" 
                onClick={() => setMobileOpen(false)} 
                className="text-[#050040] hover:text-[#050040]/70">
                FindDoctors
                </Link> 

                <Link to="/specialities"
                onClick={() => setMobileOpen(false)} 
                className="text-[#050040] hover:text-[#050040]/70">
                Specialities
                </Link> 

                <Link to="/about" 
                onClick={() => setMobileOpen(false)} 
                className="text-[#050040] hover:text-[#050040]/70">
                About
                </Link>

                <Link to="/contact" 
                onClick={() => setMobileOpen(false)} 
                className="text-[#050040] hover:text-[#050040]/70">
                Contact
                </Link> 

                <button id="close-menu" onClick={() => setMobileOpen(false)}  className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <button onClick={()=>navigate("/sign-up")} className="active:scale-95 hover:bg-indigo-50/50 transition px-4 py-2 border border-indigo rounded-md text-slate-800 cursor-pointer">
                    Sign Up
                </button>
                <button onClick={()=>navigate("/login")} className="text-white px-4 py-2 bg-[var(--primary-color)] active:scale-95 hover:bg-blue-600 transition rounded-md cursor-pointer">
                    Login
                </button>
            </div>
            <button id="open-menu" onClick={() => setMobileOpen(true)}
                className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M4 12h16" /> <path d="M4 18h16" /> <path d="M4 6h16" /> </svg>
            </button>
        </div>
        <div className="w-full border-b border-slate-200"></div>
      </nav>
      
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
        <button onClick={()=>navigate("/book-appointment")} className="bg-[var(--primary-color)] hover:bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer">Book Appointment</button>
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
