// services/bookingService.js
const Booking = require('../models/bookingModel');

const getAllBookings = async () => {
  try {
    return await Booking.find();
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw new Error('Failed to fetch bookings');
  }
};

const createBooking = async (bookingData) => {
  try {
    return await Booking.create(bookingData);
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }
};

const updateBooking = async (bookingId, bookingData) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, bookingData, { new: true });

    if (!updatedBooking) {
      throw new Error('Booking not found');
    }

    return updatedBooking;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw new Error('Failed to update booking');
  }
};

const deleteBooking = async (bookingId) => {
  try {
    await Booking.findByIdAndDelete(bookingId);
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw new Error('Failed to delete booking');
  }
};

const getBookingById = async (bookingId) => {
  try {
    return await Booking.findById(bookingId);
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    throw new Error('Failed to fetch booking by ID');
  }
};

const reserveEquipment = async (bookingData) => {
  try {
    return await Booking.create(bookingData);
  } catch (error) {
    console.error('Error reserving equipment:', error);
    throw new Error('Failed to reserve equipment');
  }
};

module.exports = {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  getBookingById,
  reserveEquipment, // Add new function to export
};
