// modules/bookingModule.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all bookings
const getAllBookings = async () => {
  return prisma.booking.findMany();
};

// Create new booking
const createBooking = async (bookingData) => {
  return prisma.booking.create({ data: bookingData });
};

// Update existing booking
const updateBooking = async (id, bookingData) => {
  return prisma.booking.update({ where: { id }, data: bookingData });
};

// Delete existing booking
const deleteBooking = async (id) => {
  return prisma.booking.delete({ where: { id } });
};

module.exports = {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
};
