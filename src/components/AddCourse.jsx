import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const AddCourse = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Handle file upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      message.success(`${selectedFile.name} file selected successfully.`);
    }
  };

  // Handle form submission
  const onFinish = (values) => {
    console.log('Form Values:', values);
    console.log('Uploaded File:', file);
    // Navigate to the Preview component with form data and file
    navigate('/dashboard/preview', { state: { formData: values, file } });
  };

  // Handle cancel
  const onCancel = () => {
    form.resetFields();
    setFile(null);
    message.info('Form cleared.');
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-6'>Add New Course</h1>

      {/* Custom Video Upload Section */}
      <div className='flex justify-center mb-8'>
        <div className='w-full md:w-[80%] lg:w-[60%] h-[200px] border-2 border-dashed border-[#0A751D] rounded-lg p-6 text-center'>
          <input
            type='file'
            accept='video/*'
            onChange={handleFileChange}
            className='hidden'
            id='file-upload'
          />
          <label htmlFor='file-upload' className='cursor-pointer'>
            <div className='flex flex-col items-center justify-center h-full'>
              <CloudUploadOutlined className='text-4xl text-[#0A751D]' />
              <p className='mt-3 text-gray-600'>
                {file ? file.name : 'Click or drag video to upload'}
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Course Details Form */}
      <div className='w-full md:w-[80%] lg:w-[60%] mx-auto'>
        <Form form={form} onFinish={onFinish} layout='vertical'>
          {/* Course Name */}
          <Form.Item
            name='courseName'
            label='Course Name'
            rules={[{ required: true, message: 'Please enter the course name!' }]}
          >
            <Input placeholder='Enter course name' />
          </Form.Item>

          {/* Topic */}
          <Form.Item
            name='topic'
            label='Topic'
            rules={[{ required: true, message: 'Please enter the topic!' }]}
          >
            <Input placeholder='Enter topic' />
          </Form.Item>

          {/* Assessment Link */}
          <Form.Item
            name='assessmentLink'
            label='Assessment Link'
            rules={[{ required: true, message: 'Please enter the assessment link!' }]}
          >
            <Input placeholder='Enter assessment link' />
          </Form.Item>

          {/* Course Detail */}
          <Form.Item
            name='courseDetail'
            label='Course Detail'
            rules={[{ required: true, message: 'Please enter course details!' }]}
          >
            <TextArea rows={4} placeholder='Enter course details' />
          </Form.Item>

          {/* Buttons */}
          <Form.Item>
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
              <Button
                type='primary'
                htmlType='submit'
                style={{ backgroundColor: '#0A751D', borderColor: '#0A751D' }}
                className='w-full md:w-auto'
              >
                Preview Course
              </Button>
              <Button
                style={{ color: '#0A751D', width: '100%', md: 'auto' }}
                type='default'
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCourse;