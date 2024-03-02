// routes/scheduleRoutes.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { getSchedules, createSchedule } = require('../controllers/scheduleController');

router.get('/', authenticateUser, getSchedules);
router.post('/', authenticateUser, createSchedule);

module.exports = router;
