// services/equipmentService.js
const Equipment = require('../models/equipmentModel');

// Function to fetch all equipment
const getAllEquipment = async () => {
  try {
    return await Equipment.find();
  } catch (error) {
    console.error('Error fetching equipment:', error);
    throw new Error('Failed to fetch equipment');
  }
};

// Function to create new equipment
const createEquipment = async (equipmentData) => {
  try {
    return await Equipment.create(equipmentData);
  } catch (error) {
    console.error('Error creating equipment:', error);
    throw new Error('Failed to create equipment');
  }
};

// Function to update existing equipment
const updateEquipment = async (equipmentId, equipmentData) => {
  try {
    return await Equipment.findByIdAndUpdate(equipmentId, equipmentData, { new: true });
  } catch (error) {
    console.error('Error updating equipment:', error);
    throw new Error('Failed to update equipment');
  }
};

// Function to delete existing equipment
const deleteEquipment = async (equipmentId) => {
  try {
    await Equipment.findByIdAndDelete(equipmentId);
  } catch (error) {
    console.error('Error deleting equipment:', error);
    throw new Error('Failed to delete equipment');
  }
};

module.exports = {
  getAllEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
