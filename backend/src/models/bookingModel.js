//bookingModel.js
const mongoose = require('mongoose');

// Define the schema
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  bookingDate: { type: Date, required: true },
  //bookingType: { type: String, enum: ['CLASS', 'TRAINING', 'SESSION'], required: true },
  equipment: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
  status: { type: String, enum: ['PENDING', 'CONFIRMED', 'CANCELLED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

// Create the model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
