import React, { useState } from "react";
import SubNav from "../Layout/SubNav";
import styles from "../../styles/styles";

function AdminRegistry() {
  const[activeheading,setActiveHeading]=useState("Home");
  const handleHeadingClick=(heading)=>{
    setActiveHeading(heading);
  }
  return (
    <>
      <div className="text-center mb-8">
      <div className="flex justify-center">
        <div className={`${styles.navi}`}>
          <SubNav active={activeheading} onHeadingClick={handleHeadingClick}/>
        </div>
      </div>
      
        <div className="text-6xl font-bold mt-20 ">
        
          <span class="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
            Welcome to UOV GYM
          </span>{" "}
        </div>
        <h2 className="text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 ">
          Stay Fit, Stay Healthy...!
        </h2>
      </div>
    </>
  );
  }

export default AdminRegistry;
