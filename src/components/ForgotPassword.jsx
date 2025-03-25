import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate()

    const onFinish = async (values) => {
        try {
            setLoading(true);
            
            const response = await axios.post(
                'https://edulite-talenvo.onrender.com/api/v1/auth/forgot-password',
                { email: values.email },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Corrected response handling based on your API structure
            if (response.data && response.data.status === "success") {
                message.success(response.data.data.message || 'Password reset link sent successfully!');
                localStorage.setItem('resetEmail', values.email);
                navigate('/forgot-password-otp');
                form.resetFields();
            } else {
                message.error(response.data?.data?.message || 'Failed to send reset link');
            }
        } catch (error) {
            console.error('Error:', error);
            
            if (error.response) {
                // Handle API error responses
                message.error(
                    error.response.data?.data?.message || 
                    error.response.data?.message || 
                    'An error occurred. Please try again.'
                );
            } else if (error.request) {
                message.error('No response from server. Please check your connection.');
            } else {
                message.error('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='border flex flex-col md:flex-row items-center w-full md:w-[60%] h-auto md:h-[500px] m-auto mt-24 overflow-hidden'>
                    
            {/* Left Section */}
            <div className='w-full md:w-[50%] p-5 h-auto md:h-[400px] overflow-hidden'>
                <h3 className='text-[#0A751D] font-bold mb-10'>Edu Lite</h3>

                <h3 className='font-semibold'>Forgot Password</h3>
                <p className='text-gray-400 text-[13px] mb-5'>Enter your registered email and we will send you a reset link</p>

                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { 
                                type: 'email', 
                                message: 'Please enter a valid email address!' 
                            }
                        ]}
                    >
                        <Input placeholder="your.email@example.com" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            disabled={loading}
                            style={{ 
                                width: '100%', 
                                marginTop: '10px', 
                                backgroundColor: '#0A751D',
                                height: '40px'
                            }}
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </Button>
                    </Form.Item>

                    <Link to='/login'>
                        <p className='text-[12px] text-[#0A751D] text-center font-bold hover:underline'>
                            Back to login
                        </p>
                    </Link>
                </Form>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-[50%] h-[300px] md:h-[500px] signup-right bg-cover bg-center'></div>
        </div>
    );
}

export default ForgotPassword;