import React from 'react'
import doctors from "../assets/data";
import { useParams } from "react-router-dom";
import { BadgeCheck, Star } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const DoctorProfile = () => {
    const navigate = useNavigate();

  const { doctorId } = useParams();

  const doctor = doctors.find(
    (doc) => doc.id === Number(doctorId)
  );

  if (!doctor) {
    return <h1 className="p-6 text-center text-xl font-semibold">Doctor Not Found</h1>;
  }

  return (<>
    <Navbar />
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-600 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={()=>navigate(-1)}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20 active:scale-95"
            
          >
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6.5H1M6.5 12 1 6.5 6.5 1" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        </div>

        <div className="mx-auto mt-6 max-w-6xl px-1 sm:px-2">
          <div className="rounded-3xl bg-white p-4 shadow-xl sm:p-6 lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative mx-auto flex-shrink-0 sm:mx-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
                />
                <BadgeCheck
                  size={22}
                  className="absolute -bottom-1 -right-1 rounded-full bg-white text-green-500"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-slate-800">{doctor.name}</h2>
                <p className="mt-1 text-sm font-medium text-blue-600">{doctor.specialty}</p>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 sm:justify-start">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-slate-800">{doctor.rating}</span>
                    <span>({doctor.reviews} reviews)</span>
                  </div>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block"></span>
                  <p>{doctor.experience}</p>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block"></span>
                  <p>{doctor.fee}</p>
                </div>
              </div>

              <div className="text-center sm:ml-auto sm:text-right">
                <h3 className="text-sm text-slate-400">Consultation fee</h3>
                <p className="text-xl font-semibold text-slate-800">{doctor.fee}</p>
                <p className="mt-1 text-sm font-medium text-green-500">{doctor.available}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-10 rounded-2xl boredr border-gray-200 shadow-lg">
          <div className='px-5 py-5'>
            <h1 className=' text-2xl text-black font-semibold'>About Doctor</h1>
            <p className='text-gray-400 text-base'>{doctor.about}</p>
          </div>
      </div>

      <div className="flex items-center gap-4 mt-10 justify-center z-1 ">
          <button onClick={()=>navigate(`/book-appointment/${doctor.id}`)} className="bg-[var(--primary-color)] hover:bg-blue-600 text-white px-6 py-3 rounded-2xl cursor-pointer">Book Appointment</button>
          <button onClick={()=>navigate("/findDoctors")} className="flex items-center gap-2 text-[var(--primary-color)] border border-blue-600 hover:bg-indigo-50/50 px-6 py-3 rounded-2xl active:scale-95 transition cursor-pointer">
          
            Find Doctors
          </button>
        </div>
        <div className='mt-15'>
                  <Footer />

        </div>
    </div>
    </>
  )
}

export default DoctorProfile