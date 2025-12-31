import React from "react";
import Logo from "../assets/logo.png";
import resume from "../assets/resume.png";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({ setOpen }) => {
  return (
    <div className="flex justify-between items-center px-20 pt-10 pb-2 bg-[#F9E6FF] sticky top-0 z-50">
      <img className="h-14 w-16" src={Logo} alt="logo" />

      <div className="flex items-center gap-4">
        <button
          aria-label="Open Resume"
          className="bg-[#5419D7] h-14 w-16 flex items-center justify-center rounded-xl hover:bg-[#7342de] cursor-pointer"
        >
          <img className="h-10 w-10" src={resume} alt="resume" />
        </button>

        <button
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          className="bg-[#5419D7] h-14 w-16 flex items-center justify-center rounded-xl hover:bg-[#7342de] cursor-pointer"
        >
          <TiThMenu className="h-10 w-12 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
