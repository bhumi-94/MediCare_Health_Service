import React from 'react'
import Logo from "../assets/logo";
import { useNavigate } from "react-router-dom";

const SignUp= () => {
    const navigate = useNavigate();
  
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e8f0fe] via-[#f0f7ff] to-[#e8f5e9]">
        <div
          className="bg-white text-gray-900 w-110 mt-15 mb-15
 md:p-6 p-4 text-sm rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/10"
        >
          <div className="justify-items-center text-5xl">
            <Logo />
          </div>
          <h2 className="text-2xl mt-4 font-semibold text-center text-gray-800">
              Create Account
          </h2>
          <p className="text-center ">Join thousands of patients on MediCare</p>

          <form className='mt-10'>
            <label
              htmlFor="fullname"
              className="w-full text-gray-900 font-normal mx-2 "
            >
              Full Name
            </label>
            <input
              id="fullname"
              className="w-full bg-blue-50 my-3 border-0  outline-none rounded-xl  py-2.5 px-4"
              type="text"
              placeholder="Alice"
              required
            />
            <br />
            <label
              htmlFor="email"
              className="w-full text-gray-900 font-normal mx-2 "
            >
              Email Address
            </label>
            <input
              id="email"
              className="w-full  bg-blue-50 my-3 border-0  outline-none rounded-xl py-2.5 px-4"
              type="email"
              placeholder="alice@gmail.com"
              required
            />
            <br />
            <label
              htmlFor="phoneNo"
              className="w-full text-gray-900 font-normal mx-2 "
            >
              Phone No
            </label>

            <input
              id="phoneNo"
              className="w-full bg-blue-50 my-3 border-0  outline-none rounded-xl  py-2.5 px-4"
              type="text"
              placeholder="+91 123-456-7890"
              required
            />
            <br />
            
            <label
              htmlFor="password"
              className="w-full text-gray-900 font-normal mx-2 "
            >
              Password
            </label>


            <input
              id="password"
              className="w-full bg-blue-50 my-3 border-0  outline-none rounded-xl  py-2.5 px-4"
              type="password"
              placeholder="Enter your password"
              required
            />
            <br />
            
            <label
              htmlFor="confirmpassword"
              className="w-full text-gray-900 font-normal mx-2 "
            >
              
              Confirm Password
            </label>


            <input
              id="confirmpassword"
              className="w-full bg-blue-50 my-3 border-0  outline-none rounded-xl  py-2.5 px-4"
              type="password"
              placeholder="Confirm your password"
              required
            />
            <br />
            <button
              type="submit"
              className="w-full mb-3 mt-4 bg-primary py-2.5 rounded-xl text-white"
              onClick={()=>navigate('/account-created')}
            >
              Create Account
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-primary none">
              Sign In
            </a>
          </p>
      

          
        </div>
      </div>
    
    </>
  )
}

export default SignUp
