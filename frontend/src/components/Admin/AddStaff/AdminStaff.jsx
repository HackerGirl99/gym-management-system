


import React from 'react';

function ContactUs() {
  return (
    <div className="flex h-screen">
      {/* Navigation bar */}
      
      {/* Main content area */}
      <div className="flex flex-col flex-grow bg-gray-100 p-4">
        {/* Sidebar */}
        
        <AddNewUserForm />
      </div>
    </div>
  );
}


function AddNewUserForm() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Staff Details</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="firstName" className="text-gray-700 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="text-gray-700 font-medium">
            Occupation
          </label>
          <input
            type="text"
            id="faculty"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="text-gray-700 font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course" className="text-gray-700 font-medium">
            Course
          </label>
          <input
            type="text"
            id="occupation"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber" className="text-gray-700 font-medium">
            Phone number
          </label>
          <input
            type="text"
            id="registrationNumber"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email id" className="text-gray-700 font-medium">
            Email Id
          </label>
          <input
            type="text"
            id="height"
            className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        
{/*
        <div className="container">
          <button className="center-button">ADD</button>
        </div>
*/}
        <button
              type="submit"
              //onClick={handleContactUs}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ADD
            </button>
      </form>
    </div>
  );
}

export default ContactUs;
