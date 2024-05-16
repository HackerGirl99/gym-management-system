// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// export default function Booking() {
//   const [selectedTime, setSelectedTime] = useState("");
//   const [equipments, setEquipments] = useState([]);
//   const [selectedEquipment, setSelectedEquipment] = useState("");
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const userId = useSelector((state) => state.userId);

//   const equipmentsOnChangeHandler = async(value) => {
//     setSelectedEquipment(value);
//     const body = {
//       equipment: selectedEquipment
//         ? selectedEquipment
//         : document.getElementById("dropdown")[0]?.value,
//     };
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/bookings",{
//         body
//       });
//       const data = await res.json();
//       setBookedSlots(data);
//     } catch (error) {
//       console.error("Error:" + error);
//     }  };

//   const fetchEquipments = async () => {
//     const res = await fetch("http://localhost:5000/api/v1/equipments");
//     const data = await res.json();
//     setEquipments((curState) => data["equipments"]);
//   };

//   useEffect(() => {
//     fetchEquipments();
//   }, []);

//   // Simulated function to check if a slot is booked
//   const isSlotBooked = (time) => {
//     return (
//       Array.isArray(bookedSlots) && bookedSlots.includes(time.split("-")[0])
//     );
//   };

//   useEffect(() => {
//     // Simulated fetch for booked slots, replace with actual API call
//     const fetchBookings = async () => {
//       const body = {
//         equipment: selectedEquipment
//           ? selectedEquipment
//           : document.getElementById("dropdown")[0]?.value,
//       };
//       try {
//         const res = await fetch("http://localhost:5000/api/v1/bookings",{
//           body
//         });
//         const data = await res.json();
//         setBookedSlots(data);
//       } catch (error) {
//         console.error("Error:" + error);
//       }
//     };

//     fetchBookings();
//   }, [selectedEquipment]);

//   const handleButtonClick = async (time) => {
//     const shouldBook = window.confirm(
//       "Are you sure you want to book this slot?"
//     );
//     if (!shouldBook) {
//       return;
//     }

//     if (isSlotBooked(time.split("-")[0])) {
//       // Slot is already booked, do nothing or show a message
//       return;
//     }
//     setSelectedTime(time);
//     const body = {
//       startTime: time.split("-")[0],
//       endTime: time.split("-")[1],
//       userId,
//       equipment: selectedEquipment
//         ? selectedEquipment
//         : document.getElementById("dropdown")[0].value,
//     };
//     try {
//       // Simulated booking, replace with actual API call
//       const res = await fetch("http://localhost:5000/api/v1/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       });
//       const data = await res.json();
//       setBookedSlots(data);
//     } catch (error) {
//       console.error("Error:" + error);
//     }

//     // .then((response) => response.json())
//     // .then((data) => {
//     //   // Update booked slots after successful booking
//     //   setBookedSlots([...bookedSlots, time]);
//     // })
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-full max-w-5xl">
//         <h1 className="text-2xl font-bold mb-4">
//           Booking Time Schedule for Equipment
//         </h1>

//         <form className="mb-4">
//           <label htmlFor="dropdown" className="block font-medium mb-2">
//             Select an Equipment
//           </label>
//           <select
//             id="dropdown"
//             name="dropdown"
//             className="border border-gray-300 rounded-md p-2 w-full"
//             onChange={(e) => equipmentsOnChangeHandler(e.target.value)}
//           >
//             {equipments.map((equipment, ind) => {
//               return (
//                 <option key={equipment._id} value={equipment._id}>
//                   {equipment.name}
//                 </option>
//               );
//             })}
//           </select>
//         </form>

