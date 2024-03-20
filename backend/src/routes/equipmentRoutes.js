// routes/equipmentRoutes.js
const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

router.get('/', equipmentController.getAllEquipment);
router.post('/', equipmentController.createEquipment);
router.put('/:id', equipmentController.updateEquipment);
router.delete('/:id', equipmentController.deleteEquipment);

module.exports = router;
