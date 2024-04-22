//adminModels.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String }, // Add phone number field
  // Other admin-specific fields
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
