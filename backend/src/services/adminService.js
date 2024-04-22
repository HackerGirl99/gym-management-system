//adminService.js
const Admin = require('../models/adminModule');

const getAllAdmins = async () => {
  try {
    return await Admin.find();
  } catch (error) {
    console.error('Error fetching admins:', error);
    throw new Error('Failed to fetch admins');
  }
};

const createAdmin = async (adminData) => {
  try {
    return await Admin.create(adminData);
  } catch (error) {
    console.error('Error creating admin:', error);
    throw new Error('Failed to create admin');
  }
};

const updateAdminPassword = async (adminId, newPassword) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, { password: newPassword }, { new: true });
    if (!updatedAdmin) {
      throw new Error('Admin not found');
    }
    return updatedAdmin;
  } catch (error) {
    console.error('Error updating admin password:', error);
    throw new Error('Failed to update admin password');
  }
};

const updateAdminPhoneNumber = async (adminId, newPhoneNumber) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, { phoneNumber: newPhoneNumber }, { new: true });
    if (!updatedAdmin) {
      throw new Error('Admin not found');
    }
    return updatedAdmin;
  } catch (error) {
    console.error('Error updating admin phone number:', error);
    throw new Error('Failed to update admin phone number');
  }
};

// Add other admin service functions as needed

module.exports = {

  createAdmin,
  updateAdminPassword,
  updateAdminPhoneNumber,
};
