// routes/leaderboardRoutes.js
const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

router.get('/', leaderboardController.getLeaderboard); // Removed /leaderboard prefix

module.exports = router;
