import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

function DashboardProfile() {
  const [isEditing, setIsEditing] = useState(false); // State to manage edit form visibility

  const handleEditProfile = () => {
    setIsEditing(!isEditing); // Toggle edit form visibility
  };

  const onFinish = (values) => {
    console.log('Updated Profile:', values);
    setIsEditing(false); // Hide the form after submission
  };

  return (
    <div className='mt-5 p-4'>
      {/* Profile Header */}
      <div>
        <h3 className='font-bold'>Profile</h3>
        <p className='text-gray-500 text-[12px] md:w-[320px]'>
          Celebrate the top contributors and inspire others to learn and share knowledge
        </p>
      </div>

      {/* Profile Card */}
      <div className='w-full md:w-[50%] h-auto md:h-[500px] mt-6'>
        <div className='rounded-xl border border-gray-200 h-auto md:h-[150px]'>
          <h3 className='p-3 font-bold'>Your Profile</h3>
          <hr className='text-gray-200' />
          <div className='flex flex-col md:flex-row'>
            {/* Profile Picture Section */}
            <div className='w-full md:w-[30%] border-b md:border-b-0 md:border-r border-gray-200 h-auto md:h-[100px]'>
              <div className='w-[80%] m-auto flex items-center justify-center mt-5'>
                <FaUserCircle size={54} className='text-[#0A751D]' />
              </div>
            </div>

            {/* Buttons Section */}
            <div className='w-full md:w-[70%] cursor-pointer flex flex-col md:flex-row items-center gap-5 p-4'>
              <button
                className='p-1 w-full cursor-pointer md:w-[160px] bg-[#0A751D] text-white rounded'
                onClick={handleEditProfile}
              >
                Edit Profile
              </button>
              <button className='border border-gray-300 text-red-500 w-full cursor-pointer md:w-[140px] p-1 rounded'>
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Edit Profile Form */}
        {isEditing && (
          <div className='mt-6'>
            <Form onFinish={onFinish} layout="vertical">
              {/* Name Field */}
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              {/* Grade Field */}
              <Form.Item
                name="grade"
                label="Grade"
                rules={[{ required: true, message: 'Please select your grade!' }]}
              >
                <Select placeholder="Select your grade">
                  <Option value="9">Grade 9</Option>
                  <Option value="10">Grade 10</Option>
                  <Option value="11">Grade 11</Option>
                  <Option value="12">Grade 12</Option>
                </Select>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: '#0A751D', width: '30%' }}
                >
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardProfile;