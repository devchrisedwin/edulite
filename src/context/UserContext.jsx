import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Initialize user state from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state from localStorage
    }
  }, []);

  // Update user state and localStorage
  const updateUser = (userData) => {
    setUser(userData); // Update user state
    localStorage.setItem('user', JSON.stringify(userData)); // Store in localStorage
  };

  // Clear user state and localStorage (for logout)
  const clearUser = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove from localStorage
    localStorage.removeItem('authToken'); // Remove token from localStorage
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};