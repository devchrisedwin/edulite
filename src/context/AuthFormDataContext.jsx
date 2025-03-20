import React, { createContext, useState } from 'react';

export const AuthFormDataContext = createContext();

export const AuthFormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    email: '',
    otp: '',
    password: '',
    preferences: [],
    profilePicture: null,
  });

  return (
    <AuthFormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </AuthFormDataContext.Provider>
  );
};