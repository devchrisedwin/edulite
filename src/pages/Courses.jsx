import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

import course3 from '../assets/images/course1.png';
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course4 from '../assets/images/course4.png';
import course5 from '../assets/images/course5.png';
import course6 from '../assets/images/course6.png';

function Courses() {
  const [courseCat, setCourseCat] = useState('All');
  const categories = [
    'All',
    'Mathematics',
    'English',
    'Literature',
    'History',
    'Science',
    'Biology',
    'Chemistry',
    'Physic',
    'Accounting',
    'FutherMathematics',
  ];

  // Framer Motion animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 }, // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div>
      {/* Header Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='mt-[60px] w-full md:w-[80%] lg:w-[35%] m-auto px-4'
      >
        <motion.h1
          variants={fadeInUp}
          className='text-2xl md:text-3xl lg:text-[40px] text-[#050505] text-center font-bold'
        >
          Find the Perfect Course for You
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className='text-center text-sm md:text-[15px] mt-1.5'
        >
          Explore subjects, exam prep, and career skills designed for secondary school students
        </motion.p>

        {/* Search Bar */}
        <motion.div
          variants={fadeInUp}
          className='flex items-center gap-2.5 p-1 w-full md:w-[200px] m-auto mt-[30px] border border-gray-400 rounded'
        >
          <FaSearch />
          <input
            type='text'
            placeholder='Search here'
            className='text-[13px] p-2 w-full outline-none border-none'
          />
        </motion.div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='flex items-center flex-wrap justify-center gap-2 w-full md:w-[80%] lg:w-[80%] m-auto cursor-pointer mt-[20px] px-4'
      >
        {categories.map((category) => (
          <motion.p
            key={category}
            variants={fadeInUp}
            onClick={() => setCourseCat(category)}
            className={`p-1 font-semibold text-[13px] whitespace-nowrap ${
              courseCat === category
                ? 'text-[#0A751D] border-b-4 border-b-[#0A751D]'
                : 'text-gray-400'
            }`}
          >
            {category}
          </motion.p>
        ))}
      </motion.div>

      {/* Course Cards */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
        className='mt-[20px] px-4'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:w-[80%] lg:w-[65%] m-auto'>
          {[...Array(12)].map((_, index) => (
            <Link to='/courses/5' key={index}>
              <motion.div
                variants={slideIn} // Apply slideIn animation
                initial='hidden'
                whileInView='visible' // Trigger animation when in view
                viewport={{ once: true }} // Only trigger once
                className='w-full h-[220px] border border-gray-400 rounded flex flex-col'
              >
                <img
                  className='w-[90%] h-[120px] m-auto mt-[10px] object-cover'
                  src={course5}
                  alt={`Course ${index + 1}`}
                />
                <div className='p-2 flex-1 flex flex-col justify-between'>
                  <p className='text-[13px] font-bold'>Mathematics</p>
                  <p className='text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='flex flex-col md:flex-row items-center justify-between bg-[#EFF0EF] border border-gray-200 rounded p-4 h-auto md:h-[100px] w-full md:w-[80%] lg:w-[70%] m-auto mt-[30px] mb-8'
      >
        <h3 className='font-semibold text-[#050505] text-center md:text-left mb-2 md:mb-0'>
          Start Learning Today - It's Free
        </h3>
        <Link to='/auth'>
          <button
            className='bg-[#0A751D] outline-none border-none w-full md:w-[130px] text-white font-semibold p-2 rounded text-[13px]'
          >
            Sign Up for Free
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Courses;