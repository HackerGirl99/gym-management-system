// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define user schema fields here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
