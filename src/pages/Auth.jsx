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
    <div className='border flex items-center w-[60%] h-[500px] m-auto mt-10 overflow-hidden'>
        <div className='w-[50%] p-2 overflow-hidden'>
            <div className='text-[#0A751D] w-[100%] h-[50px] 
            m-auto ml- text-[12px] font-semibold mb-2 mt-16'>
                <h3 className='text-xl font-bold'>Edu Lite</h3>
                <Progress
                    percent={((currentStep + 1) / steps.length) * 100}
                    strokeColor="#0A751D"
                    showInfo={false}
                />
            </div>

            {renderChildComponent()}
        </div>

        <div className='w-[50%] h-[500px] signup-right'></div>
    </div>
  )
}

export default Auth