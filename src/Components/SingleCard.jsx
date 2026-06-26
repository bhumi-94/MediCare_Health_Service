import React from "react";
import { Star, Clock3, MapPin, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ doctors: doctorsList = [] }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {doctorsList.map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-lg  shadow-blue-200 transition hover:scale-1.5"
          >
            {/* Top */}
            <div className="flex items-center gap-4 justify-center">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-15 h-15 rounded-2xl object-cover"
                />

                <BadgeCheck
                  size={22}
                  className="absolute -bottom-1 -right-1 text-green-500 bg-white rounded-full"
                />
              </div>

              <div>
                <h3 className="text-20 font-semibold text-slate-700">
                  {doctor.name}
                </h3>

                <p className="text-sm text-blue-600 font-light">
                  {doctor.specialty}
                </p>

                <div className="flex items-center gap-1 mt-2">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-normal text-sm">{doctor.rating}</span>
                  <span className="text-slate-500 text-sm ">
                    ({doctor.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex justify-between mt-3 text-slate-500 px-3">
              <div className="flex items-center gap-2 ">
                <Clock3 size={13} className="text-blue-500" />
                <span className="text-xs ">{doctor.experience}</span>
              </div>

              <div className="flex items-center gap-2 px-5">
                <MapPin size={13} className="text-green-500" />
                <span className="text-xs">{doctor.location}</span>
              </div>
            </div>

            {/* Fee */}
            <div className="flex justify-between items-center mt-8">
              <div>
                <p className="text-slate-500 text-xs">Consultation Fee</p>

                <h4 className="text-sm font-semibold text-slate-900">
                  {doctor.fee}
                </h4>
              </div>

              <span
                className={`px-2 py-1 rounded-full text-xs font-normal ${
                  doctor.available.includes("Tomorrow")
                    ? "bg-orange-50 text-orange-600"
                    : "bg-green-50 text-green-600"
                }`}
              >
                {doctor.available}
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => navigate(`/doctor-profile/${doctor.id}`)}
                className="flex-1 min-w-[110px] text-sm border border-blue-600 text-blue-600 py-2 rounded-2xl font-medium hover:bg-blue-50 "
              >
                View Profile
              </button>

              <button
                onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                className="flex-1 min-w-[110px] text-sm bg-blue-600 text-white py-2 rounded-2xl font-medium hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleCard;
