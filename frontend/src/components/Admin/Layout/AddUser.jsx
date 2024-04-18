import React, { useState } from 'react';
import axios from 'axios';

function AddNewUserForm() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    userType: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error and success messages
    setErrorMessage('');
    setSuccessMessage('');

    // Send user data to backend API
    axios.post('http://localhost:5000/api/users/register', userData)
      .then(response => {
        setSuccessMessage('New user added successfully!');
        setUserData({
          username: '',
          email: '',
          password: '',
          userType: '',
        });
      })
      .catch(error => {
        setErrorMessage('Failed to add new user');
        console.error('Error adding new user:', error);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New User</h2>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="text-gray-700 font-medium">Username</label>
          <input type="text" id="username" name="username" value={userData.username} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
          <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="userType" className="text-gray-700 font-medium">User Type</label>
          <select id="userType" name="userType" value={userData.userType} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">Select</option>
            <option value="STUDENT">Student</option>
            <option value="STAFF">Staff</option>
          </select>
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add User</button>
        </div>
      </form>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
    </div>
  );
}

export default AddNewUserForm;
