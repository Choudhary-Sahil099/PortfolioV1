import React from "react";
import Logo from "../assets/logo.png";
import resume from "../assets/resume.png";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({ setOpen }) => {
  return (
    <div className="navWraper">
      <img className="h-14 w-16" src={Logo} alt="logo" />

      <div className="flex items-center gap-4">
        <a
          aria-label="Open Resume"
          className="nav-Btn"
          href=""
        >
          <img className="h-10 w-10" src={resume} alt="resume" />
        </a>

        <button
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          className="nav-Btn"
        >
          <TiThMenu className="nav-BtnImg text-white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
