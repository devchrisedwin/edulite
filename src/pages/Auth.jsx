import React, { useState } from 'react';
import { Progress } from 'antd';

import Signup from '../components/Signup';
import OTPVerification from '../components/OTPVerification';
import Login from '../components/Login';
import SelectPreference from '../components/SelectPreference';
import UploadProfilePic from '../components/UploadProfilePic';

function Auth() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Signup', 'OTP Verification', 'Login', 'Select Preference', 'Upload Profile Picture'];

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const renderChildComponent = () => {
    switch (currentStep) {
      case 0:
        return <Signup onNext={handleNext} />;
      case 1:
        return <OTPVerification onNext={handleNext} onPrevious={handlePrevious} />;
      case 2:
        return <Login onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <SelectPreference onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return <UploadProfilePic onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center w-full md:w-[90%] lg:w-[60%] h-auto md:h-[600px] m-auto mt-20 overflow-hidden shadow-lg rounded-lg'>
      {/* Left Section (Form and Progress Bar) */}
      <div className='w-full md:w-[50%] p-2 overflow-hidden'>
        <div className='text-[#0A751D] w-full h-[50px] m-auto text-[12px] font-semibold mb-2 mt-4 md:mt-16'>
          <h3 className='text-xl font-bold'>Edu Lite</h3>
          <Progress
            percent={((currentStep + 1) / steps.length) * 100}
            strokeColor="#0A751D"
            showInfo={false}
          />
        </div>

        {/* Render the current step's component */}
        {renderChildComponent()}
      </div>

      {/* Right Section (Image/Background) */}
      <div className='w-full md:w-[50%] h-[300px] md:h-[600px] signup-right bg-cover bg-center'></div>
    </div>
  );
}

export default Auth;