// controllers/bookingController.js
const bookingModule = require('../models/bookingModule');

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModule.getAllBookings();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new booking
const createBooking = async (req, res) => {
  try {
    const newBooking = await bookingModule.createBooking(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update existing booking
const updateBooking = async (req, res) => {
  const { id } = req.params;
  const bookingData = req.body;
  try {
    const updatedBooking = await bookingModule.updateBooking(id, bookingData);
    res.json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete existing booking
const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await bookingModule.deleteBooking(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
};
