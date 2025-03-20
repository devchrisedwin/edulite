import React, { useContext } from 'react';
import { Form, Input, Select, Button, Checkbox } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { AuthFormDataContext } from '../context/AuthFormDataContext';

const { Option } = Select;

const Signup = ({ onNext }) => {
  const [form] = Form.useForm();
  const { formData, setFormData } = useContext(AuthFormDataContext);

  const onFinish = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    onNext(); // Move to the next step
  };

  return (
    <div className='w-full md:w-[98%] h-auto md:h-[500px] m-auto font-semibold overflow-y-auto p-1 max-w-[500px]'>
      <h3 className='text-black text-[13px]'>Sign up</h3>
      <h3 className='text-gray-400 mb-2 text-[12px]'>Join us and start learning</h3>

      <Form form={form} onFinish={onFinish} layout="vertical">
        {/* First Name Field */}
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please input your first name!' }]}
          style={{ marginBottom: '5px', marginTop: '-5px' }}
        >
          <Input />
        </Form.Item>

        {/* Last Name Field */}
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
          style={{ marginBottom: '5px', marginTop: '-5px' }}
        >
          <Input />
        </Form.Item>

        {/* Grade Field */}
        <Form.Item
          name="grade"
          label="Grade"
          rules={[{ required: true, message: 'Please select your grade!' }]}
          style={{ marginBottom: '5px', marginTop: '-5px' }}
        >
          <Select placeholder="Select your grade">
            <Option value="9">Grade 9</Option>
            <Option value="10">Grade 10</Option>
            <Option value="11">Grade 11</Option>
            <Option value="12">Grade 12</Option>
          </Select>
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        {/* Terms and Conditions Checkbox */}
        <div className='flex items-center mt-[-30px] text-[9px] p-2'>
          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject('You must agree to the terms and conditions to proceed.'),
              },
            ]}
            style={{ marginBottom: '5px', marginTop: '-5px' }}
          >
            <Checkbox />
          </Form.Item>
          <p className='text-gray-400 ml-3'>
            By continuing you agree to our{' '}
            <span className='text-[#050505] ml-1'>terms and condition</span> and{' '}
            <span className='text-[#050505] ml-1'>privacy policy</span>
          </p>
        </div>

        {/* Signup Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', marginTop: '-5px', backgroundColor: '#0A751D' }}
          >
            Signup
          </Button>
        </Form.Item>

        {/* Divider */}
        <div style={{ textAlign: 'center', marginTop: '-19px', fontSize: '13px' }}>or</div>

        {/* Signup with Google Button */}
        <Form.Item>
          <Button
            type="default"
            icon={<GoogleOutlined />}
            block
            onClick={() => {
              console.log('Signup with Google clicked');
            }}
          >
            Signup with Google
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;