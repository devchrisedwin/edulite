import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImg1 from '../assets/images/hero-img1.png';
import heroImg2 from '../assets/images/hero-img2.png';
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course3 from '../assets/images/course1.png';
import course4 from '../assets/images/course4.png';
import course5 from '../assets/images/course5.png';
import course6 from '../assets/images/course6.png';
import faq from '../data/faq';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Footer from '../components/Footer';

function Home() {
  const [faqs, setFaqs] = useState(faq);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleFaq(id) {
    setSelected(id);
    setShowAnswer(!showAnswer);
  }

  return (
    <>
      {/* Header Section */}
      <div className='w-full md:w-[90%] m-auto px-4'>
        <div className='mt-[60px] w-full md:w-[80%] lg:w-[55%] m-auto'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#050505] text-center font-bold'>
            Quality Education for Every Nigerian Child Anytime, Anywhere
          </h1>
          <p className='text-center mt-1.5 text-sm md:text-base'>
            Bridging the education gap with technology—Learn online or offline for free
          </p>

          <div className='w-full md:w-[200px] m-auto mt-[30px]'>
            <button className='bg-[#0A751D] text-white text-[13px] p-1.5 md:w-[150px] font-bold rounded'>
              Start Learning Now
            </button>
          </div>
        </div>

        {/* Hero Images */}
        <div className='w-full h-auto md:h-[400px] mt-8 relative'>
          {isMobile ? (
            <img className='w-full m-auto' src={course1} alt='Course 1' />
          ) : (
            <>
              <img className='w-full md:w-[700px] m-auto' src={heroImg1} alt='Hero 1' />
              <img
                className='hidden md:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[700px]'
                src={heroImg2}
                alt='Hero 2'
              />
            </>
          )}
        </div>
      </div>

      {/* Statistics Section */}
      <div className='h-auto md:h-[100px] bg-[#0A751D] flex flex-col md:flex-row items-center justify-evenly py-4 md:py-0'>
        {[
          { value: '20,000+', label: 'Active Users across Nigeria' },
          { value: '95%', label: 'Students reported improvement' },
          { value: '50,000+', label: 'Questions and answers' },
          { value: '10+', label: 'Years of experience' },
        ].map((stat, index) => (
          <div key={index} className='text-center mb-4 md:mb-0'>
            <p className='font-bold text-white text-2xl md:text-3xl'>{stat.value}</p>
            <p className='text-[12px] text-white opacity-[0.6]'>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className='w-full md:w-[90%] m-auto px-4'>
        <div className='w-full md:w-[340px] m-auto mt-[30px]'>
          <h3 className='text-2xl text-center'>Everything You Need to Learn & Succeed!</h3>
          <p className='text-[11px] opacity-[0.5] text-center mt-1.5'>
            Our platform is designed to provide students with cutting-edge tools and interactive learning.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-evenly w-full md:w-[80%] m-auto mt-[40px] gap-4'>
          {[
            {
              title: 'Offline Accessibility',
              description: 'Enable content download for offline use to accommodate areas with unstable network.',
            },
            {
              title: 'Live and Pre-recorded Classes',
              description: 'Interactive learning with expert teachers.',
            },
            {
              title: 'Low Data Consumption',
              description: 'Optimize content to minimize data usage, ensuring affordability to users.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className='w-full md:w-[270px] h-auto md:h-[100px] border border-gray-300 p-4 rounded-xl'
            >
              <h3 className='font-bold pb-1.5'>{feature.title}</h3>
              <p className='text-[12px] opacity-[0.6]'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Cards Section */}
      <div className='w-full md:w-[90%] m-auto px-4'>
        <h3 className='text-center text-2xl text-[#050505] font-semibold mt-[20px]'>
          Find the Perfect Course for You
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:w-[80%] m-auto mt-[10px]'>
          {[course1, course2, course3, course4, course5, course6].map((course, index) => (
            <div key={index} className='w-full border border-gray-400 rounded flex flex-col'>
              <img
                className='w-[90%] h-[120px] m-auto mt-[10px] object-cover'
                src={course}
                alt={`Course ${index + 1}`}
              />
              <div className='p-2 flex-1 flex flex-col justify-between'>
                <p className='text-[13px] font-bold'>Mathematics</p>
                <p className='text-[13px] opacity-[0.6]'>Statistic</p>
              </div>
            </div>
          ))}
        </div>

        <Link to='/courses'>
          <div className='w-full md:w-[200px] m-auto mt-[30px]'>
            <button className='bg-[#0A751D] text-white text-[13px] p-2 md:w-[150px] font-bold rounded'>
              Browse All Courses
            </button>
          </div>
        </Link>
      </div>

      {/* FAQ Section */}
      <div className='w-full md:w-[90%] m-auto px-4'>
        <div className='mt-[50px] text-center'>
          <h3 className='text-[#050505] font-bold text-2xl md:text-3xl'>Frequently Asked Questions</h3>
          <p className='text-[13px] text-gray-600'>
            Find answers to the most common questions asked about our platform
          </p>
        </div>

        <div className='mt-5'>
          {faqs.map((item) => (
            <div
              key={item.id}
              onClick={() => handleFaq(item.id)}
              className='border border-gray-400 w-full md:w-[50%] m-auto mb-2.5 rounded cursor-pointer'
            >
              <div className='flex items-center justify-between p-2'>
                <p className='text-[#050505] font-semibold text-lg md:text-xl'>{item.question}</p>
                <p>
                  {showAnswer && selected === item.id ? (
                    <MdKeyboardArrowUp size={25} />
                  ) : (
                    <MdKeyboardArrowDown size={25} />
                  )}
                </p>
              </div>
              {showAnswer && selected === item.id && (
                <p className='p-2 text-gray-500'>{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className='flex flex-col md:flex-row items-center justify-between bg-[#EFF0EF] border border-gray-200 rounded p-4 h-auto md:h-[100px] w-full md:w-[70%] m-auto mt-[30px] mb-8'>
        <h3 className='font-semibold text-[#050505] text-center md:text-left mb-2 md:mb-0'>
          Start Learning Today - It's Free
        </h3>
        <Link to='/auth'>
          <button className='bg-[#0A751D] outline-none border-none w-full md:w-[130px] text-white font-semibold p-2 rounded text-[13px]'>
            Sign Up for Free
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;