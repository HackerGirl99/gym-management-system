import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

        <div className="bg-[#000] text-white static bottom-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© {currentYear} . All rights reserved.</span>
        <span>
          <a href="#">Terms</a> · <a href="#">Privacy Policy</a>
        </span>
        <div className="sm:block flex items-center justify-center w-full">
          {/* Social media icons as links */}
          <a href="#" className="mr-4 inline-block">
            <FaFacebook className="text-xl text-white" />
          </a>
          <a href="#" className="mr-4 inline-block">
            <FaTwitter className="text-xl text-white" />
          </a>
          <a href="#" className="inline-block">
            <FaInstagram className="text-xl text-white" />
          </a>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
