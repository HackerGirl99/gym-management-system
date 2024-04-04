const adminService = require('../services/adminService');

const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAllAdmins();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { username, email, password, phoneNumber } = req.body;
    const newAdmin = await adminService.createAdmin({ username, email, password, phoneNumber });
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAdminPassword = async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;
  try {
    const updatedAdmin = await adminService.updateAdminPassword(id, newPassword);
    res.json(updatedAdmin);
  } catch (error) {
    console.error('Error updating admin password:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAdminPhoneNumber = async (req, res) => {
  const { id } = req.params;
  const { newPhoneNumber } = req.body;
  try {
    const updatedAdmin = await adminService.updateAdminPhoneNumber(id, newPhoneNumber);
    res.json(updatedAdmin);
  } catch (error) {
    console.error('Error updating admin phone number:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add other admin controller functions as needed

module.exports = {
  getAllAdmins,
  createAdmin,
  updateAdminPassword,
  updateAdminPhoneNumber,
};
