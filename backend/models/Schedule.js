// models/Schedule.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  // Define schedule schema fields here
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
