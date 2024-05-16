import Reservation from '../models/Reservation.js';
import validateRequest from '../middleware/validator.js';

const createReservation = async (req, res, next) => {
  try {
    // Implement validation logic before creating the reservation
    // Example: Validate request body, check equipment availability, user permissions, etc.
    const newReservation = new Reservation(req.body);
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    next(error);
  }
};

const getAllReservations = async (req, res, next) => {
  try {
    // Implement authorization logic before fetching reservations
    // Example: Check user permissions to list reservations
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    next(error);
  }
};

const getReservationById = async (req, res, next) => {
  try {
    // Implement authorization logic before fetching reservation by ID
    // Example: Check user permissions to view specific reservation
    const reservation = await Reservation.findById(req.params.reservationId);
    if (!reservation) {
      res.status(404).json({ message: 'Reservation not found' });
      return;
    }
    res.status(200).json(reservation);
  } catch (error) {
    next(error);
  }
};

const updateReservation = async (req, res, next) => {
  try {
    // Implement validation and authorization logic before updating reservation
    // Example: Check user permissions, equipment availability, etc.
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.reservationId,
      req.body,
      { new: true }
    );
    if (!updatedReservation) {
      res.status(404).json({ message: 'Reservation not found' });
      return;
    }
    res.status(200).json(updatedReservation);
  } catch (error) {
    next(error);
  }
};

const deleteReservation = async (req, res, next) => {
  try {
    // Implement validation and authorization logic before deleting reservation
    // Example: Check user permissions, equipment availability, etc.
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.reservationId);
    if (!deletedReservation) {
      res.status(404).json({ message: 'Reservation not found' });
      return;
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation
};
