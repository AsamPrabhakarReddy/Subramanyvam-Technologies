import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import board from "../assets/board.jpg"
import lab from "../assets/lab.webp"
import assit from "../assets/assit.jpg"
import experts from "../assets/experts.webp"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {

  const slides = [
    {
      image:
        "https://www.swg.com/se/wp-content/uploads/sites/45/2017/11/Services-product-training-banner.jpg",
        // SupportOne,
      heading: "Enhance Your Skills with Expert Training",
      paragraph:
        "Join industry-focused training programs that equip you with practical skills to thrive in your career.",
      buttonText: "Contact US",
      buttonLink: "/contact-us",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVN8kCnO5T-S9qorFAQMWGR3ZI7LZf1tVRw&s",
      heading: "Build Your Expertise with Specialized Courses",
      paragraph:
        "Gain in-depth knowledge and hands-on experience through tailored courses designed for professional growth.",
        buttonText: "Contact US",
        buttonLink: "/contact-us",
    },
    {
      image:
        "https://www.mightyrecruiter.com/wp-content/uploads/2017/05/Hiring_College_Students.jpg",
      heading: "Get Trained, Get Hired",
      paragraph:
        "With personalized training sessions and real-world projects, we help you gain the skills employers are looking for.",
        buttonText: "Contact US",
        buttonLink: "/contact-us",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);


  return (
    <>
     {/* 1st component */}
     <section className="relative h-[calc(100vh-90px)] w-full overflow-hidden select-none">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl uppercase ">
          {slides[currentIndex].heading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
          {slides[currentIndex].paragraph}
        </p>
        <a
          href={slides[currentIndex].buttonLink}
          className="mt-8 inline-block px-6 py-3 border-[1px] border-navGray text-white rounded text-lg font-light transition hover:bg-opacity-90"
        >
          {slides[currentIndex].buttonText}
        </a>
      </div>
    </section>
      {/* 2st component */}


      <div className='w-full h-auto lg:mt-[0px] mt-[0px] bg-gray-300'>
        <div className="max-w-[1400px] lg:mx-auto  mx-[10px] h-auto  pb-10">
            <div className=" p-4 flex flex-col justify-center gap-[50px]">
              <h1 className="lg:text-[50px] text-[35px] font-bold text-center font-semibold leading-tight text-blue-900">
                Why Choose Us
              </h1>
              <div className="max-w-[1400px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8 ">      
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

              <div className="max-w-[1400px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8">      
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


              <div className="max-w-[1400px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8 ">      
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

              <div className="max-w-[1400px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center gap-8">      
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
