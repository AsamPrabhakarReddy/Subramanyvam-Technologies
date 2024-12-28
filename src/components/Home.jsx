import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
     {/* 1st component */}
    <div className="w-full p-8 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 h-auto">
      <div className="max-w-[1400px] lg:mx-auto mx-4">
        <div className="lg:grid grid-cols-2 gap-8 items-center space-y-8">
          {/* Text Content */}
          <div className="flex flex-col space-y-20">
            {/* Heading */}
            <h1 className="lg:text-5xl text-4xl font-bold text-gray-800 lg:text-start text-center">
              100% Software Job Guarantee Institute
            </h1>

            {/* First Paragraph */}
            <p className="lg:text-4xl text-2xl font-semibold text-sky-700  lg:text-start text-center text-relaxed ">
            We don’t just teach concepts. We focus on hands-on,  Practical learning to ensure deep understanding.
            </p>

            <button className="bg-blue-900 px-6 py-4 text-white rounded-lg font-bold w-1/3 hover:bg-orange-600 hover:text-white">
            <Link to="/courses">  View All Courses  </Link>  
          </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Institute Logo"
              className=""
            />
          </div>
        </div>
      </div>
    </div>

{/* 2st component */}

    <div className="w-full h-auto p-4">
      <div className="max-w-[1400px] lg:mx-auto mx-4">
        <h1 className="text-center text-3xl text-sky-700 font-bold">Our Services</h1>
        <div className="lg:grid grid-cols-2 gap-8 items-center space-y-8">

        </div>
      </div>
    </div>

    
    </>
  );
};

export default Home;
