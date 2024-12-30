import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-600 select-none">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pb-8 mb-8 border-b border-gray-600">
              <div className="w-full p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mt-8">
                  <div className="flex flex-col lg:mb-0 mb-8 gap-4 md:col-span-1 col-span-2">
                    <div className="w-full ">
                      <a
                        href="/"
                        className="flex flex-row items-center md:justify-start justify-center"
                      >
                       
                        <h3 className="ml-1 text-2xl text-blue-900 font-bold cursor-pointer">
                          <span className="text-orange-600">Subramnyvam</span> Technologies
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 font-bold text-white tracking-wider  flex md:justify-start justify-center items-start mt-1 text-footerLinks cursor-pointer  hover:text-orange-600">
                      <Link to="/">Home</Link>
                      </h4>
                    </div>
                    
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-white font-bold tracking-wider  flex md:justify-start justify-center items-start mt-1 text-footerLinks cursor-pointer  hover:text-orange-600">
                         <Link to="/courses">Courses</Link>
                      </h4>
                    </div>
                    
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 font-bold text-white tracking-wider  flex md:justify-start justify-center items-start mt-1 text-footerLinks cursor-pointer  hover:text-orange-600">
                        <Link to="/about-us">About Us</Link>
                      </h4>
                    </div>
                    
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 text-white font-bold tracking-wider  flex md:justify-start justify-center items-start mt-1 text-footerLinks cursor-pointer  hover:text-orange-600">
                        <Link to="/contact-us">Contact Us</Link>
                      </h4>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-4 w-full">
                  <div className="grid grid-cols-5">
                    <a
                      href=""
                      className="flex justify-center items-center "
                    >
                      <FaLinkedin
                        size={25}
                        className="cursor-pointer"
                        color="white  "
                      />
                    </a>
                    <a
                      href=""
                      className="flex justify-center items-center"
                    >
                      <FaXTwitter
                        size={25}
                        className="cursor-pointer"
                        color="white"
                      />
                    </a>
                    <a
                      href=""
                      className="flex justify-center items-center"
                    >
                      <FaInstagram
                        size={25}
                        className="cursor-pointer"
                        color="white"
                      />
                    </a>
                    <a
                      href=""
                      className="flex justify-center items-center"
                    >
                      <FaGoogle
                        size={25}
                        className="cursor-pointer"
                        color="white"
                      />
                    </a>
                    <a
                      href=""
                      className="flex justify-center items-center"
                    >
                      <FaFacebook
                        size={25}
                        className="cursor-pointer text-white"
                        color="footerItems"
                      />
                    </a>{" "}
                  </div>

                  <div className="flex justify-center items-center">
                    <form className="lg:w-[70%] w-[90%]">
                      <label
                        for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Subscribe
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                        <input
                          type="search"
                          id="search"
                          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none"
                          placeholder="Enter your email address"
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute end-2.5 bottom-2.5 bg-mainColor font-medium rounded text-sm px-4 py-2 "
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xs pb-6">
              <p className="text-footerItems">
                Copyright © 2024 Subramanyvam Technologies. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
