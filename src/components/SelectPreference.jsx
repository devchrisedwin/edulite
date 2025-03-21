import React, { useState, useContext } from 'react';
import { Button, Checkbox, Space, Form } from 'antd';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AuthFormDataContext } from '../context/AuthFormDataContext';

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
  const { formData, setFormData } = useContext(AuthFormDataContext);
  const [form] = Form.useForm(); // Add form instance

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
  const onFinish = () => {
    setFormData((prevData) => ({ ...prevData, preferences: selectedPreferences }));
    onNext(); // Move to the next step
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
          >
            Continue
          </Button>
        </Form.Item>

        {/* Navigation Buttons */}
        <div className='mt-[-5px]'>
          <Form.Item>
            <Button type="default" onClick={onPrevious} style={{ marginRight: 8 }}>
              <MdKeyboardArrowLeft />
            </Button>
            <Button type="primary" onClick={onNext}>
              <MdKeyboardArrowRight />
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default SelectPreference;