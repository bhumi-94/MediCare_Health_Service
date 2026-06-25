import React, { useState } from "react";
import SingleCard from "../Components/SingleCard";
import SearchField from "../Components/SearchField";
import doctors from "../assets/data";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const FindDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = [
    "All",
    "Cardiologist",
    "Dermatologist",
    "Orthopedics",
    "Neurologist",
    "Pediatrician",
    "ENT",
    "Ophthalmologist",
    "Gynecologist",
    "Psychiatrist",
    "Dentistist",
    "Urologist",
    "Oncologist",
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.specialty
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" ||
      doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Header of the page */}
      <div className="bg-blue-500 text-white text-left py-9 lg:pl-30 lg:pr-30 md:pl-10 md:pr-10 pr-5 pl-5 h-60 shadow-md">
        <p className="mt-3 font-semibold lg:text-3xl md:text-2xl sm:text-xl">
          Find the Right Doctor
        </p>
        <h2 className="mt-4 lg:text-xl md:text-xl sm:text-sm text-blue-200">
          Browse {doctors.length} verified specialists and book your appointment today
        </h2>
        <SearchField value={searchTerm} onChange={setSearchTerm} />
      </div>
      <div className="flex-1 p-6 lg:pl-30 lg:pr-30 md:pl-10 md:pr-10 pr-5 pl-5">
        {/* Left Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4 self-start">
            <div className="bg-white border border-gray-200 hover:shadow-md shadow-blue-200 rounded-xl p-5">
              <div className="flex justify-between mb-4">
                <span className="text-bold">Filters</span>
                <button className="text-xs text-blue-500">Reset All</button>
              </div>

              <h2 className="text-sm text-gray-400 font-semibold">SPECIALTY</h2>
              <div className="mt-2 font-semibold">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`block border m-1 rounded-2xl w-full text-left pl-3 py-1.5 text-[16px] ${
                      selectedSpecialty === specialty
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-blue-100 text-gray-400"
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="flex justify-between mb-4">
              <span className="text-bold">Find Doctors</span>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("All");
                }}
                className="text-xs text-blue-500"
              >
                {searchTerm || selectedSpecialty !== "All"
                  ? `${filteredDoctors.length} matching doctors`
                  : `${filteredDoctors.length} doctors found`}
              </button>
            </div>
            {filteredDoctors.length > 0 ? (
              <SingleCard doctors={filteredDoctors} />
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                No doctors found for the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindDoctors;
