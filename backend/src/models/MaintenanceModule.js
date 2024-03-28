// modules/maintenanceModule.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all maintenance records
const getMaintenanceRecords = async () => {
  return prisma.maintenance.findMany();
};

// Create new maintenance record
const createMaintenanceRecord = async (maintenanceData) => {
  return prisma.maintenance.create({ data: maintenanceData });
};

module.exports = {
  getMaintenanceRecords,
  createMaintenanceRecord,
};
