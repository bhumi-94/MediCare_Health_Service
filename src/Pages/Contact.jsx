import React from "react";
import Footer from "../Components/Footer";



function Contact() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">

      {/* yaha per mai header banaya hu   */}
      <div className="bg-blue-500 text-white text-center py-9 shadow-md">
        <h1 className="text-3xl font-bold">Please contact the doctor</h1>
        <p className="mt-2">
          any Queary the Doctor and Patient releted <br />
          Our support team is available Monday–Friday, 9 AM to 6 PM IST
        </p>
      </div>

      {
      /* Left Side ye yaha per mera contact ka div jo mai contect kar sakta hu 
       kin kin chizo se like email...
      
      */}

      <div className="max-w-7xl mx-auto mt-11 md:flex md:gap-12">
        <div className="md:w-1/2 space-y-7">
          <div className="border p-5 rounded-lg hover:scale-101 transition cursor-pointer" >
            <h3 className="text-blue-600 font-semibold">EMAIL US</h3>
            <p className="font-bold">support@medicare.health</p>
            <span className="text-gray-600 text-sm">We reply within 24 hours</span>
          </div>

          <div className="border p-5 rounded-lg hover:scale-101 transition cursor-pointer">
            <h3 className="text-blue-600 font-semibold">CALL US</h3>
            <p className="font-bold">+91 98765 43210</p>
            <span className="text-gray-600 text-sm">Mon–Fri, 9 AM – 6 PM IST</span>
          </div>

          <div className="border p-5 rounded-lg hover:scale-101 transition cursor-pointer">
            <h3 className="text-blue-600 font-semibold">VISIT US</h3>
            <p className="font-bold">42 MediCare Lane, Health District</p>
            <span className="text-gray-600 text-sm">Mumbai, Maharashtra 400001</span>
          </div>

          <div className="border p-5 rounded-lg hover:scale-101 transition cursor-pointer">
            <h3 className="text-blue-600 font-semibold">WORKING HOURS</h3>
            <p className="font-bold">Mon–Fri: 9:00 AM – 6:00 PM</p>
            <span className="text-gray-600 text-sm">Weekends: Emergency only</span>
          </div>
        </div>

        {
        /* Right Side - yaha per mai ek form banaya hu jo 
           user apna information ko fill karge or doctor releted queary kar sakta hai 

           yaha per sare input fields ko lavel mai wrap kardiya hu 
        */
        }

        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 mt-8 md:mt-0">
          <h2 className="text-blue-600 text-xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 ">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 c">Message</label>
              <textarea
                rows="5"
                placeholder="Describe your query in detail..."
                className="w-full border rounded-md p-3 focus:outline focus:ring-2 focus:ring-blue-400 cursor-pointer"
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full"
            >
              Send information
            </button>

            
           
          </form>
        </div>
      </div>
      <br />
      {/*  ab yaha mai footer component use kar raha hu  */}
       <Footer/>
    </div>
   
  );
}

export default Contact;
