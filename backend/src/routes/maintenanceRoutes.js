// routes/maintenanceRoutes.js
const express = require('express');
const router = express.Router();

// Import your controller methods for handling PUT requests
const { updateMaintenanceRecord } = require('../controllers/maintenanceController');

// Define the PUT route with a valid callback function
router.put('/:id', updateMaintenanceRecord);

module.exports = router;
