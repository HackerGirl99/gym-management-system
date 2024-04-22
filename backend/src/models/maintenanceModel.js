// models/maintenanceModel.js
const mongoose = require('mongoose');

// Define the maintenance schema
const maintenanceSchema = new mongoose.Schema({
  equipment: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create the maintenance model
const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;
