import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import course3 from '../assets/images/course3.png';

function ResourceDetail() {
  return (
    <div>
        <div className='w-full md:w-[90%] m-auto px-4'>
              {/* Breadcrumb Navigation */}
              <div className='mt-10 flex items-center'>
                <h3 className='text-[13px] text-gray-500'>Course</h3>
                <MdKeyboardArrowRight size={17} />
                <h3 className='text-[14px] text-[#050505] font-semibold'>Mathematics</h3>
              </div>
        
              {/* Resource Details Layout */}
              <div className='flex flex-col md:flex-row justify-between mt-[40px] gap-8'>
                {/* Resource Image */}
                <div className='w-full md:w-[52%]'>
                  <img
                    className='w-full h-auto md:h-[400px] object-cover rounded-lg'
                    src={course3}
                    alt='Course'
                  />

                  <div className='w-full md:w-[87%]'>
                  <h3 className='font-bold mb-3'>Course Description</h3>
                  <p className='w-full text-[13px] text-gray-500'>
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
                </div>
                </div>
        
                {/* Course Description */}
                <div className='w-full md:w-[37%] h-[150px] p-5 rounded border border-gray-300'>
                    <h3 className='font-bold'>Resource Details</h3>
                    <p className='opacity-[0.6] text-[13px]'>Algebraic pdf</p>
                    <button className='w-full p-1 mt-3 text-white rounded bg-[#0A751D]'>Download pdf</button>
                    <p className='text-center text-[11px]'>43.5mb</p>
                </div>
              </div>
        
             
        </div>
    </div>
  )
}

export default ResourceDetail