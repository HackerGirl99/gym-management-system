// import express from "express";
// import {
//   createbooking,
//   getBookings,
//   getBookingsWholeDet,
// } from "../controllers/bookingController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/", createbooking);
// router.get("/", getBookings);
// router.get("/whole", getBookingsWholeDet);
// // router.get("/whole", protect, getBookingsWholeDet);

// export default router;

import express from "express";
import {
  createbooking,
  getBookings,
  getBookingsWholeDet,
} from "../controllers/bookingController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createbooking);
router.get("/whole", getBookingsWholeDet);
router.get("/:equipment", getBookings);
// router.get("/whole", protect, getBookingsWholeDet);

export default router;
