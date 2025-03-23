import React, { useState, useContext } from 'react';
import { Button, Checkbox, Space, Form, message } from 'antd';
import { AuthFormDataContext } from '../context/AuthFormDataContext';
import { useNavigate } from 'react-router-dom';

const preferences = [
  { label: 'Science', value: 'Science' },
  { label: 'Mathematics', value: 'Mathematics' },
  { label: 'English', value: 'English' },
  { label: 'Chemistry', value: 'Chemistry' },
  { label: 'Physic', value: 'Physic' },
  { label: 'Statistic', value: 'Statistic' },
];

const SelectPreference = ({ onNext, onPrevious }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { formData, updateFormData } = useContext(AuthFormDataContext); // Use updateFormData from context
  const [form] = Form.useForm(); // Add form instance
  const [loading, setLoading] = useState(false); // Loading state for the submit button
  let navigate = useNavigate()

  // Handle individual preference selection
  const handlePreferenceClick = (value) => {
    if (selectedPreferences.includes(value)) {
      setSelectedPreferences(selectedPreferences.filter((item) => item !== value));
    } else {
      setSelectedPreferences([...selectedPreferences, value]);
    }
  };

  // Handle "Select All" checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPreferences(preferences.map((pref) => pref.value)); // Select all
    } else {
      setSelectedPreferences([]); // Deselect all
    }
    setSelectAll(e.target.checked);
  };

  // Handle form submission
  const onFinish = async () => {
    try {
      setLoading(true); // Start loading
  
      // Validate preferences
      if (selectedPreferences.length === 0) {
        message.error('Please select at least one preference.');
        return;
      }
  
      // Determine the preference field based on the role
      const preferenceField = formData.role === 'student' ? 'preferredSubjects' : 'subjectsTaught';
  
      // Update preferences in global state
      updateFormData({ [preferenceField]: selectedPreferences.join(', ') });
  
      // Determine the endpoint based on the role
      const endpoint =
        formData.role === 'student'
          ? 'https://edulite-talenvo.onrender.com/api/v1/auth/create-student'
          : 'https://edulite-talenvo.onrender.com/api/v1/auth/create-teacher';
  
      // Prepare the payload
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber, // Only the phone number digits (10-11 digits)
        countryCode: formData.countryCode, // Only the country code digits (1-4 digits), as a string
        password: formData.password,
      };
  
      // Add role-specific fields
      if (formData.role === 'student') {
        payload.gradeLevel = formData.grade;
        payload.preferredSubjects = selectedPreferences.join(', ');
        payload.learningGoals = formData.learningGoals || 'Improve math skills and prepare for SAT';
        payload.badgesEarned = formData.badgesEarned || 'Math Wizard, Science Explorer, Language Master';
      } else if (formData.role === 'teacher') {
        payload.profilePicture = formData.profilePicture || 'https://example.com/images/teacher.jpg';
        payload.bio = formData.bio || 'Experienced math teacher with 10+ years in secondary education';
        payload.subjectsTaught = selectedPreferences.join(', ');
        payload.educationLevel = formData.educationLevel || 'Masters in Mathematics Education';
        payload.teachingExperience = Number(formData.teachingExperience); // Convert to number
        payload.certifications = formData.certifications || 'State Teaching License, Advanced Instructional Design';
        payload.rating = formData.rating || '4.8/5.0';
        payload.totalCourses = Number(formData.totalCourses); // Convert to number
      }
  
      console.log('Payload:', payload); // Log the payload for debugging
  
      // Send the POST request
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
      console.log('Response:', result); // Log the response for debugging
  
      if (response.ok) {
        // If the request is successful, proceed to the next step
        message.success('Registration successful!');
        navigate('/otp')
      } else {
        // If the request fails, show an error message
        message.error(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      message.error('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };
  
  return (
    <Form form={form} onFinish={onFinish}> {/* Wrap the component in a Form */}
      <div className='h-[450px] p-2'>
        <h3 className='text-center font-semibold text-[14px] mb-10'>Select Your Preferences</h3>
        <Space wrap>
          {preferences.map((pref) => (
            <Button
              key={pref.value}
              type={selectedPreferences.includes(pref.value) ? 'primary' : 'default'}
              onClick={() => handlePreferenceClick(pref.value)}
              style={{
                marginBottom: 8,
                backgroundColor: selectedPreferences.includes(pref.value) ? '#0A751D' : undefined, // Green background when selected
                borderColor: selectedPreferences.includes(pref.value) ? '#0A751D' : undefined, // Green border when selected
                color: selectedPreferences.includes(pref.value) ? '#fff' : undefined, // White text when selected
              }}
            >
              {pref.label}
            </Button>
          ))}
        </Space>

        {/* Select All Checkbox */}
        <div style={{ marginTop: 16 }}>
          <Checkbox checked={selectAll} onChange={handleSelectAll}>
            Select All
          </Checkbox>
        </div>

        {/* Continue Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit" // Ensure this button submits the form
            style={{ width: '100%', marginTop: '40px', backgroundColor: '#0A751D' }}
            loading={loading} // Show loading state
          >
            Sign up
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SelectPreference;