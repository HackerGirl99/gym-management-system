// models/workoutModel.js
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  durationHours: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
