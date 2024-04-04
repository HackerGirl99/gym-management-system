// controllers/userController.js
const userService = require('../services/userService');
const bcrypt = require('bcrypt'); 
const User = require('../models/userModel'); 
const { updateLeaderboard } = require('../services/leaderboardService'); // Correct import statement

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;
    const newUser = await userService.createUser({ username, email, password, userType });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await userService.updateUserById(id, userData);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userService.deleteUserById(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const enterGym = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOneAndUpdate({ username }, { enteredGym: true }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update leaderboard
    await updateLeaderboard();

    return res.status(200).json({ message: 'User entered the gym successfully' });
  } catch (error) {
    console.error('Error entering gym:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const exitGym = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOneAndUpdate({ username }, { enteredGym: false }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update leaderboard
    await updateLeaderboard();

    return res.status(200).json({ message: 'User exited the gym successfully' });
  } catch (error) {
    console.error('Error exiting gym:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    // Find user by username or email
    const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid username/email or password' });
    }

    // Authentication successful, send success response
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error exiting gym:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  enterGym,
  exitGym,
  loginUser,
};
