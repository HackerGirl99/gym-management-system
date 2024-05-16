// models/Reservation.js

import mongoose from "mongoose";
import moment from "moment";
const { Schema } = mongoose;

const currentDate = moment();
const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

const reservationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  equipment: {
    type: Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: formattedDate,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
