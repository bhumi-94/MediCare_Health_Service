import React from "react";
import Logo from "../assets/logo";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import doctors from "../assets/data";


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex  items-center justify-center min-h-screen bg-gradient-to-br from-[#e8f0fe] via-[#f0f7ff] to-[#e8f5e9]">
        <div
          className="bg-white text-gray-500 w-110 mt-15 mb-15
 md:p-6 p-4 text-sm rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/10"
        >
          <div className="justify-items-center text-5xl">
            {" "}
            <Logo />
          </div>
          <h2 className="text-2xl mt-4 font-semibold text-center text-gray-800">
            Welcome back
          </h2>
          <p className="text-center ">Sign in to your MediCare account</p>
          <div className="flex gap-3 mb-5"></div>

          <div className="flex  gap-2 mb-5">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl text-sm text-foreground hover:bg-muted transition-colors">
              <span>🔵</span>Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl text-sm text-foreground hover:bg-muted transition-colors">
              <span>⚫</span>Apple
            </button>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-1 bg-border"></div>
            <span className="text-muted-foreground text-xs">
              or sign in with email
            </span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <form>
            <label
              htmlFor="email"
              className="w-full text-gray-500 font-normal mx-2 "
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
              htmlFor="password"
              className="w-full text-gray-500 font-normal mx-2 "
            >
              password
            </label>

            <input
              id="password"
              className="w-full bg-blue-50 my-3 border-0  outline-none rounded-xl  py-2.5 px-4"
              type="password"
              placeholder="Enter your password"
              required
            />
            <div className="text-right py-4">
              <a className="text-blue-400 font-semibold none" href="#">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full mb-3 bg-primary py-2.5 rounded-xl text-white"
              onClick={()=>navigate("/")}
            >
              Sign in
            </button>
          </form>
          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to='/sign-up' className="text-primary none">
              Signup
            </Link>
          </p>
          {/* <hr className="bg-gray-100 mt-4 h-0.5 " />
          <p className="text-center mt-4 text-sm">Quick access demo:</p>

          <div className="flex  gap-2 mt-5 ">
            <button
              onClick={() => navigate("/doctor-dashboard")}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border-0 rounded-2xl text-sm bg-blue-50 text-blue-400"
            >
              Doctor Dashboard
            </button>
            <button
              onClick={() => navigate("/patient-dashboard")}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border-0 rounded-2xl text-sm bg-green-50 text-green-400"
            >
              Patient Dashboard
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
