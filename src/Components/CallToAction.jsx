import React from 'react'
import { useNavigate} from 'react-router-dom'

const CallToAction = () => {
const navigate = useNavigate();

    return (
        <>
            
            <section className='flex items-center justify-center p-4 py-20'>
                <div className='relative w-full max-w-5xl bg-linear-to-bl from-blue-500 to-blue-900 rounded-2xl border border-blue-500 px-6 py-16 pb-18 flex flex-col items-center text-center'>
                    <div className='inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6'>
                        <span className='text-slate-200 text-xs'>Welcome to MediCare</span>
                    </div>
            
                    <h1 className='text-3xl md:text-[40px]/13 font-medium text-white mb-8 max-w-2xl leading-tight'>
                        Stay Updated with Health Tips & Offers.
                    </h1>
            
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <button onClick={()=>{window.scrollTo({ top:0 , behavior :'smooth'});navigate("/")}} className='bg-white scroll-smooth text-gray-900 rounded-full px-6 py-3.5 text-sm flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer'>
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
            
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction
