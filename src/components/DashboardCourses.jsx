import React, { useState } from 'react';
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course3 from '../assets/images/course3.png';
import course4 from '../assets/images/course4.png';
import course5 from '../assets/images/course5.png';
import course6 from '../assets/images/course6.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

function DashboardCourses() {
  const [courseCat, setCourseCat] = useState('All');
  const userRole = 'teacher'; // Replace this with dynamic role from context or props

  const courses = [
    { id: 1, title: 'Course 1', image: course1 },
    { id: 2, title: 'Course 2', image: course2 },
    { id: 3, title: 'Course 3', image: course3 },
    { id: 4, title: 'Course 4', image: course4 },
    { id: 5, title: 'Course 5', image: course5 },
    { id: 6, title: 'Course 6', image: course6 },
  ];

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
    <div className='p-4'>
      {/* Header */}
      <div className='mb-6'>
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h1 className='font-bold text-2xl mt-5'>Your Courses</h1>
            <p className='text-gray-600 mb-8'>
              {userRole === 'student'
                ? 'Download courses and review course downloaded'
                : 'Manage your courses and add new ones'}
            </p>
          </div>

          {/* Conditional Button Based on Role */}
          {userRole === 'student' ? (
            <div className='bg-[#0A751D] p-2 w-[160px] text-[13px] text-center text-white rounded'>
              <button>Downloaded courses</button>
            </div>
          ) : (
            <Link to='/dashboard/addcourse'>
                <div className='bg-[#0A751D] p-2 w-[160px] text-[13px] text-center text-white rounded'>
                <button>Add Course</button>
                </div>
            </Link>
          )}
        </div>

        {/* Category Filters (Optional) */}
        {/* <div className='flex items-center overflow-x-auto w-full md:w-[80%] lg:w-[80%] m-auto cursor-pointer mt-[20px] px-4'>
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
        </div> */}
      </div>

      {/* Course Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {courses.map((course) => (
          <div key={course.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
            {/* Course Image */}
            <img src={course.image} alt={course.title} className='w-full h-40 object-cover' />

            {/* Course Title */}
            <div className='p-4'>
              <h2 className='font-semibold text-lg mb-2'>{course.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCourses;