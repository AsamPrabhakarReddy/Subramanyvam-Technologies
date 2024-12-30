import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import board from "../assets/board.jpg"
import lab from "../assets/lab.webp"
import assit from "../assets/assit.jpg"
import experts from "../assets/experts.webp"
const Home = () => {


  return (
    <>
     {/* 1st component */}
     <div className="w-full p-8 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 h-screen">
        <div className="max-w-[1400px] lg:mx-auto mx-4 flex items-center justify-center h-full">
          <div className="lg:grid grid-cols-2 gap-8 items-center justify-center h-full flex flex-col space-y-8 lg:space-y-0">
            {/* Text Content */}
            <div className="flex flex-col space-y-10 items-center lg:items-start">
              {/* Heading */}
              <h1 className="lg:text-5xl text-4xl font-bold text-gray-800 text-center lg:text-left">
                100% Software Job Guarantee Institute
              </h1>

              {/* First Paragraph */}
              <p className="lg:text-4xl text-2xl font-semibold text-sky-700 text-center lg:text-left">
                We don’t just teach concepts. We focus on hands-on, Practical learning to ensure deep understanding.
              </p>

              {/* Button */}
              <button className="bg-blue-900 px-6 py-4 text-white rounded-lg font-bold hover:bg-orange-600">
                <Link to="/courses">View All Courses</Link>
              </button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={logo}
                alt="Institute Logo"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2st component */}


      <div className='w-full h-auto lg:mt-[0px] mt-[0px] bg-gray-300'>
        <div className="max-w-[1400px] lg:mx-auto  mx-[10px] h-auto  pb-10">
            <div className=" p-8 flex flex-col justify-center gap-[50px]">
              <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
                Why Choose Us
              </h1>
              <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8 ">      
                <div className="p-2 flex flex-col justify-center">
                  <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight ">
                  1. Interactive Classroom Learning with Projector
                  </h1>
                  <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                  Experience an engaging and dynamic teaching environment where concepts come to life through projector-based learning. Visual aids and multimedia presentations ensure better understanding and retention of complex topics. Enhance your classroom experience with cutting-edge technology.
                  </p>
                </div>

                <div className="flex justify-center">
                  <img src={board}/>
                </div>
                
              </div>

              <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8">      
                <div className="flex justify-center">
                  <img src={lab}/>
                </div>
                
                <div className="p-2 flex flex-col justify-center">
                  <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight ">
                  2. Dedicated Labs for Hands-On Practice
                  </h1>
                  <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                  Gain practical experience with access to fully equipped labs designed for immersive learning. Practice and apply concepts in a real-world environment to build confidence and expertise. Your journey to mastery starts here!
                  </p>
                </div>
              </div>


              <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8 ">      
                <div className="p-2 flex flex-col justify-center">
                  <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight ">
                  3. Personalized Assistance for Doubt Clearance
                  </h1>
                  <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                    Get your questions answered with dedicated one-on-one assistance from our experts. Our personalized support ensures you never feel stuck and helps you progress confidently in your learning journey.
                 </p>
                </div>

                <div className="flex justify-center">
                  <img src={assit}/>
                </div>
                
              </div>

              <div className="max-w-[1200px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8">      
                <div className="flex justify-center">
                  <img src={experts}/>
                </div>
                
                <div className="p-2 flex flex-col justify-center">
                  <h1 className="lg:text-[35px] text-[25px] font-semibold text-start text-blue-900 leading-tight ">
                  4. Learn from Industry Veterans with 20+ Years of Experience
                  </h1>
                  <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                    Our expert instructors bring over two decades of real-world software industry experience to the classroom. Gain insights, practical knowledge, and mentorship from professionals who have mastered their craft.
                 </p>
                </div>
              </div>

              </div>
          </div>


      </div>

    
    </>
  );
};

export default Home;
