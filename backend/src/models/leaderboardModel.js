// models/leaderboardModel.js
const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: { type: String, required: true },
  totalWorkoutHoursWeekly: { type: Number, default: 0 },
  totalWorkoutHoursMonthly: { type: Number, default: 0 },
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
