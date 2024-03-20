// modules/equipmentModule.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all equipment
const getAllEquipment = async () => {
  return prisma.equipment.findMany();
};

// Create new equipment
const createEquipment = async (equipmentData) => {
  return prisma.equipment.create({ data: equipmentData });
};

// Update existing equipment
const updateEquipment = async (id, equipmentData) => {
  return prisma.equipment.update({ where: { id }, data: equipmentData });
};

// Delete existing equipment
const deleteEquipment = async (id) => {
  return prisma.equipment.delete({ where: { id } });
};

module.exports = {
  getAllEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
