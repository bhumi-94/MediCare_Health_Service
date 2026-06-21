import React from "react";
import {
  Star,
  Clock3,
  MapPin,
  BadgeCheck,
  ArrowRight,
}
 from "lucide-react";
import doc1 from "../assets/doctorsimg/doc1.jpg";
import doc2 from "../assets/doctorsimg/doc2.jpg";
import doc3 from "../assets/doctorsimg/doc3.jpg";
import doc4 from "../assets/doctorsimg/doc4.jpg";
import { useNavigate } from 'react-router-dom'
import Card from "./Card";



const TopRatedDoctors = () => {

        const navigate = useNavigate();
  
  const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    image: doc2,
    rating: 4.9,
    reviews: 312,
    experience: "12 yrs exp",
    location: "Mumbai",
    fee: "₹800",
    available: "Available Today",
  },
  {
    name: "Dr. Arjun Mehta",
    specialty: "Neurologist",
    image: doc1,
    rating: 4.8,
    reviews: 198,
    experience: "9 yrs exp",
    location: "Delhi",
    fee: "₹1000",
    available: "Available Today",
  },
  {
    name: "Dr. Sunita Reddy",
    specialty: "Dermatologist",
    image: doc3,
    rating: 4.7,
    reviews: 245,
    experience: "7 yrs exp",
    location: "Bangalore",
    fee: "₹600",
    available: "Next Available: Tomorrow",
  },
  {
    name: "Dr. Rohan Kapoor",
    specialty: "Orthopedic Surgeon",
    image: doc4,
    rating: 4.9,
    reviews: 420,
    experience: "15 yrs exp",
    location: "Chennai",
    fee: "₹1200",
    available: "Available Today",
  },
];

  return (
    <section className="bg-[#f7f9fc] py-20 px-6 md:px-45">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-blue-400 font-semibold uppercase text-sm tracking-wider">
            Our Specialists
          </p>

          <h3 className="text-3xl font-semibold text-slate-900 mt-1">
            Top Rated Doctors
          </h3>
        </div>

        <button onClick={()=>navigate("/findDoctors")} className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:text-blue-700">
          View All
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {doctors.map((doctor, index) => (
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
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
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
                <p className="text-slate-500 text-xs">
                  Consultation Fee
                </p>

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
            <div className="flex gap-4 mt-5">
              <button onClick={()=>navigate("/findDoctors/:docid")} className="flex-1 text-sm border border-blue-600 text-blue-600 py-2 rounded-2xl font-medium hover:bg-blue-50 ">
                View Profile
              </button>

              <button onClick={()=>navigate("/book-appointment")} className="flex-1  text-sm bg-blue-600 text-white py-2 rounded-2xl font-medium hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default TopRatedDoctors
