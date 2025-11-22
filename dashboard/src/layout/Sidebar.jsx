import React from "react";
import { Link } from "react-router-dom";
import { siteUrl } from "../utils/constants";

const Sidebar = () => {
  return (
    <div>
      <div></div>
      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/5%)] transition-all`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
            className="w-full h-full" 
            src={`${siteUrl}/images/logo.png`} 
            alt="app logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
