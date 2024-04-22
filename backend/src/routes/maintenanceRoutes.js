// maintenanceRoutes.js

const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// Define routes
router.get('/', maintenanceController.getAllMaintenance);
router.post('/', maintenanceController.createMaintenance);
router.put('/:id', maintenanceController.updateMaintenance);
router.delete('/:id', maintenanceController.deleteMaintenance);

module.exports = router;
