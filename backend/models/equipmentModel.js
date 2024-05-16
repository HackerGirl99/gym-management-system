import mongoose from 'mongoose';

// Define the schema for equipments
const equipmentSchema = new mongoose.Schema(
  {
    // Reference to the user who created the equipment
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    // Name of the equipment
    name: {
      type: String,
      required: true
    },
    // Image URL of the equipment
    image: {
      type: String,
      required: true
    },
    // Description of the equipment
    description: {
      type: String,
      required: true
    },
    // Brand of the equipment
    brand: {
      type: String,
      required: true
    },
    // Category of the equipment
    category: {
      type: String,
      required: true
    },
    // Price of the equipment
    price: {
      type: Number,
      required: true,
      default: 0
    },
    // Quantity available in stock
    countInStock: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
);

// Create the Equipment model
const Equipment = mongoose.model('Equipment', equipmentSchema);

// Export the Equipment model
export default Equipment;
