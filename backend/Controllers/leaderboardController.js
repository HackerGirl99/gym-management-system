import UserLogs from "../models/userLogsModel.js";
import User from "../models/userModel.js";

// Function to get weekly leaderboard
export const getWeeklyLeaderboard = async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7); // Start date of the current week

    const leaderboard = await UserLogs.aggregate([
      {
        $group: {
          _id: "$userId",
          totalWorkoutTime: { $sum: "$workoutTime" },
        },
      },
      {
        $sort: { totalWorkoutTime: -1 },
      },
    ]);

    const leaderboardObj = {
      staffLeaderboard: [],
      studentLeaderboard: [],
    };

        for (let i = 0; i < leaderboard.length; i++) {
        let user = await User.findById(leaderboard[i]._id);
        let totalWorkoutHoursWeekly = (
          leaderboard[i].totalWorkoutTime / 60
        ).toFixed(2);
        console.log(leaderboard)

        console.log(user)

        if (user.userType == "STAFF") {
          leaderboardObj.staffLeaderboard.push({
            name: user.name,
            userType: user.userType,
            totalWorkoutHoursWeekly,
          });
        } else {
          leaderboardObj.studentLeaderboard.push({
            name: user.name,
            userType: user.userType,
            totalWorkoutHoursWeekly,
          });
        }
      }
    
   

    res.status(200).json(leaderboardObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get monthly leaderboard
export const getMonthlyLeaderboard = async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1); // Start date of the current month

    const leaderboard = await UserLogs.aggregate([
      {
        $group: {
          _id: "$userId",
          totalWorkoutTime: { $sum: "$workoutTime" },
        },
      },
      {
        $sort: { totalWorkoutTime: -1 },
      },
    ]);

    const leaderboardObj = {
      staffLeaderboard: [],
      studentLeaderboard: [],
    };

    for (let i = 0; i < leaderboard.length; i++) {
      let user = await User.findById(leaderboard[i]._id);
      let totalWorkoutHoursMonthly = (
        leaderboard[i].totalWorkoutTime / 60
      ).toFixed(2);
      if (user.userType == "STAFF") {
        leaderboardObj.staffLeaderboard.push({
          name: user.name,
          userType: user.userType,
          totalWorkoutHoursMonthly,
        });
      } else {
        leaderboardObj.studentLeaderboard.push({
          name: user.name,
          userType: user.userType,
          totalWorkoutHoursMonthly,
        });
      }
    }

    res.status(200).json(leaderboardObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
