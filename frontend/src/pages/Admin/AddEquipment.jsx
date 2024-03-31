import React, { useState } from 'react';

function App() {
  return (
    <div className="flex h-screen">
      {/* Navigation bar */}
      
      {/* Main content area */}
      <div className="flex flex-col flex-grow bg-gray-100 p-4">
        {/* Sidebar */}
        {/* {/<Sidebar />/} */}

        {/* Content */}
        <AddNewUserForm />
      </div>
    </div>
  );
}

function AddNewUserForm() {
  const [index, setIndex] = useState(0); // Initialize index state

  const handleSeeMoreClick = (index) => {
    setIndex(index); // Update index state
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Equipment Details</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="firstName" className="text-gray-700 font-medium">
            Name of the equipment
          </label>
          <input
            type="text"
            id="firstName"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName" className="text-gray-700 font-medium">
            Serial Number
          </label>
          <input
            type="text"
            id="lastName"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="registrationNumber" className="text-gray-700 font-medium">
            Condition
          </label>
          <input
            type="text"
            id="registrationNumber"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="emailId" className="text-gray-700 font-medium">
            Vendor
          </label>
          <input
            type="text"
            id="emailId"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Add button */}
        
        <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="gallery-button gallery-button group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    onClick={() => handleSeeMoreClick(index)}
  >
    ADD
  </button>
</div>

      </form>
    </div>
  );
}

export default App;