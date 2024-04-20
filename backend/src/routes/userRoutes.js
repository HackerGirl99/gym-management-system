// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');

// Define routes
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('userType').isIn(['STUDENT', 'STAFF']).withMessage('User type must be STUDENT or STAFF'),
  ],
  userController.createUser
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  userController.userLogin
);

router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/enter', userController.enterGym);
router.post('/exit', userController.exitGym);

module.exports = router;
