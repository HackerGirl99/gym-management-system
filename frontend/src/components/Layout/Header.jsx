import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div >
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      {/* navitems */}
      <div className={`${styles.noramlFlex}`}>
            <Navbar  />
          </div>
    </div>
  )
}

export default Header