// controllers/leaderboardController.js
const leaderboardService = require('../services/leaderboardService');

const getLeaderboard = async (req, res) => {
  try {
    const { staffLeaderboard, studentLeaderboard } = await leaderboardService.getLeaderboardData();
    res.json({ staffLeaderboard, studentLeaderboard });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getLeaderboard
};
