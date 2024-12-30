import React, { useState } from 'react';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Home from './Home';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleFlag = (e) => {
    e.preventDefault();
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div className="w-full p-8 shadow-xl">
        <div className="max-w-[1400px] lg:mx-auto mx-4">
          {/* Desktop Header */}
          <div className="lg:flex items-center justify-between hidden">
            <h1 className="text-4xl text-blue-900 font-bold"> <Link to="/"><span className='text-orange-600'>Subramanyvam</span>  Technologies</Link>  </h1>
            <div className='flex items-center justify-center gap-4 py-4 space-x-10'>
                <div className='text-xl cursor-pointer under text-blue-900 hover:font-bold'> <Link to="/">Home</Link>  </div>
                <div className='text-xl cursor-pointer under text-blue-900 hover:font-bold'> <Link to="/courses">Courses</Link>   </div>
                <div className='text-xl cursor-pointer under text-blue-900 hover:font-bold'> <Link to="/about-us">About</Link>   </div>
           </div>
            <div className="ml-5 flex items-center gap-5">
              <button className="bg-blue-900 px-6 py-2 text-white rounded-lg font-bold">
               <Link to="/contact-us">  Contact Us  </Link>
              </button>

            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex lg:hidden justify-between items-center">
            <h1 className="text-2xl text-blue-900 font-bold">  <Link to="/"><span className='text-orange-600'>Subramanyvam</span>  Technologies</Link>  </h1>
            <CiMenuFries
              className="text-4xl text-blue-900 cursor-pointer"
              onClick={handleFlag}
              aria-expanded={isMobile}
            />
          </div>
        </div>

        
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="w-full text-center bg-gray-100 shadow-lg lg:hidden mx-4">
        <div className="flex flex-col p-4 gap-4">
                {/* <div className='text-xl cursor-pointer under text-blue-900 hover:font-bold'> <Link to="/">Home</Link>   </div>    */}
                <div className='text-xl cursor-pointer under text-blue-900 hover:font-bold'> <Link to="/courses">Courses</Link>   </div>
                <div className='text-xl cursor-pointer under text-blue-900 hover:font-bold'> <Link to="/about-us">About</Link>   </div>
         
         
          <button className="bg-blue-900 px-6 py-2 text-white rounded-lg font-bold w-2/3  mx-auto">
            <Link to="/contact-us">  Contact Us  </Link>  
          </button>
        </div>
      </div>
      
      )}
      
    </>
  );
};

export default Navbar;
