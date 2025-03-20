import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'; // Icons for hamburger menu and profile

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For profile dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login status

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false); // Close dropdown after logout
    // Additional logout logic can be added here
  };

  return (
    <div className='w-full md:w-[90%] m-auto px-4 pt-2.5'>
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
          } md:block absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-md md:shadow-none`}
        >
          <ul className='flex flex-col md:flex-row items-center justify-between font-semibold'>
            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0'>
                  {/* Search Bar */}
                  <input
                    type='text'
                    placeholder='Search...'
                    className='w-full md:w-auto border border-gray-300 rounded p-2 focus:outline-none focus:border-[#0A751D]'
                  />

                  {/* Profile Section */}
                  <div className='flex items-center space-x-2 relative'>
                    <FaUserCircle size={24} />
                    <div className='flex flex-col'>
                      <span className='text-sm'>John Doe</span>
                      <span className='text-xs text-gray-500'>john.doe@example.com</span>
                    </div>

                    {/* Dropdown Toggle Button */}
                    <button onClick={toggleDropdown} className='focus:outline-none'>
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className='absolute right-0 mt-36 w-48 bg-white border border-gray-200 rounded shadow-lg z-20'>
                        <NavLink
                          to='/dashboard/dashboardhome'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to='/settings'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Settings
                        </NavLink>
                        <button
                          onClick={handleLogout}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>

        {/* Explore Courses Button */}
        {!isLoggedIn && (
          <button className='hidden md:block bg-[#0A751D] text-white text-[13px] p-1.5 w-[120px] font-bold rounded'>
            Explore Courses
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;