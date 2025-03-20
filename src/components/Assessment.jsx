import React from 'react'

function Assessment() {
  return (
    <div>
        <h3 className='text-center font-bold text-2xl w-[370px] m-auto mt-4 opacity-[0.9]'>
            Test you Knowledge in just 5 minutes!
        </h3>

        <div className='mt-6 bg-gray-100 font-semibold p-7'>
            <p className='p-1'>Question 1: Linear Equation</p>
            <p className='p-1'>Solve for x: 5x + 3 = 185x + 3 = 185x + 3 = 18</p>

            <label className='flex items-center cursor-pointer' htmlFor="option1">
                <input type="radio" name='answers' id='option1' value={2} />
                <p className='p-2'> A) 2 </p>
            </label>
            <label className='flex items-center cursor-pointer' htmlFor="option2">
                <input type="radio" name='answers' id='option2' value={3} />
                <p className='p-2'> A) 3 </p>
            </label>
            <label className='flex items-center cursor-pointer' htmlFor="option3">
                <input type="radio" name='answers' id='option3' value={5} />
                <p className='p-2'> A) 5 </p>
            </label>
            <label className='flex items-center cursor-pointer' htmlFor="option4">
                <input type="radio" name='answers' id='option4' value={6} />
                <p className='p-2'> A) 6 </p>
            </label>
        </div>

        <div className='mt-6 bg-gray-100 font-semibold p-7'>
            <p className='p-1'>Question 1: Linear Equation</p>
            <p className='p-1'>Solve for x: 5x + 3 = 185x + 3 = 185x + 3 = 18</p>

            <ul>
                <li className='p-2'>A) 2</li>
                <li className='p-2'>B) 3</li>
                <li className='p-2'>C) 5</li>
                <li className='p-2'>D) 6</li>
            </ul>
        </div>
        <div className='mt-6 bg-gray-100 font-semibold p-7'>
            <p className='p-1'>Question 1: Linear Equation</p>
            <p className='p-1'>Solve for x: 5x + 3 = 185x + 3 = 185x + 3 = 18</p>

            <ul>
                <li className='p-2'>A) 2</li>
                <li className='p-2'>B) 3</li>
                <li className='p-2'>C) 5</li>
                <li className='p-2'>D) 6</li>
            </ul>
        </div>
    </div>
  )
}

export default Assessment