// modules/adminModule.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all admins
const getAllAdmins = async () => {
  return prisma.admin.findMany();
};

// Create new admin
const createAdmin = async (adminData) => {
  return prisma.admin.create({ data: adminData });
};

// Update existing admin
const updateAdmin = async (id, adminData) => {
  return prisma.admin.update({ where: { id }, data: adminData });
};

// Delete existing admin
const deleteAdmin = async (id) => {
  return prisma.admin.delete({ where: { id } });
};

module.exports = {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
