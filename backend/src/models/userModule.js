// modules/userModule.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return prisma.user.findMany();
};

const createUser = async (userData) => {
  return prisma.user.create({ data: userData });
};

const updateUser = async (userData) => {
    return prisma.user.update({ data: userData});
};

const deleteUser = async (userData) => {
    return prisma.user.delete({ data: userData});
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,

};
