import React from 'react'
import {
  CalendarDays,
  Video,
  FileText,
  Bell,
  Plus,
  ClipboardList,
} from "lucide-react";



const FeatureSection = () => {

    const featuresData = [
  {
    icon: <CalendarDays className="text-blue-500 w-10 h-10  rounded-lg bg-blue-100 px-2 py-2 " />,
    title: "Online Booking",
    description: "Book appointments 24/7 with just a few clicks."
  },
  {
    icon: <Video className="text-green-500 w-10 h-10  rounded-lg bg-green-100 px-2 py-2 " />,
    title: "Video Consultation",
    description: "Consult doctors from home via HD video calls."
  },
  {
    icon: <FileText className="text-yellow-500 w-10 h-10  rounded-lg bg-yellow-100 px-2 py-2 " />,
    title: "Digital Prescriptions",
    description: "Receive and store prescriptions digitally."
  },
  {
    icon: <Bell className="text-pink-500 w-10 h-10  rounded-lg bg-pink-100 px-2 py-2 " />,
    title: "Appointment Reminders",
    description: "Never miss an appointment with reminders."
  },
  {
    icon: <Plus className="tex-pruple-500 w-10 h-10  rounded-lg bg-purple-100 px-2 py-2 " />,
    title: "Emergency Support",
    description: "Get quick access to emergency healthcare services."
  },
  {
    icon: <ClipboardList className="text-rose-500 w-10 h-10  rounded-lg bg-rose-100 px-2 py-2 " />,
    title: "Medical Records",
    description: "Keep your medical history safe and accessible."
  }
];
  
    return (
        <>
            <section className="py-20 px-4 bg-white  flex flex-col justify-center items-center gap-2">
                {/* <button className='px-4 h-8 border border-gray-800 text-slate-200 text-xs rounded-lg'>Features</button> */}
                <p className='text-base/7 text-primary max-w-xl text-center'>WHY CHOOSE MEDICARE</p>
                <h3 className="text-3xl md:text-[40px]/12 font-medium text-black-500 max-w-lg text-center leading-tight">Healthcare Made Simple & Accessible</h3>
                
                <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-6">
                    {featuresData.map((feature, index) => (
                        <div key={index} className='bg-linear-to-b  border border-blue-100 rounded-lg p-6 space-y-3 hover:shadow-md shadow-blue-300 hover:-translate-y-1 transition duration-300'>
                            {feature.icon}
                            <p className='font-medium text-lg text-black-500'>{feature.title}</p>
                            <p className='text-sm/5 text-gray-400'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )

}
export default FeatureSection
