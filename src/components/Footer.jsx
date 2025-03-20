import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <div className='bg-[#0A751D] h-[150px] mt-5'>
        <h2 className='font-bold text-white text-xl text-center pt-7'>Edu Lite</h2>
        <div className='flex items-center justify-center text-white mt-4 gap-3'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </div>

        <div className='flex items-center justify-center gap-8 mt-7 text-white'>
            <p>@ 2025 Educonnect. All rights reserved</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer