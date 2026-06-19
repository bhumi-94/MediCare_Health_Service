import React from "react";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between px-6 md:px-10 lg:px-16 py-2 bg-white border-b border-gray-200 shadow-md transition-all">
        <Logo />

        {/* DESKTOP MENU */}
        <div className="hidden min-[1000px]:flex items-center gap-8 text-gray-500">
          <Link to="/">Home</Link>
          <Link to="/FindDoctors">FindDoctors</Link>
          <Link to="/Specialities">Specialities</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          {/* <button class="px-4 py-2 text-sm text-primary border border-primary rounded-xl hover:bg-blue-50 transition-colors" fdprocessedid="e9fvzm" style="font-family: sans-serif; font-weight: 500;">Login</button> */}

          <button className="cursor-pointer px-6 py-2 mt-2 bg-[var(--primary-color)] hover:opacity-60 transition text-white rounded-full text-sm">
            Login
          </button>

          <button className="cursor-pointer px-6 py-2 mt-2 bg-[var(--primary-color)] hover:opacity-60 transition text-white rounded-full text-sm">
            Sign Up
          </button>

          {/* <button className="cursor-pointer px-6 py-2 mt-2 bg-[var(--primary-color)] hover:opacity-60 transition text-white rounded-full text-sm">
            Login
          </button>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-[var(--primary-color)] hover:opacity-60 transition text-white rounded-full text-sm">
            Login
          </button> */}

          {/* <button className="cursor-pointer px-6 py-2 mt-2 text-[var(--primary-color)] border border-[var(--primary-color)] bg-white-500 hover:bg-[var(--primary-color)] transition hover:text-white rounded-full">
            Sign Up
          </button> */}

          {/* <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>

                <button className="cursor-pointer px-8 py-2 text-indigo-500 border border-primary-500 bg-white-500 hover:bg-indigo-500 transition hover:text-white rounded-full">
                  Sign Up
                </button> */}
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
              ${isopen ? "flex" : "hidden"}
              min-[1000px]:hidden
              absolute top-full left-0
              w-full bg-white shadow-md
              flex-col items-start gap-4
              px-6 py-4
            text-gray-500
              `}
        >
          <Link to="/">Home</Link>
          <Link to="/FindDoctors">FindDoctors</Link>
          <Link to="/Specialities">Specialities</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>

          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
          <button className="cursor-pointer px-8 py-2 mt-2 text-indigo-500 border border-indigo-500 bg-white-500 hover:bg-indigo-500 transition hover:text-white rounded-full">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isopen)}
          className="min-[1000px]:hidden"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
