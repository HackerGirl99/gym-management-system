// controllers/maintenanceController.js
const maintenanceModule = require('../models/maintenanceModule');

// Get all maintenance records
const getMaintenanceRecords = async (req, res) => {
  try {
    const maintenanceRecords = await maintenanceModule.getMaintenanceRecords();
    res.json(maintenanceRecords);
  } catch (error) {
    console.error('Error fetching maintenance records:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new maintenance record
const createMaintenanceRecord = async (req, res) => {
  try {
    const newMaintenanceRecord = await maintenanceModule.createMaintenanceRecord(req.body);
    res.status(201).json(newMaintenanceRecord);
  } catch (error) {
    console.error('Error creating maintenance record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getMaintenanceRecords,
  createMaintenanceRecord,
};
