import React from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
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
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type="email" />
                </Form.Item>

                {/* Login Button */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%', marginTop: '10px', backgroundColor: '#0A751D' }}
                    >
                        Send Email
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

export default ForgotPassword