import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import course3  from '../assets/images/course1.png'
import course1  from '../assets/images/course1.png'
import course2  from '../assets/images/course2.png'
import course4  from '../assets/images/course4.png'
import course5  from '../assets/images/course5.png'
import course6  from '../assets/images/course6.png'
import { Link } from 'react-router-dom'

function Courses() {
    const [courseCat, setCourseCat] = useState("All")
    const categories = [
        "All",
        "Mathematics",
        "English",
        "Literature",
        "History",
        "Science",
        "Biology",
        "Chemistry",
        "Physic",
        "Accounting",
        "FutherMathematics",
      ];

  return (
    <div>
        <div className='mt-[60px] w-[35%] m-auto'>
            <h1 className='text-[40px] text-[#050505] text-center font-bold'>
                Find the Perfect Course for You
            </h1>
            <p className='text-center text-[15px] mt-1.5'>
                Explore subjects, exam prep and career skills design for secondary school students
            </p>

            <div className='flex items-center gap-2.5 p-1 w-[200px] m-auto mt-[30px] border border-gray-400 rounded'>
                <FaSearch/>
                <input type='text' placeholder='search here'
                className='text-[13px]
                 p-2 w-[170px] outline-none border-none'/>
            </div>

        </div>

        <div className="flex items-center justify-between w-[80%] m-auto cursor-pointer mt-[20px]">
            {categories.map((category) => (
                <p
                key={category}
                onClick={() => setCourseCat(category)}
                className={`p-1 font-semibold text-[13px] ${
                    courseCat === category
                    ? "text-[#0A751D] border-b-4 border-b-[#0A751D]"
                    : "text-gray-400"
                }`}
                >
                {category}
                </p>
            ))}
        </div>

        <div className='mt-[20px]'>
            <div className='flex flex-wrap w-[65%] m-auto mt-[10px] gap-2'>

               <Link to='/courses/5'>
                    <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                        <img  className='w-[230px] m-auto mt-[10px]' src={course5} alt="" />
                        <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                        <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                    </div>
                </Link> 
            
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course2} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course3} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course4} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course5} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course6} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>

                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course2} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course3} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course4} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course5} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img className='w-[230px] m-auto mt-[10px]' src={course6} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
                <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                    <img  className='w-[230px] m-auto mt-[10px]' src={course5} alt="" />
                    <p className='ml-2 mt-1 text-[13px] font-bold'>Mathematics</p>
                    <p className='ml-2 mt-1 text-[13px] opacity-[0.6]'>Statistic</p>
                </div>
            </div>
        </div>

        <div className='flex items-center bg-[#EFF0EF] justify-between border border-gray-200 rounded p-4 h-[100px] w-[70%] m-auto mt-[30px]'>
            <h3 className='font-semibold text-[#050505]'>Start Learning Today - Its Free</h3>
            <button className='bg-[#0A751D] outline-none border-none 
            w-[130px] text-white font-semibold p-2 rounded text-[13px]'>
                Sign Up for Free
            </button>
        </div>
    </div>
  )
}

export default Courses