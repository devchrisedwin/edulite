import React, { createContext, useState } from 'react';

export const AuthFormDataContext = createContext();

export const AuthFormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Common fields for both students and teachers
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    password: '',
    role: '', // 'student' or 'teacher'
    agreeToTerms: false, // Terms and conditions checkbox

    // Student-specific fields
    grade: '',
    learningGoals: '',
    badgesEarned: '',

    // Teacher-specific fields
    profilePicture: '',
    bio: '',
    subjectsTaught: '',
    educationLevel: '',
    teachingExperience: 0,
    certifications: '',
    rating: '',
    totalCourses: 0,
  });

  // Function to update form data
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  // Function to update the role and reset role-specific fields
  const updateRole = (newRole) => {
    setFormData((prevData) => ({
      ...prevData,
      role: newRole,
      // Reset student-specific fields if role is not 'student'
      grade: newRole === 'student' ? prevData.grade : '',
      learningGoals: newRole === 'student' ? prevData.learningGoals : '',
      badgesEarned: newRole === 'student' ? prevData.badgesEarned : '',
      // Reset teacher-specific fields if role is not 'teacher'
      profilePicture: newRole === 'teacher' ? prevData.profilePicture : '',
      bio: newRole === 'teacher' ? prevData.bio : '',
      subjectsTaught: newRole === 'teacher' ? prevData.subjectsTaught : '',
      educationLevel: newRole === 'teacher' ? prevData.educationLevel : '',
      teachingExperience: newRole === 'teacher' ? prevData.teachingExperience : 0,
      certifications: newRole === 'teacher' ? prevData.certifications : '',
      rating: newRole === 'teacher' ? prevData.rating : '',
      totalCourses: newRole === 'teacher' ? prevData.totalCourses : 0,
    }));
  };

  // Function to update the grade (only applicable if role is 'student')
  const updateGrade = (newGrade) => {
    if (formData.role === 'student') {
      setFormData((prevData) => ({
        ...prevData,
        grade: newGrade,
      }));
    }
  };

  return (
    <AuthFormDataContext.Provider
      value={{
        formData,
        updateFormData, // Expose the updateFormData function
        updateRole, // Expose the updateRole function
        updateGrade, // Expose the updateGrade function
      }}
    >
      {children}
    </AuthFormDataContext.Provider>
  );
};