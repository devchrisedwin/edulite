import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-[#0A751D] h-auto md:h-[150px] py-6 md:py-0 mt-5'>
      {/* Logo */}
      <h2 className='font-bold text-white text-xl text-center pt-7'>Edu Lite</h2>

      {/* Social Icons */}
      <div className='flex items-center justify-center text-white mt-4 gap-3'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='text-2xl hover:text-gray-200 transition-colors' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-2xl hover:text-gray-200 transition-colors' />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='text-2xl hover:text-gray-200 transition-colors' />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-2xl hover:text-gray-200 transition-colors' />
        </a>
      </div>

      {/* Footer Text */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-7 text-white text-sm md:text-base'>
        <p>@ 2025 Educonnect. All rights reserved</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;