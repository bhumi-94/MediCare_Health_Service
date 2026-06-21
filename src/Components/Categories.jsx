import React from 'react'
import { useNavigate } from 'react-router-dom'


const Categories = () => {

  const navigate = useNavigate();
  const specialties = [
  {
    icon: "🫀",
    title: "Cardiology",
    doctors: 38,
    cardColor: "bg-pink-50",
    iconColor: "bg-pink-100",
  },
  {
    icon: "✨",
    title: "Dermatology",
    doctors: 32,
    cardColor: "bg-rose-50",
    iconColor: "bg-rose-100",
  },
  {
    icon: "🦴",
    title: "Orthopedics",
    doctors: 42,
    cardColor: "bg-amber-50",
    iconColor: "bg-amber-100",
  },
  {
    icon: "🧠",
    title: "Neurology",
    doctors: 25,
    cardColor: "bg-purple-50",
    iconColor: "bg-purple-100",
  },
  {
    icon: "👶",
    title: "Pediatrics",
    doctors: 29,
    cardColor: "bg-cyan-50",
    iconColor: "bg-cyan-100",
  },
  {
    icon: "👂",
    title: "ENT",
    doctors: 21,
    cardColor: "bg-green-50",
    iconColor: "bg-green-100",
  },
  {
    icon: "👁️",
    title: "Ophthalmology",
    doctors: 18,
    cardColor: "bg-blue-50",
    iconColor: "bg-blue-100",
  },
  {
    icon: "🤰",
    title: "Gynecology",
    doctors: 34,
    cardColor: "bg-fuchsia-50",
    iconColor: "bg-fuchsia-100",
  },
  {
    icon: "💭",
    title: "Psychiatry",
    doctors: 16,
    cardColor: "bg-indigo-50",
    iconColor: "bg-indigo-100",
  },
  {
    icon: "🦷",
    title: "Dentistry",
    doctors: 27,
    cardColor: "bg-teal-50",
    iconColor: "bg-teal-100",
  },
  {
    icon: "💧",
    title: "Urology",
    doctors: 19,
    cardColor: "bg-sky-50",
    iconColor: "bg-sky-100",
  },
  {
    icon: "🎗️",
    title: "Oncology",
    doctors: 14,
    cardColor: "bg-violet-50",
    iconColor: "bg-violet-100",
  },
];
  return (
    
        <>
            
            <section className="py-16 lg:py-24">
             
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <div className="inline-flex flex-col gap-3 items-center">
                            <p className="max-w-2xl [word-spacing:0.2rem] text-base  text-blue-500">
                                BROWSE BY SPECIALTY
                            </p>
                            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                                Medical Specialties
                            </h2>
                            
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {specialties.map((item, index) => (
                      <button
                        key={index}
                        className="group relative aspect-4/3 overflow-hidden rounded-2xl flex flex-col hover:shadow-md hover:scale-105 transition-transform duration-500"
                        onClick={()=>navigate("/findDoctors")}
                      >
                        <div className={`p-5 ${item.cardColor} rounded-2xl justify-items-center`}>
                          
                          <div
                            className={`${item.iconColor} h-14 w-14 rounded-2xl text-2xl flex items-center justify-center`}
                          >
                            {item.icon}
                          </div>

                          <div className="justify-items-center mt-3">
                            <h3 className="text-base font-normal text-gray-900">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {item.doctors} doctors
                            </p>
                          </div>

                        </div>
                      </button>
                    ))}
                  </div>
                </div>
            
            </section>
        </>
    );
};


export default Categories
