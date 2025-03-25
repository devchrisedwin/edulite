import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CreateNewPassword() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            setLoading(true);
            const email = localStorage.getItem('resetEmail');
            
            if (!email) {
                message.error('Session expired. Please restart password reset.');
                return navigate('/forgot-password');
            }

            const response = await axios.patch(
                'https://edulite-talenvo.onrender.com/api/v1/auth/reset-password',
                {
                    email: email,
                    newPassword: values.password,
                    confirmNewPassword: values.confirmPassword
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data?.status === "success") {
                message.success('Password reset successfully!');
                localStorage.removeItem('resetEmail');
                setTimeout(() => navigate('/login'), 1000);
                return;
            }

            throw new Error(response.data?.message || 'Unexpected response');

        } catch (error) {
            console.error('Error:', error);
            
            if (error.response) {
                if (error.response.status === 400) {
                    // Show specific password requirements from server if available
                    const serverMessage = error.response.data?.message;
                    if (serverMessage.includes('password') || serverMessage.includes('Password')) {
                        message.error(`Password requirements: ${serverMessage}`);
                    } else {
                        message.error('Invalid password. It must contain:');
                        message.error('- At least 8 characters');
                        message.error('- At least 1 uppercase letter');
                        message.error('- At least 1 lowercase letter');
                        message.error('- At least 1 number');
                        message.error('- At least 1 special character');
                    }
                } else {
                    message.error(error.response.data?.message || 
                                 'Failed to reset password');
                }
            } else {
                message.error('Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='border flex flex-col md:flex-row items-center w-full md:w-[60%] h-auto md:h-[500px] m-auto mt-24 overflow-hidden'>
            <div className='w-full md:w-[50%] p-5 h-auto md:h-[400px] overflow-hidden'>  
                <h3 className='font-semibold pt-3'>Create New Password</h3>
                <p className='text-gray-400 text-[13px] mb-5'>Enter a new password for your account</p>

                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="password"
                        label="New Password"
                        rules={[
                            { required: true, message: 'Please input your new password!' },
                            { min: 8, message: 'Minimum 8 characters' },
                            { pattern: /[A-Z]/, message: 'At least 1 uppercase letter' },
                            { pattern: /[a-z]/, message: 'At least 1 lowercase letter' },
                            { pattern: /[0-9]/, message: 'At least 1 number' },
                            { pattern: /[^A-Za-z0-9]/, message: 'At least 1 special character' }
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Enter new password" />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords do not match!');
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Confirm new password" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            style={{ 
                                width: '100%', 
                                backgroundColor: '#0A751D',
                                height: '40px'
                            }}
                        >
                            Reset Password
                        </Button>
                    </Form.Item>

                    <Link to='/login'>
                        <p className='text-[12px] text-[#0A751D] text-center font-bold hover:underline'>
                            Back to login
                        </p>
                    </Link>
                </Form>
            </div>
            <div className='w-full md:w-[50%] h-[300px] md:h-[500px] signup-right bg-cover bg-center'></div>
        </div>
    );
}

export default CreateNewPassword;