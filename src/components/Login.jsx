import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AuthFormDataContext } from '../context/AuthFormDataContext';

const Login = ({ onNext, onPrevious }) => {
  const [form] = Form.useForm();
  const { formData, setFormData } = useContext(AuthFormDataContext);

  const onFinish = (values) => {
    setFormData((prevData) => ({ ...prevData, password: values.password }));
    onNext(); // Move to the next step
  };

  return (
    <div className='h-auto md:h-[450px] p-2 font-bold w-full max-w-[500px] mx-auto'>
      <h3 className='font-semibold pt-3'>Password</h3>
      <p className='text-[12px] text-gray-400 mb-3'>Select a security code</p>

      <Form form={form} onFinish={onFinish} layout="vertical">
        {/* Password Field */}
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Password is required' },
            { min: 8, message: 'Password must be at least 8 characters' },
          ]}
        >
          <Input.Password
            autoComplete="new-password" // Add autocomplete attribute
            placeholder="Enter your password"
          />
        </Form.Item>

        {/* Confirm Password Field */}
        <Form.Item
          name="confirmpassword"
          label="Confirm Password"
          dependencies={['password']} // Ensure this field depends on the password field
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password
            autoComplete="new-password" // Add autocomplete attribute
            placeholder="Confirm your password"
          />
        </Form.Item>

        {/* Continue Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', marginTop: '10px', backgroundColor: '#0A751D' }}
          >
            Continue
          </Button>
        </Form.Item>

        {/* Divider */}
        <div style={{ textAlign: 'center', marginTop: '-15px' }}>or</div>

        {/* Google Signup Button */}
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

        {/* Navigation Buttons */}
        <div className='flex justify-between mt-[-5px]'>
          <Form.Item>
            <Button type="default" onClick={onPrevious}>
              <MdKeyboardArrowLeft />
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <MdKeyboardArrowRight />
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;