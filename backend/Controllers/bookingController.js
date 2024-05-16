// import Reservation from "../models/Reservation.js";
// import { ObjectId } from "mongodb";

// export const createbooking = async (req, res, next) => {
//   let { userId, startTime, endTime, equipment } = req.body;
//   userId = new ObjectId(userId);
//   let equipmentId = new ObjectId(equipment);

//   console.log(userId, startTime, endTime, equipment);

//   let newBooking = new Reservation({
//     user: userId,
//     equipment: equipmentId,
//     startTime,
//     endTime,
//   });
//   try {
//     await newBooking.save();
//     let bookings = await Reservation.find({equipment: equipmentId}, { startTime: 1 });

//     let mapedArr = bookings.map((ele) => {
//       let startTime = ele.startTime;
//       return startTime;
//     });
//     res.status(201).json(mapedArr);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getBookings = async (req, res, next) => {
//   try {
//     let bookings = await Reservation.find({}, { startTime: 1 });

//     let mapedArr = bookings.map((ele) => {
//       let startTime = ele.startTime;
//       return startTime;
//     });
//     res.status(201).json(mapedArr);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getBookingsWholeDet = async (req, res, next) => {
//   let {equipment} = req.body
//   try {
//     let bookings = await Reservation.find({equipment});

//     res.status(200).json(bookings);
//   } catch (error) {
//     next(error);
//   }
// };

import Reservation from "../models/Reservation.js";
import { ObjectId } from "mongodb";

export const createbooking = async (req, res, next) => {
  let { userId, startTime, endTime, equipment } = req.body;
  userId = new ObjectId(userId);
  let equipmentId = new ObjectId(equipment);

  console.log(userId, startTime, endTime, equipment);

  let newBooking = new Reservation({
    user: userId,
    equipment: equipmentId,
    startTime,
    endTime,
  });
  try {
    await newBooking.save();
    let bookings = await Reservation.find(
      { equipment: equipmentId },
      { startTime: 1 }
    );

    let mapedArr = bookings.map((ele) => {
      let startTime = ele.startTime;
      return startTime;
    });
    res.status(201).json(mapedArr);
  } catch (error) {
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
  let { equipment } = req.params;
  let equipmentId = new ObjectId(equipment);

  try {
    let bookings = await Reservation.find(
      { equipment: equipmentId },
      { startTime: 1 }
    );

    let mapedArr = bookings.map((ele) => {
      let startTime = ele.startTime;
      return startTime;
    });
    res.status(201).json(mapedArr);
  } catch (error) {
    next(error);
  }
};

export const getBookingsWholeDet = async (req, res, next) => {
  try {
    let bookings = await Reservation.find();

    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};
