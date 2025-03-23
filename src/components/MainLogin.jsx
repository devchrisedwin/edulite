import React, { useState, useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Import the UserContext

function MainLogin() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // Loading state for the login button
    const navigate = useNavigate();
    const { updateUser } = useContext(UserContext); // Use the context

    const onFinish = async (values) => {
        setLoading(true); // Start loading

        try {
            // Step 1: Call the login endpoint
            const loginResponse = await fetch('https://edulite-talenvo.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            const loginData = await loginResponse.json();

            console.log('Login Response:', loginData); // Debugging: Log the entire login response

            if (!loginResponse.ok) {
                throw new Error(loginData.message || 'Login failed. Please try again.');
            }

            // Step 2: Extract the token from the login response
            const token = loginData.data.access_token; // Correctly extract the token
            if (!token) {
                throw new Error('Token not found in the login response.');
            }
            localStorage.setItem('authToken', token); // Store the token in localStorage

            console.log('Token stored in localStorage:', token); // Debugging

            // Step 3: Fetch the current user's details
            const userResponse = await fetch('https://edulite-talenvo.onrender.com/api/v1/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the token in the request
                },
            });

            const userData = await userResponse.json();

            console.log('User Data Response:', userData); // Debugging

            if (!userResponse.ok) {
                throw new Error(userData.message || 'Failed to fetch user details.');
            }

            // Step 4: Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage

            // Step 5: Update the user data in the context
            updateUser(userData); // Store user data in context

            // Step 6: Redirect the user to the dashboard or another page
            message.success('Login successful!');
            navigate('/'); // Redirect to the dashboard
        } catch (error) {
            console.error('Error during login:', error);
            message.error(error.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className='border flex flex-col md:flex-row items-center w-full md:w-[60%] h-auto md:h-[500px] m-auto mt-24 overflow-hidden'>
            {/* Left Section */}
            <div className='w-full md:w-[50%] p-5 h-auto md:h-[400px] overflow-hidden'>
                <h3 className='text-[#0A751D] font-bold'>Edu Lite</h3>
                <h3 className='text-black text-[13px] font-bold mt-7'>Login</h3>
                <h3 className='text-gray-400 mb-2 text-[12px]'>Welcome back</h3>

                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password' }]}
                        style={{ marginBottom: '5px', marginTop: '-5px' }}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Link to='/forgotpassword'>
                        <p className='text-[#0A751D] text-[12px] text-right'>forgot password</p>
                    </Link>

                    {/* Login Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: '100%', marginTop: '10px', backgroundColor: '#0A751D' }}
                            loading={loading} // Show loading state
                        >
                            Login
                        </Button>
                    </Form.Item>
                    <p className='mt-[-22px] text-center pb-2'>Don't have an account? <Link to='/auth'>sign up</Link> here</p>

                    {/* Login with Google Button */}
                    <Form.Item>
                        <Button
                            type="default"
                            icon={<GoogleOutlined />}
                            block
                            onClick={() => {
                                console.log('Signin with Google clicked');
                            }}
                        >
                            Signin with Google
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-[50%] h-[300px] md:h-[500px] signup-right bg-cover bg-center'></div>
        </div>
    );
}

export default MainLogin;