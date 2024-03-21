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

const initializeDatabase = require('./prismaInit'); // Import the Prisma initialization module

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Initialize the database on application startup
initializeDatabase()
  .then(() => {
    // Start the server after the database is initialized
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error initializing database:', error);
    process.exit(1); // Exit the process if database initialization fails
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
