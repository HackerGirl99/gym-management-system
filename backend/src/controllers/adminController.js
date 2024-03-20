// controllers/adminController.js
const adminModule = require('../models/adminModule');

// Get all admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminModule.getAllAdmins();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new admin
const createAdmin = async (req, res) => {
  try {
    const newAdmin = await adminModule.createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update existing admin
const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const adminData = req.body;
  try {
    const updatedAdmin = await adminModule.updateAdmin(id, adminData);
    res.json(updatedAdmin);
  } catch (error) {
    console.error('Error updating admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete existing admin
const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    await adminModule.deleteAdmin(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
