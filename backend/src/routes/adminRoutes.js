// adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.getAllAdmins);
router.post('/', adminController.createAdmin);
router.put('/:id/password', adminController.updateAdminPassword);
router.put('/:id/phoneNumber', adminController.updateAdminPhoneNumber);

module.exports = router;

