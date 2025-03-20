import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[90%] m-auto'>
        <div className='h-[40px] flex items-center justify-between '>
          <div className='font-bold'>Edu Lite</div>

          <div className='w-[300px]'>
            <ul className='flex items-center justify-between font-semibold'>
              <NavLink to='/'
              className={({ isActive }) => (isActive ? "active-link" : "")}>
                <li className='cursor-pointer'>Home</li>
              </NavLink>

              <NavLink to='/courses'
              className={({ isActive }) => (isActive ? "active-link" : "")}>
                <li className='cursor-pointer'>Courses</li>
              </NavLink>

              <NavLink to='/contact'
              className={({ isActive }) => (isActive ? "active-link" : "")}>
                <li className='cursor-pointer'>Contact us</li>
              </NavLink>
            </ul>
          </div>

          <button className='bg-[#0A751D] text-white text-[13px] p-1.5 w-[120px] font-bold rounded'>Explore Courses</button>
        </div>
    </div>
   
  )
}

export default Navbar