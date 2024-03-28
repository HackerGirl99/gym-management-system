// server.js

const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
//const maintenanceRoutes = require('./routes/maintenanceRoutes');

const errorHandler = require('./middleware/errorMiddleware');
const authMiddleware = require('./middleware/authMiddleware');




const connectDB = require('./db/connection');

const app = express();

connectDB();
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admins', authMiddleware, adminRoutes); // Protect admin routes with auth middleware
app.use('/api/bookings', authMiddleware, bookingRoutes); // Protect booking routes with auth middleware
//app.use('/api/maintenance', authMiddleware, maintenanceRoutes); // Protect maintenance routes with auth middleware
//app.use('/api/equipment', authMiddleware, equipmentRoutes); // Protect maintenance routes with auth middleware

// Error handling middleware
app.use(errorHandler);