import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const CoursePreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, file } = location.state || {};
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle course upload
  const handleUpload = () => {
    // Simulate upload logic
    console.log('Uploading course:', { formData, file });
    setTimeout(() => {
      setIsModalVisible(true); // Show success modal
      message.success('Course uploaded successfully!');
    }, 1000);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate('/dashboard/dashboardcourse'); // Navigate to dashboard after closing modal
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-6'>Preview Course</h1>

      {/* Display Course Details */}
      <div className='w-full md:w-[80%] lg:w-[60%] mx-auto'>
        <div className='mb-6'>
          <h2 className='text-xl font-semibold'>{formData?.courseName}</h2>
          <p className='text-gray-600'>{formData?.topic}</p>
          <p className='text-gray-600'>{formData?.assessmentLink}</p>
          <p className='text-gray-600'>{formData?.courseDetail}</p>
        </div>

        {/* Upload Button */}
        <Button
          type='primary'
          style={{ backgroundColor: '#0A751D', borderColor: '#0A751D' }}
          onClick={handleUpload}
        >
          Upload Course
        </Button>
      </div>

      {/* Success Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        <div className='text-center p-6'>
          <CheckCircleOutlined  style={{ color: '#0A751D', fontSize: '54px' }} 
          className='mb-4' />
          <h2 className='text-xl mb-2 font-bold'>Your course has been successfully added</h2>
          <p className='text-gray-600 mb-6'>You can now manage it from your dashboard</p>
          <Button
            type='primary'
            style={{ backgroundColor: '#0A751D', borderColor: '#0A751D', width: "160px" }}
            onClick={handleModalClose}
          >
            View Course
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CoursePreview ;