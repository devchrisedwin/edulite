import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course3 from '../assets/images/course1.png';
import course4 from '../assets/images/course4.png';
import course5 from '../assets/images/course5.png';
import course6 from '../assets/images/course6.png';

function DashboardTHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Framer Motion animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 }, // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Welcome Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='w-full md:w-[90%] m-auto px-4'
      >
        <div className='mt-[40px] w-full md:w-[80%] lg:w-[55%] m-auto'>
          <motion.h1
            variants={fadeInUp}
            className='text-2xl md:text-3xl lg:text-4xl text-[#050505] text-center font-bold'
          >
            Welcome Back, Teacher!
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className='text-center mt-1.5 text-sm md:text-base'
          >
            Manage your courses, track student progress, and create new content.
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            variants={fadeInUp}
            className='flex flex-wrap justify-center gap-4 mt-6'
          >
            <Link to='/dashboard/addcourse'>
            <button className='bg-[#0A751D] text-white text-[13px] p-2 w-[150px] font-bold rounded'>
              Create New Course
            </button>
            </Link>
            <button className='bg-[#0A751D] text-white text-[13px] p-2 w-[150px] font-bold rounded'>
              View Students
            </button>
            <button className='bg-[#0A751D] text-white text-[13px] p-2 w-[150px] font-bold rounded'>
              Analytics
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
        className='h-auto md:h-[100px] bg-[#0A751D] flex flex-col md:flex-row items-center justify-evenly py-4 md:py-0 mt-8'
      >
        {[
          { value: '150+', label: 'Active Students' },
          { value: '10', label: 'Courses Taught' },
          { value: '95%', label: 'Completion Rate' },
          { value: '4.8/5', label: 'Average Rating' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className='text-center mb-4 md:mb-0'
          >
            <p className='font-bold text-white text-2xl md:text-3xl'>{stat.value}</p>
            <p className='text-[12px] text-white opacity-[0.6]'>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Your Courses Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='w-full md:w-[90%] m-auto px-4 mt-8'
      >
        <h3 className='text-center text-2xl text-[#050505] font-semibold'>
          Your Courses
        </h3>

        <motion.div
          variants={staggerChildren}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:w-[100%]  m-auto mt-[20px]'
        >
          {[course1, course2, course3, course4, course5, course6].map((course, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='w-full border border-gray-400 rounded flex flex-col'
            >
              <img
                className='w-[100%] h-[120px] m-auto mt-[10px] object-cover'
                src={course}
                alt={`Course ${index + 1}`}
              />
              <div className='p-2 flex-1 flex flex-col justify-between'>
                <p className='text-[13px] font-bold'>Mathematics</p>
                <p className='text-[13px] opacity-[0.6]'>Statistics</p>
                <div className='flex justify-between mt-2'>
                  <p className='text-[12px]'>Students: 25</p>
                  <p className='text-[12px]'>Progress: 80%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Link to='/courses'>
          <motion.div
            variants={fadeInUp}
            className='w-full md:w-[200px] m-auto mt-[30px]'
          >
            <button className='bg-[#0A751D] text-white text-[13px] p-2 w-full md:w-[150px] font-bold rounded'>
              Manage All Courses
            </button>
          </motion.div>
        </Link>
      </motion.div>

      {/* Recent Activity Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='w-full md:w-[90%] m-auto px-4 mt-8'
      >
        <h3 className='text-center text-2xl text-[#050505] font-semibold'>
          Recent Activity
        </h3>

        <motion.div
          variants={staggerChildren}
          className='w-full md:w-[80%] m-auto mt-[20px]'
        >
          {[
            { id: 1, activity: 'Student John Doe completed Course 1', time: '2 hours ago' },
            { id: 2, activity: 'New student enrolled in Course 2', time: '5 hours ago' },
            { id: 3, activity: 'Course 3 updated with new content', time: '1 day ago' },
          ].map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className='w-full border border-gray-300 p-3 rounded-lg mb-2'
            >
              <p className='text-[13px]'>{item.activity}</p>
              <p className='text-[12px] opacity-[0.6]'>{item.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default DashboardTHome;