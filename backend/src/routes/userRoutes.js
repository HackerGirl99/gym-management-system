// routes/userRoutes.js


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Apply authMiddleware to routes that need authentication
router.get('/',userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Route for user to enter the gym
router.post('/enter', userController.enterGym);

// Route for user to exit the gym
router.post('/exit', userController.exitGym);



// Route for user to exit the gym
router.post('/exit', userController.exitGym);



module.exports = router;