//         <div className="grid grid-cols-5 gap-5">
//           {[...Array(25).keys()].map((index) => {
//             const hour = Math.floor(index / 2) + 8;
//             const minutes = index % 2 === 0 ? "00" : "30";
//             const nextHour = index % 2 === 0 ? hour : hour + 1;
//             const nextMinutes = index % 2 === 0 ? "30" : "00";
//             const time = `${hour}:${minutes}-${nextHour}:${nextMinutes}`;
//             return (
//               <div key={index} className="flex items-center">
//                 <button
//                   onClick={() => handleButtonClick(time)}
//                   className={`px-4 py-2 rounded-md ${
//                     selectedTime.split("-")[0] === time.split("-")[0] ||
//                     isSlotBooked(time.split("-")[0])
//                       ? "bg-red-500 text-white"
//                       : "bg-green-500 text-white"
//                   }`}
//                 >
//                   {isSlotBooked(time.split("-")[0])
//                     ? "Booked!"
//                     : selectedTime.split("-")[0] === time.split("-")[0]
//                     ? "Booked!"
//                     : "Book Slot"}
//                 </button>
//                 <span className="ml-2">{time}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Booking() {
  const [selectedTime, setSelectedTime] = useState("");
  const [equipments, setEquipments] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const userId = useSelector((state) => state.userId);

  const fetchEquipments = async () => {
    const res = await fetch("http://localhost:5000/api/v1/equipments");
    const data = await res.json();
    setEquipments((curState) => data["equipments"]);
    setSelectedEquipment(data["equipments"][0]["_id"]);
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  const equipmentsOnChangeHandler = (value) => {
    setSelectedEquipment(value);
    console.log(selectedEquipment);
  };

  // Simulated function to check if a slot is booked
  const isSlotBooked = (time) => {
    return (
      Array.isArray(bookedSlots) && bookedSlots.includes(time.split("-")[0])
    );
  };

  useEffect(() => {
    const fetchBookings = async () => {
      console.log(selectedEquipment);
      try {
        if (selectedEquipment) {
          const res = await fetch(
            `http://localhost:5000/api/v1/bookings/${selectedEquipment}`
          );
          const data = await res.json();
          setBookedSlots(data);
        }
      } catch (error) {
        console.error("Error:" + error);
      }
    };

    fetchBookings();
  }, [selectedEquipment]);

  const handleButtonClick = async (time) => {
    const shouldBook = window.confirm(
      "Are you sure you want to book this slot?"
    );
    if (!shouldBook) {
      return;
    }

    if (isSlotBooked(time.split("-")[0])) {
      // Slot is already booked, do nothing or show a message
      return;
    }
    setSelectedTime(time);
    const body = {
      startTime: time.split("-")[0],
      endTime: time.split("-")[1],
      userId,
      equipment: selectedEquipment,
    };
    try {
      // Simulated booking, replace with actual API call
      const res = await fetch("http://localhost:5000/api/v1/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setBookedSlots(data);
      window.location.reload();
      document
        .querySelector(`option[value="${selectedEquipment}"]`)
        .setAttribute("selected");
    } catch (error) {
      console.error("Error:" + error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">
          Booking Time Schedule for Equipment
        </h1>

        <form className="mb-4">
          <label htmlFor="dropdown" className="block font-medium mb-2">
            Select an Equipment
          </label>
          <select
            id="dropdown"
            name="dropdown"
            className="border border-gray-300 rounded-md p-2 w-full"
            onChange={(e) => equipmentsOnChangeHandler(e.target.value)}
          >
            {equipments.map((equipment, ind) => {
              return (
                <option key={equipment._id} value={equipment._id}>
                  {equipment.name}
                </option>
              );
            })}
          </select>
        </form>

        <div className="grid grid-cols-5 gap-5">
          {[...Array(25).keys()].map((index) => {
            const hour = Math.floor(index / 2) + 8;
            const minutes = index % 2 === 0 ? "00" : "30";
            const nextHour = index % 2 === 0 ? hour : hour + 1;
            const nextMinutes = index % 2 === 0 ? "30" : "00";
            const time = `${hour}:${minutes}-${nextHour}:${nextMinutes}`;
            return (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => handleButtonClick(time)}
                  className={`px-4 py-2 rounded-md ${
                    selectedTime.split("-")[0] === time.split("-")[0] ||
                    isSlotBooked(time.split("-")[0])
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                  disabled={
                    selectedTime.split("-")[0] === time.split("-")[0] ||
                    isSlotBooked(time.split("-")[0])
                      ? true
                      : false
                  }
                >
                  {isSlotBooked(time.split("-")[0])
                    ? "Booked!"
                    : selectedTime.split("-")[0] === time.split("-")[0]
                    ? "Booked!"
                    : "Book Slot"}
                </button>
                <span className="ml-2">{time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
