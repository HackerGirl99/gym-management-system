// models/Maintenance.js
const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  // Define maintenance schema fields here
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;
