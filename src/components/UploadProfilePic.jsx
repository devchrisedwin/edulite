import React, { useState, useContext } from 'react';
import { Upload, Button, Modal, message } from 'antd';
import { CameraOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { AuthFormDataContext } from '../context/AuthFormDataContext';

const UploadProfilePic = ({ onNext, onPrevious }) => {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the success modal
  const { formData } = useContext(AuthFormDataContext); // Access form data from context

  // Handle file selection
  const handleUpload = (info) => {
    console.log('Upload Info:', info); // Debugging: Log the info object

    const selectedFile = info.file; // Access the file object directly
    if (selectedFile) {
      setFile(selectedFile); // Set the file state
      message.success(`${selectedFile.name} file selected successfully.`);
    } else {
      message.error('File selection failed. Please try again.');
    }
  };

  // Handle upload button click
  const handleUploadButtonClick = () => {
    if (file) {
      setIsModalVisible(true); // Show success modal
      logFormData(); // Log all form data to the console
    } else {
      message.warning('Please upload a file first.');
    }
  };

  // Log all form data to the console
  const logFormData = () => {
    const formDataToLog = { ...formData, profilePicture: file };
    console.log('Form Data:', formDataToLog);
    setTimeout(()=>{
      onNext()
    },2000)
  };

  // Close the success modal
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='h-[450px]'>
      <h3 className='mt-[45px] text-[12px] text-center font-semibold'>
        Add an image so that we can recognize you
      </h3>

      {/* Upload Component with Camera Icon */}
      <div className='w-[30%] m-auto mt-6'>
        <Upload
          name="profilePicture"
          onChange={handleUpload} // Handle file selection
          showUploadList={false} // Hide the file list
          beforeUpload={() => false} // Prevent automatic upload
        >
          <Button
            icon={<CameraOutlined />}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              fontSize: '24px',
            }}
          />
        </Upload>
        <p className='ml-6 text-[12px] font-semibold'>Size: 3mb</p>
      </div>

      {/* Upload Button */}
      <div style={{ marginTop: '30px' }}>
        <Button
          style={{ backgroundColor: '#0A751D', width: '100%', margin: 'auto' }}
          type="primary"
          onClick={handleUploadButtonClick}
        >
          sign up
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
          <h2 className='text-xl mb-2 font-bold'>Sign up successful</h2>
          <Button
            type='primary'
            style={{ backgroundColor: '#0A751D', borderColor: '#0A751D', width: "160px" }}
            onClick={handleModalClose}
          >
            Thank You
          </Button>
        </div>
      </Modal>

      {/* Navigation Buttons
      <div style={{ marginTop: 24 }}>
        <Button type="default" onClick={onPrevious} style={{ marginRight: 8 }}>
          Previous
        </Button>
      </div> */}
    </div>
  );
};

export default UploadProfilePic;