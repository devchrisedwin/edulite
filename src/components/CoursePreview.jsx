import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const Preview = () => {
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

      {/* Display Course Details and Video */}
      <div className='w-full md:w-[80%] lg:w-[60%] mx-auto'>
        {/* Video Preview */}
        {file && (
          <div className='mb-6'>
            <video controls className='w-full rounded-lg shadow-md'>
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Course Details */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Course Details</h2>
          <div className='space-y-4'>
            <div>
              <p className='text-gray-600'>Course Name:</p>
              <p className='font-semibold'>{formData?.courseName}</p>
            </div>
            <div>
              <p className='text-gray-600'>Topic:</p>
              <p className='font-semibold'>{formData?.topic}</p>
            </div>
            <div>
              <p className='text-gray-600'>Assessment Link:</p>
              <p className='font-semibold'>{formData?.assessmentLink}</p>
            </div>
            <div>
              <p className='text-gray-600'>Course Detail:</p>
              <p className='font-semibold'>{formData?.courseDetail}</p>
            </div>
          </div>
        </div>

        {/* Upload Button */}
        <div className='mt-6'>
          <Button
            type='primary'
            style={{ backgroundColor: '#0A751D', borderColor: '#0A751D' }}
            onClick={handleUpload}
            className='w-full md:w-auto'
          >
            Upload Course
          </Button>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        <div className='text-center p-6'>
          <CheckCircleOutlined className='text-[#0A751D] text-4xl mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Your course has been successfully added</h2>
          <p className='text-gray-600 mb-6'>You can now manage it from your dashboard</p>
          <Button
            type='primary'
            style={{ backgroundColor: '#0A751D', borderColor: '#0A751D' }}
            onClick={handleModalClose}
          >
            View Course
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Preview;