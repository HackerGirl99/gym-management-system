//import Equipment from '../data/equipments.js';
import Equipment from "../models/equipmentModel.js"; // Assuming there's a model named Equipment for equipments
import { deleteFile } from "../utils/file.js";

// @desc     Fetch All Equipments
// @method   GET
// @endpoint /api/v1/equipments?limit=2&skip=0
// @access   Public
const getEquipments = async (req, res, next) => {
  try {
    const total = await Equipment.countDocuments();
    const maxLimit = process.env.PAGINATION_MAX_LIMIT;
    const maxSkip = total === 0 ? 0 : total - 1;
    const limit = Number(req.query.limit) || maxLimit;
    const skip = Number(req.query.skip) || 0;
    const search = req.query.search || "";

    const equipments = await Equipment.find({
      name: { $regex: search, $options: "i" },
    })
      .limit(limit > maxLimit ? maxLimit : limit)
      .skip(skip > maxSkip ? maxSkip : skip < 0 ? 0 : skip);

    if (!equipments || equipments.length === 0) {
      res.statusCode = 404;
      throw new Error("Equipments not found!");
    }

    res.status(200).json({
      equipments,
      total,
      maxLimit,
      maxSkip,
    });
  } catch (error) {
    next(error);
  }
};

// @desc     Fetch top equipments
// @method   GET
// @endpoint /api/v1/equipments/top
// @access   Public
const getTopEquipments = async (req, res, next) => {
  try {
    const equipments = await Equipment.find({}).sort({ rating: -1 }).limit(3);

    if (!equipments) {
      res.statusCode = 404;
      throw new Error("Equipment not found!");
    }

    res.status(200).json(equipments);
  } catch (error) {
    next(error);
  }
};

// @desc     Fetch Single Equipment
// @method   GET
// @endpoint /api/v1/equipments/:id
// @access   Public
const getEquipment = async (req, res, next) => {
  try {
    const { id: equipmentId } = req.params;
    const equipment = await Equipment.findById(equipmentId);

    if (!equipment) {
      res.statusCode = 404;
      throw new Error("Equipment not found!");
    }

    res.status(200).json(equipment);
  } catch (error) {
    next(error);
  }
};

// @desc     Create equipment
// @method   POST
// @endpoint /api/v1/equipments
// @access   Private/Admin
const createEquipment = async (req, res, next) => {
  try {
    const { name, image, description, brand, category, countInStock, price } =
      req.body;
    console.log(req.file);
    const equipment = new Equipment({
      user: req.user._id,
      name,
      image,
      description,
      brand,
      category,
      countInStock,
      price,
    });
    const createdEquipment = await equipment.save();

    res.status(200).json({ message: "Equipment created", createdEquipment });
  } catch (error) {
    next(error);
  }
};

// @desc     Update equipment
// @method   PUT
// @endpoint /api/v1/equipments/:id - have to change
// @access   Private/Admin
const updateEquipment = async (req, res, next) => {
  try {
    const { name, image, description, brand, category, countInStock, price } =
      req.body;

    const equipment = await Equipment.findById(req.params.id);

    if (!equipment) {
      res.statusCode = 404;
      throw new Error("Equipment not found!");
    }

    // Save the current image path before updating
    const previousImage = equipment.image;

    equipment.name = name || equipment.name;
    equipment.image = image || equipment.image;
    equipment.description = description || equipment.description;
    equipment.brand = brand || equipment.brand;
    equipment.category = category || equipment.category;
    equipment.countInStock = countInStock || equipment.countInStock;
    equipment.price = price || equipment.price;

    const updatedEquipment = await equipment.save();

    // Delete the previous image if it exists and if it's different from the new image
    if (previousImage && previousImage !== updatedEquipment.image) {
      deleteFile(previousImage);
    }

    res.status(200).json({ message: "Equipment updated", updatedEquipment });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete equipment
// @method   DELETE
// @endpoint /api/v1/equipments/:id
// @access   Admin
const deleteEquipment = async (req, res, next) => {
  try {
    const { id: equipmentId } = req.params;
    const equipment = await Equipment.findById(equipmentId);
    console.log("asdkskadoisajdoisadoisaoifdsajoifdsaoifdujf");
    if (!equipment) {
      res.statusCode = 404;
      throw new Error("Equipment not found!");
    }
    await Equipment.deleteOne({ _id: equipment._id });
    deleteFile(equipment.image); // Remove upload file

    //await Equipment.save();
    res.status(200).json({ message: "Equipment deleted" });
  } catch (error) {
    next(error);
  }
};

// @desc    Create equipment review
// @method   POST
// @endpoint /api/v1/equipments/reviews/:id
// @access   Admin

export {
  getEquipments,
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
  getTopEquipments,
};
