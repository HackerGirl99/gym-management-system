import express, { query } from 'express';
import {
  getEquipments,
  getEquipment,
  deleteEquipment,
  createEquipment,
  updateEquipment,
  getTopEquipments
} from '../controllers/equipmentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import validateRequest from '../middleware/validator.js';
import { check, param } from 'express-validator';

const router = express.Router();

const validator = {
  getEquipments: [
    check('limit').optional().isNumeric().withMessage('Limit parameter must be a number').custom(value => {
      if(value < 0) throw new Error('Value should not be less than Zero');
      return true;
    }),
    check('skip').optional().isNumeric().withMessage('skip parameter must be a number').custom(value => {
      if(value < 0) throw new Error('Value should not be less than Zero');
      return true;
    }),
    check('search').optional().trim().escape()
  ],
  
  createEquipment: [
    check('name').trim().notEmpty().withMessage('Name is required').escape(),
    check('image').notEmpty().withMessage('Image is required'),
    check('description')
      .trim()
      .notEmpty()
      .withMessage('Description is required')
      .escape(),
    check('brand').trim().notEmpty().withMessage('Brand is required').escape(),
    check('category').trim().notEmpty().withMessage('Category is required').escape(),
    check('price')
      .notEmpty()
      .withMessage('Price is required')
      .isNumeric()
      .withMessage('Price must be a number'),
    check('countInStock')
      .notEmpty()
      .withMessage('Count in stock is required')
      .isNumeric()
      .withMessage('Count in stock must be a number')
  ],
  getEquipment: [
    param('id').notEmpty().withMessage('Id is required').isMongoId().withMessage('Invalid Id Format')
  ],
  deleteEquipment: [
    param('id').notEmpty().withMessage('Id is required').isMongoId().withMessage('Invalid Id Format')
  ],
  updateEquipment: [
    check('name').trim().notEmpty().withMessage('Name is required').escape(),
    check('image').notEmpty().withMessage('Image is required'),
    check('description')
      .trim()
      .notEmpty()
      .withMessage('Description is required')
      .escape(),
    check('brand').trim().notEmpty().withMessage('Brand is required').escape(),
    check('category').trim().notEmpty().withMessage('Category is required').escape(),
    check('price')
      .notEmpty()
      .withMessage('Price is required')
      .isNumeric()
      .withMessage('Price must be a number'),
    check('countInStock')
      .notEmpty()
      .withMessage('Count in stock is required')
      .isNumeric()
      .withMessage('Count in stock must be a number'),
    param('id').notEmpty().withMessage('Id is required').isMongoId().withMessage('Invalid Id Format')
  ]
}

router.route('/')
  .post(validator.createEquipment, validateRequest, protect, admin, createEquipment)
  .get(validator.getEquipments, validateRequest, getEquipments);
router.get('/top', getTopEquipments);

router
  .route('/:id')
  .get(validator.getEquipment, validateRequest, getEquipment)
  .put(validator.updateEquipment, validateRequest, protect, admin, updateEquipment)
  .delete(validator.deleteEquipment, validateRequest, protect, admin, deleteEquipment);

export default router;
