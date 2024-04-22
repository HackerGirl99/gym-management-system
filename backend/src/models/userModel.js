//userModel.js
const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['STUDENT', 'STAFF'], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
