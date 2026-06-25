import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



function Contact() {
  return (
    <>
    <Navbar />
    <div className=" bg-blue-50 ">

      {/* yaha per mai header banaya hu   */}
      <div className="bg-blue-500 text-white text-center py-9 h-60 shadow-md ">
        <h2 className="mt-10 text-xl text-blue-200">Contact Us</h2>
        <p className="mt-3 font-semibold text-3xl">
          We'd Love to Hear from You
        </p>
        <p className="mt-2 text-base text-blue-200">Our support team is available Monday–Friday, 9 AM to 6 PM IST.</p>
      </div>

      {
      /* Left Side ye yaha per mera contact ka div jo mai contect kar sakta hu 
       kin kin chizo se like email...
      
      */}

      <div className="max-w-7xl mx-auto  mb-10 md:flex md:px-5 sm:px-5 md:gap-12 justify-center mt-20">
        <div className="md:w-1/4 space-y-4 ">
          <div className="border border-gray-200 shadow-md p-5 bg-white rounded-2xl hover:scale-101 transition cursor-pointer" >
            <p className="text-gray-500 text-xs ">EMAIL US</p>
            <p className="font-medium">support@medicare.health</p>
            <span className="text-gray-500 text-xs">We reply within 24 hours</span>
          </div>

          <div className="border border-gray-200 shadow-md p-5 bg-white rounded-2xl hover:scale-101 transition cursor-pointer">
            <h3 className="text-gray-500 text-xs">CALL US</h3>
            <p className="font-medium">+91 98765 43210</p>
            <span className="text-gray-500 text-xs">Mon–Fri, 9 AM – 6 PM IST</span>
          </div>

          <div className="border border-gray-200 shadow-md p-5 bg-white rounded-2xl hover:scale-101 transition cursor-pointer">
            <h3 className="text-gray-500 text-xs">VISIT US</h3>
            <p className="font-medium">42 MediCare Lane, Health District</p>
            <span className="text-gray-500 text-xs">Mumbai, Maharashtra 400001</span>
          </div>

          <div className="border border-gray-200 shadow-md p-5 bg-white rounded-2xl hover:scale-101 transition cursor-pointer">
            <h3 className="text-gray-500 text-xs">WORKING HOURS</h3>
            <p className="font-medium">Mon–Fri: 9:00 AM – 6:00 PM</p>
            <span className="text-gray-500 text-xs">Weekends: Emergency only</span>
          </div>
        </div>

        {
        /* Right Side - yaha per mai ek form banaya hu jo 
           user apna information ko fill karge or doctor releted queary kar sakta hai 

           yaha per sare input fields ko lavel mai wrap kardiya hu 
        */
        }

        <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 mt-8 md:mt-0">
          <h2 className="text-black-600 text-xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-4 ">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full   bg-blue-50 border-0 rounded-2xl p-3 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="your@eamil.com"
                className="w-full bg-blue-50 border-0 rounded-2xl p-3 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full  bg-blue-50 border-0 rounded-2xl p-3 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 c">Message</label>
              <textarea
                rows="5"
                placeholder="Describe your query in detail..."
                className="w-full  bg-blue-50 border-0 rounded-2xl p-3 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="button"
              className=" w-1/3 bg-blue-500 font-semibold text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition "
            >
              Send Message
            </button>

            
           
          </form>
        </div>
      </div>
      <br />
     
    </div>
     

    <Footer /> 
   </>
  );
}

export default Contact;
