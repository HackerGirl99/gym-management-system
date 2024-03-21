
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const ContactUs = () => {
  return (
    <div>
      <Header activeHeading={3} />
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="mb-8">Discover the ultimate sports academy and gym management web application at UoV GYM. Streamline your operations, manage memberships, track attendance, schedule classes, and boost efficiency with our comprehensive software solution. Experience seamless integration, robust reporting, and enhanced member engagement. Take your gym to new heights with UoV GYM innovative management web application.</p>
        <div className="mb-4">
          {/* Facebook icon */}
          <FaFacebook className="inline-block mr-4 text-blue-600 text-3xl" />
          {/* Twitter icon */}
          <FaTwitter className="inline-block mr-4 text-blue-400 text-3xl" />
          {/* Instagram icon */}
          <FaInstagram className="inline-block text-pink-600 text-3xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;


//npm install react-icons - to make the icons work
