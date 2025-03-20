import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import course3 from '../assets/images/course3.png';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';
import Assessment from '../components/Assessment';

function CourseDetails() {
  const [courseDetailCat, setCourseDetailCat] = useState('Comments');
  const categories = ['Comments', 'Take Assessment', 'Resources'];

  const { id } = useParams();
  console.log(id);

  return (
    <div className='w-full md:w-[90%] m-auto px-4'>
      {/* Breadcrumb Navigation */}
      <div className='mt-10 flex items-center'>
        <h3 className='text-[13px] text-gray-500'>Course</h3>
        <MdKeyboardArrowRight size={17} />
        <h3 className='text-[14px] text-[#050505] font-semibold'>Mathematics</h3>
      </div>

      {/* Course Details Layout */}
      <div className='flex flex-col md:flex-row justify-between mt-[40px] gap-8'>
        {/* Course Image */}
        <div className='w-full md:w-[52%]'>
          <img className='w-full h-auto md:h-[400px] object-cover' src={course3} alt='Course' />
          <p className='text-center font-bold pt-3'>Solving Quadratic Equations</p>
        </div>

        {/* Course Description */}
        <div className='w-full md:w-[47%]'>
          <h3 className='font-bold mb-3'>Course Description</h3>
          <p className='w-full md:w-[320px] text-[13px] text-gray-500'>
            This course covers algebraic concepts from basic expressions to quadratic expressions. It's
            designed for WAEC and JAMB candidates, with real past questions and step-by-step video
            tutorials.
          </p>

          <h3 className='mt-[30px] font-bold'>What You'll Learn</h3>
          <ul className='text-gray-500 text-[13px]'>
            <li className='pt-3'>Solving linear and quadratic equations</li>
            <li className='pt-3'>Understanding functions and graphs</li>
            <li className='pt-3'>Factorisation techniques</li>
            <li className='pt-3'>WAEC and JAMB past questions techniques</li>
          </ul>

          <div className='text-[#0A751D] flex justify-between mt-5 p-2'>
            <p className='text-[13px] font-bold'>Download</p>
            <p className='text-[13px] font-bold'>Copy Link</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className='flex gap-3 mt-5 cursor-pointer overflow-x-auto'>
        {categories.map((category) => (
          <div key={category} onClick={() => setCourseDetailCat(category)}>
            <p
              className={`p-1 font-semibold text-[13px] whitespace-nowrap ${
                courseDetailCat === category
                  ? 'text-[#0A751D] border-b-4 border-b-[#0A751D]'
                  : 'text-gray-400'
              }`}
            >
              {category}
            </p>
          </div>
        ))}
      </div>

      {/* Conditional Rendering of Components */}
      {courseDetailCat === 'Comments' && <Comments />}
      {courseDetailCat === 'Take Assessment' && <Assessment />}

      {/* Footer Section */}
      <div
        className={`flex flex-col md:flex-row items-center bg-[#EFF0EF] justify-between border border-gray-200 rounded p-4 h-auto md:h-[100px] mt-[30px] w-full ${
          courseDetailCat === 'Comments' ? 'md:w-[92%]' : 'md:w-full'
        }`}
      >
        <h3 className='font-semibold text-[#050505] text-center md:text-left mb-2 md:mb-0'>
          Start Learning Today - It's Free
        </h3>
        <button className='bg-[#0A751D] outline-none border-none w-full md:w-[130px] text-white font-semibold p-2 rounded text-[13px]'>
          Sign Up for Free
        </button>
      </div>
    </div>
  );
}

export default CourseDetails;