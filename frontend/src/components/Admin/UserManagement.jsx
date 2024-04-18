import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  useEffect(() => {
    // Sample user data to display temporarily
    const sampleUsers = [
      { _id: '1', username: 'John Doe', email: 'john@example.com', userType: 'STUDENT' },
      { _id: '2', username: 'Jane Smith', email: 'jane@example.com', userType: 'STAFF' },
      { _id: '3', username: 'Alice Johnson', email: 'alice@example.com', userType: 'STUDENT' },
    ];

    // Simulate loading delay
    setTimeout(() => {
      setUsers(sampleUsers);
    }, 1000); // Adjust delay as needed
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setEditingUser(null);
  };

  const handleUpdateUser = (updatedUser) => {
    // Update the user in the users array
    const updatedUsers = users.map(user =>
      user._id === updatedUser._id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
    setIsEditPopupOpen(false);
    setEditingUser(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <h3 className="text-lg font-bold mb-2">User List</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">User Type</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.username}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.userType}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:text-blue-800 mr-4">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditPopupOpen && (
        <EditUserPopup user={editingUser} onClose={handleCloseEditPopup} onUpdate={handleUpdateUser} />
      )}
    </div>
  );
};

const EditUserPopup = ({ user, onClose, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedUser);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="username" className="text-gray-700 font-medium">Username</label>
            <input type="text" id="username" name="username" value={updatedUser.username} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input type="email" id="email" name="email" value={updatedUser.email} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="form-group">
            <label htmlFor="userType" className="text-gray-700 font-medium">User Type</label>
            <select id="userType" name="userType" value={updatedUser.userType} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="STUDENT">Student</option>
              <option value="STAFF">Staff</option>
            </select>
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
            <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;
