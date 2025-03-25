// ForgotPassOtp.js
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem('resetEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      message.error('Email not found. Please start the process again.');
      navigate('/forgot-password');
    }

    // Start OTP timer
    const timer = setInterval(() => {
      setOtpTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const verifyOTP = async () => {
    const otpNumber = otp.join('');
    if (otpNumber.length !== 6) {
      message.error('Please enter complete OTP');
      return;
    }
  
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://edulite-talenvo.onrender.com/api/v1/auth/verify-reset-token',
        {
          reference: otpNumber,
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log('API Response:', response.data); // Debug log
  
      // Updated response handling based on Swagger documentation
      if (response.data && response.data.message === "Token verified successfully") {
        setIsModalVisible(true);
        // Don't show message.success here since the modal will show success
      } else {
        const errorMsg = response.data?.message || 'OTP verification failed';
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('Verification Error:', error);
      if (!isModalVisible) {
        const errorMsg = error.response?.data?.message || 
            error.message || 
            'Invalid OTP. Please try again.';
        message.error(errorMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };


  const handleResend = async () => {
    try {
      await axios.post(
        'https://edulite-talenvo.onrender.com/api/v1/auth/resend-verification-token',
        { email: email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setOtpTimer(60);
      message.success('OTP resent successfully!');
    } catch (error) {
      message.error(error.response?.data?.message || 'Failed to resend OTP');
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate('/create-new-password');
  };

  return (
    <div className='flex flex-col md:flex-row w-full h-screen mt-20 lg:mt-0'>
      <div className='w-full md:w-1/2 h-full flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <Form layout='vertical'>
            <div className='text-center p-2 mt-1'>
              <h3 className='text-xl font-semibold mt-2'>Verify Your Email</h3>
              <p className='mt-3'>
                Enter the 6-digit code sent to {email || 'your email'}
              </p>
            </div>

            <div className='flex gap-2 justify-center my-6'>
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-input-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ''))}
                  maxLength={1}
                  style={{
                    width: '40px',
                    height: '50px',
                    textAlign: 'center',
                    fontSize: '18px'
                  }}
                />
              ))}
            </div>

            <div className='text-center'>
              {otpTimer > 0 ? (
                <p>Resend code in {otpTimer}s</p>
              ) : (
                <Button type='link' onClick={handleResend} style={{ color: '#0A751D' }}>
                  Resend OTP
                </Button>
              )}
            </div>

            <Form.Item className='mt-6'>
              <Button
                type='primary'
                onClick={verifyOTP}
                loading={isLoading}
                style={{ 
                  backgroundColor: '#0A751D', 
                  width: '100%',
                  height: '40px'
                }}
              >
                Verify OTP
              </Button>
            </Form.Item>
          </Form>

          <Modal 
            open={isModalVisible} 
            onCancel={handleModalClose} 
            footer={null}
            centered
          >
            <div className='text-center p-6'>
              <CheckCircleOutlined style={{ color: '#0A751D', fontSize: '48px' }} />
              <h2 className='text-xl my-4 font-semibold'>OTP Verified!</h2>
              <p>You can now create a new password</p>
              <Button
                type='primary'
                onClick={handleModalClose}
                style={{ 
                  backgroundColor: '#0A751D', 
                  marginTop: '20px',
                  width: '100%'
                }}
              >
                Continue
              </Button>
            </div>
          </Modal>
        </div>
      </div>
      <div className='hidden md:block w-1/2 h-full bg-gray-100'></div>
    </div>
  );
};

export default ForgotPassOtp;