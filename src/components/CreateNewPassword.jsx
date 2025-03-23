import React from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

function CreateNewPassword() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values)
    };
    
  return (
    
    <div className='border flex flex-col md:flex-row items-center w-full md:w-[60%] h-auto md:h-[500px] m-auto mt-24 overflow-hidden'>
                    
        {/* Left Section */}
        <div className='w-full md:w-[50%] p-5 h-auto md:h-[400px] overflow-hidden'>  
            <h3 className='font-semibold pt-3'>Create a New Password</h3>


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
                    Create Password
                </Button>
                </Form.Item>

            <Link to='/login'>
                <p className='text-[12px] text-[#0A751D] text-center font-bold'>Back to login</p>
            </Link>
            </Form>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-[50%] h-[300px] md:h-[500px] signup-right bg-cover bg-center'></div>
    </div>
  )
}

export default CreateNewPassword