import React, {useContext} from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course3 from '../assets/images/course3.png';
import course4 from '../assets/images/course4.png';
import course5 from '../assets/images/course5.png';
import course6 from '../assets/images/course6.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { UserContext } from '../context/UserContext';

function DashboardStdHome() {
   // Dummy course data
   const courses = [
    { id: 1, title: 'Course 1', image: course1, progress: 60 },
    { id: 2, title: 'Course 2', image: course2, progress: 40 },
    { id: 3, title: 'Course 3', image: course3, progress: 80 },
    { id: 4, title: 'Course 4', image: course4, progress: 20 },
    { id: 5, title: 'Course 5', image: course5, progress: 90 },
    { id: 6, title: 'Course 6', image: course6, progress: 50 },
  ];

  const {user} = useContext(UserContext)
  let userName = user?.data?.firstName + "" + user?.data?.lastName

  // Framer Motion animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 }, // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className='p-4'>
      {/* Header */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
        className='mb-6'
      >
        <h1 className='font-bold text-2xl mt-5'>Welcome {userName}</h1>
        <p className='text-gray-600 mb-8'>Continue Learning - Pick up where you left off!</p>

        <div className='flex justify-between items-center mt-2'>
          <button className='text-sm px-4 py-2 rounded font-bold'>
            Resume last lesson
          </button>
          <button className='font-semibold flex items-center text-sm'>
            See all <MdKeyboardArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Course Cards Grid */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={slideIn} // Apply slideIn animation
            initial='hidden'
            whileInView='visible' // Trigger animation when in view
            viewport={{ once: true }} // Only trigger once
            className='bg-white rounded-lg shadow-md overflow-hidden'
          >
            {/* Course Image */}
            <img src={course.image} alt={course.title} className='w-full h-40 object-cover' />

            {/* Course Title */}
            <div className='p-4'>
              <h2 className='font-semibold text-lg mb-2'>{course.title}</h2>

              {/* Progress Bar */}
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-[#0A751D] h-2 rounded-full'
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default DashboardStdHome