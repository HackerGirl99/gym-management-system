// models/equipmentModel.js
const mongoose = require('mongoose');

// Define the schema for gym equipment
const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Example: cardio, strength training, etc.
  description: String,
  quantity: { type: Number, default: 0 },
  condition: String, // Example: new, used, refurbished
  location: String, // Example: floor number, section, room
  maintenanceSchedule: String, // Example: monthly, quarterly, annually
  imageUrl: String, // URL of an image for the equipment
});

// Create the model for gym equipment
const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
