import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContacUsPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="mt-4 mb-3 text-5xl leading-normal font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Contact Us</h1>
        <p className="mb-8">Discover the ultimate sports academy and gym management web application at UoV GYM. Streamline your operations, manage memberships, track attendance, schedule classes, and boost efficiency with our comprehensive software solution. Experience seamless integration, robust reporting, and enhanced member engagement. Take your gym to new heights with UoV GYM innovative management web application.</p>
        <div className="mb-4">
          
          <FaFacebook className="inline-block mr-4 text-blue-600 text-3xl" />
          
          <FaTwitter className="inline-block mr-4 text-blue-400 text-3xl" />
          
          <FaInstagram className="inline-block text-pink-600 text-3xl" />
        </div>
      </div>
    </>
  );
};

export default ContacUsPage;
