//user dash bord.jsx
import React, { useState } from 'react';


function UserDashboard() {
  const [selectedTab, setSelectedTab] = useState('personalInfo');

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-80 bg-gray-100 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold text-center mb-4">GYM</h2>
          <nav className="flex flex-col space-y-2">
            <button
              className={`text-left py-2 px-4 rounded-lg hover:bg-gray-200 ${
                selectedTab === 'personalInfo' ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => handleClick('personalInfo')}
            >
              Personal Information
            </button>
            <button
              className={`text-left py-2 px-4 rounded-lg hover:bg-gray-200 ${
                selectedTab === 'report' ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => handleClick('report')}
            >
              Report
            </button>
            <button
              className={`text-left py-2 px-4 rounded-lg hover:bg-gray-200 ${
                selectedTab === 'leaderboard' ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => handleClick('leaderboard')}
            >
              Leader Board
            </button>
          </nav>
        </div>
        <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-md">
          {selectedTab === 'personalInfo' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              {/* Add form fields here */}
            </div>
          )}
          {selectedTab === 'report' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Report</h2>
              <div className="flex flex-col space-y-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Weekly</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Monthly</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Yearly</button>
              </div>
            </div>
          )}
          {selectedTab === 'leaderboard' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Leader Board</h2>
              {/* Add leaderboard table here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
