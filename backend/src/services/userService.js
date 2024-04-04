// services/userService.js
const User = require('../models/userModel');
const Workout = require('../models/workoutModel');
const Leaderboard = require('../models/leaderboardModel');


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

const updateUserById = async (userId, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });

    if (!updatedUser) {
      throw new Error('User not found');
    }

    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
};

const deleteUserById = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user');
  }
};

// Add new service functions here
const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw new Error('Failed to fetch user by ID');
  }
};

const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw new Error('Failed to fetch user by email');
  }
};

const getTotalWorkoutHours = async (userId) => {
  try {
    const totalWorkout = await Workout.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, totalHours: { $sum: '$durationHours' } } }
    ]);
    return totalWorkout.length > 0 ? totalWorkout[0].totalHours : 0;
  } catch (error) {
    console.error('Error calculating total workout hours:', error);
    throw new Error('Failed to calculate total workout hours');
  }
};

// Update leaderboard based on current user data
const updateLeaderboard = async () => {
  try {
    // Get all users
    const users = await User.find();

    // Calculate total workout hours for each user
    const leaderboardData = users.map(user => {
      return {
        userId: user._id,
        username: user.username,
        totalWorkoutHours: user.totalWorkoutHours, // Assuming you have a field for total workout hours in the User model
      };
    });

    // Update leaderboard with the new data
    await Leaderboard.deleteMany({}); // Clear existing leaderboard data
    await Leaderboard.insertMany(leaderboardData); // Insert updated leaderboard data

    console.log('Leaderboard updated successfully');
  } catch (error) {
    console.error('Error updating leaderboard:', error);
    throw new Error('Failed to update leaderboard');
  }
};


module.exports = {
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
  getUserById,
  getUserByEmail,
  getTotalWorkoutHours,

};
