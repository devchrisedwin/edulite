import React, {useContext} from 'react'
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course3 from '../assets/images/course3.png';
import course4 from '../assets/images/course4.png';
import course5 from '../assets/images/course5.png';
import course6 from '../assets/images/course6.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function DashboardResource() {

   const {user } = useContext(UserContext);
   
   const userRole = user?.data?.roleName || user?.data?.role?.name;
     const courses = [
        { id: 1, title: 'Course 1', image: course1, descripton: 'this is an amazing course it covers different concepts' },
        { id: 2, title: 'Course 2', image: course2, descripton: 'this is an amazing course it covers different concepts' },
        { id: 3, title: 'Course 3', image: course3, descripton: 'this is an amazing course it covers different concepts' },
        { id: 4, title: 'Course 4', image: course4, descripton: 'this is an amazing course it covers different concepts' },
        { id: 5, title: 'Course 5', image: course5, descripton: 'this is an amazing course it covers different concepts' },
        { id: 6, title: 'Course 6', image: course6, descripton: 'this is an amazing course it covers different concepts' },
    ];
    
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <h1 className='font-bold text-2xl mt-5'>Resources</h1>
          <p className='text-gray-600 mb-8'>Get resources get prepare for your next assessment</p>
        </div>

        <div className='bg-[#0A751D] p-2 w-[160px] text-[13px] text-center text-white rounded'>
          {userRole === 'student' && <button>Downloaded Resources</button>}
        </div>
      </div>

       {/* Course Cards Grid */}
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2 lg:mt-0'>
            {courses.map((course) => (
              <Link to={`/dashboard/dashboardresource/${course.id}`}>
              <div key={course.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
                {/* Course Image */}
                <img src={course.image} alt={course.title} className='w-full h-40 object-cover' />
    
                {/* Course Title */}
                <div className='p-4'>
                  <h2 className='font-semibold text-lg mb-2'>{course.title}</h2>
                  <p className='text-[12px]'>{course.descripton}</p>
                </div>
              </div>
              </Link>
            ))}
       </div>
    </div>
  )
}

export default DashboardResource