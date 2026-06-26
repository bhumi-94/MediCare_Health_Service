import React from "react";
import { BadgeCheck, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar'



const parseFee = (fee) => {
  const numericValue = Number(String(fee).replace(/[^0-9.]/g, ""));
  return Number.isNaN(numericValue) ? 0 : numericValue;
};

const BookAppointment = ({
  doctor: doctorProp,
  appointmentType = "In-Person",
}) => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const doctor = doctorProp || doctors.find((doc) => doc.id === Number(doctorId));

  const consultationFee = parseFee(doctor?.fee);
  const platformFee = 50;
  const gst = Math.round((consultationFee + platformFee) * 0.18);
  const total = consultationFee + platformFee + gst;

  if (!doctor) {
    return <h1 className="p-6 text-center text-xl font-semibold">Doctor Not Found</h1>;
  }

  return (<>
  <Navbar />
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-600 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => navigate(-1)}
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
              <div className="relative mx-auto shrink-0 sm:mx-0">
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

      <div className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-4 shadow-lg sm:p-6">
            <h3 className="text-xl font-semibold text-slate-800">Appointment Details</h3>
            <p className="mt-2 text-sm text-slate-500">
              Confirm your preferred consultation type and time before proceeding.
            </p>
          </div>

          <div className="w-full max-w-[280px] mx-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="mb-3 text-base font-semibold text-slate-800">Booking Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Doctor</span>
                <span className="font-medium text-right">{doctor.name}</span>
              </div>

              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Specialty</span>
                <span className="font-medium text-right">{doctor.specialty}</span>
              </div>

              {/* <div className="flex justify-between gap-2">
                <span className="text-slate-500">Type</span>
                <span className="text-right">{appointmentType}</span>
              </div> */}
            </div>

            <div className="my-3 border-t"></div>

            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Consultation Fee</span>
                <span>₹{consultationFee}</span>
              </div>

              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>

              {/* <div className="flex justify-between gap-2">
                <span className="text-slate-500">GST (18%)</span>
                <span>₹{gst}</span>
              </div> */}
            </div>

            <div className="my-3 border-t"></div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Total</span>
              <span className="text-lg font-bold text-blue-600">₹{total}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/confirm-appointment")}
          className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Confirm Appointment
        </button>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
      </>

  );
};

export default BookAppointment;