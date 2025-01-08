import React, { useState } from 'react';

import Navbar from './Navbar';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import contact from "../assets/contact.jpg";
import Footer from './Footer';
import Swal from 'sweetalert2';
const Contact = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic like sending data to a server
    console.log("Form submitted:", formData);
    Swal.fire({
      icon:"success",
      title:"Successfully Submitted!"
    })
  };

  return (
    <>
      <Navbar />

      <div className="w-full p-4 h-auto">
        <div className="max-w-[1400px] lg:mx-auto mx-2">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 rounded-lg">
            <div className="">
              <img src={contact} className="lg:h-[500px] w-full" />
            </div>

            <div className='border border-1 w-full p-8 flex flex-col items-center  justify-center gap-4'>
                <h1 className='text-4xl font-bold text-blue-900'>Contact us</h1>
              <form onSubmit={handleSubmit} className=" flex flex-col justify-center space-y-4 w-[70%]">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder='Enter Full Name'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder='Enter Email'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder='Enter Phone number'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-lg font-semibold">Which Course are you looking for?</label>
                  <textarea
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder='what are you looking for ....'
                    required
                  >
            
                  </textarea>
                </div>

                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* grid section */}
      <div className="w-full p-8">
        <div className="max-w-[1400px] lg:mx-auto mx-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 rounded-lg">
            {/* Email Section */}
            <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg">
              <span className="text-[50px] text-blue-900">
                <FaPhone />
              </span>
              <h1 className="text-gary-600 text-3xl font-bold">Email ID</h1>
              <a href="mailto:info@Svamtech.com" className="text-blue-500 font-semibold text-xl">
                info@Svamtech.com
              </a>
              <a href="mailto:Svamtech@gmail.com" className="text-blue-500 font-semibold text-xl">
                Svamtech@gmail.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg">
              <span className="text-[50px] text-blue-900">
                <MdEmail />
              </span>
              <h1 className="text-gary-600 text-3xl font-bold">Cell Phone No</h1>
              <a href="tel:+918105605879" className="text-blue-500 font-semibold text-xl">
                +(91) 8105605879
              </a>
              <a href="tel:+919346504230" className="text-blue-500 font-semibold text-xl">
                +(91) 9346504230
              </a>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg">
              <span className="text-[50px] text-blue-900">
                <FaLocationDot />
              </span>
              <h1 className="text-gary-600 text-3xl font-bold">Location</h1>
              <p className="text-center font-semibold text-xl text-blue-500">
                1st Floor, Chennaigunta, Opp. Bommala Quarters, Karakambadi Road, Tirupati - 517507
              </p>
              <a
                // href="https://www.google.com/maps/dir//First+Floor:+Karakambadi+Rd,+opp.+to+bommala+quarters,+Mangalam,+Chennayyagunta,+Tirupati,+Andhra+Pradesh+517507/@13.6559464,79.3917466,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a4d4b3d10c2be65:0xec60100e3b7b4969:2m2!1d79.4741484:2d13.65596?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                href='https://maps.app.goo.gl/uYh2YtcM5jSBozfx5'
                target="_blank"
                className=" mt-2 font-bold p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-900"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full p-8 mt-0">
        <div className="max-w-[1400px] lg:mx-auto mx-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.029569864421!2d79.47157347455716!3d13.65596519950625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b3d10c2be65%3A0xec60100e3b7b4969!2sSUBRAMANYVAM%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1735556226257!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: '1' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


    <Footer/>
    </>
  );
};

export default Contact;
