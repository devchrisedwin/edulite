import React, { useState, useContext, useEffect } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { CheckCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { AuthFormDataContext } from '../context/AuthFormDataContext';
import { useNavigate } from 'react-router-dom';

const OTPVerification = ({ onNext, onPrevious }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [otpTimer, setOtpTimer] = useState(20); // Initial OTP timer value
  const [isLoading, setIsLoading] = useState(false); // Loading state for API call
  const navigate = useNavigate();
  const { formData, updateFormData } = useContext(AuthFormDataContext);

  // Retrieve email from local storage if it's missing in formData
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    console.log('Stored Email:', storedEmail); // Debugging: Check the stored email
    if (!formData.email && storedEmail) {
      updateFormData({ email: storedEmail }); // Set the email from local storage
      console.log('Email set from local storage:', storedEmail); // Debugging
    } else if (!formData.email) {
      message.error('Email is missing. Please contact support.');
      console.error('Email is missing in both formData and local storage.'); // Debugging
    }
  }, [formData.email, updateFormData]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input box
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const verifyOTP = async (otpNumber) => {
    setIsLoading(true); // Start loading
    console.log('Email:', formData.email); // Debugging: Check the email value

    try {
      const response = await fetch('https://edulite-talenvo.onrender.com/api/v1/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          verificationToken: otpNumber, // Use verificationToken instead of otp
          email: formData.email, // Pass the email from formData
        }),
      });

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'OTP verification failed. Please try again.');
      }

      const data = await response.json();

      // OTP verification successful
      setIsModalVisible(true); // Show success modal
      message.success('OTP verified successfully!');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      if (error.message === 'Failed to fetch') {
        message.error('Network error. Please check your internet connection.');
      } else {
        message.error(error.message || 'An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const onFinish = () => {
    const otpNumber = otp.join(''); // Combine OTP digits into a single string
    updateFormData((prevData) => ({ ...prevData, otp: otpNumber }));
    verifyOTP(otpNumber); // Call the API to verify the OTP
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate('/login');
  };

  // Function to reset the OTP timer
  const handleResend = async () => {
    try {
      const response = await fetch('https://edulite-talenvo.onrender.com/api/v1/auth/resend-verification-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email, // Pass the email from formData
        }),
      });

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to resend verification token. Please try again.');
      }

      const data = await response.json();

      // Reset the OTP timer
      setOtpTimer(20); // Reset the timer to its initial value
      message.success('Verification token resent successfully!');
    } catch (error) {
      console.error('Error resending verification token:', error);
      if (error.message === 'Failed to fetch') {
        message.error('Network error. Please check your internet connection.');
      } else {
        message.error(error.message || 'An error occurred. Please try again.');
      }
    }
  };

  useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer); // Cleanup the interval on component unmount or when otpTimer reaches 0
    };
  }, [otpTimer]); // Re-run the effect when otpTimer changes

  return (
    <div className='flex flex-col md:flex-row w-full h-screen mt-20 lg:mt-0'>
      {/* Left Side - OTP Verification Form */}
      <div className='w-full md:w-1/2 h-full flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <Form onFinish={onFinish} layout='vertical'>
            <div className='text-[12px] p-2 mt-1'>
              <div className='w-[50px] h-[50px] m-auto border-2 border-blue-600'>
                <CheckOutlined
                  style={{
                    color: 'blue',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '34px',
                    marginTop: '7px',
                  }}
                />
              </div>
              <h3 className='text-center text-xl font-semibold mt-2'>Input your Verification code</h3>
              <p className='text-center w-[250px] m-auto mt-3'>
                Please enter the four-digit code sent to your {formData.email || 'n******@gmail.com'} for verification
              </p>
            </div>

            <div className='flex gap-7 w-[80%] m-auto mb-22 mt-2'>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <Input
                  key={index}
                  id={`otp-input-${index}`}
                  value={otp[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  maxLength={1} // Allow only one character per input
                  style={{
                    width: '50px', // Adjusted width for better visibility
                    height: '50px', // Adjusted height for better visibility
                    textAlign: 'center',
                    fontSize: '18px', // Increased font size for better visibility
                    padding: '5px',
                  }}
                />
              ))}
            </div>

            <div className='mt-[-80px] text-[12px] text-center'>
              {otpTimer > 0 ? (
                <p className='text-center mt-[-10px] text-[10px]'>Resend code in {otpTimer}</p>
              ) : (
                <Button type='link' onClick={handleResend} style={{ padding: 0, fontSize: '12px', color: '#0A751D'}}>
                  Resend
                </Button>
              )}
              <p className='text-center mt-3 text-[12px] font-semibold p-2'>
                Didn't receive email? Check your spam folder or promotion folder
              </p>

              <Form.Item>
                <Button
                  type='default'
                  htmlType='submit'
                  loading={isLoading} // Show loading spinner when API call is in progress
                  style={{ backgroundColor: '#0A751D', color: 'white', width: '100%' }}
                >
                  Verify OTP
                </Button>
              </Form.Item>
            </div>
          </Form>

          <Modal open={isModalVisible} onCancel={handleModalClose} footer={null} centered>
            <div className='text-center p-6'>
              <CheckCircleOutlined
                style={{ color: '#0A751D', fontSize: '54px' }}
                className='mb-4'
              />
              <h2 className='text-xl mb-2 font-bold'>Congratulations!</h2>
              <p className='text-gray-600 mb-6'>Sign up successful and your account has been verified</p>
              <Button
                type='primary'
                style={{ backgroundColor: '#0A751D', borderColor: '#0A751D', width: '160px' }}
                onClick={handleModalClose}
              >
                Thank You
              </Button>
            </div>
          </Modal>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className='w-full md:w-1/2 h-full bg-cover bg-center' style={{ backgroundImage: 'url("../src/assets/images/signupimage.svg")' }}></div>
    </div>
  );
};

export default OTPVerification;