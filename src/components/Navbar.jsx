import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger menu

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full md:w-[90%] m-auto px-4'>
      <div className='h-[60px] md:h-[40px] flex items-center justify-between'>
        {/* Logo */}
        <div className='font-bold text-lg md:text-xl'>Edu Lite</div>

        {/* Hamburger Menu (Mobile) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-[#0A751D]'>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-[60px] left-0 w-full md:w-[300px] bg-white md:bg-transparent z-10`}
        >
          <ul className='flex flex-col md:flex-row items-center justify-between font-semibold'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className='cursor-pointer p-2 md:p-0'>Home</li>
            </NavLink>

            <NavLink
              to='/courses'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className='cursor-pointer p-2 md:p-0'>Courses</li>
            </NavLink>

            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className='cursor-pointer p-2 md:p-0'>Contact us</li>
            </NavLink>
          </ul>
        </div>

        {/* Explore Courses Button */}
        <button className='hidden md:block bg-[#0A751D] text-white text-[13px] p-1.5 w-[120px] font-bold rounded'>
          Explore Courses
        </button>
      </div>
    </div>
  );
}

export default Navbar;