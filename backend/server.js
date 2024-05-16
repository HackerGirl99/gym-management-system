import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import "dotenv/config";

import equipmentRoutes from "./routes/equipmentRoutes.js"; // Changed import name to match the route file
import userRoutes from "./routes/userRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import reservationRoutes from "./routes/reservationRoutes.js";

import bookingsRoutes from "./routes/bookingsRoutes.js";

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve(); // Set {__dirname} to current working directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/equipments", equipmentRoutes); // Changed to use equipmentRoutes
app.use("/api/v1/users", userRoutes);

app.use("/api/v1/upload", uploadRoutes);

app.use("/api/v1/leaderboard", leaderboardRoutes);

app.use("/api/v1/reservations", reservationRoutes);

app.use("/api/v1/bookings", bookingsRoutes);
//-------------------------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // Any app route that is not api will be redirected to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to the GYM Management System API");
  });
}

//-------------------------------------
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get("/favicon.ico", (req, res) => res.status(204));
