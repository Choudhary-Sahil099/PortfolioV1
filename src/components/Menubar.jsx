import React from "react";
import { ImCross } from "react-icons/im";
import { FaAnglesRight } from "react-icons/fa6";
const Menubar = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      <div
        className={`side-menu ${open ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={() => setOpen(false)}>
          <ImCross />
        </button>

        <ul>
          <li className="flex justify-center items-center gap-3"><FaAnglesRight />Profile</li>
          <li className="flex justify-center items-center gap-3"><FaAnglesRight />Skills</li>
          <li className="flex justify-center items-center gap-3"><FaAnglesRight />Projects</li>
          <li className="flex justify-center items-center gap-3"><FaAnglesRight />Contact</li>
        </ul>
      </div>
    </>
  );
};


export default Menubar
