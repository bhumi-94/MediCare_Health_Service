import React from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import StatsSection from "../Components/StatsSection";
import Navbar from "../Components/Navbar";

const About = () => {
  const navigate = useNavigate();
  return (
    <> <Navbar />
      {/* starting mai header component ka use karunga  */}
      {/* ye header about wala hoga   div kai under wala div center mai rakunga or text be....*/}
      <div className="lg:h-auto lg:w-full md:h-auto md:w-full w-full lg:px-10 lg:py-20 md:px-10 md:py-20 px-5 py-5 bg-blue-500 flex justify-center items-center">
        <div className="text-center max-w-2zl px-4 ">
          <p className="text-xl font-semibold text-white mt-5 mb-4">
            About Us{" "}
          </p>
          <h1 className="text-2xl lg:text-4xl font-semibold text-white mb-6 ">
            Transforming HealthCare, One Appointment at A time{" "}
          </h1>
          <p className="text-sm lg:text-xl md:text-xl text-white">
            MediCare Was founded with simple version to make quality HealthCare
            Accessible to every one every ware we conntect patients with vaild
            Doctor stremline entire HealthCare journey
          </p>
        </div>
      </div>

      {/* ab main content mai 4 div banaunga  ye raha mare pura logic  
         first-div:- two box  hoga first box mai info and seconds box mai image 
         seconds-div:-two box mai or our mission or our vission
         third div :some thing 
         four div :-  card team member  
       */}
      <div className="h-auto w-full bg-white sm:flex lg:flex lg:flex-row md:flex-col sm:flex-col items-center justify-center gap-20 p-10">
        {/* First child div */}
        <div className="lg:h-auto lg:w-130 md:h-auto md:w-auto bg-white p-6 rounded-2xl cursor-pointer">
          <p className="text-base font-semibold mb-2 text-blue-400">
            OUR STORY
          </p>
          <h1 className="text-2xl font-semibold mb-3">
            Started from a Personal Experience
          </h1>
          <p className="mb-2 text-gray-500">
            In 2020 our founder Dr. Suresh Patel experienced firsthand how
            difficult it was for his elderly mother to find a specialist during
            the pandemic.
          </p>
          <p className="text-gray-500 ">
            MediCare was built to solve this exact problem — creating a seamless
            bridge between patients and doctors. Today we serve over 50,000
            patients and 500+ doctors across India.
          </p>
          <br />
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-400 rounded-2xl px-5 py-3 text-white cursor-pointer"
          >
            Get in touch{" "}
          </button>
        </div>

        {/* Second child div */}
        <div className="lg:h-80 lg:w-120  md:h-80 md:w-120 h-60 w-auto bg-white object-cover flex justify-center items-center shadow-lg  cursor-pointer rounded-lg">
          <img
            src="/src/assets/Wutsi.jpg"
            alt="Healthcare"
            className="h-full  rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* 3 div hoga mere  */}

      <div className="h-auto  w-full bg-blue-50 flex md:flex lg:flex lg:flex-row md:flex-col flex-col  items-center justify-center lg:gap-20 md:gap-10 gap-10">
        {/*first div over mission  */}

        <div className="lg:h-60 lg:w-130 md:h-60 md:w-130 w-80  my-10 bg-white px-10 py-10 md:my-10 sm:my-10 rounded-2xl border duration-500 transition   border-gray-100 shadow-lg  hover:scale-103 cursor-pointer">
          <h1 className=" text-xl font-semibold mb-2 ">Our Mission </h1>
          <p className="mt-5 text-gray-500 ">
            To democratize access to quality healthcare by connecting every
            patient — regardless of location — with the right doctor at the
            right time, through technology that's simple, secure, and
            human-centered.
          </p>
        </div>
        {/*seconds div over vission  */}
        <div className="lg:h-60 lg:w-130 md:h-60 md:w-130 w-80 my-10 bg-white px-10 py-10 rounded-2xl  hover:scale-105 duration-500 transition border border-gray-100 shadow-lg  cursor-pointer">
          <h1 className=" text-xl font-semibold mb-2 ">Our Vision </h1>
          <p className="mt-5 text-gray-500">
            {" "}
            A world where no one delays medical care due to lack of access,
            information, or affordability. We envision a future where
            AI-assisted preventive care, instant consultations, and connected
            health records are available to all.
          </p>
        </div>
      </div>

      {/*  third div  */}
      <StatsSection />

      <div className=" w-full bg-white mt-5 mb-15 ">
        {/* team mate cards */}

        <div className="flex flex-col items-center text-center">
          {/* meet the team section*/}

          <div className="text-center mt-15 ">
            <p className="text-blue-400 font-semibold">MEET THE TEAM</p>
            <h3 className="text-black mt-3 text-2xl font-semibold">
              The People Behind MediCare
            </h3>
          </div>

          {/*  ab mere last div meet them member of founder  */}
          <div className="flex flex-wrap gap-6 items-center justify-center mt-15">
            {/* card-1 */}
            <div className="group shadow-lg flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:scale-105 duration-500 transition  ">
              <img
                className="w-24 rounded-full overflow-hidden"
                src="/src/assets/avt4.jpg"
                alt="userImage1"
              />
              <h2 className="text-gray-700 text-lg font-medium mt-2">
                Mika Sharma
              </h2>
              <p className="text-gray-500 ">CEO</p>
              <p className="text-center text-gray-500/60 w-3/4 mt-4">
                Leads the organization with a focus on innovation, operational
                excellence, and delivering value to customers.
              </p>
            </div>

            {/* card-2 */}
            <div className="group shadow-lg flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:scale-105 duration-500 transition ">
              <img
                className="w-24 rounded-full"
                src="/src/assets/avt2.jpg"
                alt="userImage1"
              />
              <h2 className="text-gray-700 text-lg font-medium mt-2">
                Ananya Krishnan
              </h2>
              <p className="text-gray-500 ">Chief Medical Officer</p>
              <p className="text-center text-gray-500/60 w-3/4 mt-4">
                Oversees medical operations and healthcare quality, driving
                patient-centered care and evidence-based practices.
              </p>
            </div>

            {/* card-3*/}
            <div className="group shadow-lg flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:scale-105 duration-500 transition  ">
              <img
                className="w-24 rounded-full"
                src="/src/assets/avt1.jpg"
                alt="userImage1"
              />
              <h2 className="text-gray-700 text-lg font-medium mt-2">
                Donald Jackman
              </h2>
              <p className="text-gray-500 ">Head of Product</p>
              <p className="text-center text-gray-500/60 w-3/4 mt-4">
                Oversees product vision and roadmap, ensuring every feature
                aligns with customer needs and company goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
