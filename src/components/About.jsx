import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const About = () => {
  return (
    <div>
        <Navbar/>

        <div className="w-full p-0 h-auto">
          <div className="w-full flex flex-col ">
              <div className=' w-full lg:h-[450px] h-[350px]'>
                  <img className="w-full h-full" src='https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?b=1&s=612x612&w=0&k=20&c=I4dJdLySO50KEJwqDX3gM9yLkYLEL7I4iGPWlpCZrag=' />
              </div>
              <div className='max-w-[1400px] lg:mx-auto mx-4 flex flex-col p-4 gap-6 mt-8'>
                  <h1 className='flex justify-center items-center text-3xl font-bold '>Who We Are? </h1>
                  <p className='text-center text-lg text-gray-600 '>Subramanyam Technologies is a leading Indian IT training institute preparing tech-aspirants for flourishing careers in this challenging and competitive domain since 2018. We offer flexible offline training options that allow our students to study conveniently and progress at their preferred pace. Teaching at Subramanyam Technologies is supported by 20 years of extensive software experience, innovative teaching methodologies, and high-quality educational resources.</p>
              </div>
              <div className='max-w-[1400px] lg:mx-auto mx-4 flex flex-col p-4 gap-6 mt-8'>
                  <h1 className='flex justify-center items-center text-3xl font-bold '>Our Mission & Vision</h1>
                  <p className='text-center text-lg text-gray-600'>Training at Subramanyam Technologies is tailored and regularly updated to match the ever-growing needs of the robust and cut-throat IT domain. Our mission is to educate and train our students to effectively assume top responsibilities and handle senior administrative roles in tech-driven MNCs around the world. Our vision is to make high-quality IT training services easily available, accessible, and affordable to the promising talent of our country.</p>
                  <div className="w-full p-8">
                   <div className="max-w-[1400px] lg:mx-auto mx-2">
                     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 rounded-lg">
                       {/* Email Section */}
                       <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg">
                         <span className="text-[50px] text-blue-900">
                           {/* <FaPhone /> */}
                         </span>
                         <h1 className="text-blue-900 text-3xl font-bold">Mission</h1>
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
                           {/* <MdEmail /> */}
                         </span>
                         <h1 className="text-blue-900 text-3xl font-bold">Vission</h1>
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
                           {/* <FaLocationDot /> */}
                         </span>
                         <h1 className="text-blue-900 text-3xl font-bold">Goal</h1>
                         <p className="text-center font-semibold text-xl text-blue-500">
                           1st Floor, Chennaigunta, Opp. Bommala Quarters, Karakambadi Road, Tirupati - 517507
                         </p>
                        
                       </div>
                     </div>
                   </div>
                 </div>       
              </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default About