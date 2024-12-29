import React from 'react';
import aws from "../assets/aws.jpg"
import c from "../assets/c.jpg"
import ds from "../assets/ds.jpg"
import FE from "../assets/FE.jpg"
import java from "../assets/java.jpg"
import msoffice from "../assets/msoffice.jpg"
import python from "../assets/python.jpg"
import RA from "../assets/RA.jpg"
import sql from "../assets/sql.jpg"
import english from "../assets/english.jpg"
import devops from "../assets/devops.png"
import advjava from "../assets/advjava.png"
import advpython from "../assets/advpython.jpg"
import django from "../assets/django.jpg"
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Courses = () => {
  const data = [
    {
      icon: msoffice,
      title: 'MS Office',
      Duration: '40 days',
      Fee: '5000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: c,
      title: 'C Language',
      Duration: '45 days',
      Fee: '6000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: python,
      title: 'Core Python',
      Duration: '45 days',
      Fee: '7500',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: python,
      title: 'Advanced Python',
      Duration: '45 days',
      Fee: '7500',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: java,
      title: 'Core Java',
      Duration: '45 days',
      Fee: '7500',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: java,
      title: 'Advanced Java',
      Duration: '45 days',
      Fee: '7500',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: sql,
      title: 'Oracle or MySQL',
      Duration: '60 days',
      Fee: '10000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: FE,
      title: 'Front-end/Web/UI (HTML, CSS, JavaScript)',
      Duration: '45 days',
      Fee: '7500',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: aws,
      title: 'AWS',
      Duration: '45 days',
      Fee: '10000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: devops,
      title: 'DevOps',
      Duration: '60 days',
      Fee: '15000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: RA,
      title: 'Angular or React JS',
      Duration: '60 days',
      Fee: '10000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: django,
      title: 'Django',
      Duration: '30 days',
      Fee: '7500',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon:  python,
      title: 'Full Stack Python',
      Duration: '4 months',
      Fee: '20000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: java,
      title: 'Full Stack Java',
      Duration: '4 months',
      Fee: '20000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: java,
      title: 'Full Stack Java (100% Job Oriented Training)',
      Duration: 'Till you get a job',
      Fee: '120000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: ds,
      title: 'Full Stack Data Science',
      Duration: '4 months',
      Fee: '20000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
    {
      icon: english,
      title: 'English',
      Duration: '45 days',
      Fee: '5000',
      tutor: '20+ years of Experience in software industry',
      button: 'Want to learn',
    },
  ];
  

  return (
    <>
    <Navbar/>
    <div className="w-full p-8 shadow-xl">
      <div className="max-w-[1400px] lg:mx-auto mx-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 rounded-lg">
          {data.map((course, index) => (
            <motion.div
              key={index}
              className="p-4 shadow-md bg-white rounded-lg space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={course.icon}
                alt={course.title}
                className="h-30 w-30 mx-auto mb-4"
              />
              <h3 className="text-3xl font-bold text-center text-blue-900">{course.title}</h3>
              <p className="text-3xl text-blue-900 text-center font-bold">
                Duration: {course.Duration}
              </p>
              <p className="text-3xl text-blue-900 text-center font-bold">
                Fee: ₹{course.Fee}
              </p>
              <p className="text-3xl text-blue-900 text-center font-bold">
                Tutor: <span className="text-xl">{course.tutor}</span>
              </p>
              <div className="flex justify-center">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white w-full rounded-lg hover:bg-blue-600">
                  {course.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Courses;
