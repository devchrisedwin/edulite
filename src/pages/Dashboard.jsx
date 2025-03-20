import React, { useState } from 'react';
import { MdDashboard, MdAssignment, MdLibraryBooks, MdPerson, MdLogout, MdMenu, MdClose } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  const [activeItem, setActiveItem] = useState('Home'); // State to track active item
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar on mobile

  const sidebarItems = [
    { id: 'Home', icon: <MdDashboard size={24} />, path: 'dashboardhome' },
    { id: 'Courses', icon: <FaBookOpen size={24} />, path: 'dasboardcourse' },
    { id: 'Assessment', icon: <MdAssignment size={24} />, path: 'dashboardassessment' },
    { id: 'Resources', icon: <MdLibraryBooks size={24} />, path: 'dashboardresource' },
    { id: 'Profile', icon: <MdPerson size={24} />, path: 'dashboardprofile' },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item); // Set the active item when clicked
    setIsSidebarOpen(false); // Close sidebar on mobile after clicking an item
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex min-h-screen'>
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={toggleSidebar}
        className='fixed top-15 left-4 z-50 p-2 bg-[#0A751D] text-white rounded md:hidden'
      >
        {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}
      >
        <div className='flex flex-col h-full justify-between'>
          <div className='p-4'>
            {/* Sidebar Logo or Heading */}
            <h1 className='text-2xl font-bold mb-8 text-gray-800'>EduLite</h1>

            {/* Sidebar Items */}
            <div className='space-y-4 mt-20 lg:mt-0'>
              {sidebarItems.map((item) => (
                <Link to={item.path} key={item.id} style={{ textDecoration: 'none' }}>
                  <div
                    className={`flex items-center p-4 rounded gap-3 ${
                      activeItem === item.id
                        ? 'bg-[#0A751D] text-white' // Active state: green background, white text
                        : 'hover:bg-gray-100 text-black' // Default state: gray text, light gray hover
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span className={`${activeItem === item.id ? "text-white" : "" }`}>{item.icon}</span>
                    <p>{item.id}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className='p-4 border-t border-gray-200'>
            <p className='text-sm mb-2 text-gray-600'>Terms and condition</p>
            <p className='text-sm mb-2 text-gray-600'>Privacy Policy</p>
            <div
              className='flex items-center p-2 rounded hover:bg-gray-100 text-gray-600 cursor-pointer'
              onClick={() => console.log('Logout clicked')}
            >
              <MdLogout size={24} className='mr-2' />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-4'>
          {/* Add your main content here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;