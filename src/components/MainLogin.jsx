import React from 'react';
import { Form, Input, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

function MainLogin() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className='border flex flex-col md:flex-row items-center w-full md:w-[60%] h-auto md:h-[500px] m-auto mt-10 overflow-hidden'>
            
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

                    {/* Login Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: '100%', marginTop: '10px', backgroundColor: '#0A751D' }}
                        >
                            Login
                        </Button>
                    </Form.Item>

                    {/* Login with Google Button */}
                    <Form.Item>
                        <Button
                            type="default"
                            icon={<GoogleOutlined />}
                            block
                            onClick={() => {
                                console.log('Signup with Google clicked');
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