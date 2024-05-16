import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const UserLogsPage = () => {
  const [enterUserId, setEnterUserId] = useState("");
  const [exitUserId, setExitUserId] = useState("");

  const handleEnterAction = async () => {
    // Implement your logic for entering gym
    const res = await fetch("/api/v1/users/entrance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ enterUserId }),
    });

    if (res.status === 200) {
      toast.success("User entered successfull");
    } else {
      toast.error("User entered unsuccessfull");
    }
  };

  const handleExitAction = async () => {
    // Implement your logic for exiting gym
    const res = await fetch("/api/v1/users/exit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exitUserId }),
    });

    if (res.status === 200) {
      toast.success("User exited successfull");
    } else {
      toast.error("User exited unsuccessfull");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 p-6 mb-14 mt-8 justify-center">
        <div className="pr-4 pl-4">
          {/* Enter Gym Section */}
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500">
            Enter to GYM
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="enterUsername"
                name="enterUsername"
                value={enterUserId}
                onChange={(e) => setEnterUserId(e.target.value)}
                className="peer bg-transparent h-10 w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="enterUsername"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
              >
                Enter User ID
              </label>
              <button
                onClick={handleEnterAction}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Enter Gym
              </button>
            </div>
          </div>
        </div>

        <div className="pl-4 pr-4">
          {/* Exit Gym Section */}
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">
            Leave from GYM
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="exitUsername"
                name="exitUsername"
                value={exitUserId}
                onChange={(e) => setExitUserId(e.target.value)}
                className="peer bg-transparent h-10 w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="exitUsername"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
              >
                Enter User ID
              </label>
              <button
                onClick={handleExitAction}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Exit Gym
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogsPage;
