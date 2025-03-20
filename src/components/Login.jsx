import React, {useContext} from 'react';
import { Form, Input, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AuthFormDataContext } from '../context/AuthFormDataContext';

const Login = ({ onNext, onPrevious }) => {
  const [form] = Form.useForm();
  const { formData, setFormData } = useContext(AuthFormDataContext)

  const onFinish = (values) => {
    setFormData((prevData) => ({ ...prevData, password: values.password }));
    onNext(); // Move to the next step
  };

  return (
    <div className='h-[450px] p-2 font-bold'>
        <h3 className='font-semibold pt-3'>Password</h3>
        <p className='text-[12px] text-gray-400 mb-3'>Select a security code</p>
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'must be atleast 8 characters' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirmpassword"
                label="ConfirmPassword"
                rules={[{ required: true, message: 'must be atleast 8 characters' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: "100%", 
                marginTop: "10px", backgroundColor: "#0A751D"}}>
                Continue
                </Button>
            </Form.Item>

        
             <div style={{ textAlign: 'center', marginTop: '-15px' }}>or</div>
            
            <Form.Item>
                <Button
                type="default"
                icon={<GoogleOutlined />} // Google logo
                block
                onClick={() => {
                    // Handle Google Signup logic here
                    console.log('Signup with Google clicked');
                }}
                >
                Signup with Google
                </Button>
            </Form.Item>

            <div className='mt-[-5px]'>
                <Form.Item>
                    <Button type="default" onClick={onPrevious} style={{ marginRight: 8 }}>
                    <MdKeyboardArrowLeft/>
                    </Button>
                    <Button type="primary" htmlType="submit">
                    <MdKeyboardArrowRight/>
                    </Button>
                </Form.Item>
            </div>
           
        </Form>
    </div>
    
  );
};

export default Login;