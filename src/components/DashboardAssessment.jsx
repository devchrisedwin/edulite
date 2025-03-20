import React from 'react';

function DashboardAssessment() {
  return (
    <div className='p-4'>
      {/* Header */}
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <h1 className='font-bold text-2xl mt-5'>Assessment</h1>
          <p className='text-gray-600 mb-8'>Download and use later</p>
        </div>

        <div className='bg-[#0A751D] p-2 w-[160px] text-[13px] text-center text-white rounded'>
          <button>Assessment Done</button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className='w-full h-[50px] bg-white rounded-lg shadow-md flex items-center justify-between p-2 hover:shadow-lg transition-shadow duration-300'
          >
            {/* Left Side: Mathematics */}
            <span className='text-sm font-semibold'>Mathematics</span>

            {/* Right Side: Three Vertical Dots */}
            <div className='flex flex-col space-y-1 cursor-pointer'>
              <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
              <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
              <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardAssessment;