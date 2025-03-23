import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'; // Icons for hamburger menu and profile

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login status
  let userRole = "teacher"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic can be added here
  };

  return (
    <nav className='w-full bg-white shadow-md fixed top-0 z-50'>
      <div className='w-[90%] mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div className='font-bold text-xl text-[#0A751D]'>Edu Lite</div>

        {/* Hamburger Menu (Mobile) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-[#0A751D] focus:outline-none'>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
        >
          <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0'>
            {/* Common Links */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-sm font-semibold hover:text-[#0A751D] transition-colors ${
                  isActive ? 'text-[#0A751D]' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Home</li>
            </NavLink>

            {userRole === 'student' && 
            <NavLink
              to='/courses'
              className={({ isActive }) =>
                `text-sm font-semibold hover:text-[#0A751D] transition-colors ${
                  isActive ? 'text-[#0A751D]' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Courses</li>
            </NavLink>}

            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `text-sm font-semibold hover:text-[#0A751D] transition-colors ${
                  isActive ? 'text-[#0A751D]' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Contact us</li>
            </NavLink>

            {/* Conditional Rendering Based on Login Status */}
            {isLoggedIn ? (
              // Profile Section (Visible when logged in)
              <Link to='/dashboard/dashboardhome'>
              <div  onClick={() => setIsMenuOpen(false)} className='flex items-center space-x-2'>
                <FaUserCircle size={24} className='text-[#0A751D]' />
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold'>John Doe</span>
                  <span className='text-xs text-gray-500'>john.doe@example.com</span>
                </div>
              </div>
              </Link>
            ) : (
              // Explore Courses Button (Visible when not logged in)
              <button
                className='bg-[#0A751D] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#095c1a] transition-colors'
                onClick={() => {
                  // Add logic to navigate to courses or handle explore courses
                  console.log('Explore Courses clicked');
                }}
              >
                {userRole === 'teacher' ? 'Sign up for Free' : 'Explore Courses'}
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;