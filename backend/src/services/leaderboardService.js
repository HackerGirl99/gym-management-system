const User = require('../models/userModel');
const Workout = require('../models/workoutModel');
const Leaderboard = require('../models/leaderboardModel');
const moment = require('moment');

const getLeaderboardData = async () => {
  try {
    const currentWeekStart = moment().startOf('week').toDate();
    const currentMonthStart = moment().startOf('month').toDate();

    const staffLeaderboard = await User.aggregate([
      { $match: { userType: 'STAFF' } },
      {
        $lookup: {
          from: 'workouts',
          let: { userId: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
            { $match: { createdAt: { $gte: currentWeekStart } } }, // Filter by current week
            { $group: { _id: null, totalWorkoutHoursWeekly: { $sum: '$durationHours' } } }
          ],
          as: 'weeklyWorkouts'
        }
      },
      {
        $lookup: {
          from: 'workouts',
          let: { userId: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
            { $match: { createdAt: { $gte: currentMonthStart } } }, // Filter by current month
            { $group: { _id: null, totalWorkoutHoursMonthly: { $sum: '$durationHours' } } }
          ],
          as: 'monthlyWorkouts'
        }
      },
      {
        $project: {
          _id: 1,
          username: 1,
          totalWorkoutHoursWeekly: { $ifNull: [{ $first: '$weeklyWorkouts.totalWorkoutHoursWeekly' }, 0] },
          totalWorkoutHoursMonthly: { $ifNull: [{ $first: '$monthlyWorkouts.totalWorkoutHoursMonthly' }, 0] }
        }
      },
      { $sort: { totalWorkoutHoursWeekly: -1 } }
    ]);

    const studentLeaderboard = await User.aggregate([
      { $match: { userType: 'STUDENT' } },
      {
        $lookup: {
          from: 'workouts',
          let: { userId: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
            { $match: { createdAt: { $gte: currentWeekStart } } }, // Filter by current week
            { $group: { _id: null, totalWorkoutHoursWeekly: { $sum: '$durationHours' } } }
          ],
          as: 'weeklyWorkouts'
        }
      },
      {
        $lookup: {
          from: 'workouts',
          let: { userId: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
            { $match: { createdAt: { $gte: currentMonthStart } } }, // Filter by current month
            { $group: { _id: null, totalWorkoutHoursMonthly: { $sum: '$durationHours' } } }
          ],
          as: 'monthlyWorkouts'
        }
      },
      {
        $project: {
          _id: 1,
          username: 1,
          totalWorkoutHoursWeekly: { $ifNull: [{ $first: '$weeklyWorkouts.totalWorkoutHoursWeekly' }, 0] },
          totalWorkoutHoursMonthly: { $ifNull: [{ $first: '$monthlyWorkouts.totalWorkoutHoursMonthly' }, 0] }
        }
      },
      { $sort: { totalWorkoutHoursWeekly: -1 } }
    ]);

    return { staffLeaderboard, studentLeaderboard };
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw new Error('Failed to fetch leaderboard data');
  }
};

const updateLeaderboard = async () => {
  try {
    // Get users
    const users = await User.find();

    // Iterate over users
    for (const user of users) {
      // Calculate total workout hours for the current week
      const currentWeekWorkouts = await Workout.find({ userId: user._id, createdAt: { $gte: moment().startOf('week').toDate() } });
      const totalWorkoutHoursWeekly = currentWeekWorkouts.reduce((total, workout) => total + workout.durationHours, 0);

      // Calculate total workout hours for the current month
      const currentMonthWorkouts = await Workout.find({ userId: user._id, createdAt: { $gte: moment().startOf('month').toDate() } });
      const totalWorkoutHoursMonthly = currentMonthWorkouts.reduce((total, workout) => total + workout.durationHours, 0);

      // Update or create leaderboard entry for the user
      await Leaderboard.findOneAndUpdate(
        { userId: user._id },
        { 
          userId: user._id,
          username: user.username,
          totalWorkoutHoursWeekly,
          totalWorkoutHoursMonthly
        },
        { upsert: true }
      );
    }

    console.log('Leaderboard updated successfully');
  } catch (error) {
    console.error('Error updating leaderboard:', error);
    throw new Error('Failed to update leaderboard');
  }
};

module.exports = {
  getLeaderboardData,
  updateLeaderboard
};
