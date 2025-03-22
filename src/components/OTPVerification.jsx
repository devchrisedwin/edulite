import React, { useState, useContext } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { CheckCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AuthFormDataContext } from '../context/AuthFormDataContext';
import { useNavigate } from 'react-router-dom';

const OTPVerification = ({ onNext, onPrevious }) => {
  const [otp, setOtp] = useState(['', '', '', '']); // State to store OTP values
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the success modal
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(AuthFormDataContext)

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input box
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const onFinish = () => {
    const otpNumber = otp.join(''); // Combine OTP digits into a single string
    setFormData((prevData) => ({ ...prevData, otp: otpNumber }));
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate('/')
  };

  return (
    <div className='h-[500px] pt-10'>
        <Form onFinish={onFinish} layout="vertical">
        <div className='text-[12px] p-2 mt-1'>
            <div className='w-[50px] h-[50px] m-auto border-2 border-blue-600'>
                <CheckOutlined style={{ color: 'blue', display: "flex", 
                    alignItems: "center", justifyContent: "center", 
                    fontSize: '34px', marginTop: "7px"}}/>
            </div>
            <h3 className='text-center text-xl font-semibold mt-2'>Input your Verification code</h3>
            <p className='text-center w-[250px] m-auto mt-3'>please enter the four digit code sent to your n******@gmail.com for verification</p>
        </div>
      
      <div className='flex gap-7 w-[50%] m-auto mb-22 mt-2'>
        {[0, 1, 2, 3].map((index) => (
          <Input
            key={index}
            id={`otp-input-${index}`}
            value={otp[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            maxLength={1} // Allow only one character per input
            style={{
              width: '50px',
              height: '30px',
              textAlign: 'center',
              fontSize: '9px',
              padding: "5px"
            }}
          />
        ))}
      </div>
      


        <div  className='mt-[-80px] text-[12px] text-center'>
            <p className='text-center mt-[-10px] text-[10px]'>Resend code in 00</p>
            <p className='text-center mt-3 text-[12px] font-semibold p-2'>Didn't recieve email? check your spam folder or promotion folder</p>

            <Form.Item>
            <Button type='default' onClick={()=>{setIsModalVisible(true)}}
            style={{backgroundColor: "#0A751D", color: "white", width: "100%"}}>Continue</Button>
            </Form.Item>
        </div>
        </Form>
        <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        <div className='text-center p-6'>
          <CheckCircleOutlined  style={{ color: '#0A751D', fontSize: '54px' }} 
          className='mb-4' />
          <h2 className='text-xl mb-2 font-bold'>Congratulations!</h2>
          <p className='text-gray-600 mb-6'>Sign up successful and your account has been verified</p>
          <Button
            type='primary'
            style={{ backgroundColor: '#0A751D', borderColor: '#0A751D', width: "160px" }}
            onClick={handleModalClose}
          >
            Thank You
          </Button>
        </div>
      </Modal>
    </div>
    
  );
};

export default OTPVerification;