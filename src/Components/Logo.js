import React from "react";
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../Assets";

const Logo = () => {
  return (
    <>
      <div className="wrapper">
        <img className="img1" src={logo1} alt="logo" />
        <img className="img1" src={logo2} alt="logo" />
        <img className="img1" src={logo3} alt="logo" />
        <img className="img1" src={logo4} alt="logo" />
        <img className="img1" src={logo5} alt="logo" />
        <img className="img1" src={logo6} alt="logo" />
      </div>
    </>
  );
};

export default Logo;
