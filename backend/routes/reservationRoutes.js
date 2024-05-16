// routes/reservationRoutes.js
// reservationRoutes.js
import express from 'express';
import {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation
} from '../controllers/reservationController.js';
import validateRequest from '../middleware/validator.js';
import { param, body } from 'express-validator';

const router = express.Router();

const validator = {
  createReservation: [
    body('propertyName').notEmpty().withMessage('Property name is required'),
    // Add validation for other fields as needed
  ],
  updateReservation: [
    param('reservationId').notEmpty().withMessage('Reservation ID is required'),
    body('propertyName').notEmpty().withMessage('Property name is required'),
    // Add validation for other fields as needed
  ],
};

router.route('/')
  .post(validator.createReservation, validateRequest, createReservation)
  .get(getAllReservations);

router.route('/:reservationId')
  .get(param('reservationId').notEmpty().withMessage('Reservation ID is required'), validateRequest, getReservationById)
  .put(validator.updateReservation, validateRequest, updateReservation)
  .delete(param('reservationId').notEmpty().withMessage('Reservation ID is required'), validateRequest, deleteReservation);

export default router;
