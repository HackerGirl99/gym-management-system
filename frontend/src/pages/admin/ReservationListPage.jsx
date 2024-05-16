import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const BookingListPage = () => {
  const [bookings, setBookings] = useState();

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("http://localhost:5000/api/v1/bookings/whole");
      const data = await res.json();

      setBookings(data);
      console.log(bookings);
    };

    fetchBookings();
  }, []);

  return (
    <div className="booking-list flex flex-col bg-gray-100">
      {/* Added background color */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-blue-700">Booking Details</h1>{" "}
        {/* Changed text color */}
        {/* Styled Button */}
      </div>
      <table className="w-full shadow-md rounded overflow-hidden border border-gray-200">
        {/* Added border styles */}
        <thead>
          <tr className="text-left bg-gray-200 text-sm font-medium">
            <th className="p-3">User</th>
            <th className="p-3">Equipment</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(bookings) &&
            bookings.map((booking, index) => {
              return (
                <tr
                  key={index}
                  className={`text-gray-700 border-b border-gray-200 hover:bg-gray-300`}
                >
                  <td className="p-3">{booking.user}</td>
                  <td className="p-3">{booking.equipment}</td>
                  <td className="p-3">
                    {booking.startTime.toLocaleString() +
                      "-" +
                      booking.endTime.toLocaleString()}
                  </td>{" "}
                  {/* Format time */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookingListPage;
