import React from "react";
import Logo from "../assets/logo.png";
import resume from "../assets/resume.png";
import { TiThMenu } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const Navbar = ({ setOpen }) => {
  
  return (
    <div className="navWraper">
      <img className="h-9 w-10 sm:h-14 sm:w-16" src={Logo} alt="logo" />

      <div className="flex items-center gap-2 sm:gap-4">
        <a
          aria-label="Open Resume"
          className="nav-Btn"
          href=""
          onClick={(e) => {
            e.preventDefault();
            toast.success("Coming Soon 👾");
          }}
        >
          <img className="h-6 w-6 sm:h-10 sm:w-10" src={resume} alt="resume" />
        </a>
         {/*  adding a toaster for the future refrences*/}
        <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
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
