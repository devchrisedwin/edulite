
// import React, { useState, useContext } from 'react'; // Add useContext import
// import { Upload, Button, Modal, message } from 'antd';
// import { CameraOutlined } from '@ant-design/icons';
// import { AuthFormDataContext } from '../context/AuthFormDataContext'; // Ensure the correct path

// const UploadProfilePic = ({ onPrevious }) => {
//   const [file, setFile] = useState(null); // State to store the uploaded file
//   const [isModalVisible, setIsModalVisible] = useState(false); // State to control the success modal
//   const { formData } = useContext(AuthFormDataContext); // Access form data from context

//   // Handle file upload
//   const handleUpload = (info) => {
//     if (info.file.status === 'done') {
//       setFile(info.file.originFileObj); // Store the uploaded file
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   };

//   // Handle upload button click
//   const handleUploadButtonClick = () => {
//     if (file) {
//       setIsModalVisible(true); // Show success modal
//       submitFormData(); // Submit all form data
//     } else {
//       message.warning('Please upload a file first.');
//     }
//   };

//   // Submit all form data to the backend
//   const submitFormData = async () => {
//     const formDataToSubmit = new FormData();

//     // Append all form data to the FormData object
//     Object.keys(formData).forEach((key) => {
//       formDataToSubmit.append(key, formData[key]);
//     });

//     // Append the uploaded file
//     formDataToSubmit.append('profilePicture', file);
//     console.log(formDataToSubmit)

//     // try {
//     //   const response = await fetch('your-signup-endpoint', {
//     //     method: 'POST',
//     //     body: formDataToSubmit,
//     //   });

//     //   if (response.ok) {
//     //     message.success('User registered successfully!');
//     //   } else {
//     //     message.error('Failed to register user.');
//     //   }
//     // } catch (error) {
//     //   message.error('An error occurred while registering the user.');
//     // }
//   };

//   // Close the success modal
//   const handleModalClose = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div className='h-[450px]'>
//       <h3 className='mt-[45px] text-[12px] text-center font-semibold'>
//         Add an image so that we can recognize you
//       </h3>

//       {/* Upload Component with Camera Icon */}
//       <div className='w-[30%] m-auto mt-6'>
//         <Upload
//           name="profilePicture"
//         //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // Replace with your upload endpoint
//           onChange={handleUpload}
//           showUploadList={false} // Hide the file list
//         >
//           <Button
//             icon={<CameraOutlined/>}
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               fontSize: '24px',
//             }}
//           />
//         </Upload>
//         <p className='ml-6 text-[12px] font-semibold'>Size: 3mb</p>
//       </div>

//       {/* Upload Button */}
//       <div style={{ marginTop: '30px' }}>
//         <Button
//           style={{ backgroundColor: '#0A751D', width: '100%', margin: 'auto' }}
//           type="primary"
//           onClick={handleUploadButtonClick}
//         >
//           Upload
//         </Button>
//       </div>

//       {/* Success Modal */}
//       <Modal
//         title="Upload Successful"
//         open={isModalVisible}
//         onOk={handleModalClose}
//         onCancel={handleModalClose}
//       >
//         <p>Your profile picture has been uploaded successfully!</p>
//       </Modal>

//       {/* Navigation Buttons */}
//       <div style={{ marginTop: 24 }}>
//         <Button type="default" onClick={onPrevious} style={{ marginRight: 8 }}>
//           Previous
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default UploadProfilePic;

import React, { useState, useContext } from 'react'; // Add useContext import
import { Upload, Button, Modal, message } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { AuthFormDataContext } from '../context/AuthFormDataContext'; // Ensure the correct path

const UploadProfilePic = ({ onPrevious }) => {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the success modal
  const { formData } = useContext(AuthFormDataContext); // Access form data from context

  // Handle file upload
  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj); // Store the uploaded file
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
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
          Upload
        </Button>
      </div>

      {/* Success Modal */}
      <Modal
        title="Upload Successful"
        open={isModalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <p>Your profile picture has been uploaded successfully!</p>
      </Modal>

      {/* Navigation Buttons */}
      <div style={{ marginTop: 24 }}>
        <Button type="default" onClick={onPrevious} style={{ marginRight: 8 }}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default UploadProfilePic;