// routes/maintenanceRoutes.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const errorHandler = require('../middleware/errorMiddleware');
const { getMaintenanceRecords, createMaintenanceRecord } = require('../controllers/maintenanceController');

router.get('/', authenticateUser, getMaintenanceRecords);
router.post('/', authenticateUser, createMaintenanceRecord);

router.use(errorHandler);

module.exports = router;
