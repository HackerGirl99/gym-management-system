// routes/leaderboardRoutes.js
import express from 'express';
import { getWeeklyLeaderboard, getMonthlyLeaderboard } from '../controllers/leaderboardController.js';

const router = express.Router();

router.get('/weekly', getWeeklyLeaderboard);
router.get('/monthly', getMonthlyLeaderboard);

export default router;
