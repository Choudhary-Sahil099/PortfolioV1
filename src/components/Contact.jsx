import React from "react";
import ContactImg from "../assets/Contact.png";
import { IoIosSend } from "react-icons/io";
import {FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="bg-[#F9E6FF] min-h-[90vh] px-20 flex pt-10 gap-40">
      <div className="bg-[#F1D7FA] h-[80vh] w-[30vw] rounded-3xl pt-10">
        <form className="flex flex-col px-10 gap-4">
          <h1 className="text-5xl">
            Let's <span className="text-[#5419D7]">Talk</span>
          </h1>

          <p>
            It would be a great experience to work with you, and hope that we
            can work together on some crazy ideal projects.
          </p>

          <div className="flex flex-col gap-3">
            <h3 className="text-[#C85CF2]">Your Name</h3>
            <input
              type="text"
              className="w-full h-10 bg-white rounded-xl px-4 
          outline-none border border-gray-300
          focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="Enter your name..."
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[#C85CF2]">Your Email</h3>
            <input
              type="email"
              className="w-full h-10 bg-white rounded-xl px-4 
          outline-none border border-gray-300
          focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="Enter your email..."
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[#C85CF2]">Your Message</h3>
            <textarea
              className="w-full h-40 p-4 bg-white resize-none rounded-2xl
          outline-none border border-gray-300
          focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="Type your message..."
            />
          </div>

          <div className="flex justify-between items center">
            <button className="send-btn">
              <div>Send</div>
              <IoIosSend className="icon" />
            </button>
            <div className="flex justify-center items-center gap-2 text-3xl">
              <a className="h-full w-full text-purple-800 cursor-pointer"><TbBrandGithubFilled /></a>
              <a className="h-full w-full text-purple-800"><FaLinkedinIn/></a>
              <a className="h-full w-full text-purple-800"><FaTwitter/></a>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-start pt-10 display-cover">
        <img
          src={ContactImg}
          alt="Contact illustration"
          className=" w-[70vh] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Contact;
