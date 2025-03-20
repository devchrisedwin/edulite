import React from 'react';

function Comments() {
  return (
    <div className='w-full px-4'>
      {/* Comment Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
        {[...Array(12)].map((_, index) => (
          <div key={index} className='w-full h-[150px] bg-gray-100 p-3 rounded-lg'>
            <p className='text-[12px] text-gray-400'>
              This course helped me understand algebra easily! The live lessons are amazing.
            </p>

            <div className='pt-8'>
              <p className='font-semibold text-[13px]'>Aishat</p>
              <p className='text-[11px] text-gray-400'>Secondary School</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a Comment Section */}
      <div className='mt-10'>
        <h3 className='text-[12px] text-gray-400 mb-2'>Leave a comment</h3>
        <textarea
          rows={5}
          placeholder='Leave a comment'
          className='w-full border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-[#0A751D]'
        ></textarea>
        <button className='border-2 border-[#0A751D] p-2 rounded-lg text-[#0A751D] w-full sm:w-[150px] mt-4 hover:bg-[#0A751D] hover:text-white transition-colors'>
          Create Comment
        </button>
      </div>
    </div>
  );
}

export default Comments;