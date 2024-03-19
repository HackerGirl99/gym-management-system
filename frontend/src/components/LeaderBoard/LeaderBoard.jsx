import React from "react";

const Leaderboard = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-100">
      <div className="rounded-lg shadow-md overflow-hidden w-full">
        {/* Winner Table */}
        <div className="winner-table bg-purple-700 rounded-lg shadow-md px-4 py-8 mb-4">
          <div className="flex flex-col space-y-4 mt-4">
            <div className="winner-row flex items-center justify-between py-2 px-2 bg-purple-600 rounded-lg text-white">
              <div className="text-lg font-medium">1</div>
              <div className="flex items-stretch flex-grow">
                <div className="flex-grow winner-name pr-4 border-r border-white">
                  First Winner
                </div>
                <div className="flex-grow mx-4"></div>
                <div className="flex-grow winner-name pr-4 border-r border-white">
                  Second Winner
                </div>
                <div className="flex-grow mx-4"></div>
                <div className="flex-grow winner-name">Third Winner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="faculty-container flex flex-col bg-blue-700 rounded-lg shadow-md px-4 py-8">
            <div className="flex justify-between items-center pb-4">
              <h1 className="text-xl font-bold text-white">
                Faculty of Applied Science
              </h1>
              <div className="flex space-x-2">
                <button className="px-2 py-1 text-sm font-medium text-white hover:bg-blue-800 rounded-md">
                  Staff
                </button>
                <button className="px-2 py-1 text-sm font-medium text-white hover:bg-blue-800 rounded-md">
                  Students
                </button>
                <div className="flex items-center space-x-2">
                  <select className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="alltime">All Time</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              {/* ... add more leaderboard entries here */}
            </div>
          </div>
          <div className="flex flex-col py-4 px-4 space-y-2">
            {/* Leaderboard Entries */}
            <div className="flex justify-center flex-wrap">
              <div className="w-1/4 bg-purple-500 text-white p-4 rounded-lg m-2">
                <span className="font-bold">1</span>
                <br />
                Name Score 300
              </div>
              <div className="w-1/4 bg-purple-500 text-white p-4 rounded-lg m-2">
                <span className="font-bold">2</span>
                <br />
                Score 300
              </div>
              <div className="w-1/4 bg-purple-500 text-white p-4 rounded-lg m-2">
                <span className="font-bold">3</span>
                <br />
                Score Name 300 Name
              </div>
              <div className="w-1/4 bg-purple-500 text-white p-4 rounded-lg m-2">
                <span className="font-bold">4</span>
                <br />
                Score
              </div>
              <div className="w-1/4 bg-purple-500 text-white p-4 rounded-lg m-2">
                <span className="font-bold">5</span>
                <br />
                Score 300 Name Name 300
              </div>
              <div className="w-1/4 bg-purple-500 text-white p-4 rounded-lg m-2">
                <span className="font-bold">6</span>
                <br />
                Score 300 Name
              </div>
            </div>
            {/* More leaderboard entries */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
