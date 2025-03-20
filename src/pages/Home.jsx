import React, { useState } from 'react'
import heroImg1 from "../assets/images/hero-img1.png"
import heroImg2 from "../assets/images/hero-img2.png"

import course3  from '../assets/images/course1.png'
import course1  from '../assets/images/course1.png'
import course2  from '../assets/images/course2.png'
import course4  from '../assets/images/course4.png'
import course5  from '../assets/images/course5.png'
import course6  from '../assets/images/course6.png'

import faq from "../data/faq"

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"; // Material Design
import Footer from '../components/Footer'

function Home() {
    const [faqs, setFaqs] = useState(faq)
    const [showAnswer, setShowAnswer] = useState(false)
    const [selected, setSelected] = useState('')

    function handleFaq(id) {
        setSelected(id)
        setShowAnswer(!showAnswer)
    }

  return (
    <>

        <div className='w-[90%] m-auto'>
            <div className='mt-[60px] w-[55%] m-auto'>
                <h1 className='text-4xl text-[#050505] text-center font-bold'>
                    Quality Education for Every Nigerian Child Anytime, Anywhere
                </h1>
                <p className='text-center mt-1.5'>
                    Bridging the education gap with technology--Learn online or offline for free
                </p>

                <div className='w-[200px] m-auto mt-[30px]'>
                    <button className='bg-[#0A751D] text-white text-[13px] p-1.5 w-[150px] font-bold rounded'>
                        Start Learning Now
                    </button>
                </div>

            </div>

            <div className='w-[95%] m-auto h-[400px]'>
                <div className='relative'>
                <img className='w-[700px] m-auto' src={heroImg1} alt="" />
                </div>
                <div className='absolute top-[290px] left-[300px]'>
                <img className='w-[700px] m-auto' src={heroImg2} alt="" />
                </div>
            </div>
        </div>

        <div className='h-[100px] bg-[#0A751D] flex items-center justify-evenly'>
            <div className='w-[150px]'>
                <p className='font-bold text-white text-3xl'>20,000+</p>
                <p className='text-[12px] text-white opacity-[0.6]'>Active Users across Nigeria</p>
            </div>

            <div>
                <p className='font-bold text-white text-3xl'>95%</p>
                <p className='text-[12px] text-white opacity-[0.6]'>Students reported improve</p>
            </div>

            <div>
                <p className='font-bold text-white text-3xl'>50,000+</p>
                <p className='text-[12px] text-white opacity-[0.6]'>Questions and answers</p>
            </div>

            <div>
                <p className='font-bold text-white text-3xl'>10+</p>
                <p className='text-[12px] text-white opacity-[0.6]'>Years of experience</p>
            </div>
        </div>

        <div>
            <div className='w-[340px] m-auto mt-[30px]'>
                <h3 className='text-2xl text-center'>EveryThing You Need to Learn & Succeed!</h3>
                <p className='text-[11px] opacity-[0.5] text-center mt-1.5'>Our platform is design to provide students with cutting edge-tools, Interactive learning</p>
            </div>

            <div className='flex items-center justify-evenly w-[80%] m-auto mt-[40px]  text-[#050505]'>
                <div className='w-[270px] h-[100px] border border-gray-300 p-5 rounded-xl'>
                    <h3 className='font-bold pb-1.5'>Offline Accessibility</h3>
                    <p className='text-[12px] opacity-[0.6]'>Enable content  download for offline use to accomodate areas with unstable network</p>
                </div>
                <div className='w-[270px] h-[100px] border border-gray-300 p-5 rounded-xl'>
                    <h3 className='font-bold pb-1.5'>Live and Pre-recoded Classes</h3>
                    <p className='text-[12px] opacity-[0.6]'>Interactive learning with expert teachers</p>
                </div>
                <div className='w-[270px] h-[100px] border border-gray-300 p-5 rounded-xl'>
                    <h3 className='font-bold pb-1.5 '>Low Data Consumtion</h3>
                    <p className='text-[12px] opacity-[0.6]'>Optimize content to minimize data usage, ensuring affodability to users</p>
                </div>
            </div>

            <div className='mt-[20px]'>
                <h3 className='text-center text-2xl text-[#050505] font-semibold'>Find the Pefect Course for You</h3>

                <div className='flex flex-wrap w-[60%] m-auto mt-[10px] gap-2'>

                    <div className='w-[250px] h-[220px] border border-gray-400 rounded'>
                        <img  className='w-[230px] m-auto mt-[10px]' src={course1} alt="" />
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
                </div>
            </div>

            <div className='w-[200px] m-auto mt-[30px]'>
                <button className='bg-[#0A751D] text-white text-[13px] p-2 w-[150px] font-bold rounded'>
                    Browse All Courses
                </button>
            </div>
        </div>

        <div>
            <div className='mt-[50px] text-center'>
                <h3 className='text-[#050505] font-bold text-3xl text-center'>Frequently Asked Questions</h3>
                <p className='text-[13px] text-gray-600'>Find answers to the most common questions asked about our platform</p>
            </div>

            <div className='mt-5'>
                {faqs.map((item) => (
                    <div onClick={() => handleFaq(item.id)}
                    className='border border-gray-400 w-[50%] m-auto mb-2.5 rounded cursor-pointer'>
                        <div className='flex items-center justify-between p-2'>
                            <p className='text-[#050505] font-semibold text-xl'>{item.question}</p>
                            <p>
                                {showAnswer && selected === item.id ? <MdKeyboardArrowUp size={25} /> 
                                : <MdKeyboardArrowDown size={25}/>}
                            </p>
                        </div>
                        {showAnswer && selected === item.id && <p className='p-2 text-gray-500'>{item.answer}</p>}
                    </div>
                ))}
            </div>

            <div className='flex items-center bg-[#EFF0EF] justify-between border border-gray-200 rounded p-4 h-[100px] w-[70%] m-auto mt-[30px]'>
                <h3 className='font-semibold text-[#050505]'>Start Learning Today - Its Free</h3>
                <button className='bg-[#0A751D] outline-none border-none 
                w-[130px] text-white font-semibold p-2 rounded text-[13px]'>
                    Sign Up for Free
                </button>
            </div>
        </div>
    </>
  )
}

export default Home