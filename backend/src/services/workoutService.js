//workoutService.js
const Workout = require('../models/workoutModel');

const recordWorkout = async (userId, durationHours) => {
  try {
    await Workout.create({ userId, durationHours });
  } catch (error) {
    console.error('Error recording workout:', error);
    throw new Error('Failed to record workout');
  }
};

module.exports = {
  recordWorkout
};
