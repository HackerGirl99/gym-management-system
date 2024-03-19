import React, { useState } from "react";

export default function Booking() {
    const [selectedTime, setSelectedTime] = useState('');

    const handleButtonClick = (time) => {
        setSelectedTime(time);
        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ time })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Booking Time Schedule for Equipment</h1>

                <form className="mb-4">
                    <label htmlFor="dropdown" className="block font-medium mb-2">Select an Equipment</label>
                    <select id="dropdown" name="dropdown" className="border border-gray-300 rounded-md p-2 w-full">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </form>

                <div className="grid grid-cols-3 gap-5">
                    {[...Array(24).keys()].map((hour) => (
                        <div key={hour} className="flex items-center">
                            <button
                                onClick={() => handleButtonClick(`${hour}:00-${hour + 0.30}`)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                View
                            </button>
                            <span className="ml-2">{`${hour}:00-${hour + 0.30}`}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
