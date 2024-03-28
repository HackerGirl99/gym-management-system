const User = require('../models/userModel');

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

const createUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};


const updateUser = async (userId, userData) => {
  try {
    // Use findByIdAndUpdate to update the user by ID
    // Set { new: true } to return the updated user data
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });

    // Check if updatedUser is null (user not found)
    if (!updatedUser) {
      throw new Error('User not found'); // Throw an error if user is not found
    }

    return updatedUser; // Return the updated user data
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user'); // Throw an error if update operation fails
  }
};

const deleteUser = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};