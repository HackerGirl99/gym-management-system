// controllers/equipmentController.js
const equipmentModule = require('../models/equipmentModule');

// Get all equipment
const getAllEquipment = async (req, res) => {
  try {
    const equipment = await equipmentModule.getAllEquipment();
    res.json(equipment);
  } catch (error) {
    console.error('Error fetching equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new equipment
const createEquipment = async (req, res) => {
  try {
    const newEquipment = await equipmentModule.createEquipment(req.body);
    res.status(201).json(newEquipment);
  } catch (error) {
    console.error('Error creating equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update existing equipment
const updateEquipment = async (req, res) => {
  const { id } = req.params;
  const equipmentData = req.body;
  try {
    const updatedEquipment = await equipmentModule.updateEquipment(id, equipmentData);
    res.json(updatedEquipment);
  } catch (error) {
    console.error('Error updating equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete existing equipment
const deleteEquipment = async (req, res) => {
  const { id } = req.params;
  try {
    await equipmentModule.deleteEquipment(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
