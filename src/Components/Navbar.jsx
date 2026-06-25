import React from 'react'
import Logo from '../assets/logo'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
        const navigate = useNavigate();

  return (
    // <section className="flex flex-col items-center">
      <nav className="flex flex-col items-center w-full" >
        <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
            <Logo />
            <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:fixed max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/25 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm
            `}>


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

                <div className="md:hidden flex flex-col gap-2 w-full max-w-xs mt-4">
                    <button
                        onClick={() => {
                            setMobileOpen(false);
                            navigate('/sign-up');
                        }}
                        className="w-full px-4 py-2 border border-indigo-600 rounded-md text-slate-800 hover:bg-indigo-50/50 transition"
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => {
                            setMobileOpen(false);
                            navigate('/login');
                        }}
                        className="w-full px-4 py-2 bg-(--primary-color) text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </div>

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
                <button onClick={()=>navigate("/login")} className="text-white px-4 py-2 bg-(--primary-color) active:scale-95 hover:bg-blue-600 transition rounded-md cursor-pointer">
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
  )
}

export default Navbar
