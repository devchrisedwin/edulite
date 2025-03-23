import React, { useContext } from 'react';
import { Form, Input, Select, Button, Checkbox } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { AuthFormDataContext } from '../context/AuthFormDataContext';
import { Link } from 'react-router-dom';

const { Option } = Select;

const Signup = ({ onNext, onPrevious }) => {
  const [form] = Form.useForm();
  const { formData, updateFormData } = useContext(AuthFormDataContext);

  const onFinish = (values) => {
    // Update form data in context
    updateFormData(values);
    onNext(); // Move to the next step
  };

  // Handle role change
  const handleRoleChange = (value) => {
    updateFormData({ role: value, grade: value === 'student' ? formData.grade : '' }); // Reset grade if role is not 'student'
    form.setFieldsValue({ grade: undefined }); // Reset the grade field in the form
  };

  return (
    <div className='w-full md:w-[98%] h-[600px] md:h-[700px] m-auto font-semibold p-1 max-w-[500px] overflow-y-auto scrollbar-custom'>
      <h3 className='text-black text-[13px]'>Sign up</h3>
      <h3 className='text-gray-400 mb-2 text-[12px]'>Join us and start learning</h3>

      <Form form={form} onFinish={onFinish} layout="vertical">
        {/* First Name Field */}
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please input your first name!' }]}
          style={{ marginBottom: '5px', marginTop: '-5px' }}
        >
          <Input />
        </Form.Item>

        {/* Last Name Field */}
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
          style={{ marginBottom: '5px', marginTop: '-5px' }}
        >
          <Input />
        </Form.Item>

        {/* Role Field */}
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: 'Please select your role!' }]}
          style={{ marginBottom: '5px', marginTop: '-5px' }}
        >
          <Select placeholder="Select your role" onChange={handleRoleChange}>
            <Option value="student">Student</Option>
            <Option value="teacher">Teacher</Option>
          </Select>
        </Form.Item>

        {/* Grade Field (Conditional Rendering for Students) */}
        {formData.role === 'student' && (
          <Form.Item
            name="grade"
            label="Grade"
            rules={[{ required: true, message: 'Please select your grade!' }]}
            style={{ marginBottom: '5px', marginTop: '-5px' }}
          >
            <Select placeholder="Select your grade">
              <Option value="Grade 1">Grade 1</Option>
              <Option value="Grade 2">Grade 2</Option>
              <Option value="Grade 3">Grade 3</Option>
              <Option value="Grade 4">Grade 4</Option>
              <Option value="Grade 5">Grade 5</Option>
              <Option value="Grade 6">Grade 6</Option>
              <Option value="jss1">jss1</Option>
              <Option value="jss2">jss2</Option>
              <Option value="jss3">jss3</Option>
              <Option value="ss1">ss1</Option>
              <Option value="ss2">ss2</Option>
              <Option value="ss3">ss3</Option>
            </Select>
          </Form.Item>
        )}

        {/* Email Field */}
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        {/* Phone Number Field */}
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { pattern: /^\d{10,11}$/, message: 'Phone number must be 10-11 digits without country code' },
          ]}
        >
          <Input placeholder="Example: 07026706857" />
        </Form.Item>

        {/* Country Code Field (Available for both roles) */}
        <Form.Item
          name="countryCode"
          label="Country Code"
          rules={[
            { required: true, message: 'Please input your country code!' },
            { pattern: /^\d{1,4}$/, message: 'Country code must be 1-4 digits without + symbol' },
          ]}
        >
          <Input placeholder="Example: 234" />
        </Form.Item>

        {/* Learning Goals Field (Conditional Rendering for Students) */}
        {formData.role === 'student' && (
          <Form.Item
            name="learningGoals"
            label="Learning Goals"
            rules={[{ required: true, message: 'Please input your learning goals!' }]}
          >
            <Input.TextArea placeholder="Example: Improve math skills and prepare for SAT" />
          </Form.Item>
        )}

        {/* Badges Earned Field (Conditional Rendering for Students) */}
        {formData.role === 'student' && (
          <Form.Item
            name="badgesEarned"
            label="Badges Earned"
            rules={[{ required: true, message: 'Please input your badges earned!' }]}
          >
            <Input.TextArea placeholder="Example: Math Wizard, Science Explorer, Language Master" />
          </Form.Item>
        )}

        {/* Profile Picture Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="profilePicture"
            label="Profile Picture"
          >
            <Input placeholder="Example: https://example.com/images/teacher.jpg" />
          </Form.Item>
        )}

        {/* Bio Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="bio"
            label="Bio"
          >
            <Input.TextArea placeholder="Example: Experienced math teacher with 10+ years in secondary education" />
          </Form.Item>
        )}

        {/* Education Level Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="educationLevel"
            label="Education Level"
            rules={[{ required: true, message: 'Please input your education level!' }]}
          >
            <Input placeholder="Example: Masters in Mathematics Education" />
          </Form.Item>
        )}

        {/* Teaching Experience Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="teachingExperience"
            label="Teaching Experience (Years)"
            rules={[{ required: true, message: 'Please input your teaching experience!' }]}
          >
            <Input type="number" placeholder="Example: 8" />
          </Form.Item>
        )}

        {/* Certifications Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="certifications"
            label="Certifications"
            rules={[{ required: true, message: 'Please input your certifications!' }]}
          >
            <Input.TextArea placeholder="Example: State Teaching License, Advanced Instructional Design" />
          </Form.Item>
        )}

        {/* Rating Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: 'Please input your rating!' }]}
          >
            <Input placeholder="Example: 4.8/5.0" />
          </Form.Item>
        )}

        {/* Total Courses Field (Conditional Rendering for Teachers) */}
        {formData.role === 'teacher' && (
          <Form.Item
            name="totalCourses"
            label="Total Courses"
            rules={[{ required: true, message: 'Please input the total number of courses you teach!' }]}
          >
            <Input type="number" placeholder="Example: 12" />
          </Form.Item>
        )}

        {/* Terms and Conditions Checkbox */}
        <div className='flex items-center mt-[-30px] text-[9px] p-2'>
          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject('You must agree to the terms and conditions to proceed.'),
              },
            ]}
            style={{ marginBottom: '5px', marginTop: '-5px' }}
          >
            <Checkbox />
          </Form.Item>
          <p className='text-gray-400 ml-3'>
            By continuing you agree to our{' '}
            <span className='text-[#050505] ml-1'>terms and condition</span> and{' '}
            <span className='text-[#050505] ml-1'>privacy policy</span>
          </p>
        </div>

        {/* Continue Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', marginTop: '-5px', backgroundColor: '#0A751D' }}
          >
            Continue
          </Button>
        </Form.Item>
        <p className='mt-[-22px] text-center pb-2'>Already have an account <Link to='/login'>login</Link> here</p>

        {/* Divider */}
        <div style={{ textAlign: 'center', marginTop: '-9px', fontSize: '13px' }}>or</div>

        {/* Signup with Google Button */}
        <Form.Item>
          <Button
            type="default"
            icon={<GoogleOutlined />}
            block
            onClick={() => {
              console.log('Signup with Google clicked');
            }}
          >
            Signup with Google
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;