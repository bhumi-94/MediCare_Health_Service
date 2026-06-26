import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo";



const ConfirmAppointment = () => {
    const navigate = useNavigate();
  return (
   <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e8f0fe] via-[#f0f7ff] to-[#e8f5e9]">
        {/* card
         */}
        <div
          className="bg-white text-gray-900 w-110 mt-15 mb-15
 md:p-6 p-4 text-sm rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/10"
        >
          <div className="flex justify-center mb-5">
            <span className=" rounded-full bg-blue-100 px-4 py-4">
              <img src="medicare_icon_hd.png" className="h-12 w-12" />
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-semibold">Appointment Confirmed!! </h1>
            <p className="mt-2 text-gray-500">
              Stay With MediCare
            </p>
          </div>

          <button
            type="submit"
            className="w-full mb-3 mt-4 bg-primary py-2.5 rounded-xl text-white"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  )
}

export default ConfirmAppointment
