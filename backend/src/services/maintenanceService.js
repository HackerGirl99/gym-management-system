// services/maintenanceService.js
const Maintenance = require('../models/maintenanceModel');

// Function to fetch all maintenance records
const getAllMaintenance = async () => {
  try {
    return await Maintenance.find();
  } catch (error) {
    console.error('Error fetching maintenance records:', error);
    throw new Error('Failed to fetch maintenance records');
  }
};

// Function to create new maintenance record
const createMaintenance = async (maintenanceData) => {
  try {
    return await Maintenance.create(maintenanceData);
  } catch (error) {
    console.error('Error creating maintenance record:', error);
    throw new Error('Failed to create maintenance record');
  }
};

// Function to update existing maintenance record
const updateMaintenance = async (maintenanceId, maintenanceData) => {
  try {
    return await Maintenance.findByIdAndUpdate(maintenanceId, maintenanceData, { new: true });
  } catch (error) {
    console.error('Error updating maintenance record:', error);
    throw new Error('Failed to update maintenance record');
  }
};

// Function to delete existing maintenance record
const deleteMaintenance = async (maintenanceId) => {
  try {
    await Maintenance.findByIdAndDelete(maintenanceId);
  } catch (error) {
    console.error('Error deleting maintenance record:', error);
    throw new Error('Failed to delete maintenance record');
  }
};

module.exports = {
  getAllMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
};
