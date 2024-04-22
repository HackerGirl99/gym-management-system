  // routes/adminRoutes.js

  const express = require('express');
  const router = express.Router();
  const { body } = require('express-validator');
  const adminController = require('../controllers/adminController');

  // Admin login
  router.get(
    '/login',
    [
      body('username').notEmpty().withMessage('Username is required'),
      body('password').notEmpty().withMessage('Password is required'),
    ],
    adminController.adminLogin
  );

  // Get all admins
  router.get('/', adminController.getAllAdmins);

  // Create a new admin
  router.post(
    '/',
    [
      body('username').notEmpty().withMessage('Username is required'),
      body('email').isEmail().withMessage('Valid email is required'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
      body('phoneNumber').optional().isMobilePhone().withMessage('Valid phone number is required'),
    ],
    adminController.createAdmin
  );

  // Update admin password
  router.put('/:id/password', adminController.updateAdminPassword);

  // Update admin phone number
  router.put('/:id/phone', adminController.updateAdminPhoneNumber);

  module.exports = router;
