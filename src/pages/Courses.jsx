import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      {/* Header Section */}
      <div className='mt-[60px] w-full md:w-[80%] lg:w-[35%] m-auto px-4'>
        <h1 className='text-2xl md:text-3xl lg:text-[40px] text-[#050505] text-center font-bold'>
          Find the Perfect Course for You
        </h1>
        <p className='text-center text-sm md:text-[15px] mt-1.5'>
          Explore subjects, exam prep, and career skills designed for secondary school students
        </p>

        {/* Search Bar */}
        <div className='flex items-center gap-2.5 p-1 w-full md:w-[200px] m-auto mt-[30px] border border-gray-400 rounded'>
          <FaSearch />
          <input
            type='text'
            placeholder='Search here'
            className='text-[13px] p-2 w-full outline-none border-none'
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className='flex items-center flex-wrap justify-center gap-2 w-full md:w-[80%] lg:w-[80%] m-auto cursor-pointer mt-[20px] px-4'>
        {categories.map((category) => (
          <p
            key={category}
            onClick={() => setCourseCat(category)}
            className={`p-1 font-semibold text-[13px] whitespace-nowrap ${
              courseCat === category
                ? 'text-[#0A751D] border-b-4 border-b-[#0A751D]'
                : 'text-gray-400'
            }`}
          >
            {category}
          </p>
        ))}
      </div>

      {/* Course Cards */}
      <div className='mt-[20px] px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:w-[80%] lg:w-[65%] m-auto'>
          {[...Array(12)].map((_, index) => (
            <Link to='/courses/5' key={index}>
              <div className='w-full h-[220px] border border-gray-400 rounded flex flex-col'>
                <img
                  className='w-[90%] h-[120px] m-auto mt-[10px] object-cover'
                  src={course5}
                  alt={`Course ${index + 1}`}
                />
                <div className='p-2 flex-1 flex flex-col justify-between'>
                  <p className='text-[13px] font-bold'>Mathematics</p>
                  <p className='text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className='flex flex-col md:flex-row items-center justify-between bg-[#EFF0EF] border border-gray-200 rounded p-4 h-auto md:h-[100px] w-full md:w-[80%] lg:w-[70%] m-auto mt-[30px] mb-8'>
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
      </div>
    </div>
  );
}

export default Courses;