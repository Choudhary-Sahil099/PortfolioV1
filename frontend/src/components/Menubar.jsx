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
          <li className="MenuLi" onClick={() =>{
            setOpen(false)
            setTimeout(() => {
              document.getElementById("profile")?.scrollIntoView();
            },50);
          }}><FaAnglesRight />Profile</li>
          <li className="MenuLi"  onClick={() =>{
            setOpen(false)
            setTimeout(() => {
              document.getElementById("skill")?.scrollIntoView();
            },50);
          }}
          ><FaAnglesRight />Skills</li>
          <li className="MenuLi" onClick={() =>{
            setOpen(false)
            setTimeout(() => {
              document.getElementById("projects")?.scrollIntoView();
            },50);
          }}
          ><FaAnglesRight />Projects</li>
          <li className="MenuLi"  onClick={() =>{
            setOpen(false)
            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView();
            },50);
          }}
          ><FaAnglesRight />Contact</li>
        </ul>
      </div>
    </>
  );
};


export default Menubar
